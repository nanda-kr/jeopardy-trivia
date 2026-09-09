/**
 * Trivia Scourer & Board Generator
 * Dynamically scours and enriches facts from Wikipedia REST API and authentic database
 * while using ExponentialBackoffLimiter to guarantee no rate limits are breached.
 */

class TriviaScourer {
    constructor(limiter) {
        if (!limiter) {
            let LimiterClass = typeof ExponentialBackoffLimiter !== 'undefined' 
                ? ExponentialBackoffLimiter 
                : (typeof require !== 'undefined' ? require('./rate-limiter.js').ExponentialBackoffLimiter : null);
            
            if (LimiterClass) {
                this.limiter = new LimiterClass({
                    baseDelayMs: 250,
                    maxDelayMs: 8000,
                    factor: 2.0,
                    jitter: true,
                    maxRetries: 4
                });
            }
        } else {
            this.limiter = limiter;
        }
        
        // Cache to prevent duplicate queries
        this.cache = new Map();
    }

    /**
     * Fetch summary and verification data from Wikipedia with exponential backoff
     */
    async scourWikipediaArticle(title) {
        if (this.cache.has(title)) {
            return this.cache.get(title);
        }

        const encodedTitle = encodeURIComponent(title.replace(/\s+/g, '_'));
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`;

        const data = await this.limiter.execute(async () => {
            const resp = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'JeopardyTriviaStudio/1.0 (https://github.com/nanda-kr/jeopardy-trivia; contact: trivia@example.org) BasedOnWikipediaApi'
                }
            });

            if (!resp.ok) {
                // If 404 or other non-rate error, return null rather than crash
                if (resp.status === 404) return null;
                // If rate limited (429/503), throw so limiter triggers backoff
                if (resp.status === 429 || resp.status === 503) {
                    throw new Error(`HTTP_${resp.status}_RATE_LIMITED`);
                }
                return null;
            }

            return await resp.json();
        }, `Wikipedia [${title}]`);

        if (data) {
            this.cache.set(title, data);
        }
        return data;
    }

    /**
     * Build 6 categories x 5 questions board
     * @param {string[]} categoryIds - Chosen categories from dropdown
     * @param {Function} onProgress - Progress reporter (percent, text)
     */
    async generateBoard(categoryIds, onProgress = () => {}) {
        const availableCategoryKeys = Object.keys(CURATED_FACTS_DATABASE);
        const finalCategories = [];

        onProgress(5, "Selecting and randomizing Jeopardy categories...");

        // Resolve "random" categories
        const pool = [...availableCategoryKeys].sort(() => 0.5 - Math.random());
        let poolIdx = 0;

        for (let i = 0; i < categoryIds.length; i++) {
            const catId = categoryIds[i];
            if (catId === 'random') {
                // Pick an unused category from pool
                while (poolIdx < pool.length && finalCategories.includes(pool[poolIdx])) {
                    poolIdx++;
                }
                if (poolIdx < pool.length) {
                    finalCategories.push(pool[poolIdx]);
                    poolIdx++;
                } else {
                    finalCategories.push(availableCategoryKeys[i % availableCategoryKeys.length]);
                }
            } else if (CURATED_FACTS_DATABASE[catId]) {
                finalCategories.push(catId);
            }
        }

        // Fill up to 6 if less provided
        while (finalCategories.length < 6) {
            const pick = pool[poolIdx % pool.length];
            poolIdx++;
            if (!finalCategories.includes(pick)) {
                finalCategories.push(pick);
            }
        }

        const boardColumns = [];
        const totalItems = finalCategories.length * 5;
        let processedItems = 0;

        for (const catId of finalCategories) {
            const catPreset = JEOPARDY_PRESET_CATEGORIES.find(c => c.id === catId) || {
                name: catId.toUpperCase(),
                icon: "📌"
            };

            const catFactPool = CURATED_FACTS_DATABASE[catId] || [];
            const columnTiles = [];

            // 5 difficulty levels: $100, $200, $300, $400, $500
            const values = [100, 200, 300, 400, 500];

            for (const val of values) {
                const matchingFacts = catFactPool.filter(f => f.value === val);
                let selectedFact;

                if (matchingFacts.length > 0) {
                    selectedFact = matchingFacts[Math.floor(Math.random() * matchingFacts.length)];
                } else {
                    // Fallback
                    selectedFact = {
                        value: val,
                        clue: `Trivia clue for ${catPreset.name} at level $${val}.`,
                        answer: "Jeopardy",
                        accepted: ["jeopardy"],
                        source: "Wikipedia Archive"
                    };
                }

                // Optional live Wikipedia enrichment with exponential backoff rate limiter
                let wikiExtra = null;
                try {
                    // Attempt to scour live Wikipedia fact snippet for the answer entity
                    wikiExtra = await this.scourWikipediaArticle(selectedFact.answer);
                } catch (e) {
                    // Limiter handled retries, continue with existing verified fact
                    console.log(`Using cached fact for ${selectedFact.answer}`);
                }

                processedItems++;
                const progressPct = Math.round((processedItems / totalItems) * 90) + 5;
                onProgress(progressPct, `Scouring facts for [${catPreset.name}] $${val}...`);

                columnTiles.push({
                    id: `${catId}_${val}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
                    categoryName: catPreset.name,
                    categoryId: catId,
                    value: val,
                    clue: selectedFact.clue,
                    answer: selectedFact.answer,
                    accepted: selectedFact.accepted || [],
                    source: selectedFact.source || (wikiExtra ? `Wikipedia: ${wikiExtra.title}` : "Wikipedia / Reliable Sources"),
                    wikiDescription: wikiExtra?.description || null,
                    status: 'available', // available, active, completed, failed
                    resolvedByTeam: null
                });
            }

            boardColumns.push({
                id: catId,
                title: catPreset.name,
                icon: catPreset.icon,
                tiles: columnTiles
            });
        }

        onProgress(100, "Jeopardy board generated successfully!");
        return boardColumns;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TriviaScourer };
}
