/**
 * Trivia Scourer & Board Generator
 * Always draws directly from the 2,000-question pre-stored question bank (200 questions/category)
 * for instant 0ms generation with zero external API or token costs.
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

        this.cache = new Map();
        // Track recently used clues to ensure high variety across rounds
        this.usedClueIds = new Set();
    }

    /**
     * Get the active stored question bank
     */
    getBank() {
        if (typeof JEOPARDY_STORED_QUESTION_BANK !== 'undefined') {
            return JEOPARDY_STORED_QUESTION_BANK;
        }
        if (typeof require !== 'undefined') {
            try {
                return require('./trivia-bank.js').JEOPARDY_STORED_QUESTION_BANK;
            } catch (e) {}
        }
        if (typeof CURATED_FACTS_DATABASE !== 'undefined') {
            return CURATED_FACTS_DATABASE;
        }
        return {};
    }

    /**
     * Build 6 categories x 5 questions board strictly from stored database
     * @param {string[]} categoryIds - Chosen categories from dropdown
     * @param {Function} onProgress - Progress reporter (percent, text)
     */
    async generateBoard(categoryIds, onProgress = () => {}) {
        const bank = this.getBank();
        const availableCategoryKeys = Object.keys(bank);
        const finalCategories = [];

        onProgress(15, "Selecting Jeopardy categories from stored library...");

        // Resolve "random" categories
        const pool = [...availableCategoryKeys].sort(() => 0.5 - Math.random());
        let poolIdx = 0;

        for (let i = 0; i < categoryIds.length; i++) {
            const catId = categoryIds[i];
            if (catId === 'random') {
                while (poolIdx < pool.length && finalCategories.includes(pool[poolIdx])) {
                    poolIdx++;
                }
                if (poolIdx < pool.length) {
                    finalCategories.push(pool[poolIdx]);
                    poolIdx++;
                } else {
                    finalCategories.push(availableCategoryKeys[i % availableCategoryKeys.length]);
                }
            } else if (bank[catId]) {
                finalCategories.push(catId);
            }
        }

        // Fill up to 6 if needed
        while (finalCategories.length < 6) {
            const pick = pool[poolIdx % pool.length];
            poolIdx++;
            if (!finalCategories.includes(pick)) {
                finalCategories.push(pick);
            }
        }

        const presets = typeof JEOPARDY_PRESET_CATEGORIES !== 'undefined'
            ? JEOPARDY_PRESET_CATEGORIES
            : (typeof require !== 'undefined' ? require('./trivia-data.js').JEOPARDY_PRESET_CATEGORIES : []);

        const boardColumns = [];
        const totalItems = finalCategories.length * 5;
        let processedItems = 0;

        for (const catId of finalCategories) {
            const catPreset = presets.find(c => c.id === catId) || {
                name: catId.toUpperCase(),
                icon: "📌"
            };

            const catFactPool = bank[catId] || [];
            const columnTiles = [];
            const values = [100, 200, 300, 400, 500];

            for (const val of values) {
                // Find all stored clues matching this value tier (40 available per tier)
                const matchingFacts = catFactPool.filter(f => f.value === val);
                let selectedFact;

                if (matchingFacts.length > 0) {
                    // Prefer clues not used recently in this session
                    const freshFacts = matchingFacts.filter(f => !this.usedClueIds.has(`${catId}_${f.clue}`));
                    const pickPool = freshFacts.length > 0 ? freshFacts : matchingFacts;
                    selectedFact = pickPool[Math.floor(Math.random() * pickPool.length)];
                    this.usedClueIds.add(`${catId}_${selectedFact.clue}`);
                } else {
                    selectedFact = {
                        value: val,
                        clue: `Trivia clue for ${catPreset.name} at level $${val}.`,
                        answer: "Jeopardy",
                        accepted: ["jeopardy"],
                        source: "Wikipedia Fact Archive"
                    };
                }

                processedItems++;
                const progressPct = Math.round((processedItems / totalItems) * 90) + 10;
                onProgress(progressPct, `Loaded [${catPreset.name}] $${val} from stored bank`);

                columnTiles.push({
                    id: `${catId}_${val}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
                    categoryName: catPreset.name,
                    categoryId: catId,
                    value: val,
                    clue: selectedFact.clue,
                    answer: selectedFact.answer,
                    accepted: selectedFact.accepted || [],
                    source: selectedFact.source || "Wikipedia / Reliable Sources",
                    status: 'available',
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

        onProgress(100, "Jeopardy board loaded instantly from stored 2,000-question library!");
        return boardColumns;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TriviaScourer };
}
