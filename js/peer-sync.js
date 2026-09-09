/**
 * Real-time Peer-to-Peer & Multi-device Communication Engine
 * Uses PeerJS (WebRTC DataChannel) for cross-device mobile phone connections,
 * with seamless BroadcastChannel fallback for multi-tab / local testing.
 */

class JeopardyPeerSync {
    constructor(isHost = false, options = {}) {
        this.isHost = isHost;
        this.roomId = options.roomId || this.generateRoomId();
        this.teamId = options.teamId || null;
        this.slot = options.slot !== undefined ? options.slot : null;
        this.peer = null;
        this.connections = new Map(); // For host: Map<clientPeerId, connection>
        this.hostConn = null;         // For client: connection to host
        this.isConnected = false;
        
        // Local fallback channel
        this.broadcastChannel = null;
        if (typeof BroadcastChannel !== 'undefined') {
            try {
                this.broadcastChannel = new BroadcastChannel(`jeopardy_room_${this.roomId}`);
                this.broadcastChannel.onmessage = (event) => {
                    this.handleIncomingPacket(event.data, 'broadcast');
                };
            } catch (e) {
                console.warn('BroadcastChannel not available:', e);
            }
        }

        // Message handlers
        this.listeners = new Map();
        this.onConnectionStatusChange = options.onConnectionStatusChange || (() => {});
    }

    generateRoomId() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let id = '';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return `JEP-${id}`;
    }

    /**
     * Subscribe to a message type
     */
    on(msgType, callback) {
        if (!this.listeners.has(msgType)) {
            this.listeners.set(msgType, []);
        }
        this.listeners.get(msgType).push(callback);
    }

    emitToListeners(msgType, payload, senderId) {
        if (this.listeners.has(msgType)) {
            this.listeners.get(msgType).forEach(cb => {
                try {
                    cb(payload, senderId);
                } catch (err) {
                    console.error(`Error in listener for ${msgType}:`, err);
                }
            });
        }
    }

    /**
     * Initialize Host Peer
     */
    async initHost(peerIdOverride = null) {
        return new Promise((resolve) => {
            const peerId = peerIdOverride || `host-${this.roomId.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
            
            if (typeof Peer === 'undefined') {
                console.warn('PeerJS library not loaded. Falling back to local BroadcastChannel.');
                this.isConnected = true;
                this.onConnectionStatusChange(true, 'Local Offline Mode');
                resolve(peerId);
                return;
            }

            try {
                this.peer = new Peer(peerId, {
                    debug: 1,
                    config: {
                        iceServers: [
                            { urls: 'stun:stun.l.google.com:19302' },
                            { urls: 'stun:stun1.l.google.com:19302' }
                        ]
                    }
                });

                this.peer.on('open', (id) => {
                    console.log(`[Host] Peer open with ID: ${id}`);
                    this.isConnected = true;
                    this.onConnectionStatusChange(true, 'Cloud Peer Connected');
                    resolve(id);
                });

                this.peer.on('connection', (conn) => {
                    this.setupHostConnection(conn);
                });

                this.peer.on('error', (err) => {
                    console.warn('[Host Peer Error]', err.type, err.message);
                    // If ID is taken or server issue, fallback to random ID
                    if (err.type === 'unavailable-id') {
                        const fallbackId = `host-${Date.now()}`;
                        this.initHost(fallbackId).then(resolve);
                    } else {
                        resolve(peerId);
                    }
                });
            } catch (err) {
                console.warn('[Host Init Exception]', err);
                resolve(peerId);
            }
        });
    }

    setupHostConnection(conn) {
        conn.on('open', () => {
            console.log(`[Host] Client connected: ${conn.peer}`);
            this.connections.set(conn.peer, conn);
            this.emitToListeners('CLIENT_CONNECTED', { peerId: conn.peer }, conn.peer);
        });

        conn.on('data', (data) => {
            this.handleIncomingPacket(data, conn.peer);
        });

        conn.on('close', () => {
            console.log(`[Host] Client disconnected: ${conn.peer}`);
            this.connections.delete(conn.peer);
            this.emitToListeners('CLIENT_DISCONNECTED', { peerId: conn.peer }, conn.peer);
        });
    }

    /**
     * Initialize Client Peer and connect to Host
     */
    async initClient(hostPeerId) {
        return new Promise((resolve) => {
            if (typeof Peer === 'undefined') {
                console.warn('PeerJS not available. Using local BroadcastChannel.');
                this.isConnected = true;
                this.onConnectionStatusChange(true, 'Local Channel');
                resolve();
                return;
            }

            try {
                this.peer = new Peer(null, {
                    debug: 1,
                    config: {
                        iceServers: [
                            { urls: 'stun:stun.l.google.com:19302' },
                            { urls: 'stun:stun1.l.google.com:19302' }
                        ]
                    }
                });

                this.peer.on('open', (myId) => {
                    console.log(`[Client] My Peer ID: ${myId}`);
                    this.connectToHost(hostPeerId).then(resolve);
                });

                this.peer.on('error', (err) => {
                    console.warn('[Client Peer Error]', err);
                    resolve();
                });
            } catch (e) {
                console.warn('[Client Peer Exception]', e);
                resolve();
            }
        });
    }

    async connectToHost(hostPeerId) {
        if (!this.peer) return;

        try {
            console.log(`[Client] Connecting to host: ${hostPeerId}...`);
            this.hostConn = this.peer.connect(hostPeerId, { reliable: true });

            this.hostConn.on('open', () => {
                console.log(`[Client] Connected to Host!`);
                this.isConnected = true;
                this.onConnectionStatusChange(true, 'Connected to Host');
            });

            this.hostConn.on('data', (data) => {
                this.handleIncomingPacket(data, 'host');
            });

            this.hostConn.on('close', () => {
                console.log(`[Client] Connection to host closed.`);
                this.isConnected = false;
                this.onConnectionStatusChange(false, 'Disconnected');
            });

            this.hostConn.on('error', (err) => {
                console.warn('[Client Conn Error]', err);
            });
        } catch (e) {
            console.error('[Client Connect Exception]', e);
        }
    }

    /**
     * Incoming Packet Demuxer
     */
    handleIncomingPacket(packet, senderId) {
        if (!packet || typeof packet !== 'object') return;
        const { type, payload, sender } = packet;

        // Ignore self-broadcast
        if (sender === this.teamId && sender !== 'host') return;

        this.emitToListeners(type, payload, senderId);
    }

    /**
     * Broadcast from Host to all connected clients
     */
    broadcast(type, payload = {}) {
        const packet = {
            type,
            payload,
            sender: 'host',
            timestamp: Date.now()
        };

        // Send over WebRTC DataChannel connections
        this.connections.forEach(conn => {
            if (conn.open) {
                try {
                    conn.send(packet);
                } catch (e) {
                    console.warn('Failed to send packet to peer:', conn.peer, e);
                }
            }
        });

        // Also broadcast via BroadcastChannel
        if (this.broadcastChannel) {
            try {
                this.broadcastChannel.postMessage(packet);
            } catch (e) {}
        }
    }

    /**
     * Send from Client to Host
     */
    sendToHost(type, payload = {}) {
        const packet = {
            type,
            payload,
            sender: this.teamId || 'client',
            timestamp: Date.now()
        };

        if (this.hostConn && this.hostConn.open) {
            try {
                this.hostConn.send(packet);
            } catch (e) {
                console.warn('Failed to send to hostConn:', e);
            }
        }

        // Also post via BroadcastChannel
        if (this.broadcastChannel) {
            try {
                this.broadcastChannel.postMessage(packet);
            } catch (e) {}
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JeopardyPeerSync };
}
