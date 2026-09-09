/**
 * Jeopardy Studio - Host / Quiz Master Application Logic
 */

class JeopardyHostApp {
    constructor() {
        this.limiter = new ExponentialBackoffLimiter({
            baseDelayMs: 250,
            maxDelayMs: 8000,
            factor: 2.0,
            targetMaxTPS: 20,
            onTelemetryUpdate: this.updateTelemetryHUD.bind(this)
        });

        this.scourer = new TriviaScourer(this.limiter);
        this.peerSync = null;

        // Game State
        this.roomId = 'JEP-' + Math.floor(1000 + Math.random() * 9000);
        this.targetTeamCount = 3;
        this.teams = []; // [{ id, name, slot, color, score, connected, peerId }]
        this.selectedCategories = [];
        this.board = []; // 6 columns x 5 tiles
        this.activeTile = null;
        this.activeTurnTeamId = null;
        this.buzzingTeamId = null;
        this.clueTimer = null;
        this.clueTimeRemaining = 30;
        this.answerTimer = null;
        this.answerTimeRemaining = 15;
        this.alreadyBuzzedForCurrentClue = new Set();
        this.soundFX = window.soundFX;

        // Team Palette Colors
        this.teamColors = [
            '#e63946', '#2a9d8f', '#e76f51', '#457b9d', 
            '#9b5de5', '#00bbf9', '#f15bb5', '#fee440'
        ];

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.elements = {
            roomBadge: document.getElementById('room-id-badge'),
            tpsCounter: document.getElementById('hud-tps'),
            hudStatus: document.getElementById('hud-status-text'),
            hudDot: document.getElementById('hud-dot'),

            // Screens
            screenSetup: document.getElementById('screen-setup'),
            screenLobby: document.getElementById('screen-lobby'),
            screenCategories: document.getElementById('screen-categories'),
            screenBoard: document.getElementById('screen-board'),

            // Setup Screen
            teamCountDisplay: document.getElementById('team-count-display'),
            btnStepDown: document.getElementById('btn-step-down'),
            btnStepUp: document.getElementById('btn-step-up'),
            btnConfirmTeams: document.getElementById('btn-confirm-teams'),

            // Lobby Screen
            qrContainer: document.getElementById('qr-cards-container'),
            btnProceedCategories: document.getElementById('btn-proceed-categories'),
            btnAddTestTeam: document.getElementById('btn-add-test-team'),

            // Category Selection Screen
            catGrid: document.getElementById('category-dropdowns-grid'),
            btnGenerateBoard: document.getElementById('btn-generate-board'),
            generationProgressBox: document.getElementById('generation-progress-box'),
            generationProgressBar: document.getElementById('generation-progress-bar'),
            generationProgressText: document.getElementById('generation-progress-text'),

            // Board Screen
            jeopardyBoard: document.getElementById('jeopardy-board'),
            turnAnnouncement: document.getElementById('turn-announcement-text'),
            scoreboardFooter: document.getElementById('scoreboard-footer'),

            // Clue Overlay
            clueOverlay: document.getElementById('clue-overlay'),
            clueCard: document.getElementById('clue-card'),
            clueCategoryBar: document.getElementById('clue-category-bar'),
            clueValueBadge: document.getElementById('clue-value-badge'),
            clueText: document.getElementById('clue-text'),
            clueSource: document.getElementById('clue-source'),
            clueTimerBar: document.getElementById('clue-timer-bar'),
            buzzerStatusBanner: document.getElementById('buzzer-status-banner'),
            answerRevealBox: document.getElementById('answer-reveal-box'),
            btnManualCorrect: document.getElementById('btn-manual-correct'),
            btnManualWrong: document.getElementById('btn-manual-wrong'),
            btnManualSkip: document.getElementById('btn-manual-skip'),
            hostActionBar: document.getElementById('host-action-bar'),
            dismissActionBar: document.getElementById('dismiss-action-bar'),
            btnDismissClue: document.getElementById('btn-dismiss-clue')
        };

        if (this.elements.roomBadge) {
            this.elements.roomBadge.textContent = `Room: ${this.roomId}`;
        }
    }

