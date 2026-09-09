/**
 * Jeopardy Studio - Mobile Phone Client Controller
 */

class JeopardyClientApp {
    constructor() {
        this.peerSync = null;
        this.roomId = null;
        this.slot = null;
        this.teamId = null;
        this.teamName = 'Team';
        this.teamColor = '#e63946';
        this.score = 0;

        // Turn & Buzzer state
        this.isMyTurnToPick = false;
        this.canBuzz = false;
        this.isBuzzedIn = false;
        this.availableTiles = [];
        this.answerTimer = null;

        this.parseQueryParams();
        this.initDOM();
        this.bindEvents();
        this.initConnection();
    }

    parseQueryParams() {
        const params = new URLSearchParams(window.location.search);
        this.roomId = params.get('room') || 'JEP-1000';
        this.slot = parseInt(params.get('slot') || '1', 10);
        this.teamId = `team_${this.slot}`;
        this.teamName = `Team ${this.slot}`;
    }

    initDOM() {
        this.elements = {
            // Screens
            viewRegister: document.getElementById('view-register'),
            viewBuzzer: document.getElementById('view-buzzer'),

            // Register View
            inputTeamName: document.getElementById('input-team-name'),
            btnJoin: document.getElementById('btn-join-game'),
            regRoomDisplay: document.getElementById('reg-room-display'),
            regSlotDisplay: document.getElementById('reg-slot-display'),

            // Buzzer Header
            headerTeamName: document.getElementById('header-team-name'),
            headerScore: document.getElementById('header-score'),
            connStatusBadge: document.getElementById('conn-status-badge'),

            // Buzzer Elements
            bigBuzzerBtn: document.getElementById('big-buzzer-btn'),
            buzzerStatusText: document.getElementById('buzzer-status-text'),

            // Tile Picker Drawer (when it is their turn)
            pickerModal: document.getElementById('mobile-picker-modal'),
            pickerTilesGrid: document.getElementById('picker-tiles-grid'),

            // Answer Input Drawer (when this team buzzed in)
            answerModal: document.getElementById('mobile-answer-modal'),
            inputAnswer: document.getElementById('input-player-answer'),
            btnSubmitAnswer: document.getElementById('btn-submit-answer'),
            answerCountdown: document.getElementById('answer-countdown-num')
        };

        if (this.elements.regRoomDisplay) {
            this.elements.regRoomDisplay.textContent = `Room: ${this.roomId}`;
        }
        if (this.elements.regSlotDisplay) {
            this.elements.regSlotDisplay.textContent = `Team Slot #${this.slot}`;
        }
        if (this.elements.inputTeamName) {
            this.elements.inputTeamName.value = `Team ${this.slot}`;
        }
    }

