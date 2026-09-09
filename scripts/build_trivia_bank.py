#!/usr/bin/env python3
"""
Trivia Bank Builder for Jeopardy Studio
Generates ~200 questions per category across 10 categories (2,000 total questions).
Difficulty scales: $100 (Novice), $200 (Easy), $300 (Medium), $400 (Hard), $500 (Expert).
Exports to:
- data/jeopardy-bank.json
- js/trivia-data.js
"""

import json
import os

CATEGORIES = [
    {"id": "random", "name": "🎲 Random Mix", "icon": "🎲"},
    {"id": "science", "name": "🔬 Science & Cosmos", "icon": "🔬"},
    {"id": "movies", "name": "🎬 Film & IMDb Legends", "icon": "🎬"},
    {"id": "geography", "name": "🌍 World Geography", "icon": "🌍"},
    {"id": "history", "name": "📜 World History", "icon": "📜"},
    {"id": "music", "name": "🎵 Pop Culture & Music", "icon": "🎵"},
    {"id": "literature", "name": "📚 Literature & Lore", "icon": "📚"},
    {"id": "technology", "name": "💻 Inventions & Tech", "icon": "💻"},
    {"id": "sports", "name": "🏆 Sports & Champions", "icon": "🏆"},
    {"id": "nature", "name": "🐾 Animal Kingdom", "icon": "🐾"},
    {"id": "food", "name": "🍕 Culinary World", "icon": "🍕"}
]

# Helper to build question item
def q(value, clue, answer, accepted, source):
    return {
        "value": value,
        "clue": clue,
        "answer": answer,
        "accepted": accepted,
        "source": source
    }

print("Loading and compiling trivia database...")