    bindEvents() {
        // Stepper
        this.elements.btnStepDown.addEventListener('click', () => {
            if (this.targetTeamCount > 2) {
                this.targetTeamCount--;
                this.elements.teamCountDisplay.textContent = this.targetTeamCount;
            }
        });

        this.elements.btnStepUp.addEventListener('click', () => {
            if (this.targetTeamCount < 8) {
                this.targetTeamCount++;
                this.elements.teamCountDisplay.textContent = this.targetTeamCount;
            }
        });

        // Confirm Teams -> Setup Lobby & QR Codes
        this.elements.btnConfirmTeams.addEventListener('click', () => {
            this.soundFX.init();
            this.startRegistrationLobby();
        });

        // Add Demo / Test Team
        this.elements.btnAddTestTeam.addEventListener('click', () => {
            this.addTestTeam();
        });

        // Proceed to Categories
        this.elements.btnProceedCategories.addEventListener('click', () => {
            this.showCategorySelection();
        });

        // Generate Board
        this.elements.btnGenerateBoard.addEventListener('click', () => {
            this.generateAndStartBoard();
        });

        // Host Manual Overrides
        this.elements.btnManualCorrect.addEventListener('click', () => {
            if (this.buzzingTeamId) {
                this.handleAnswerEvaluation(true, 'Manual host override (Correct)');
            }
        });

        this.elements.btnManualWrong.addEventListener('click', () => {
            if (this.buzzingTeamId) {
                this.handleAnswerEvaluation(false, 'Manual host override (Incorrect)');
            }
        });

        this.elements.btnManualSkip.addEventListener('click', () => {
            this.skipCurrentClue();
        });

        // Dismiss Clue button
        if (this.elements.btnDismissClue) {
            this.elements.btnDismissClue.addEventListener('click', () => {
                this.closeClueAndReturnToBoard();
            });
        }

        // Space/Enter/Escape shortcut to dismiss revealed tile
        window.addEventListener('keydown', (e) => {
            if ((e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') &&
                this.elements.dismissActionBar &&
                this.elements.dismissActionBar.style.display === 'flex') {
                e.preventDefault();
                this.closeClueAndReturnToBoard();
            }
        });
    }

    updateTelemetryHUD(stats) {
        if (this.elements.tpsCounter) {
            this.elements.tpsCounter.textContent = `${stats.tps} req/s`;
        }
        if (this.elements.hudStatus) {
            if (stats.status === 'throttled') {
                this.elements.hudStatus.textContent = `Backoff: ${stats.currentBackoffMs}ms`;
                this.elements.hudDot.classList.add('throttled');
            } else {
                this.elements.hudStatus.textContent = `Rate Limiter: Active (${stats.totalRequests} total)`;
                this.elements.hudDot.classList.remove('throttled');
            }
        }
    }

    switchScreen(screenName) {
        ['Setup', 'Lobby', 'Categories', 'Board'].forEach(name => {
            const el = this.elements[`screen${name}`];
            if (el) el.classList.remove('active');
        });
        const target = this.elements[`screen${screenName}`];
        if (target) target.classList.add('active');
    }

    /* -------------------------------------------------------------
     * SCREEN 2: REGISTRATION LOBBY & QR CODES
     * ----------------------------------------------------------- */
    async startRegistrationLobby() {
        this.switchScreen('Lobby');
        this.teams = [];

        // Initialize PeerJS Host
        this.peerSync = new JeopardyPeerSync(true, {
            roomId: this.roomId,
            onConnectionStatusChange: (ok, label) => {
                console.log(`[Host Network Status] ${label}`);
            }
        });

        await this.peerSync.initHost();

        // Listen for client messages
        this.setupPeerListeners();

        // Pre-create empty slots
        for (let i = 0; i < this.targetTeamCount; i++) {
            this.teams.push({
                id: `team_${i + 1}`,
                slot: i + 1,
                name: `Team ${i + 1}`,
                color: this.teamColors[i % this.teamColors.length],
                score: 0,
                connected: false,
                peerId: null
            });
        }

        this.renderQRCards();
    }

    renderQRCards() {
        this.elements.qrContainer.innerHTML = '';
        const currentUrl = window.location.href.split('?')[0];
        const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);

        this.teams.forEach((team) => {
            const clientUrl = `${baseUrl}client.html?room=${this.roomId}&slot=${team.slot}`;

            const card = document.createElement('div');
            card.className = `team-qr-card ${team.connected ? 'ready' : ''}`;
            card.id = `qr-card-slot-${team.slot}`;

            card.innerHTML = `
                <div class="team-slot-header" style="color: ${team.color}">
                    <span>🛡️ Team ${team.slot}</span>
                </div>
                <div class="qr-box" id="qr-box-${team.slot}"></div>
                <div class="team-name-tag" id="team-name-${team.slot}">
                    ${team.connected ? team.name : 'Waiting for scan...'}
                </div>
                <div class="team-status-pill ${team.connected ? 'connected' : 'waiting'}" id="status-pill-${team.slot}">
                    ${team.connected ? '✓ Connected & Ready' : 'Scan with Mobile Camera'}
                </div>
                <div style="margin-top: 8px;">
                    <a href="${clientUrl}" target="_blank" style="color: #66b3ff; font-size: 11px; text-decoration: underline;">
                        Direct Link (Test Tab)
                    </a>
                </div>
            `;

            this.elements.qrContainer.appendChild(card);

            // Generate QR Code
            const qrElement = card.querySelector(`#qr-box-${team.slot}`);
            try {
                new QRCode(qrElement, {
                    text: clientUrl,
                    width: 160,
                    height: 160,
                    colorDark: '#000033',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.M
                });
            } catch (e) {
                console.warn('QRCode generation failed, fallback text link used', e);
            }
        });

        this.checkAllTeamsConnected();
    }