    bindEvents() {
        // Register & Join Game
        this.elements.btnJoin.addEventListener('click', () => {
            this.registerTeam();
        });

        // Buzzer Button Tap
        this.elements.bigBuzzerBtn.addEventListener('click', () => {
            this.handleBuzz();
        });

        // Touch event optimization for mobile
        this.elements.bigBuzzerBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleBuzz();
        }, { passive: false });

        // Submit Answer
        this.elements.btnSubmitAnswer.addEventListener('click', () => {
            this.submitAnswer();
        });

        this.elements.inputAnswer.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitAnswer();
            }
        });
    }

    async initConnection() {
        const hostPeerId = `host-${this.roomId.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

        this.peerSync = new JeopardyPeerSync(false, {
            roomId: this.roomId,
            teamId: this.teamId,
            slot: this.slot,
            onConnectionStatusChange: (connected, text) => {
                if (this.elements.connStatusBadge) {
                    this.elements.connStatusBadge.textContent = text;
                    this.elements.connStatusBadge.style.color = connected ? '#44ff88' : '#ffaa00';
                }
            }
        });

        await this.peerSync.initClient(hostPeerId);
        this.setupPeerListeners();
    }

    registerTeam() {
        const customName = this.elements.inputTeamName.value.trim();
        if (customName) {
            this.teamName = customName;
        }

        // Send registration to host
        this.peerSync.sendToHost('REGISTER_TEAM', {
            slot: this.slot,
            teamName: this.teamName,
            peerId: this.peerSync.peer?.id || null
        });

        this.transitionToBuzzerView();
    }

    transitionToBuzzerView() {
        this.elements.viewRegister.style.display = 'none';
        this.elements.viewBuzzer.style.display = 'flex';

        this.elements.headerTeamName.textContent = this.teamName;
        this.elements.headerScore.textContent = `$${this.score}`;
        this.updateBuzzerState(false, 'Waiting for Host to start game...');
    }

    setupPeerListeners() {
        // Confirmation from Host
        this.peerSync.on('REGISTRATION_CONFIRMED', (payload) => {
            if (payload.slot === this.slot) {
                this.teamId = payload.teamId;
                this.teamColor = payload.color;
                this.elements.headerTeamName.style.color = payload.color;
            }
        });

        // Global Game State (Board turn, available tiles, scores)
        this.peerSync.on('GAME_STATE', (payload) => {
            this.availableTiles = payload.availableTiles || [];

            // Update scores
            if (payload.scores) {
                const myScoreObj = payload.scores.find(s => s.id === this.teamId);
                if (myScoreObj) {
                    this.score = myScoreObj.score;
                    this.elements.headerScore.textContent = `$${this.score}`;
                }
            }

            // Check if it is my turn to pick a clue
            if (payload.activeTurnTeamId === this.teamId) {
                this.isMyTurnToPick = true;
                this.showTilePicker();
            } else {
                this.isMyTurnToPick = false;
                this.hideTilePicker();
                this.updateBuzzerState(false, 'Waiting for clue selection...');
            }
        });

        // Question Revealed -> Buzzers Open!
        this.peerSync.on('QUESTION_REVEALED', (payload) => {
            this.hideTilePicker();
            this.elements.answerModal.classList.remove('active');

            const isExcluded = payload.excludedTeams && payload.excludedTeams.includes(this.teamId);

            if (isExcluded) {
                this.updateBuzzerState(false, 'Locked out for this clue');
            } else {
                // Haptic feedback
                if (navigator.vibrate) navigator.vibrate(60);
                this.updateBuzzerState(true, `⚡ BUZZ IN! [${payload.category} $${payload.value}]`);
            }
        });

        // Another Team Buzzed In
        this.peerSync.on('TEAM_BUZZED', (payload) => {
            if (payload.buzzingTeamId === this.teamId) {
                // I WON THE BUZZ!
                this.handleBuzzWon(payload.answerTimeLimit || 15);
            } else {
                // Someone else buzzed
                this.updateBuzzerState(false, `🔒 ${payload.buzzingTeamName} buzzed in!`);
            }
        });

        // Answer Result (Correct or Wrong)
        this.peerSync.on('ANSWER_RESULT', (payload) => {
            this.elements.answerModal.classList.remove('active');
            clearInterval(this.answerTimer);

            if (payload.isCorrect) {
                if (payload.teamId === this.teamId) {
                    if (navigator.vibrate) navigator.vibrate([100, 50, 150]);
                    this.updateBuzzerState(false, `✓ CORRECT! +$${payload.points}`);
                } else {
                    this.updateBuzzerState(false, `✓ ${payload.teamName} got it right!`);
                }
            } else {
                if (payload.teamId === this.teamId) {
                    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
                    this.updateBuzzerState(false, `✗ INCORRECT! -$${Math.abs(payload.points)}`);
                } else {
                    this.updateBuzzerState(false, `✗ ${payload.teamName || 'Team'} missed!`);
                }
            }
        });
    }

    updateBuzzerState(canBuzz, statusText) {
        this.canBuzz = canBuzz;
        this.elements.bigBuzzerBtn.disabled = !canBuzz;

        if (canBuzz) {
            this.elements.bigBuzzerBtn.classList.add('buzz-ready');
            this.elements.bigBuzzerBtn.textContent = 'BUZZ!';
        } else {
            this.elements.bigBuzzerBtn.classList.remove('buzz-ready');
            this.elements.bigBuzzerBtn.textContent = 'WAIT';
        }

        if (this.elements.buzzerStatusText) {
            this.elements.buzzerStatusText.textContent = statusText;
        }
    }

    handleBuzz() {
        if (!this.canBuzz) return;
        this.canBuzz = false;
        this.elements.bigBuzzerBtn.disabled = true;

        if (navigator.vibrate) navigator.vibrate(80);

        this.elements.buzzerStatusText.textContent = 'BUZZING IN...';

        // Broadcast Buzz to Host
        this.peerSync.sendToHost('BUZZ_IN', {
            teamId: this.teamId,
            teamName: this.teamName,
            timestamp: Date.now()
        });
    }

    handleBuzzWon(timeLimit) {
        this.isBuzzedIn = true;
        this.updateBuzzerState(false, '⭐ YOU BUZZED IN! TYPE YOUR ANSWER:');

        // Show answer modal
        this.elements.answerModal.classList.add('active');
        this.elements.inputAnswer.value = '';
        this.elements.inputAnswer.focus();

        let remaining = timeLimit;
        this.elements.answerCountdown.textContent = `${remaining}s`;

        clearInterval(this.answerTimer);
        this.answerTimer = setInterval(() => {
            remaining--;
            this.elements.answerCountdown.textContent = `${remaining}s`;
            if (remaining <= 0) {
                clearInterval(this.answerTimer);
                this.elements.answerModal.classList.remove('active');
            }
        }, 1000);
    }

    submitAnswer() {
        const text = this.elements.inputAnswer.value.trim();
        if (!text) return;

        clearInterval(this.answerTimer);
        this.elements.answerModal.classList.remove('active');
        this.elements.buzzerStatusText.textContent = 'Submitted answer! Evaluating...';

        this.peerSync.sendToHost('SUBMIT_ANSWER', {
            teamId: this.teamId,
            answer: text
        });
    }

    /* -------------------------------------------------------------
     * TILE PICKER ON PHONE (Active Team Only)
     * ----------------------------------------------------------- */
    showTilePicker() {
        this.elements.pickerTilesGrid.innerHTML = '';
        this.elements.pickerModal.classList.add('active');

        this.availableTiles.forEach(tile => {
            const btn = document.createElement('div');
            btn.className = 'mobile-tile-choice';
            btn.innerHTML = `
                <div class="cat-name">${tile.categoryName}</div>
                <div class="val-text">$${tile.value}</div>
            `;

            btn.addEventListener('click', () => {
                this.selectTile(tile.id);
            });

            this.elements.pickerTilesGrid.appendChild(btn);
        });

        this.updateBuzzerState(false, 'Choose a clue from the list above!');
    }

    hideTilePicker() {
        this.elements.pickerModal.classList.remove('active');
    }

    selectTile(tileId) {
        this.hideTilePicker();
        this.elements.buzzerStatusText.textContent = 'Opening clue...';

        this.peerSync.sendToHost('SELECT_TILE', {
            teamId: this.teamId,
            tileId: tileId
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.clientApp = new JeopardyClientApp();
});
