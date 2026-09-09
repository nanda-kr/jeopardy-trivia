# -*- coding: utf-8 -*-
"""
Compiler script for the complete 2,000-question Jeopardy Trivia Bank
Aggregates all 10 categories, verifies schema and value distributions,
and outputs data/questions-bank.json and js/trivia-bank.js.
"""

import json
import os
import sys

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from categories.science import create_bank as get_science_dict
from categories.movies import get_movies_data
from categories.geography import get_geography_data
from categories.history import get_history_data
from categories.technology import get_technology_data
from categories.music import get_music_data
from categories.literature import get_literature_data
from categories.sports import get_sports_data
from categories.nature import get_nature_data
from categories.food import get_food_data

def compile_all():
    print("Compiling all 10 categories...")
    
    bank = {
        "science": get_science_dict()["science"],
        "movies": get_movies_data(),
        "geography": get_geography_data(),
        "history": get_history_data(),
        "technology": get_technology_data(),
        "music": get_music_data(),
        "literature": get_literature_data(),
        "sports": get_sports_data(),
        "nature": get_nature_data(),
        "food": get_food_data()
    }
    
    total_clues = 0
    expected_values = [100, 200, 300, 400, 500]
    
    for cat_name, clues in bank.items():
        count = len(clues)
        total_clues += count
        print(f"Category [{cat_name}]: {count} clues")
        
        # Verify distribution
        val_counts = {}
        for c in clues:
            v = c["value"]
            val_counts[v] = val_counts.get(v, 0) + 1
            
        dist_str = ", ".join([f"${v}: {val_counts.get(v, 0)}" for v in expected_values])
        print(f"  Distribution: {dist_str}")
        assert count == 200, f"Category {cat_name} must have 200 clues (has {count})"
        for v in expected_values:
            assert val_counts.get(v, 0) == 40, f"Category {cat_name} value ${v} must have 40 clues (has {val_counts.get(v, 0)})"

    print(f"\nTotal Verified Clues in Bank: {total_clues}")
    assert total_clues == 2000, f"Expected exactly 2000 clues, got {total_clues}"

    # 1. Output data/questions-bank.json
    os.makedirs("data", exist_ok=True)
    json_path = os.path.join("data", "questions-bank.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(bank, f, indent=2, ensure_ascii=False)
    print(f"Saved JSON database to {json_path} ({os.path.getsize(json_path)} bytes)")

    # 2. Output js/trivia-bank.js for zero-token, instant offline browser access
    os.makedirs("js", exist_ok=True)
    js_path = os.path.join("js", "trivia-bank.js")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("/**\n * Pre-generated, Stored Jeopardy Question Bank (2,000 Verified Clues)\n")
        f.write(" * 10 Categories x 200 Clues each. Zero token cost. Instant local generation.\n */\n\n")
        f.write("const JEOPARDY_STORED_QUESTION_BANK = ")
        json.dump(bank, f, indent=2, ensure_ascii=False)
        f.write(";\n\n")
        f.write("if (typeof window !== 'undefined') {\n")
        f.write("    window.JEOPARDY_STORED_QUESTION_BANK = JEOPARDY_STORED_QUESTION_BANK;\n")
        f.write("}\n\n")
        f.write("if (typeof module !== 'undefined' && module.exports) {\n")
        f.write("    module.exports = { JEOPARDY_STORED_QUESTION_BANK };\n")
        f.write("}\n")
        
    print(f"Saved JavaScript question bank to {js_path} ({os.path.getsize(js_path)} bytes)")
    print("\nCompilation completed successfully!")

if __name__ == "__main__":
    compile_all()
