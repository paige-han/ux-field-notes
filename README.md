# Then → Now: UX Field Notes

UX notes.

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
| `content.js` | All content: modules, lessons, cast, scenes, changelog |
| `fonts/` | Pretendard Variable (SIL OFL 1.1, see `fonts/LICENSE.txt`) |
| `tests/e2e.py` | 23 Playwright tests |

## Editing content

Only `content.js` needs to change.

- Lessons: `then`, `now`, `practice` and `quiz` in the `lessons` array
- Scenes: `scenes["<lesson id>"].beats`. One line of dialogue is `{ who, t, text: { ko, en }, card }`
- On every change, bump `version` and add one entry at the top of `changelog`

## Tests

```bash
pip install playwright && playwright install chromium
python3 -m http.server 8790 &
python3 tests/e2e.py
```
