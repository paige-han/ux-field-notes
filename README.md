# Then → Now: UX Field Notes

Personal study notes, rebuilt from a UX course I took some time ago.
They set what was taught back then (Then) beside the view from the age of AI and agents (Now), as a textbook that keeps being revised.

- 32 lessons in 9 modules (switchable between Korean and English)
- Each lesson has: Then/Now summaries, a class scene, practice, a review quiz, my notes, and progress
- 31 class scenes: course material retold with fictional characters and rewritten dialogue

## Running it

There is no build step. Serve the folder with any web server.

```bash
python3 -m http.server 8790
# http://localhost:8790
```

Notes and progress are saved in the browser's localStorage, so each browser keeps its own copy.

## Structure

| File | Contents |
|---|---|
| `index.html` | UI, styles, scene player, saving of notes and progress |
| `content.js` | All course content: modules, lessons, characters, scenes, changelog |
| `fonts/` | Pretendard Variable (SIL OFL 1.1, `fonts/LICENSE.txt`) |
| `tests/e2e.py` | 23 Playwright tests |

## Editing content

Only `content.js` needs to change.

- Lessons: `then`, `now`, `practice`, `quiz` in the `lessons` array
- Scenes: `scenes["lesson id"].beats`. One line of dialogue is `{ who, t, text: { ko, en }, card }`
- With every edit, bump `version` and add a line at the top of `changelog`

Scenes come from three kinds of source.

- Scenes with a `session`: rebuilt from transcribed class recordings
- Scenes with `notes: true`: lecture notes rewritten as dialogue (not what was actually said in class)
- AI module scenes: newly written

## Tests

```bash
pip install playwright && playwright install chromium
python3 -m http.server 8790 &
python3 tests/e2e.py
```

## Ground rules

- No real names, faces, voices, or personal stories of students or instructors. The characters are fictional composites of several people.
- Recordings, transcripts, and audio files are never committed to the repository (`.gitignore`).
- No school or company names.