    addTestTeam() {
        const waitingTeam = this.teams.find(t => !t.connected);
        if (!waitingTeam) return;

        const demoNames = ['The Quizzards', 'Smarty Pants', 'Trivia Titans', 'Brainy Bunch', 'Mind Benders'];
        const name = demoNames[waitingTeam.slot - 1] || `Team ${waitingTeam.slot}`;

        waitingTeam.name = name;
        waitingTeam.connected = true;
        this.soundFX.playReveal();

        this.updateTeamCardUI(waitingTeam.slot, name);
        this.checkAllTeamsConnected();
    }

    updateTeamCardUI(slot, teamName) {
        const card = document.getElementById(`qr-card-slot-${slot}`);
        const nameTag = document.getElementById(`team-name-${slot}`);
        const pill = document.getElementById(`status-pill-${slot}`);

        if (card) card.classList.add('ready');
        if (nameTag) nameTag.textContent = teamName;
        if (pill) {
            pill.className = 'team-status-pill connected';
            pill.textContent = '✓ Connected & Ready';
        }
    }

    checkAllTeamsConnected() {
        const connectedCount = this.teams.filter(t => t.connected).length;
        if (connectedCount >= 2) {
            this.elements.btnProceedCategories.disabled = false;
        } else {
            this.elements.btnProceedCategories.disabled = true;
        }
    }

    setupPeerListeners() {
        this.peerSync.on('REGISTER_TEAM', (payload) => {
            const { slot, teamName, peerId } = payload;
            const team = this.teams.find(t => t.slot === Number(slot));
            if (team) {
                team.name = teamName || `Team ${slot}`;
                team.connected = true;
                team.peerId = peerId;
                this.soundFX.playReveal();

                this.updateTeamCardUI(slot, team.name);
                this.checkAllTeamsConnected();

                // Confirm back to client
                this.peerSync.broadcast('REGISTRATION_CONFIRMED', {
                    teamId: team.id,
                    slot: team.slot,
                    teamName: team.name,
                    color: team.color
                });
            }
        });

        // Client chooses tile from phone on their turn
        this.peerSync.on('SELECT_TILE', (payload) => {
            if (this.activeTurnTeamId === payload.teamId && !this.activeTile) {
                this.handleTileSelection(payload.tileId);
            }
        });

        // Client Buzzer
        this.peerSync.on('BUZZ_IN', (payload) => {
            this.handleTeamBuzz(payload.teamId);
        });

        // Client Answer Submission
        this.peerSync.on('SUBMIT_ANSWER', (payload) => {
            if (this.buzzingTeamId === payload.teamId) {
                this.evaluateSubmittedAnswer(payload.answer);
            }
        });
    }

