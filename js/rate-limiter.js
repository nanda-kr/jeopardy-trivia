/**
 * Rate Limiter & Exponential Backoff Engine
 * Manages request throttling and exponential backoff retry logic to prevent
 * hitting upstream rate limits (such as Wikimedia / Wikipedia / IMDb / REST APIs).
 */
class ExponentialBackoffLimiter {
    constructor(options = {}) {
        this.baseDelayMs = options.baseDelayMs || 300;
        this.maxDelayMs = options.maxDelayMs || 16000;
        this.factor = options.factor || 2.0;
        this.jitter = options.jitter !== undefined ? options.jitter : true;
        this.maxRetries = options.maxRetries || 5;
        this.targetMaxTPS = options.targetMaxTPS || 50; // default soft ceiling
        
        // Rolling TPS metrics tracker
        this.requestTimestamps = [];
        this.activeRetries = 0;
        this.currentBackoffMs = 0;
        this.totalRequests = 0;
        this.rateLimitEncounters = 0;
        
        // Listeners for telemetry / UI display
        this.onTelemetryUpdate = options.onTelemetryUpdate || null;
    }

    /**
     * Compute backoff duration with full jitter
     */
    computeDelay(attempt) {
        let delay = this.baseDelayMs * Math.pow(this.factor, attempt);
        if (delay > this.maxDelayMs) {
            delay = this.maxDelayMs;
        }
        if (this.jitter) {
            // Full jitter: random between 0.5 and 1.5 * delay
            const jitterFactor = 0.5 + Math.random();
            delay = Math.round(delay * jitterFactor);
        }
        return Math.min(delay, this.maxDelayMs);
    }

    /**
     * Calculate current transactions per second over the last 1000ms
     */
    getCurrentTPS() {
        const now = Date.now();
        this.requestTimestamps = this.requestTimestamps.filter(t => now - t < 1000);
        return this.requestTimestamps.length;
    }

    /**
     * Sleep helper
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Update telemetry listeners
     */
    notifyTelemetry(status = 'ok') {
        if (typeof this.onTelemetryUpdate === 'function') {
            this.onTelemetryUpdate({
                tps: this.getCurrentTPS(),
                currentBackoffMs: this.currentBackoffMs,
                totalRequests: this.totalRequests,
                rateLimitEncounters: this.rateLimitEncounters,
                activeRetries: this.activeRetries,
                status: status
            });
        }
    }

    /**
     * Executes a fetch function with exponential backoff and rate pacing
     */
    async execute(taskFn, taskName = 'API Request') {
        let attempt = 0;
        
        while (attempt <= this.maxRetries) {
            // Pre-request rate pacing
            while (this.getCurrentTPS() >= this.targetMaxTPS) {
                await this.sleep(50);
            }
            
            const now = Date.now();
            this.requestTimestamps.push(now);
            this.totalRequests++;
            this.notifyTelemetry('executing');

            try {
                const result = await taskFn();
                
                // If response is a Fetch Response object, check HTTP status
                if (result && typeof result.status === 'number') {
                    if (result.status === 429 || result.status === 503) {
                        throw new Error(`HTTP_${result.status}_RATE_LIMITED`);
                    }
                    if (!result.ok && result.status >= 500) {
                        throw new Error(`HTTP_${result.status}_SERVER_ERROR`);
                    }
                }
                
                // Success - reset backoff
                this.currentBackoffMs = 0;
                this.notifyTelemetry('idle');
                return result;

            } catch (err) {
                const isRateLimited = err.message && (
                    err.message.includes('RATE_LIMITED') || 
                    err.message.includes('429') ||
                    err.message.includes('503') ||
                    err.message.includes('limit')
                );

                attempt++;
                this.rateLimitEncounters++;
                this.activeRetries = attempt;

                if (attempt > this.maxRetries) {
                    this.notifyTelemetry('exhausted');
                    console.error(`[RateLimiter] ${taskName} exhausted ${this.maxRetries} retries:`, err);
                    throw err;
                }

                const delay = this.computeDelay(attempt);
                this.currentBackoffMs = delay;
                this.notifyTelemetry(isRateLimited ? 'throttled' : 'retrying');

                console.warn(
                    `[RateLimiter] ${taskName} hit ${err.message || 'error'}. ` +
                    `Applying exponential backoff: waiting ${delay}ms before attempt ${attempt}/${this.maxRetries}...`
                );

                await this.sleep(delay);
            }
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ExponentialBackoffLimiter };
}
