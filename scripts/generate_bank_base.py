import json
import os

# Helper to format a question
def q(val, clue, ans, accepted, src):
    if isinstance(accepted, str):
        accepted = [accepted]
    return {
        "value": val,
        "clue": clue,
        "answer": ans,
        "accepted": accepted,
        "source": src
    }

# Categories setup
categories_meta = [
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

print("Loaded categories metadata")
