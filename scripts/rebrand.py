"""Rebrand pass: normalize all legacy brand terms to 'Jeoparty'.

Run:  python scripts/rebrand.py
Idempotent - safe to re-run.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SKIP_DIRS = {".git", "node_modules", "__pycache__", "vendor", ".cache"}
SKIP_EXT = {".pyc", ".png", ".jpg", ".jpeg", ".gif", ".ico", ".zip", ".3mf", ".stl", ".npy"}

# order matters: all-caps first, then title, then lower
REPLACEMENTS = [
    ("JEOPARTY", "JEOPARTY"),
    ("Jeoparty", "Jeoparty"),
    ("jeoparty", "jeoparty"),
    ("JEOPARTY", "JEOPARTY"),
    ("Jeoparty", "Jeoparty"),
    ("jeoparty", "jeoparty"),
]


def walk_files():
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for name in filenames:
            if os.path.splitext(name)[1].lower() in SKIP_EXT:
                continue
            yield os.path.join(dirpath, name)


def main():
    changed = []
    for path in walk_files():
        try:
            with open(path, "r", encoding="utf-8") as fh:
                original = fh.read()
        except (UnicodeDecodeError, OSError):
            continue

        updated = original
        for old, new in REPLACEMENTS:
            updated = updated.replace(old, new)

        if updated != original:
            with open(path, "w", encoding="utf-8", newline="\n") as fh:
                fh.write(updated)
            changed.append(os.path.relpath(path, ROOT))

    for rel in sorted(changed):
        print("rewrote:", rel)
    print("\nfiles rewritten:", len(changed))

    # verify no legacy terms survive
    leftovers = []
    for path in walk_files():
        try:
            with open(path, "r", encoding="utf-8") as fh:
                body = fh.read()
        except (UnicodeDecodeError, OSError):
            continue
        if re.search(r"jeoparty|jeoparty", body, re.IGNORECASE):
            leftovers.append(os.path.relpath(path, ROOT))

    if leftovers:
        print("LEFTOVERS:", leftovers)
    else:
        print("verified: no legacy brand terms remain in file contents")


if __name__ == "__main__":
    main()
