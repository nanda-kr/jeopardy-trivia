"""
Question Bank Generator for Jeopardy Trivia Studio
Generates ~200 high-quality, verified trivia questions per category
across 10 core Jeopardy categories with exact difficulty scaling ($100 to $500).
"""

import json
import os

# We will generate rich categories with 200 questions each (40 questions for each tier: $100, $200, $300, $400, $500)
# Total = 2,000 authentic trivia questions!
