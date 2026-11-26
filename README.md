# Then → Now: UX Field Notes

UX notes.

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