    /* -------------------------------------------------------------
     * SCREEN 3: CATEGORY SELECTION
     * ----------------------------------------------------------- */
    showCategorySelection() {
        this.switchScreen('Categories');
        this.renderCategoryDropdowns();
    }

    renderCategoryDropdowns() {
        this.elements.catGrid.innerHTML = '';
        const presets = JEOPARDY_PRESET_CATEGORIES;

        // Default recommended categories
        const defaults = ['science', 'movies', 'geography', 'history', 'technology', 'random'];

        for (let i = 0; i < 6; i++) {
            const slotDiv = document.createElement('div');
            slotDiv.className = 'cat-slot';

            const defaultVal = defaults[i] || 'random';
            let optionsHtml = '';

            presets.forEach(cat => {
                optionsHtml += `<option value="${cat.id}" ${cat.id === defaultVal ? 'selected' : ''}>${cat.icon} ${cat.name}</option>`;
            });

            slotDiv.innerHTML = `
                <label>CATEGORY ${i + 1}</label>
                <select class="cat-dropdown" id="cat-select-${i}">
                    ${optionsHtml}
                </select>
            `;

            this.elements.catGrid.appendChild(slotDiv);
        }
    }

    async generateAndStartBoard() {
        const catSelects = document.querySelectorAll('.cat-dropdown');
        const chosen = Array.from(catSelects).map(s => s.value);

        this.elements.generationProgressBox.style.display = 'block';
        this.elements.btnGenerateBoard.disabled = true;

        try {
            this.board = await this.scourer.generateBoard(chosen, (pct, status) => {
                this.elements.generationProgressBar.style.width = `${pct}%`;
                this.elements.generationProgressText.textContent = status;
            });

            setTimeout(() => {
                this.startJeopardyGame();
            }, 800);
        } catch (e) {
            console.error('Board generation error:', e);
            alert('Encountered an issue generating board. Retrying with fallback...');
        }
    }

    /* -------------------------------------------------------------
     * SCREEN 4: JEOPARDY BOARD & GAMEPLAY
     * ----------------------------------------------------------- */
    startJeopardyGame() {
        this.switchScreen('Board');
        this.renderBoard();
        this.renderScoreboard();

        // Pick random team to start
        const connectedTeams = this.teams.filter(t => t.connected);
        const randomStart = connectedTeams[Math.floor(Math.random() * connectedTeams.length)] || this.teams[0];
        this.setActiveTurn(randomStart.id);

        this.soundFX.playDailyDouble();
    }

