# Then → Now: UX Field Notes

예전에 수강한 UX 수업을 바탕으로 개인이 재구성한 학습 노트입니다.
그때 배운 내용(Then)과 AI·에이전트 시대의 관점(Now)을 나란히 놓고, 계속 고쳐 쓰는 교재입니다.

- 레슨 32개, 모듈 9개 (한국어/영어 전환)
- 레슨마다: 그때/지금 요약, 수업 장면, 실습, 복습 퀴즈, 내 노트, 진도
- 수업 장면 31개: 수업 내용을 가상의 캐릭터와 다시 쓴 대사로 재구성

## 실행

빌드 과정이 없습니다. 폴더를 웹 서버로 열면 됩니다.

```bash
python3 -m http.server 8790
# http://localhost:8790
```

노트와 진도는 브라우저 저장소(localStorage)에 저장됩니다. 브라우저를 바꾸면 따로 저장됩니다.

## 구조

| 파일 | 내용 |
|---|---|
| `index.html` | 화면, 스타일, 장면 플레이어, 노트·진도 저장 |
| `content.js` | 교재 내용 전체: 모듈, 레슨, 캐릭터, 장면, 변경 이력 |
| `fonts/` | Pretendard Variable (SIL OFL 1.1, `fonts/LICENSE.txt`) |
| `tests/e2e.py` | Playwright 테스트 23개 |

## 내용 고치기

`content.js`만 고치면 됩니다.

- 레슨: `lessons` 배열의 `then`, `now`, `practice`, `quiz`
- 장면: `scenes["레슨 id"].beats`. 대사 하나는 `{ who, t, text: { ko, en }, card }`
- 고칠 때마다 `version`을 올리고 `changelog` 맨 위에 한 줄 추가

장면의 출처는 세 가지입니다.

- `session`이 있는 장면: 수업 녹화본을 받아써서 재구성
- `notes: true`인 장면: 강의 노트를 대화로 풀어 씀 (실제 수업 발언 아님)
- AI 모듈 장면: 새로 씀

## 테스트

```bash
pip install playwright && playwright install chromium
python3 -m http.server 8790 &
python3 tests/e2e.py
```

## 지키는 것

- 수강생과 강사의 실명, 얼굴, 목소리, 개인적인 이야기는 넣지 않습니다. 캐릭터는 여러 사람을 섞은 가상의 인물입니다.
- 녹화본, 받아쓰기, 소리 파일은 저장소에 올리지 않습니다 (`.gitignore`).
- 학교나 회사 이름은 쓰지 않습니다.
