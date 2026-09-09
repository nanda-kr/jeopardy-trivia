/**
 * Automated Test Suite for Jeopardy Trivia Studio
 */

const assert = require('assert');
const { ExponentialBackoffLimiter } = require('../js/rate-limiter.js');
const { JeopardyMatcher } = require('../js/fuzzy-matcher.js');
const { CURATED_FACTS_DATABASE, JEOPARDY_PRESET_CATEGORIES } = require('../js/trivia-data.js');

global.CURATED_FACTS_DATABASE = CURATED_FACTS_DATABASE;
global.JEOPARDY_PRESET_CATEGORIES = JEOPARDY_PRESET_CATEGORIES;
const { TriviaScourer } = require('../js/trivia-scourer.js');

async function runTests() {
    console.log('🧪 Starting Jeopardy Studio Test Suite...\n');

    // 1. Fuzzy Matcher Tests
    console.log('Test Group 1: Jeopardy Answer Matcher');
    {
        const t1 = JeopardyMatcher.evaluate("What is Jupiter?", "Jupiter");
        assert.strictEqual(t1.isCorrect, true, "Should match 'What is Jupiter?'");

        const t2 = JeopardyMatcher.evaluate("who was Albert Einstein?", "Albert Einstein");
        assert.strictEqual(t2.isCorrect, true, "Should match 'who was Albert Einstein?'");

        const t3 = JeopardyMatcher.evaluate("Einstein", "Albert Einstein");
        assert.strictEqual(t3.isCorrect, true, "Should accept last name for historic figures");

        const t4 = JeopardyMatcher.evaluate("jupitar", "Jupiter");
        assert.strictEqual(t4.isCorrect, true, "Should accept minor typo (close enough)");

        const t5 = JeopardyMatcher.evaluate("The Pacific Ocean", "Pacific Ocean");
        assert.strictEqual(t5.isCorrect, true, "Should ignore leading article 'The'");

        const t6 = JeopardyMatcher.evaluate("Mars", "Jupiter");
        assert.strictEqual(t6.isCorrect, false, "Should reject incorrect answer");

        console.log('  ✓ All 6 Answer Matcher assertions passed.');
    }

    // 2. Exponential Backoff Tests
    console.log('\nTest Group 2: Exponential Backoff & Rate Limiter');
    {
        const limiter = new ExponentialBackoffLimiter({
            baseDelayMs: 50,
            maxDelayMs: 500,
            factor: 2.0,
            jitter: false,
            maxRetries: 3
        });

        const d0 = limiter.computeDelay(0);
        const d1 = limiter.computeDelay(1);
        const d2 = limiter.computeDelay(2);
        assert.strictEqual(d0, 50, 'Delay 0 should be baseDelay');
        assert.strictEqual(d1, 100, 'Delay 1 should be baseDelay * 2');
        assert.strictEqual(d2, 200, 'Delay 2 should be baseDelay * 4');

        // Test retry recovery
        let attempts = 0;
        const result = await limiter.execute(async () => {
            attempts++;
            if (attempts < 3) {
                throw new Error('HTTP_429_RATE_LIMITED');
            }
            return { ok: true, attempts };
        }, 'TestRetryEndpoint');

        assert.strictEqual(result.ok, true);
        assert.strictEqual(result.attempts, 3);
        console.log('  ✓ Exponential Backoff retry calculation & recovery passed.');
    }

    // 3. Board Generation & Difficulty Scaling
    console.log('\nTest Group 3: Trivia Scourer & Difficulty Progression');
    {
        const scourer = new TriviaScourer();
        const categories = ["science", "movies", "geography", "history", "technology", "random"];
        const board = await scourer.generateBoard(categories);

        assert.strictEqual(board.length, 6, "Board should contain exactly 6 categories");

        board.forEach(col => {
            assert.strictEqual(col.tiles.length, 5, `Column ${col.title} should have 5 tiles`);
            const values = col.tiles.map(t => t.value);
            assert.deepStrictEqual(values, [100, 200, 300, 400, 500], `Values should scale 100-500 for ${col.title}`);
            col.tiles.forEach(tile => {
                assert.ok(tile.clue && tile.clue.length > 5, 'Tile must have a valid clue');
                assert.ok(tile.answer && tile.answer.length > 0, 'Tile must have a valid answer');
                assert.ok(tile.source, 'Tile must have a cited source');
            });
        });

        console.log('  ✓ Board generated 30 valid tiles across 6 categories with $100-$500 difficulty tiers.');
    }

    console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY!\n');
}

runTests().catch(err => {
    console.error('❌ Test failed:', err);
    process.exit(1);
});
