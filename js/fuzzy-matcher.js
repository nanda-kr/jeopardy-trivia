/**
 * Jeopardy Answer Evaluator & Fuzzy Matcher
 * Parses Jeopardy-style phrasing ("What is...", "Who was..."), removes articles,
 * and uses Levenshtein similarity + token matching to judge if an answer is correct or "close enough".
 */

class JeopardyMatcher {
    /**
     * Normalize string by stripping Jeopardy prefixes, articles, and punctuation
     */
    static normalize(text) {
        if (!text || typeof text !== 'string') return '';
        
        let s = text.toLowerCase().trim();

        // Strip HTML tags if any
        s = s.replace(/<\/?[^>]+(>|$)/g, '');

        // Remove Jeopardy phrasing prefixes
        const jeopardyPrefixes = [
            /^what\s+is\s+(the\s+|an?\s+)?/,
            /^what\s+are\s+(the\s+)?/,
            /^what\s+was\s+(the\s+|an?\s+)?/,
            /^who\s+is\s+(the\s+|an?\s+)?/,
            /^who\s+was\s+(the\s+|an?\s+)?/,
            /^who\s+were\s+(the\s+)?/,
            /^who\s+are\s+(the\s+)?/,
            /^where\s+is\s+(the\s+|an?\s+)?/,
            /^where\s+was\s+(the\s+|an?\s+)?/,
            /^it\s+is\s+(the\s+|an?\s+)?/,
            /^its\s+(the\s+|an?\s+)?/,
            /^it's\s+(the\s+|an?\s+)?/
        ];

        for (const prefix of jeopardyPrefixes) {
            s = s.replace(prefix, '');
        }

        // Remove common punctuation and special characters
        s = s.replace(/[\.,\?!'\";:\(\)\[\]\{\}\/\\-_]/g, ' ');

        // Collapse multiple whitespace
        s = s.replace(/\s+/g, ' ').trim();

        // Strip leading articles
        s = s.replace(/^(the|a|an)\s+/, '');

        return s.trim();
    }

    /**
     * Compute Levenshtein distance between two strings
     */
    static levenshtein(a, b) {
        const matrix = [];
        const n = a.length;
        const m = b.length;

        if (n === 0) return m;
        if (m === 0) return n;

        for (let i = 0; i <= n; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= m; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,       // deletion
                    matrix[i][j - 1] + 1,       // insertion
                    matrix[i - 1][j - 1] + cost // substitution
                );
            }
        }
        return matrix[n][m];
    }

    /**
     * Calculate similarity ratio between 0.0 and 1.0
     */
    static similarityRatio(a, b) {
        if (!a && !b) return 1.0;
        if (!a || !b) return 0.0;
        const maxLen = Math.max(a.length, b.length);
        if (maxLen === 0) return 1.0;
        const dist = this.levenshtein(a, b);
        return 1.0 - (dist / maxLen);
    }

    /**
     * Evaluate submitted answer against expected answer and any accepted variations
     * @param {string} submitted - Answer typed by the player
     * @param {string} expected - Canonical answer for the clue
     * @param {string[]} [acceptedVariants=[]] - Alternative spellings or names
     * @param {number} [threshold=0.75] - Similarity ratio threshold for acceptance
     */
    static evaluate(submitted, expected, acceptedVariants = [], threshold = 0.75) {
        const normSub = this.normalize(submitted);
        const normExp = this.normalize(expected);

        if (!normSub) {
            return { isCorrect: false, confidence: 0, reason: 'Empty submission' };
        }

        const targets = [normExp];
        if (Array.isArray(acceptedVariants)) {
            acceptedVariants.forEach(v => {
                const nv = this.normalize(v);
                if (nv) targets.push(nv);
            });
        }

        // Also add last name match for person names (e.g. "Albert Einstein" -> "Einstein")
        const expTokens = normExp.split(' ').filter(t => t.length > 2);
        if (expTokens.length > 1) {
            const lastName = expTokens[expTokens.length - 1];
            targets.push(lastName);
        }

        let bestRatio = 0;
        let matchedTarget = '';

        for (const target of targets) {
            // Exact match after normalization
            if (normSub === target) {
                return {
                    isCorrect: true,
                    confidence: 1.0,
                    reason: 'Exact match',
                    matched: target,
                    cleanUserAnswer: normSub,
                    cleanExpected: normExp
                };
            }

            // Word containment for multi-word answers
            // e.g. target is "Statue of Liberty" and user typed "Statue of Liberty in NY" or vice-versa
            if (normSub.length >= 4 && target.length >= 4) {
                if (normSub.includes(target) || target.includes(normSub)) {
                    const ratio = Math.min(normSub.length, target.length) / Math.max(normSub.length, target.length);
                    if (ratio >= 0.6) {
                        return {
                            isCorrect: true,
                            confidence: 0.9,
                            reason: 'Phrase match',
                            matched: target,
                            cleanUserAnswer: normSub,
                            cleanExpected: normExp
                        };
                    }
                }
            }

            const ratio = this.similarityRatio(normSub, target);
            if (ratio > bestRatio) {
                bestRatio = ratio;
                matchedTarget = target;
            }
        }

        // Close enough threshold check
        if (bestRatio >= threshold) {
            return {
                isCorrect: true,
                confidence: Math.round(bestRatio * 100) / 100,
                reason: `Close enough (${Math.round(bestRatio * 100)}% match)`,
                matched: matchedTarget,
                cleanUserAnswer: normSub,
                cleanExpected: normExp
            };
        }

        return {
            isCorrect: false,
            confidence: Math.round(bestRatio * 100) / 100,
            reason: `Incorrect (${Math.round(bestRatio * 100)}% match)`,
            cleanUserAnswer: normSub,
            cleanExpected: normExp
        };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JeopardyMatcher };
}
