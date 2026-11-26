# Then → Now: UX Field Notes

Personal study notes, reconstructed from a UX course I took a few years ago.
Each lesson sets what I learned then (Then) beside how it looks in the age of AI and agents (Now). It is a textbook I keep rewriting.

- 41 lessons in 9 modules, with a Korean/English toggle
- Each lesson has a Then/Now summary, a class scene, a practice task, a review quiz, my own notes and progress
- 40 class scenes: class content retold with fictional characters and rewritten lines

## Run it

There is no build step. Serve the folder with any web server.

```bash
python3 -m http.server 8790
# http://localhost:8790
```

Notes and progress are saved in the browser (localStorage), so each browser keeps its own copy.

## Structure

| File | Contents |
|---|---|
| `index.html` | UI, styles, scene player, notes and progress storage |
| `content.js` | All course content: modules, lessons, cast, scenes, changelog |
| `fonts/` | Pretendard Variable (SIL OFL 1.1, see `fonts/LICENSE.txt`) |
| `tests/e2e.py` | 23 Playwright tests |

## Editing content

Only `content.js` needs to change.

- Lessons: `then`, `now`, `practice` and `quiz` in the `lessons` array
- Scenes: `scenes["<lesson id>"].beats`. One line of dialogue is `{ who, t, text: { ko, en }, card }`
- On every change, bump `version` and add one entry at the top of `changelog`

Scenes come from three kinds of source.

- Scenes with a `session`: reconstructed from transcribed class recordings
- Scenes with `notes: true`: lecture notes turned into dialogue (not actual class speech)
- AI-module scenes: newly written

## Tests

```bash
pip install playwright && playwright install chromium
python3 -m http.server 8790 &
python3 tests/e2e.py
```
