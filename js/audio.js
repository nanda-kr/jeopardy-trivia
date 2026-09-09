/**
 * Web Audio API Sound Effects Synthesizer for Jeopardy
 * Generates all authentic game sounds purely via Web Audio API oscillators and filters.
 * Requires zero external mp3 files and zero network latency.
 */

class JeopardyAudio {
    constructor() {
        this.ctx = null;
        this.thinkOscillators = [];
        this.isMuted = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) this.stopThinkMusic();
        return this.isMuted;
    }

    /**
     * Classic Jeopardy Buzzer sound (when a player rings in)
     */
    playBuzzer() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.26);
    }

    /**
     * Incorrect Answer buzzer (classic "EH-EH" double buzz)
     */
    playIncorrect() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [0, 0.18].forEach(offset => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(95, now + offset);
            osc.frequency.setValueAtTime(90, now + offset + 0.12);

            gain.gain.setValueAtTime(0.35, now + offset);
            gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.13);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + offset);
            osc.stop(now + offset + 0.14);
        });
    }

    /**
     * Correct Answer chime & fanfare
     */
    playCorrect() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio

        notes.forEach((freq, idx) => {
            const noteTime = now + idx * 0.08;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, noteTime);

            gain.gain.setValueAtTime(0.25, noteTime);
            gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(noteTime);
            osc.stop(noteTime + 0.36);
        });
    }

    /**
     * Clue reveal / tile select swoosh
     */
    playReveal() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.18);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.21);
    }

    /**
     * Daily Double laser sound
     */
    playDailyDouble() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        for (let i = 0; i < 6; i++) {
            const noteTime = now + i * 0.07;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(250 + i * 120, noteTime);

            gain.gain.setValueAtTime(0.15, noteTime);
            gain.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.06);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(noteTime);
            osc.stop(noteTime + 0.07);
        }
    }

    /**
     * Subtle countdown tick
     */
    playTick() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
    }

    /**
     * Stop all active looping sounds
     */
    stopThinkMusic() {
        this.thinkOscillators.forEach(item => {
            try {
                item.osc.stop();
                item.osc.disconnect();
            } catch (e) {}
        });
        this.thinkOscillators = [];
    }
}

// Global instance
window.soundFX = new JeopardyAudio();
