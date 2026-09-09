import json

def create_item(value, clue, answer, accepted, source):
    return {
        "value": value,
        "clue": clue,
        "answer": answer,
        "accepted": accepted if isinstance(accepted, list) else [accepted],
        "source": source
    }

print("Script template ready")