    renderBoard() {
        this.elements.jeopardyBoard.innerHTML = '';

        // Top Header Row: 6 Categories
        this.board.forEach(col => {
            const headerCell = document.createElement('div');
            headerCell.className = 'board-header';
            headerCell.innerHTML = `<span>${col.icon} ${col.title}</span>`;
            this.elements.jeopardyBoard.appendChild(headerCell);
        });

        // 5 Rows of Tiles ($100 to $500)
        for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
            for (let colIdx = 0; colIdx < 6; colIdx++) {
                const tile = this.board[colIdx].tiles[rowIdx];
                const tileCell = document.createElement('div');
                tileCell.className = `board-tile ${tile.status === 'completed' ? 'completed' : ''}`;
                tileCell.id = `tile-${tile.id}`;
                
                if (tile.status === 'completed') {
                    tileCell.innerHTML = tile.resolvedByTeam ? '✓' : '—';
                } else {
                    tileCell.textContent = `$${tile.value}`;
                }

                // Host can click directly to open clue
                tileCell.addEventListener('click', () => {
                    if (tile.status === 'available' && !this.activeTile) {
                        this.handleTileSelection(tile.id);
                    }
                });

                this.elements.jeopardyBoard.appendChild(tileCell);
            }
        }
    }

    renderScoreboard() {
        this.elements.scoreboardFooter.innerHTML = '';
        this.teams.filter(t => t.connected).forEach(team => {
            const card = document.createElement('div');
            card.className = `team-score-card ${team.id === this.activeTurnTeamId ? 'active-picker' : ''}`;
            card.id = `score-card-${team.id}`;
            card.style.borderTop = `4px solid ${team.color}`;

            card.innerHTML = `
                <div class="score-name" style="color: ${team.color}">${team.name}</div>
                <div class="score-amount ${team.score < 0 ? 'negative' : ''}">$${team.score}</div>
            `;

            this.elements.scoreboardFooter.appendChild(card);
        });
    }

    setActiveTurn(teamId) {
        this.activeTurnTeamId = teamId;
        const activeTeam = this.teams.find(t => t.id === teamId);
        
        if (this.elements.turnAnnouncement) {
            this.elements.turnAnnouncement.innerHTML = `
                <span>Turn: <strong style="color: ${activeTeam?.color || '#FFCC00'}">${activeTeam?.name}</strong>, select a clue from your phone!</span>
            `;
        }

        this.renderScoreboard();
        this.broadcastGameState('board');
    }

    /* -------------------------------------------------------------
     * SCREEN 5: CLUE REVEAL & BUZZER
     * ----------------------------------------------------------- */
    handleTileSelection(tileId) {
        let foundTile = null;
        for (const col of this.board) {
            const t = col.tiles.find(x => x.id === tileId);
            if (t && t.status === 'available') {
                foundTile = t;
                break;
            }
        }

        if (!foundTile) return;

        this.activeTile = foundTile;
        this.alreadyBuzzedForCurrentClue.clear();
        this.buzzingTeamId = null;

        // Sound FX
        this.soundFX.playReveal();

        // Populate Modal
        this.elements.clueCategoryBar.textContent = foundTile.categoryName;
        this.elements.clueValueBadge.textContent = `$${foundTile.value}`;
        this.elements.clueText.textContent = foundTile.clue;
        this.elements.clueSource.textContent = foundTile.source || 'Wikipedia Fact Archive';
        this.elements.answerRevealBox.style.display = 'none';
        if (this.elements.dismissActionBar) this.elements.dismissActionBar.style.display = 'none';
        if (this.elements.hostActionBar) this.elements.hostActionBar.style.display = 'flex';

        // Show Modal
        this.elements.clueCard.className = 'clue-card';
        this.elements.clueOverlay.classList.add('active');

        // Open Buzzers
        this.openBuzzers();
    }

    openBuzzers() {
        this.buzzingTeamId = null;
        this.elements.buzzerStatusBanner.className = 'buzzer-status-banner open';
        this.elements.buzzerStatusBanner.textContent = '🔔 BUZZERS ARE OPEN!';

        // Broadcast to clients
        this.peerSync.broadcast('QUESTION_REVEALED', {
            tileId: this.activeTile.id,
            category: this.activeTile.categoryName,
            value: this.activeTile.value,
            clue: this.activeTile.clue,
            source: this.activeTile.source,
            buzzersOpen: true,
            excludedTeams: Array.from(this.alreadyBuzzedForCurrentClue)
        });

        // Start 30s Clue Timer
        this.startClueTimer(30);
    }

    startClueTimer(seconds) {
        clearInterval(this.clueTimer);
        this.clueTimeRemaining = seconds;
        this.updateTimerBar(100);

        this.clueTimer = setInterval(() => {
            this.clueTimeRemaining--;
            const pct = (this.clueTimeRemaining / seconds) * 100;
            this.updateTimerBar(pct);

            if (this.clueTimeRemaining <= 5 && this.clueTimeRemaining > 0) {
                this.soundFX.playTick();
            }

            if (this.clueTimeRemaining <= 0) {
                clearInterval(this.clueTimer);
                this.handleTimeExpired();
            }
        }, 1000);
    }

    updateTimerBar(pct) {
        if (this.elements.clueTimerBar) {
            this.elements.clueTimerBar.style.width = `${Math.max(0, pct)}%`;
        }
    }

    /* -------------------------------------------------------------
     * SCREEN 6: BUZZER LOCKOUT & ANSWERING
     * ----------------------------------------------------------- */
    handleTeamBuzz(teamId) {
        if (this.buzzingTeamId) return; // already locked
        if (this.alreadyBuzzedForCurrentClue.has(teamId)) return; // already missed this clue

        clearInterval(this.clueTimer);
        this.buzzingTeamId = teamId;
        this.alreadyBuzzedForCurrentClue.add(teamId);

        const team = this.teams.find(t => t.id === teamId);
        this.soundFX.playBuzzer();

        // Main Screen Banner
        this.elements.buzzerStatusBanner.className = 'buzzer-status-banner buzzed';
        this.elements.buzzerStatusBanner.textContent = `🔔 ${team?.name} BUZZED IN!`;

        // Broadcast Lockout
        this.peerSync.broadcast('TEAM_BUZZED', {
            buzzingTeamId: teamId,
            buzzingTeamName: team?.name,
            answerTimeLimit: 15
        });

        // Start 15s Answer Timer
        this.startAnswerTimer(15);
    }

    startAnswerTimer(seconds) {
        clearInterval(this.answerTimer);
        this.answerTimeRemaining = seconds;

        this.answerTimer = setInterval(() => {
            this.answerTimeRemaining--;
            if (this.answerTimeRemaining <= 0) {
                clearInterval(this.answerTimer);
                // Timed out on typing answer
                this.handleAnswerEvaluation(false, 'Answer time limit expired');
            }
        }, 1000);
    }

    /* -------------------------------------------------------------
     * SCREEN 7: ANSWER EVALUATION (CORRECT / WRONG)
     * ----------------------------------------------------------- */
    evaluateSubmittedAnswer(userAnswer) {
        clearInterval(this.answerTimer);

        const evaluation = JeopardyMatcher.evaluate(
            userAnswer,
            this.activeTile.answer,
            this.activeTile.accepted,
            0.72 // similarity threshold
        );

        console.log('[Answer Evaluation]', evaluation);
        this.handleAnswerEvaluation(evaluation.isCorrect, evaluation.reason);
    }

    handleAnswerEvaluation(isCorrect, reason) {
        clearInterval(this.answerTimer);
        const team = this.teams.find(t => t.id === this.buzzingTeamId);

        if (isCorrect) {
            // CORRECT!
            this.soundFX.playCorrect();
            if (typeof confetti === 'function') {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            }

            // Award points
            if (team) {
                team.score += this.activeTile.value;
            }

            // Tile turns green
            this.elements.clueCard.classList.remove('shake-wrong');
            this.elements.clueCard.classList.add('pulse-correct');

            // Reveal Answer
            this.elements.answerRevealBox.style.display = 'block';
            this.elements.answerRevealBox.innerHTML = `
                <div>✓ CORRECT! (${reason})</div>
                <div style="font-size: 20px; color: #fff; margin-top: 6px;">Answer: <strong>${this.activeTile.answer}</strong></div>
            `;

            this.activeTile.status = 'completed';
            this.activeTile.resolvedByTeam = team?.id;

            this.peerSync.broadcast('ANSWER_RESULT', {
                isCorrect: true,
                teamId: team?.id,
                teamName: team?.name,
                points: this.activeTile.value,
                officialAnswer: this.activeTile.answer,
                reason: reason
            });

            // Active team keeps board control!
            if (team) {
                this.activeTurnTeamId = team.id;
            }

            // Tile stays in place until dismissed
            this.showDismissAction();

        } else {
            // INCORRECT!
            this.soundFX.playIncorrect();

            // Deduct points
            if (team) {
                team.score -= this.activeTile.value;
            }

            // Shaking red animation on tile
            this.elements.clueCard.classList.remove('pulse-correct');
            this.elements.clueCard.classList.add('shake-wrong');

            this.peerSync.broadcast('ANSWER_RESULT', {
                isCorrect: false,
                teamId: team?.id,
                teamName: team?.name,
                points: -this.activeTile.value,
                officialAnswer: null,
                reason: reason
            });

            this.renderScoreboard();

            // Check if other teams can still buzz
            const availableTeams = this.teams.filter(t => t.connected && !this.alreadyBuzzedForCurrentClue.has(t.id));

            if (availableTeams.length > 0) {
                setTimeout(() => {
                    this.elements.clueCard.classList.remove('shake-wrong');
                    this.openBuzzers();
                }, 1800);
            } else {
                // All teams tried and failed
                setTimeout(() => {
                    this.skipCurrentClue();
                }, 1800);
            }
        }

        this.renderScoreboard();
    }

    handleTimeExpired() {
        this.soundFX.playIncorrect();
        this.skipCurrentClue();
    }

    skipCurrentClue() {
        clearInterval(this.clueTimer);
        clearInterval(this.answerTimer);

        this.elements.answerRevealBox.style.display = 'block';
        this.elements.answerRevealBox.innerHTML = `
            <div style="color: #ffaa00;">NO ONE BUZZED IN!</div>
            <div style="font-size: 20px; color: #fff; margin-top: 6px;">Correct Answer: <strong>${this.activeTile.answer}</strong></div>
        `;

        this.activeTile.status = 'completed';

        this.peerSync.broadcast('ANSWER_RESULT', {
            isCorrect: false,
            officialAnswer: this.activeTile.answer,
            reason: 'Clue timed out'
        });

        // Rotate turn to next team
        this.rotateTurnToNextTeam();

        // Tile stays in place until dismissed
        this.showDismissAction();
    }

    showDismissAction() {
        if (this.elements.hostActionBar) this.elements.hostActionBar.style.display = 'none';
        if (this.elements.buzzerStatusBanner) this.elements.buzzerStatusBanner.style.display = 'none';
        if (this.elements.clueTimerBar) this.elements.clueTimerBar.style.width = '0%';
        if (this.elements.dismissActionBar) this.elements.dismissActionBar.style.display = 'flex';
    }

    rotateTurnToNextTeam() {
        const connected = this.teams.filter(t => t.connected);
        const currentIdx = connected.findIndex(t => t.id === this.activeTurnTeamId);
        const nextIdx = (currentIdx + 1) % connected.length;
        this.activeTurnTeamId = connected[nextIdx]?.id || connected[0]?.id;
    }

    closeClueAndReturnToBoard() {
        this.elements.clueOverlay.classList.remove('active');
        this.elements.clueCard.className = 'clue-card';
        this.activeTile = null;
        this.buzzingTeamId = null;

        this.renderBoard();
        this.setActiveTurn(this.activeTurnTeamId);
        this.checkGameOver();
    }

    checkGameOver() {
        let remainingTiles = 0;
        this.board.forEach(col => {
            remainingTiles += col.tiles.filter(t => t.status === 'available').length;
        });

        if (remainingTiles === 0) {
            this.declareWinner();
        }
    }

    declareWinner() {
        const sorted = [...this.teams.filter(t => t.connected)].sort((a, b) => b.score - a.score);
        const winner = sorted[0];

        this.soundFX.playDailyDouble();
        if (typeof confetti === 'function') {
            confetti({ particleCount: 250, spread: 100, origin: { y: 0.5 } });
        }

        alert(`🏆 GAME OVER!\nWinner: ${winner.name} with $${winner.score}!`);
    }

    broadcastGameState(screen) {
        const availableTiles = [];
        this.board.forEach(col => {
            col.tiles.forEach(tile => {
                if (tile.status === 'available') {
                    availableTiles.push({
                        id: tile.id,
                        categoryId: tile.categoryId,
                        categoryName: tile.categoryName,
                        value: tile.value
                    });
                }
            });
        });

        this.peerSync.broadcast('GAME_STATE', {
            screen: screen,
            activeTurnTeamId: this.activeTurnTeamId,
            availableTiles: availableTiles,
            scores: this.teams.map(t => ({ id: t.id, name: t.name, score: t.score }))
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.hostApp = new JeopardyHostApp();
});
