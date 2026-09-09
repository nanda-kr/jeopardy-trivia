import json
import os

# Helper to create question
def q(val, clue, ans, accepted=None, src="Wikipedia"):
    acc = accepted if accepted else []
    if ans.lower() not in [a.lower() for a in acc]:
        acc.append(ans)
    return {
        "value": val,
        "clue": clue,
        "answer": ans,
        "accepted": acc,
        "source": src
    }

print("Loaded question generator helper")
