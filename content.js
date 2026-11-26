// Course content. Edit or add lessons here; the page renders whatever is in COURSE.
window.COURSE = {
  version: "0.19",
  modules: [
    { id: "m1", no: "01", ko: "디자인의 기초", en: "Foundations" },
    { id: "m2", no: "02", ko: "비주얼 & 반응형", en: "Visual & Responsive" },
    { id: "m3", no: "03", ko: "리서치", en: "Research" },
    { id: "m4", no: "04", ko: "종합 · 정의", en: "Synthesis & Define" },
    { id: "m5", no: "05", ko: "구조 설계", en: "Structure" },
    { id: "m6", no: "06", ko: "디자인 & 프로토타입", en: "Design & Prototype" },
    { id: "m7", no: "07", ko: "평가", en: "Evaluation" },
    { id: "m8", no: "08", ko: "AI · 에이전트 UX", en: "AI & Agentic UX", isNew: true },
    { id: "m9", no: "09", ko: "실무 & 커리어", en: "Practice & Career" }
  ],
  changelog: [
    { date: "2026-11-25", version: "0.19",
      ko: "녹화본 강의 구간을 골라 받아써서 장면 6개를 실제 수업 내용으로 교체: 디자인 윤리(인클루시브 디자인), 컬러·타이포(11pt·140%·70~80자), 리서치 방법, 디자인 시스템(+8의 배수 스페이싱), 카드소팅(사서 비유), 데이터(차트 고르기). 아이디에이션에 HMW의 유래와 우선순위 매트릭스 추가.",
      en: "Six scenes replaced with real class content from selected lecture segments: ethics (inclusive design), type (11pt, 140%, 70-80 characters), research methods, design systems (+ multiples-of-8 spacing), card sorting (the librarian), data (choosing charts). Ideation gains the origin of HMW and the prioritisation matrix." },
    { date: "2026-11-25", version: "0.18",
      ko: "'휴리스틱 평가' 장면을 5월 2일 실제 강의 내용으로 교체: 장바구니라는 말, 메일 보내기 취소, 빨간 네모와 노란 동그라미, 송금 전 확인, 에러 코드 20.",
      en: "Replaced the 'Heuristic evaluation' scene with the real 2 May lecture: the word 'cart', undo send, red square vs yellow circle, the pre-transfer check, error code 20." },
    { date: "2026-11-25", version: "0.17",
      ko: "장면 15개 추가: 포트폴리오를 뺀 모든 레슨에 장면이 생김. 이번 장면들은 녹화본이 아니라 강의 노트로 재구성했고, AI 모듈 3개는 '지금의 나'가 설명하는 새 장면.",
      en: "15 scenes added: every lesson except Portfolio now has one. These are reconstructed from lecture notes, not recordings; the three AI-module scenes are newly written with Me-now explaining." },
    { date: "2026-11-25", version: "0.16",
      ko: "'인터뷰' 장면 추가: '단순했으면 좋겠다'는 말을 되묻기, 겉은 단순하게 깊이는 눌러서. 와이어프레임 장면에 Apply 버튼 이야기, '되돌릴 수 있으면 바로 실행', '시안은 두 개만' 추가.",
      en: "Added an 'Interviews' scene: asking back on 'keep it simple', simple on top with depth on tap. The Wireframes scene gains the Apply-button story, 'if it can be undone, act now' and 'show two options'." },
    { date: "2026-11-25", version: "0.15",
      ko: "5월 9일 크레이지 8 리뷰로 '와이어프레임' 장면 추가: 의미 없는 순서는 알파벳순, 빼고 더하는 건 UX, 차트엔 기준선, 스와이프와 되돌리기.",
      en: "Added a 'Wireframes' scene from the 9 May Crazy 8's review: alphabetical when order means nothing, adding and removing is UX, reference lines on charts, swipe and undo." },
    { date: "2026-11-25", version: "0.14",
      ko: "캐릭터 변경: 그때의 나는 회색 솜털 아기 올빼미, 지금의 나는 다 자란 흰올빼미. 강사 A는 코끼리로.",
      en: "Characters: Me-then is now a downy grey owlet and Me-now a grown snowy owl. Instructor A becomes an elephant." },
    { date: "2026-11-25", version: "0.13",
      ko: "강사를 두 명으로 나눔: 1·4섹션은 강사 A(부엉이), 2·3섹션은 강사 B(곰). 5월 9일 장면은 강사 B로 바꿈.",
      en: "Split the instructor into two: Instructor A (owl) for sections 1 and 4, Instructor B (bear) for sections 2 and 3. The 9 May scenes now use Instructor B." },
    { date: "2026-11-25", version: "0.12",
      ko: "5월 9일 수업 과제 리뷰로 '퍼소나' 장면 추가: 에듀케이션 시커와 커리어 빌더, 근거가 맞는 퍼소나.",
      en: "Added a 'Personas' scene from the 9 May project review: education seeker vs career builder, a persona whose settings have reasons." },
    { date: "2026-11-25", version: "0.11",
      ko: "직접 받아쓴 첫 수업 2부 앞부분으로 핸드오프 장면을 다듬고, '불확실한 출력' 레슨에 '기술이 먼저, 디자인은 뒤따라간다' 장면 추가.",
      en: "Refined the hand-off scene from my own transcript of part 2, and added a 'technology first, design follows' scene to the uncertain-output lesson." },
    { date: "2026-11-25", version: "0.10",
      ko: "5월 9일 수업 받아쓰기로 장면 4개 추가: 사용성 테스트, 어피니티(공감 지도·2×2), 유저 플로우(온보딩), 정보 구조('더보기' 탭).",
      en: "Four scenes from the 9 May class: usability testing, affinity (empathy map, 2×2), user flow (onboarding), information architecture (the More tab)." },
    { date: "2026-11-25", version: "0.9",
      ko: "첫 수업 받아쓰기로 장면 3개 추가: HTML·CSS 코딩, 마이크로인터랙션·핸드오프(300% 디테일), 아이디에이션(스마트웨어). 반응형 장면에 해상도와 스메그 사이트 비교 추가.",
      en: "Three more scenes from the first class: HTML & CSS, hand-off (300% detail), ideation (smart wear). Responsive scene gains resolution and a SMEG site comparison." },
    { date: "2026-11-25", version: "0.8",
      ko: "첫 수업 1부 전체를 받아써서 '좋은 디자인의 조건' 장면을 보강(반 고흐 vs 허니버터칩, LG 아이패드)하고 '반응형 레이아웃' 장면 추가. 접근성 점검 반영.",
      en: "Transcribed the rest of the first class: expanded the 'What makes design good' scene (Van Gogh vs Honey Butter Chip, LG's 2002 iPad) and added a 'Responsive layout' scene. Accessibility fixes." },
    { date: "2026-11-25", version: "0.7",
      ko: "수강생 캐릭터 리아(사슴, 건축 전공) 추가. 수업 장면마다 반 전체가 함께 보이도록 바꿈.",
      en: "Added a classmate, Ria (a deer, architecture grad). Every class scene now shows the whole class." },
    { date: "2026-11-25", version: "0.6",
      ko: "첫 수업 2부 받아쓰기로 수업 장면 3개 추가: UX 피라미드(아이리버 vs 아이팟), 여정지도(통합 서비스), 데스크 리서치(300개 보고 20개 고르기). 등장인물 목소리와 새 재생 조작 추가.",
      en: "Three new class scenes from the first class, part 2: UX pyramid (iRiver vs iPod), journey maps (joined-up services), desk research (see 300, keep 20). Added character voices and new playback controls." },
    { date: "2026-11-25", version: "0.5",
      ko: "크림색 종이 배경을 차가운 회색으로, 같은 모양의 카드 격자를 목록으로 바꿈. 숫자 카드는 한 문장 요약으로. 기능 테스트 23개 통과.",
      en: "Cool grey paper instead of cream; the identical card grid became a list; stat cards became one summary sentence. 23 functional tests pass." },
    { date: "2026-11-25", version: "0.4",
      ko: "AI가 만든 티가 나는 디자인 요소를 걷어냄: 제목 위 작은 라벨, 색을 다르게 칠한 단어, 장식용 화살표와 점, 유리 효과, 옆줄 강조. 대비와 버튼 상태도 손봄.",
      en: "Stripped the tells of generated design: labels above headings, accent-coloured words, decorative arrows and dots, glass panels, side stripes. Fixed contrast and control states." },
    { date: "2026-11-25", version: "0.3",
      ko: "첫 수업 받아쓰기(220307 1부)를 바탕으로 '좋은 디자인의 조건' 수업 장면을 실제 내용으로 교체.",
      en: "Replaced the 'What makes design good' class scene with real content from the first class transcript (220307, part 1)." },
    { date: "2026-11-25", version: "0.2",
      ko: "수업 장면 플레이어 추가. 가상 캐릭터(강사·민·서아·준)로 재구성한 1분 하이라이트. 첫 장면은 '좋은 디자인의 조건' 가안.",
      en: "Added the class-scene player: one-minute highlights retold with fictional characters. First scene (draft) on 'What makes design good'." },
    { date: "2026-11-24", version: "0.1",
      ko: "예전 학습 자료를 바탕으로 32개 레슨 초판 작성. 08 AI · 에이전트 UX 모듈 신설.",
      en: "First edition: 32 lessons drawn from my earlier study materials. New module 08, AI & Agentic UX." }
  ],
  lessons: [
    // ───────── 01 Foundations
    { id: "good-design", m: "m1", status: "holds",
      title: { ko: "좋은 디자인의 조건", en: "What makes design good" },
      src: { ko: "수업, Objectified 감상문", en: "Class, Objectified reflection" },
      then: {
        ko: ["디자인 컨설팅은 사람과 그들의 니즈를 이해하는 데서 시작한다.", "디자인의 목표: 사람들이 의식하지도 못한 채 일상이 나아지게 하는 것.", "좋은 디자인(디터 람스): 혁신적, 유용함, 심미적, 이해하기 쉬움, 정직함, 눈에 띄지 않음, 오래감, 디테일까지 일관됨, 친환경, 최소한의 디자인.", "내가 적은 목표: 맥락 속 사람들과 공감적 관계를 만드는 것."],
        en: ["Design consulting starts with understanding people and their needs.", "The goal: improve daily life without people even noticing.", "Good design (Dieter Rams): innovative, useful, aesthetic, understandable, honest, unobtrusive, long-lasting, thorough, environmentally friendly, as little design as possible.", "My stated goal: build an empathic connection with people in their context."]
      },
      now: {
        ko: ["'눈치채지 못하게 돕는다'는 AI가 대신 행동할 때 위험해진다. 무엇이 사용자 대신 실행됐는지 보여주고 되돌릴 수 있어야 한다.", "'정직함'이 중심으로 이동한다. AI의 답은 실제보다 확신 있게 들리면 안 된다.", "'최소한의 디자인'은 통제권을 없애는 것이 아니다. 화면이 줄어도 사용자의 선택지는 남아야 한다."],
        en: ["'Help without them noticing' becomes risky when AI acts for the user. Show what was done on their behalf and let them undo it.", "'Honest' moves to the centre. An AI answer must never sound more certain than it is.", "'As little design as possible' never means removing control. Fewer screens, same freedom to choose."]
      },
      practice: { ko: "최근 쓴 AI 기능 하나를 람스의 10원칙으로 채점해 보세요. 가장 낮은 점수의 원칙은 무엇이고, 왜인가요?", en: "Score one AI feature you used recently against Rams' 10 principles. Which scores lowest, and why?" },
      quiz: { q: { ko: "AI가 사용자 대신 행동하는 제품에서 '눈에 띄지 않는 디자인'을 적용할 때 꼭 지켜야 할 것은?", en: "When an AI acts for the user, what must 'unobtrusive' design still guarantee?" },
        opts: [{ ko: "모든 단계를 숨겨 경험을 매끄럽게 한다", en: "Hide every step for a seamless feel" }, { ko: "무엇이 실행됐는지 보이고 되돌릴 수 있게 한다", en: "Make what was done visible and reversible" }, { ko: "AI가 했다는 사실을 표시하지 않는다", en: "Don't disclose that AI did it" }],
        a: 1, why: { ko: "보이지 않는 도움은 사용자가 결과를 확인·수정할 수 있을 때만 안전하다.", en: "Invisible help is safe only when people can check and fix the result." } } },

    { id: "ux-laws", m: "m1", status: "evolved",
      title: { ko: "UX 법칙", en: "UX laws" },
      src: { ko: "포트폴리오 수업 노트", en: "Portfolio class notes" },
      then: {
        ko: ["피츠의 법칙, 파레토(20:80), 제이콥의 법칙, 게슈탈트 근접성, 도허티 임계, 락인, 갈라파고스 현상.", "노트에는 '피츠의 법칙 - 3 clicks rule'로 함께 적혀 있었다."],
        en: ["Fitts's law, Pareto (80/20), Jakob's law, Gestalt proximity, Doherty threshold, lock-in, the Galapagos effect.", "My notes paired 'Fitts's law' with the '3-click rule'."]
      },
      now: {
        ko: ["바로잡기: 피츠의 법칙은 목표까지의 거리와 크기에 관한 법칙이고, '3클릭 규칙'은 근거가 약한 통념이다. 둘은 다른 개념이다.", "제이콥의 법칙: 사용자가 익숙한 패턴에 이제 채팅창, 명령 바(⌘K)도 포함된다.", "도허티 임계(약 400ms)는 모델 응답 지연과 충돌한다. 스트리밍, 진행 표시, 부분 결과로 기다림을 설계해야 한다."],
        en: ["Correction: Fitts's law is about target distance and size; the '3-click rule' is a weakly supported myth. They are different ideas.", "Jakob's law: familiar patterns now include chat boxes and command bars (⌘K).", "The Doherty threshold (about 400 ms) collides with model latency. Design the wait: streaming, progress, partial results."]
      },
      practice: { ko: "응답이 5초 이상 걸리는 AI 기능 하나를 골라, 0초·1초·5초 시점에 화면이 무엇을 보여줘야 하는지 스케치하세요.", en: "Pick an AI feature that takes 5+ seconds. Sketch what the screen shows at 0 s, 1 s and 5 s." },
      quiz: { q: { ko: "다음 중 피츠의 법칙이 실제로 말하는 것은?", en: "What does Fitts's law actually describe?" },
        opts: [{ ko: "모든 정보는 3번 클릭 안에 있어야 한다", en: "Everything must be within 3 clicks" }, { ko: "목표가 크고 가까울수록 빠르게 도달한다", en: "Larger, closer targets are faster to reach" }, { ko: "사용자는 다른 사이트에서 더 많은 시간을 보낸다", en: "Users spend most time on other sites" }],
        a: 1, why: { ko: "피츠의 법칙은 거리·크기와 이동 시간의 관계다. 3번은 제이콥의 법칙.", en: "Fitts relates distance and size to movement time. Option 3 is Jakob's law." } } },

    { id: "ux-pyramid", m: "m1", status: "holds",
      title: { ko: "UX 피라미드 · 프로덕트 vs UX 디자인", en: "UX pyramid · product vs UX design" },
      src: { ko: "수업", en: "Class" },
      then: {
        ko: ["경험은 기능 → 신뢰성 → 사용성 → 즐거움 순으로 쌓인다.", "프로덕트 디자인은 비즈니스 목표까지, UX 디자인은 사용자 경험의 질에 초점."],
        en: ["Experience stacks: functional → reliable → usable → pleasurable.", "Product design owns business outcomes too; UX design focuses on the quality of the experience."]
      },
      now: {
        ko: ["AI 기능에서 가장 어려운 층은 '신뢰성'이다. 80%만 맞는 매력적인 어시스턴트는 피라미드의 바닥에서 실패한 것이다.", "디자이너와 엔지니어의 경계가 흐려져, 프로덕트 디자이너가 프롬프트·평가 기준까지 다루는 일이 늘었다."],
        en: ["For AI features the hard layer is 'reliable'. A charming assistant that is right 80% of the time fails at the base.", "The designer–engineer line has blurred: product designers now shape prompts and quality criteria too."]
      },
      practice: { ko: "지금 맡은 기능을 피라미드 4층에 놓고, 어느 층이 가장 약한지 한 문장으로 쓰세요.", en: "Place a feature you own on the 4 layers. Name the weakest layer in one sentence." },
      quiz: { q: { ko: "UX 피라미드의 가장 아래층은?", en: "What is the base of the UX pyramid?" },
        opts: [{ ko: "즐거움", en: "Pleasurable" }, { ko: "사용성", en: "Usable" }, { ko: "기능성", en: "Functional" }],
        a: 2, why: { ko: "먼저 작동해야 그 위에 신뢰, 사용성, 즐거움이 쌓인다.", en: "It must work before reliability, usability and delight can follow." } } },

    { id: "ethics", m: "m1", status: "new",
      title: { ko: "디자인 윤리 · 다크 넛지", en: "Design ethics · dark nudges" },
      src: { ko: "포트폴리오 수업 아티클 주제", en: "Portfolio class article topics" },
      then: {
        ko: ["'Dark Nudge & Design Ethics'는 아티클 주제 후보 중 하나였고, 정규 모듈은 아니었다.", "유니버설·인클루시브 디자인, 접근성, 소셜 임팩트도 같은 목록에 있었다."],
        en: ["'Dark Nudge & Design Ethics' was one suggested article topic, not a core module.", "Universal/inclusive design, accessibility and social impact were on the same list."]
      },
      now: {
        ko: ["이제는 핵심 과목이다. 아첨하는 AI, 사람인 척하는 말투, 참여를 끌어올리는 루프는 대규모로 사람을 조종할 수 있다.", "체크 질문: 이 기능은 사용자가 원하는 것을 돕는가, 우리가 원하는 행동을 유도하는가?", "접근성은 선택이 아니다. 그때 풀었던 시각장애인 내비 챌린지가 좋은 출발점이다."],
        en: ["Now a core subject. Flattering AI, fake-human tone and engagement loops can manipulate people at scale.", "Check question: does this help users do what they want, or steer them to what we want?", "Accessibility is not optional. My earlier navigation challenge for a blind user is a good starting point."]
      },
      practice: { ko: "자주 쓰는 앱에서 다크 패턴 하나를 찾아 캡처하고, 같은 목표를 정직하게 달성하는 대안을 그려 보세요.", en: "Capture one dark pattern in an app you use. Sketch an honest alternative that meets the same goal." },
      quiz: { q: { ko: "AI 어시스턴트의 윤리적 위험으로 가장 거리가 먼 것은?", en: "Which is least an ethical risk for an AI assistant?" },
        opts: [{ ko: "사용자 의견에 무조건 동의하기", en: "Always agreeing with the user" }, { ko: "불확실할 때 그렇다고 말하기", en: "Saying so when it is unsure" }, { ko: "사람인 것처럼 행동하기", en: "Acting as if it were human" }],
        a: 1, why: { ko: "불확실성을 밝히는 것은 정직한 설계다.", en: "Admitting uncertainty is honest design." } } },

    // ───────── 02 Visual & Responsive
    { id: "visual-basics", m: "m2", status: "holds",
      title: { ko: "컬러 · 타이포 · 레이아웃", en: "Colour, type, layout" },
      src: { ko: "수업, Font 폴더, Graphic skill", en: "Class, Font folder, Graphic skill" },
      then: {
        ko: ["UI의 3요소로 컬러, 폰트, 레이아웃을 Photoshop/Figma로 익혔다.", "폰트를 대량으로 모으고 관리 툴(Suitcase Fusion)을 쓰라고 권했다.", "벤치마킹 소스: Awwwards, Behance, Dribbble, Pinterest."],
        en: ["Learned colour, fonts and layout as the three basics of UI, in Photoshop/Figma.", "Encouraged collecting many fonts and using a font manager (Suitcase Fusion).", "Reference sources: Awwwards, Behance, Dribbble, Pinterest."]
      },
      now: {
        ko: ["원칙은 같다. 다만 값은 개별 파일이 아니라 디자인 토큰(색·타이포·간격 변수)으로 관리한다.", "폰트 1,700개 수집보다, 2~3개 서체를 깊게 쓰는 시스템이 중요하다.", "AI 이미지·UI 생성이 흔해지면서 '취향'과 '선택하는 눈'이 차별점이 됐다."],
        en: ["Same principles, but values now live as design tokens (colour, type, spacing variables), not in files.", "A system that uses 2–3 typefaces deeply beats a library of 1,700 fonts.", "With AI-generated images and UI everywhere, taste and the eye for choosing become the differentiator."]
      },
      practice: { ko: "지금 쓰는 프로젝트의 컬러·타이포를 토큰 이름으로 정리해 보세요 (예: color.text.primary).", en: "Write your current project's colour and type as named tokens (e.g. color.text.primary)." },
      quiz: { q: { ko: "디자인 토큰의 주된 장점은?", en: "The main benefit of design tokens?" },
        opts: [{ ko: "한 곳을 바꾸면 디자인과 코드 전체에 반영된다", en: "Change one value, update design and code everywhere" }, { ko: "폰트를 더 많이 쓸 수 있다", en: "You can use more fonts" }, { ko: "Photoshop 없이 작업할 수 있다", en: "You can skip Photoshop" }],
        a: 0, why: { ko: "토큰은 디자인 결정을 디자인 툴과 코드가 공유하는 하나의 원천으로 만든다.", en: "Tokens make one source of truth shared by design tools and code." } } },

    { id: "responsive", m: "m2", status: "evolved",
      title: { ko: "반응형 레이아웃", en: "Responsive layout" },
      src: { ko: "1차 과제: 반응형 웹사이트 (데스크탑 → 태블릿·모바일)", en: "Assignment 1: responsive website (desktop → tablet & mobile)" },
      then: {
        ko: ["데스크탑을 먼저 만들고 태블릿·모바일로 확장했다.", "브레이크포인트별로 화면을 따로 그렸다."],
        en: ["Designed desktop first, then adapted to tablet and mobile.", "Drew separate screens per breakpoint."]
      },
      now: {
        ko: ["모바일 퍼스트, 그리고 컨테이너 쿼리로 '화면 크기'가 아니라 '컴포넌트가 놓인 공간'에 반응한다.", "Figma의 오토 레이아웃·변수로 한 프레임이 여러 크기에 대응한다.", "화면 밖 맥락도 '반응'의 대상: 음성, 사이드 패널 속 AI, 웨어러블."],
        en: ["Mobile first, and container queries: components respond to their own space, not the whole screen.", "Figma auto layout and variables let one frame cover many sizes.", "'Responsive' now also covers non-screen contexts: voice, AI in a side panel, wearables."]
      },
      practice: { ko: "그때의 반응형 과제 한 섹션을 컨테이너 쿼리 기준으로 다시 설계해 보세요.", en: "Redesign one section of the original responsive assignment around container queries." },
      quiz: { q: { ko: "컨테이너 쿼리는 무엇에 반응하나?", en: "Container queries respond to…" },
        opts: [{ ko: "뷰포트 너비", en: "Viewport width" }, { ko: "부모 컨테이너의 크기", en: "The parent container's size" }, { ko: "디바이스 종류", en: "Device type" }],
        a: 1, why: { ko: "같은 카드가 사이드바와 메인에서 각각 맞게 보이도록 해준다.", en: "The same card can fit a sidebar and a main column." } } },

    { id: "aida", m: "m2", status: "holds",
      title: { ko: "AIDA 흐름 · 랜딩 페이지", en: "AIDA flow · landing pages" },
      src: { ko: "수업", en: "Class" },
      then: {
        ko: ["Attention → Interest → Desire → Action 순으로 페이지를 구성한다.", "랜딩 페이지 레퍼런스(후기·testimonial 섹션)를 모았다."],
        en: ["Structure a page as Attention → Interest → Desire → Action.", "Collected landing-page references, including testimonial sections."]
      },
      now: {
        ko: ["구조는 여전히 유효하다. 다만 많은 사용자가 검색 결과나 AI 요약을 거쳐 '관심' 단계에서 도착한다.", "AI가 페이지를 읽고 요약하므로, 구조화된 명확한 문장이 사람과 기계 모두에게 중요해졌다.", "가짜 후기·조작된 사회적 증거는 윤리 문제이자 신뢰 붕괴의 지름길이다."],
        en: ["Still valid, but many visitors now arrive mid-funnel, via search results or an AI summary.", "AI reads and summarises pages, so clear, structured sentences matter for people and machines alike.", "Fake reviews and invented social proof are an ethics problem and a fast way to lose trust."]
      },
      practice: { ko: "관심 있는 후원(기부) 페이지 하나를 AIDA 4단계로 나눠 각 단계의 한 줄 메시지를 써보세요.", en: "Split a donation page you know into the 4 AIDA stages and write one line per stage." },
      quiz: { q: { ko: "AIDA의 마지막 단계는?", en: "The last stage of AIDA?" },
        opts: [{ ko: "Attention", en: "Attention" }, { ko: "Desire", en: "Desire" }, { ko: "Action", en: "Action" }],
        a: 2, why: { ko: "행동(가입, 구매, 후원)으로 끝나야 한다.", en: "It ends in an action: sign-up, purchase, donation." } } },

    { id: "web-coding", m: "m2", status: "evolved",
      title: { ko: "HTML5 · CSS3 코딩", en: "HTML5 & CSS3" },
      src: { ko: "수업, 코딩 연습 폴더", en: "Class, coding practice folders" },
      then: {
        ko: ["VS Code로 reset.css, style.css, index.html을 직접 작성했다.", "디자이너도 구현을 이해해야 한다는 관점."],
        en: ["Wrote reset.css, style.css and index.html by hand in VS Code.", "The idea: designers should understand how things get built."]
      },
      now: {
        ko: ["AI 코딩 도구로 디자이너가 직접 동작하는 프로토타입과 컴포넌트를 만든다 (Figma → AI coding tool → Storybook).", "그래서 기초 HTML/CSS 지식이 더 중요해졌다. 생성된 코드를 읽고 고칠 수 있어야 한다.", "시맨틱 마크업은 접근성과 AI 에이전트의 화면 이해에 모두 영향을 준다."],
        en: ["With AI coding tools, designers build working prototypes and components themselves (Figma → AI coding tool → Storybook).", "That makes HTML/CSS basics more important: you must read and fix generated code.", "Semantic markup affects both accessibility and how AI agents read a screen."]
      },
      practice: { ko: "그때의 코딩 연습 파일을 AI 도구로 리팩터링하고, 무엇이 바뀌었는지 직접 설명해 보세요.", en: "Refactor your old coding practice with an AI tool, then explain every change in your own words." },
      quiz: { q: { ko: "AI가 코드를 써주는 시대에 디자이너의 HTML/CSS 지식이 중요한 이유는?", en: "Why do HTML/CSS basics matter when AI writes code?" },
        opts: [{ ko: "생성된 코드를 검토하고 고칠 수 있어서", en: "To review and fix what it generates" }, { ko: "AI보다 빨리 써야 해서", en: "To type faster than AI" }, { ko: "중요하지 않다", en: "They don't" }],
        a: 0, why: { ko: "판단하고 수정할 수 있어야 결과물을 책임질 수 있다.", en: "You can only own the result if you can judge and correct it." } } },

    // ───────── 03 Research
    { id: "desk-research", m: "m3", status: "evolved",
      title: { ko: "데스크 리서치 (매크로 · 마이크로)", en: "Desk research (macro & micro)" },
      src: { ko: "UX 강의 노트: 메크로 데스크 리서치, 데스크 리서치", en: "UX lecture notes: macro desk research, desk research" },
      then: {
        ko: ["매크로 4단계: 서비스 정의·변천사 → 유저 Context에서 키워드 발견 → 키워드별 서비스 R&R 정의·가설 → 러프 스케치.", "마이크로(벤치마킹) 관점: 서비스 역할, Task, 경쟁사 vs 자사, 히스토리, 레이블링 보편성, UI.", "핵심 질문: 벤치마킹이 UX 리서치를 대체할 수 있는가? → 아니다."],
        en: ["Macro, 4 steps: define the service and its history → find keywords in user context → define roles per keyword and form hypotheses → rough sketch.", "Micro (benchmarking) lenses: service role, task, competitor vs own, history, label conventions, UI.", "Key question: can benchmarking replace UX research? No."]
      },
      now: {
        ko: ["AI가 일주일 걸리던 조사를 한 시간 안에 초안으로 만든다.", "새 위험은 출처 없는 자신감 있는 요약. 규칙: AI는 모으고, 내가 쓸 주장은 출처를 직접 확인한다.", "생성된 UI가 서로 닮아가므로, 경쟁사 '외형' 대신 Task와 레이블을 벤치마킹한다."],
        en: ["AI drafts a week of desk research in an hour.", "The new risk is a confident summary with no source. Rule: AI gathers; you verify every claim you build on.", "Generated UIs converge, so benchmark tasks and labels, not competitors' looks."]
      },
      practice: { ko: "AI로 한 서비스의 매크로 리서치 초안을 만든 뒤, 주장 5개의 출처를 직접 확인하고 틀린 것을 기록하세요.", en: "Draft macro research on a service with AI. Verify 5 claims yourself and log any that were wrong." },
      quiz: { q: { ko: "AI로 데스크 리서치를 할 때 가장 중요한 습관은?", en: "The key habit when using AI for desk research?" },
        opts: [{ ko: "요약을 그대로 보고서에 넣는다", en: "Paste the summary into the report" }, { ko: "근거로 쓸 주장은 원출처를 확인한다", en: "Check the source of every claim you rely on" }, { ko: "벤치마킹으로 인터뷰를 대체한다", en: "Replace interviews with benchmarking" }],
        a: 1, why: { ko: "AI 요약은 출발점이지 근거가 아니다.", en: "An AI summary is a starting point, not evidence." } } },

    { id: "wom-voc", m: "m3", status: "evolved",
      title: { ko: "WOM · VOC 분석", en: "WOM / VOC analysis" },
      src: { ko: "UX 강의 노트: WOM 분석, 스토리라인", en: "UX lecture notes: WOM analysis, storyline" },
      then: {
        ko: ["Task 기반 스토리라인 정의 → 검색어로 VOC 수집 → 엑셀 기록 → 스토리라인에 매핑 → 긍정/부정 분류 → 인사이트 → 기능 우선순위.", "스토리라인은 사용자 유형 정의 → 기능 나열 → 포스트잇 → 어피니티 헤더 → 그룹핑으로 만든다."],
        en: ["Define a task storyline → collect VOC by keyword → log in Excel → map to the storyline → split positive/negative → insights → feature priority.", "Build the storyline: user types → list features → sticky notes → affinity headers → grouping."]
      },
      now: {
        ko: ["모델이 리뷰 수천 개를 Task·감성별로 몇 분 만에 분류한다.", "디자이너의 일은 분류 체계(스토리라인)를 설계하고, 라벨 샘플을 직접 검수하는 것으로 이동한다.", "데이터 분석 경험이 있다면 여기가 강점을 보여줄 지점: 분류 정확도를 숫자로 확인한다."],
        en: ["A model classifies thousands of reviews by task and sentiment in minutes.", "The designer's job moves to designing the taxonomy (the storyline) and auditing a sample of labels by hand.", "A data-analysis background shines here: measure how accurate the labels are."]
      },
      practice: { ko: "앱 리뷰 50개를 AI로 분류하고, 20개를 직접 다시 라벨링해 일치율을 계산하세요.", en: "Classify 50 app reviews with AI, relabel 20 by hand, and compute the agreement rate." },
      quiz: { q: { ko: "AI 분류 시대에 WOM 분석에서 디자이너가 꼭 직접 해야 하는 일은?", en: "In AI-assisted WOM analysis, what must the designer still do?" },
        opts: [{ ko: "모든 리뷰를 손으로 엑셀에 옮기기", en: "Copy every review into Excel by hand" }, { ko: "분류 체계 설계와 샘플 검수", en: "Design the taxonomy and audit a sample" }, { ko: "긍정 리뷰만 분석하기", en: "Analyse only positive reviews" }],
        a: 1, why: { ko: "기준과 검증은 사람의 몫이다.", en: "The criteria and the check stay human." } } },

    { id: "stakeholder-ci", m: "m3", status: "holds",
      title: { ko: "이해관계자 인터뷰 · 컨텍스추얼 인쿼리", en: "Stakeholder interviews · contextual inquiry" },
      src: { ko: "UX 강의 노트: 브레인 덤프 / 이해관계자 인터뷰 / 컨텍스추얼 인쿼리", en: "UX lecture notes: brain dump / stakeholder interviews / contextual inquiry" },
      then: {
        ko: ["인터뷰는 기능이 아니라 Task 중심, 운영자가 아니라 사용자 관점, RFP 요구사항이 아니라 가설 검증을 위해.", "브레인 덤프: Task 정의 → 흐름별 궁금증 포스트잇 → 여정지도에 배치 → 인터뷰 스크립트.", "컨텍스추얼 인쿼리 4요소: Context, 파트너십, 해석, 포커스. 함께 앉아 일하며 관찰."],
        en: ["Interview around tasks not features, from the user's view not the operator's, to test hypotheses not collect RFP requirements.", "Brain dump: define tasks → questions per step on sticky notes → place on a journey map → interview script.", "Contextual inquiry: context, partnership, interpretation, focus. Sit with people as they work."]
      },
      now: {
        ko: ["컨텍스추얼 인쿼리는 AI가 대신할 수 없는 방법이다.", "에이전트를 설계하려면 실제 업무에서 일이 어디서 넘겨지고, 확인되고, 고쳐지는지 봐야 한다.", "AI 기능이라면 이해관계자에게 추가로 묻는다: 허용 가능한 오류율은? 틀렸을 때 책임은 누구에게? 절대 자동화하면 안 되는 것은?"],
        en: ["Contextual inquiry is the method AI cannot do for you.", "To design an agent, see where real work is handed off, checked and fixed.", "For AI features, also ask stakeholders: what error rate is acceptable? Who is accountable when it's wrong? What must never be automated?"]
      },
      practice: { ko: "동료 한 명의 업무를 30분 관찰하고, '사람이 판단한 순간' 3개를 기록하세요. 그 지점이 에이전트의 확인 단계 후보입니다.", en: "Observe a colleague for 30 minutes. Note 3 moments where a human made a judgment: candidate checkpoints for an agent." },
      quiz: { q: { ko: "좋은 이해관계자 인터뷰의 초점은?", en: "A good stakeholder interview focuses on…" },
        opts: [{ ko: "RFP에 적힌 기능 목록", en: "The RFP's feature list" }, { ko: "사용자 Task와 검증할 가설", en: "User tasks and hypotheses to test" }, { ko: "운영 편의", en: "Operational convenience" }],
        a: 1, why: { ko: "기능 요구가 아니라 사용자의 과업과 가설이 출발점이다.", en: "Start from user tasks and hypotheses, not feature requests." } } },

    { id: "interviews", m: "m3", status: "evolved",
      title: { ko: "인뎁스 인터뷰 · 캐어묻기 원칙", en: "In-depth interviews · probing" },
      src: { ko: "UX 강의 노트: UX 리서치, 2차 과제 질문지", en: "UX lecture notes: UX research; assignment 2 interview guide" },
      then: {
        ko: ["UX 리서치 요소: 유저, 행동, 상황, 긍정, 부정, 니즈. 마켓 리서치(인지·반응·선호)와 구분한다.", "구조화/비구조화 질의서, 참여자 프로파일·선별 질문, 모더레이터 역할.", "캐어묻기 4원칙: 행동 → 상황 → 태도 → 니즈."],
        en: ["UX research elements: user, behaviour, situation, positives, negatives, needs, as distinct from market research (awareness, reaction, preference).", "Structured vs unstructured guides, participant profiles and screeners, the moderator's role.", "Probe in four layers: behaviour → situation → attitude → needs."]
      },
      now: {
        ko: ["녹취·전사·1차 코딩은 자동화됐다. 그만큼 인터뷰 '현장'의 질문력이 차이를 만든다.", "'합성 사용자'(AI가 흉내 내는 참여자)는 질의서 초안 점검에는 쓸 수 있지만 실제 참여자를 대체할 수 없다.", "AI 기능 인터뷰에서는 '마지막으로 AI 답을 믿지 않았던 때'를 행동 원칙으로 캐어묻는다."],
        en: ["Recording, transcription and first-pass coding are automatic now, so live probing skill makes the difference.", "'Synthetic users' (AI-simulated participants) can pressure-test a guide but cannot replace real people.", "For AI features, probe behaviour with: 'Tell me about the last time you didn't trust the AI's answer.'"]
      },
      practice: { ko: "4원칙(행동·상황·태도·니즈)으로 AI 도구 사용 경험 인터뷰 질문 8개를 써보세요.", en: "Write 8 interview questions about AI-tool use, two per layer: behaviour, situation, attitude, needs." },
      quiz: { q: { ko: "캐어묻기 4원칙의 첫 단계는?", en: "The first probing layer is…" },
        opts: [{ ko: "니즈", en: "Needs" }, { ko: "행동", en: "Behaviour" }, { ko: "태도", en: "Attitude" }],
        a: 1, why: { ko: "실제로 한 일에서 시작해야 말뿐인 의견을 피할 수 있다.", en: "Start from what people actually did, not opinions." } } },

    { id: "fgi-survey", m: "m3", status: "evolved",
      title: { ko: "FGI · 서베이", en: "Focus groups · surveys" },
      src: { ko: "UX 강의 노트: FGI, 서베이, 3차 과제 survey", en: "UX lecture notes: FGI, survey, assignment 3 survey" },
      then: {
        ko: ["FGI: 다이어리 스터디·서베이로 프로그램 설계, 그룹별 프로토타입 반응 비교.", "서베이: 목표 → 계획 → 문항. 분석은 응답자 프로파일, 문항별 평균, Top2, 교차 분석, Why 분석.", "서베이가 필요 없는 상황을 먼저 판단한다."],
        en: ["FGI: design programs with diary studies or surveys; compare groups' reactions to prototypes.", "Surveys: goal → plan → items. Analyse by profile, item means, Top-2 box, cross-tabs, 'why' follow-ups.", "First decide whether a survey is needed at all."]
      },
      now: {
        ko: ["FGI는 에이전시에선 여전하지만, 매주 배포하는 프로덕트 팀에선 줄었다.", "다이어리 스터디는 몇 주에 걸쳐 쓰는 기능(어시스턴트 등)에 다시 중요해졌다.", "온라인 패널에 AI가 쓴 응답이 섞인다. 주의 확인 문항, 주관식 검토, 신뢰할 수 있는 모집 경로가 필요하다."],
        en: ["FGIs persist in agencies but are rarer in product teams shipping weekly.", "Diary studies matter again for features used over weeks, like assistants.", "Online panels now contain AI-written answers. Add attention checks, review open text, recruit through trusted channels."]
      },
      practice: { ko: "짧은 서베이 하나를 설계하고, AI가 작성한 응답을 걸러낼 장치 2개를 넣어 보세요.", en: "Design a short survey with two safeguards against AI-written responses." },
      quiz: { q: { ko: "Top2 박스 분석은?", en: "Top-2 box analysis is…" },
        opts: [{ ko: "척도의 상위 두 응답 비율을 보는 것", en: "The share choosing the top two scale points" }, { ko: "응답자 두 명만 분석하는 것", en: "Analysing two respondents" }, { ko: "가장 긴 답변 두 개를 읽는 것", en: "Reading the two longest answers" }],
        a: 0, why: { ko: "예: 5점 척도에서 4·5점 비율.", en: "E.g. the share of 4s and 5s on a 5-point scale." } } },

    // ───────── 04 Synthesis
    { id: "affinity", m: "m4", status: "evolved",
      title: { ko: "어피니티 다이어그램 · 인사이트 도출", en: "Affinity diagrams · deriving insight" },
      src: { ko: "UX 강의 노트: Context UX 전략, 수업", en: "UX lecture notes: Context UX strategy, class" },
      then: {
        ko: ["7단계: 장소·팀 구성 → 카드 작성 → 그룹핑 → 그룹 이름 → 조정 → 최종 확인 → 러프 스케치.", "인사이트는 행동(Task), 태도(감정·상황), 목표 관점으로 정리한다.", "데이터 코딩으로 인터뷰 결과를 정리했다."],
        en: ["7 steps: place and team → write cards → group → name groups → adjust → final check → rough sketch together.", "Frame insights by behaviour (task), attitude (emotion, situation) and goal.", "Coded interview data before grouping."]
      },
      now: {
        ko: ["FigJam·Miro의 AI가 스티키를 자동 클러스터링한다. 빠르지만 '흔한 주제'로 평평해지기 쉽다.", "AI 클러스터는 첫 안으로만 쓰고, 어긋나는 카드(이상치)를 따로 모아 본다. 거기에 기회가 있다.", "팀이 함께 분류하는 과정 자체가 합의를 만든다는 점은 그대로다."],
        en: ["FigJam and Miro AI now auto-cluster stickies. Fast, but it flattens toward the obvious themes.", "Treat AI clusters as a first pass. Pull out the cards that don't fit; that's where opportunities hide.", "Sorting together still builds team alignment; that hasn't changed."]
      },
      practice: { ko: "같은 인터뷰 노트를 AI 클러스터와 손 클러스터로 각각 묶고, 차이를 3줄로 적으세요.", en: "Cluster the same notes with AI and by hand. Write 3 lines on the differences." },
      quiz: { q: { ko: "AI 자동 클러스터링의 주된 한계는?", en: "The main limit of AI auto-clustering?" },
        opts: [{ ko: "너무 느리다", en: "Too slow" }, { ko: "흔한 주제로 평평해지고 이상치를 놓친다", en: "It flattens to common themes and buries outliers" }, { ko: "스티키 색을 못 바꾼다", en: "Can't change sticky colours" }],
        a: 1, why: { ko: "새로운 인사이트는 패턴에서 벗어난 데이터에서 자주 나온다.", en: "New insight often lives in data that doesn't fit the pattern." } } },

    { id: "journey", m: "m4", status: "evolved",
      title: { ko: "여정지도", en: "Journey maps" },
      src: { ko: "UX 강의 노트: 여정지도, 디자인 챌린지(시각장애인 길찾기)", en: "UX lecture notes: journey map, design challenge (blind navigation)" },
      then: {
        ko: ["6단계: User·Goal·Scope → Phases → Actions/Tasks → Touchpoints & Channels → Emotions & pain points → Opportunities.", "스토리라인과 여정지도의 차이와 관계를 배웠다.", "챌린지: '친구와 헤어지고 대중교통으로 귀가'하는 시각장애인 시나리오."],
        en: ["6 steps: user, goal, scope → phases → actions/tasks → touchpoints & channels → emotions & pain points → opportunities.", "Learned how storylines and journey maps differ and connect.", "Challenge: a blind user heading home by public transit after meeting a friend."]
      },
      now: {
        ko: ["여정에 새 '배우'가 생겼다: AI 에이전트. 사람과 에이전트의 레인을 나눠 그린다.", "추가 레인: 누가 실행하나(사람/AI), 어디서 확인하나, 실패하면 어떻게 복구하나.", "터치포인트에 '대화'가 늘면서 감정 곡선이 '기다림'과 '신뢰'로도 움직인다."],
        en: ["The journey has a new actor: the AI agent. Draw separate lanes for person and agent.", "Add lanes for: who acts (person/AI), where it's checked, how failure is recovered.", "With more conversational touchpoints, the emotion curve also tracks waiting and trust."]
      },
      practice: { ko: "그때의 시각장애인 내비 여정을 AI 비전 에이전트가 있는 지금 버전으로 다시 그리세요. 사람이 확인하는 지점을 표시하세요.", en: "Redraw the old blind-navigation journey for today, with an AI vision agent. Mark where the person confirms." },
      quiz: { q: { ko: "에이전트가 있는 여정지도에 새로 추가하면 좋은 레인은?", en: "A useful new lane on an agent journey map?" },
        opts: [{ ko: "실행 주체와 확인 지점", en: "Who acts, and where it's checked" }, { ko: "폰트 크기", en: "Font size" }, { ko: "경쟁사 가격", en: "Competitor pricing" }],
        a: 0, why: { ko: "책임과 통제가 어디 있는지 보이게 한다.", en: "It shows where responsibility and control sit." } } },

    { id: "persona", m: "m4", status: "evolved",
      title: { ko: "퍼소나", en: "Personas" },
      src: { ko: "UX 강의 노트: 퍼소나 (앨런 쿠퍼, 목적형, 프로토)", en: "UX lecture notes: personas (Alan Cooper, goal-based, proto)" },
      then: {
        ko: ["타깃과 퍼소나는 다르다. 퍼소나는 AS-IS/To-Be Context, 이해관계자 설득, 우선순위에 쓴다.", "형식: 기본 프로필, 방문 목적, 행동, 상황 시나리오, Pain point, 니즈.", "앨런 쿠퍼 9단계: 행동 변수 도출 → 패널 → 공통분모 그룹핑 → 특징·태도 → 정의 → 기능 도출. 목적형·프로토 퍼소나도 상황별로 쓴다."],
        en: ["A target is not a persona. Personas show as-is vs to-be context, persuade stakeholders, set priority.", "Format: profile, purpose of visit, behaviour, scenario, pain points, needs.", "Cooper's 9 steps: behavioural variables → panel → group commonalities → traits and attitudes → define → derive features. Goal-based and proto-personas fit other situations."]
      },
      now: {
        ko: ["AI로 퍼소나를 '생성'하기 쉬워졌다. 그래서 근거 없는 그럴듯한 퍼소나가 늘었다. 쿠퍼식 '행동 변수' 근거가 더 중요하다.", "인구통계보다 '행동·목표·AI에 대한 신뢰 수준'이 더 유용한 구분 축이 되기도 한다.", "에이전트 시대엔 퍼소나 외에 '에이전트의 역할 정의'(무엇을 맡고, 무엇은 안 하나)도 함께 쓴다."],
        en: ["AI makes generating personas easy, so plausible but baseless personas multiply. Cooper's behavioural variables matter more.", "Behaviour, goals and trust in AI often split users better than demographics.", "Alongside personas, write the agent's role: what it handles and what it never does."]
      },
      practice: { ko: "현재 제품 사용자를 'AI 결과를 얼마나 확인하는가' 축으로 나눠 프로토 퍼소나 2개를 만들어 보세요.", en: "Make 2 proto-personas split by how much users check AI output." },
      quiz: { q: { ko: "앨런 쿠퍼 퍼소나의 핵심 근거는?", en: "Cooper personas are grounded in…" },
        opts: [{ ko: "인구통계 데이터", en: "Demographics" }, { ko: "리서치에서 나온 행동 변수", en: "Behavioural variables from research" }, { ko: "AI가 만든 가상 인물", en: "AI-generated characters" }],
        a: 1, why: { ko: "행동 패턴을 묶어 퍼소나를 정의한다.", en: "Personas are defined by clustering behaviour patterns." } } },

    { id: "ideation", m: "m4", status: "evolved",
      title: { ko: "아이디에이션 · HMW · Crazy 8's", en: "Ideation · HMW · Crazy 8's" },
      src: { ko: "수업", en: "Class" },
      then: {
        ko: ["브레인스토밍 → 발산·수렴 → HMW(How Might We) 질문.", "Crazy 8's: 8분 동안 8개 아이디어 스케치.", "스토리보드, 마인드맵, 서비스 블루프린트, 가정 매핑(assumption mapping)."],
        en: ["Brainstorm → diverge and converge → How Might We questions.", "Crazy 8's: 8 sketches in 8 minutes.", "Storyboards, mind maps, service blueprints, assumption mapping."]
      },
      now: {
        ko: ["AI가 발산을 거의 무한히 해준다. 병목은 '수렴'과 '좋은 질문'이다.", "HMW를 쓸 때 'AI가 해야 하나, 사람이 해야 하나'를 함께 묻는다.", "가정 매핑이 더 중요해졌다: '모델이 이걸 충분히 정확하게 할 수 있다'는 가장 위험한 가정이다."],
        en: ["AI diverges almost endlessly. The bottleneck is converging and asking good questions.", "With each HMW, also ask: should AI do this, or a person?", "Assumption mapping matters more: 'the model can do this accurately enough' is the riskiest assumption."]
      },
      practice: { ko: "HMW 하나로 AI에게 아이디어 30개를 받고, 기준 3개를 세워 2개로 줄여 보세요.", en: "Get 30 ideas from AI for one HMW. Set 3 criteria and narrow to 2." },
      quiz: { q: { ko: "AI 기능 아이디어에서 가장 먼저 검증해야 할 가정은 보통?", en: "For an AI feature idea, the assumption to test first is usually…" },
        opts: [{ ko: "버튼 색상", en: "Button colour" }, { ko: "모델이 충분히 정확하게 할 수 있는가", en: "Can the model do it accurately enough?" }, { ko: "로고 위치", en: "Logo placement" }],
        a: 1, why: { ko: "가장 불확실하고 비용이 큰 가정부터 확인한다.", en: "Test the most uncertain, most costly assumption first." } } },

    // ───────── 05 Structure
    { id: "ia", m: "m5", status: "evolved",
      title: { ko: "UX 컨셉 · 정보 구조(IA)", en: "UX concept · information architecture" },
      src: { ko: "UX 강의 노트: UX 컨셉, 정보 구조", en: "UX lecture notes: UX concept, information architecture" },
      then: {
        ko: ["UX 컨셉 요소: 사이트 역할, 서비스 역할, 구성 방안, AS-IS vs To-Be, UI 구성 방안.", "IA 패턴: 계층, 탭, 허브 앤 스포크, 선형(중첩).", "IA 설계 6단계: 유저 플로우 브레인스토밍 → 종이 플로우 → 최종 플로우 → 카드소팅 → 사이트맵 스케치 → 디지털 사이트맵."],
        en: ["UX concept elements: site role, service role, structure, as-is vs to-be, UI approach.", "IA patterns: hierarchy, tabs, hub and spoke, sequential (nested doll).", "6 steps: brainstorm user flows → paper flow → final flow → card sort → sitemap sketch → digital sitemap."]
      },
      now: {
        ko: ["검색과 대화형 입력이 내비게이션을 일부 대체한다. 그래도 사용자가 '어디에 있는지' 아는 구조는 필요하다.", "IA는 사람과 AI 모두를 위한 것: 콘텐츠를 명확히 구조화해야 AI가 정확히 찾아 답한다.", "레이블링 원칙(사용자의 언어)은 대화형 UI의 명령어 설계에도 그대로 적용된다."],
        en: ["Search and conversational input replace some navigation, but people still need to know where they are.", "IA now serves people and AI alike: well-structured content lets AI find and answer accurately.", "Labelling in the user's language applies directly to command and prompt design."]
      },
      practice: { ko: "익숙한 앱 하나의 사이트맵을 그리고, 채팅 입력으로 대체될 수 있는 경로와 반드시 남아야 하는 경로를 구분하세요.", en: "Map a familiar app. Mark which paths chat could replace and which must stay." },
      quiz: { q: { ko: "허브 앤 스포크 패턴의 예는?", en: "An example of hub and spoke?" },
        opts: [{ ko: "홈에서 각 기능으로 갔다가 홈으로 돌아오는 구조", en: "Go from home to a feature and back to home" }, { ko: "1단계→2단계→3단계 결제", en: "Step 1 → 2 → 3 checkout" }, { ko: "상단 탭 4개", en: "Four top tabs" }],
        a: 0, why: { ko: "중심(허브)에서 각 바퀴살로 갔다가 돌아온다.", en: "Out from a central hub to each spoke and back." } } },

    { id: "card-sorting", m: "m5", status: "holds",
      title: { ko: "카드소팅", en: "Card sorting" },
      src: { ko: "UX 강의 노트: 카드소팅, 수업", en: "UX lecture notes: card sorting, class" },
      then: {
        ko: ["열린 카드소팅(사용자가 그룹명을 정함)과 닫힌 카드소팅(정해진 그룹에 분류).", "디자이너 관점과 사용자 테스트 관점으로 각각 진행하고 보고서를 쓴다."],
        en: ["Open sort (users name groups) vs closed sort (users sort into given groups).", "Run it from the designer's view and as a user test; write a report."]
      },
      now: {
        ko: ["방법은 그대로 유효하다. 온라인 도구와 AI가 결과 매트릭스 분석을 빠르게 해준다.", "AI로 '예상 카드소팅'을 먼저 돌려볼 수 있지만, 실제 사용자 결과와 비교하는 용도로만 쓴다.", "트리 테스트로 IA를 검증하는 단계까지 이어가자."],
        en: ["Still valid. Online tools and AI speed up analysis of the results matrix.", "You can run a 'predicted sort' with AI first, but only to compare against real users.", "Follow up with a tree test to validate the IA."]
      },
      practice: { ko: "메뉴 항목 15개로 AI 예측 소팅과 실제 동료 3명의 소팅을 비교해 보세요.", en: "With 15 menu items, compare an AI-predicted sort with 3 colleagues' real sorts." },
      quiz: { q: { ko: "사용자가 직접 그룹 이름을 짓는 방식은?", en: "Users name the groups in…" },
        opts: [{ ko: "닫힌 카드소팅", en: "Closed sorting" }, { ko: "열린 카드소팅", en: "Open sorting" }, { ko: "트리 테스트", en: "Tree testing" }],
        a: 1, why: { ko: "열린 소팅은 사용자의 언어와 멘탈 모델을 드러낸다.", en: "Open sorting reveals users' language and mental models." } } },

    { id: "user-flow", m: "m5", status: "evolved",
      title: { ko: "유저 플로우 · 시나리오", en: "User flows · scenarios" },
      src: { ko: "리디자인 덱(3_12), UX 강의 노트: UX 설계", en: "Redesign deck (3_12), UX lecture notes: UX design" },
      then: {
        ko: ["플로우 종류: Task flow, User flow, Wire flow.", "도형 규칙: 타원(시작/액션), 사각형(페이지), 화살표(흐름), 마름모(결정), 평행사변형(데이터 입출력).", "주요 Task별 상황 시나리오 → 플로우 차트 → 러프 스케치."],
        en: ["Flow types: task flow, user flow, wire flow.", "Shapes: oval (start/action), rectangle (page), arrow (flow), diamond (decision), parallelogram (data in/out).", "Per key task: scenario → flow chart → rough sketch."]
      },
      now: {
        ko: ["AI가 있는 플로우는 결정점(마름모)이 많아진다: 결과가 맞나? 확신도가 낮나? 사람이 확인해야 하나?", "'행복 경로'만큼 '실패·복구 경로'를 반드시 그린다.", "에이전트 플로우엔 '사람에게 넘기기'와 '사람이 되돌리기' 화살표가 필수다."],
        en: ["Flows with AI add decision points: is the result right? Is confidence low? Must a person confirm?", "Draw failure and recovery paths as carefully as the happy path.", "Agent flows need explicit 'hand to human' and 'human undoes' arrows."]
      },
      practice: { ko: "AI 요약 기능의 플로우를 그리되, 실패 경로를 최소 2개 포함하세요.", en: "Draw a flow for an AI summary feature with at least 2 failure paths." },
      quiz: { q: { ko: "플로우 차트에서 마름모가 뜻하는 것은?", en: "In a flow chart, a diamond means…" },
        opts: [{ ko: "페이지", en: "A page" }, { ko: "결정", en: "A decision" }, { ko: "데이터 입력", en: "Data input" }],
        a: 1, why: { ko: "예/아니오로 갈라지는 지점이다.", en: "A point where the path splits, e.g. yes/no." } } },

    // ───────── 06 Design & Prototype
    { id: "wireframe-fidelity", m: "m6", status: "evolved",
      title: { ko: "와이어프레임 · 충실도 단계", en: "Wireframes · fidelity levels" },
      src: { ko: "UX 강의 노트: 와이어프레임, 프로토타이핑, 수업", en: "UX lecture notes: wireframes, prototyping, class" },
      then: {
        ko: ["Lo-fi → Mid-fi → Hi-fi. 러프 스케치 → 페이퍼 → 디지털 프로토타입.", "스케치 요소: 제목, 주석, 번호, 노트, 피드백. 와이어 플로우: High level flow, Screen flow, Navigation scheme.", "과제 테스트도 '와이어프레임 + 결정 이유 설명'을 요구했다 (게임 인벤토리 화면, 양식장 운영 대시보드)."],
        en: ["Lo-fi → mid-fi → hi-fi; rough sketch → paper → digital prototype.", "Sketch elements: title, annotations, numbers, notes, feedback. Wire flows: high-level flow, screen flow, navigation scheme.", "Take-home tests asked for wireframes plus the reasoning behind them (a game inventory screen, a fish-farm operations dashboard)."]
      },
      now: {
        ko: ["AI로 프롬프트 한 줄에 Hi-fi 화면이 나온다. 그래서 충실도 단계를 건너뛰고 싶은 유혹이 커졌다.", "Lo-fi의 가치는 '빨리 버릴 수 있음'과 '구조에 집중시킴'이다. 이 목적은 그대로다.", "AI 기능은 정적 와이어프레임으로 검증이 어렵다. 실제 모델이 연결된 동작하는 프로토타입으로 테스트한다."],
        en: ["AI turns one prompt into a hi-fi screen, so skipping fidelity steps is tempting.", "Lo-fi's value is being cheap to throw away and keeping focus on structure. That purpose stands.", "AI features can't be tested with static wireframes. Test a working prototype wired to a real model."]
      },
      practice: { ko: "양식장 대시보드 과제를 Lo-fi로 다시 그리고, AI 알림 기능을 하나 추가해 동작 프로토타입으로 만들어 보세요.", en: "Redo the fish-farm dashboard take-home in lo-fi, add one AI alert, and build it as a working prototype." },
      quiz: { q: { ko: "AI 기능 프로토타입 테스트에서 정적 화면만으로 부족한 이유는?", en: "Why are static screens not enough to test an AI feature?" },
        opts: [{ ko: "출력이 매번 달라 실제 응답으로 봐야 해서", en: "Outputs vary, so you need real responses" }, { ko: "색상이 안 보여서", en: "Colours don't show" }, { ko: "Figma가 지원하지 않아서", en: "Figma doesn't support it" }],
        a: 0, why: { ko: "가장 좋은 답 하나가 아니라 실제 답의 분포를 경험해야 한다.", en: "People must meet the real range of answers, not one ideal one." } } },

    { id: "design-system", m: "m6", status: "evolved",
      title: { ko: "스타일 가이드 → 디자인 시스템", en: "Style guide → design system" },
      src: { ko: "수업, 아티클 주제", en: "Class, article topic" },
      then: {
        ko: ["Hi-fi 전에 스타일 가이드(컬러, 타이포, 컴포넌트)를 만든다.", "'How to Design Design System'이 아티클 주제 후보였다.", "노트: 쉬운 유지보수 → 즐거운 경험 → 락인."],
        en: ["Build a style guide (colour, type, components) before hi-fi.", "'How to design a design system' was a suggested article topic.", "Note: easy maintenance → joyful experience → lock-in."]
      },
      now: {
        ko: ["디자인 시스템은 이제 사람뿐 아니라 AI가 읽는 문서다. 토큰·컴포넌트·사용 규칙이 명확해야 AI가 일관된 UI를 만든다.", "Figma 스타일 가이드 → AI 코딩 도구 → Storybook처럼, 시스템이 코드와 직접 연결된다.", "AI 고유 컴포넌트가 추가됐다: 스트리밍 텍스트, 출처 표시, 확신도 표시, 피드백 버튼."],
        en: ["A design system is now read by AI as well as people. Clear tokens, components and rules let AI generate consistent UI.", "Systems connect straight to code: Figma style guide → AI coding tool → Storybook.", "New AI-native components: streaming text, citations, confidence indicators, feedback controls."]
      },
      practice: { ko: "내 디자인 시스템에 AI 컴포넌트 3개(로딩/스트리밍, 출처, 피드백)의 사용 규칙을 써보세요.", en: "Write usage rules for 3 AI components in your system: streaming, citation, feedback." },
      quiz: { q: { ko: "디자인 시스템이 AI 시대에 더 중요해진 이유는?", en: "Why do design systems matter more with AI?" },
        opts: [{ ko: "AI가 규칙을 읽고 일관된 UI를 생성할 수 있어서", en: "AI can follow its rules to generate consistent UI" }, { ko: "디자이너가 필요 없어져서", en: "Designers are no longer needed" }, { ko: "색이 더 많아져서", en: "There are more colours" }],
        a: 0, why: { ko: "명확한 시스템이 AI 생성물의 품질 기준이 된다.", en: "A clear system becomes the quality bar for generated UI." } } },

    { id: "interaction-handoff", m: "m6", status: "evolved",
      title: { ko: "마이크로인터랙션 · 디자인 핸드오프", en: "Micro-interactions · design hand-off" },
      src: { ko: "수업, 포트폴리오: GIF 만들기", en: "Class, Portfolio: making GIFs" },
      then: {
        ko: ["Hi-fi에 마이크로인터랙션을 더해 피드백과 즐거움을 준다.", "개발자에게 넘기는 '디자인 핸드오프' 문서를 만든다.", "포트폴리오용 GIF로 인터랙션을 보여줬다."],
        en: ["Add micro-interactions to hi-fi for feedback and delight.", "Prepare a design hand-off for developers.", "Showed interactions in the portfolio as GIFs."]
      },
      now: {
        ko: ["AI 상태(생각 중, 작성 중, 도구 사용 중, 완료)를 알려주는 마이크로인터랙션이 핵심 피드백이 됐다.", "핸드오프는 '문서 전달'에서 '공유된 코드 컴포넌트'로 바뀌고 있다. 디자이너가 PR을 여는 경우도 흔하다.", "AI 기능 핸드오프에는 프롬프트, 예시 입력/출력, 실패 시 UI가 포함돼야 한다."],
        en: ["Micro-interactions that show AI state (thinking, writing, using a tool, done) are now core feedback.", "Hand-off is shifting from documents to shared code components; designers often open PRs.", "An AI feature hand-off includes the prompt, example inputs/outputs and the failure UI."]
      },
      practice: { ko: "AI 에이전트의 4가지 상태를 보여주는 마이크로인터랙션을 설계하세요.", en: "Design micro-interactions for an agent's 4 states." },
      quiz: { q: { ko: "AI 기능 핸드오프에 추가로 필요한 것은?", en: "What extra belongs in an AI feature hand-off?" },
        opts: [{ ko: "프롬프트, 입출력 예시, 실패 UI", en: "Prompt, example I/O, failure UI" }, { ko: "더 큰 로고", en: "A bigger logo" }, { ko: "필요 없음", en: "Nothing" }],
        a: 0, why: { ko: "개발자가 동작과 품질 기준을 함께 이해해야 한다.", en: "Developers need the behaviour and the quality bar, not just the look." } } },

    // ───────── 07 Evaluation
    { id: "usability-testing", m: "m7", status: "holds",
      title: { ko: "사용성 테스트", en: "Usability testing" },
      src: { ko: "UX 강의 노트: 사용성 테스트 (1/2)(2/2), 과제 테스트(리서치 계획)", en: "UX lecture notes: usability testing 1–2, take-home research plan" },
      then: {
        ko: ["형성 vs 총괄 테스트, 랩 vs 게릴라, 모더레이티드 vs 언모더레이티드 원격 테스트.", "과제 시나리오 팁: 사용자의 언어, 단서 자제, 명확성, 간결성, 현실성. 가설이 먼저다.", "씽크 얼라우드, 모더레이터 역할. 측정: 효과성, 효율성, 만족도, 오류."],
        en: ["Formative vs summative, lab vs guerrilla, moderated vs unmoderated remote.", "Task-scenario tips: user's language, no hints, clear, concise, realistic. Hypothesis first.", "Think-aloud, the moderator's role. Measure effectiveness, efficiency, satisfaction, errors."]
      },
      now: {
        ko: ["원칙은 그대로다. AI가 세션 녹화의 하이라이트와 요약을 자동으로 뽑아준다.", "AI 기능 테스트에선 '성공률'만큼 '사용자가 틀린 답을 알아챘는가'를 측정한다.", "같은 과제라도 AI 출력이 달라지므로, 참여자마다 어떤 응답을 봤는지 기록한다."],
        en: ["Principles unchanged. AI now pulls highlights and summaries from session recordings.", "For AI features, measure success and also whether people noticed a wrong answer.", "AI output varies per session, so log which response each participant saw."]
      },
      practice: { ko: "AI 기능 하나에 대해 '틀린 답을 알아채는가'를 측정하는 과제 시나리오를 써보세요.", en: "Write a task scenario that measures whether people catch a wrong AI answer." },
      quiz: { q: { ko: "좋은 과제 시나리오의 원칙이 아닌 것은?", en: "Which is NOT a good task-scenario rule?" },
        opts: [{ ko: "사용자의 언어로 쓴다", en: "Use the user's language" }, { ko: "정답 경로의 단서를 준다", en: "Hint at the correct path" }, { ko: "현실적인 배경을 준다", en: "Give a realistic context" }],
        a: 1, why: { ko: "단서는 결과를 왜곡한다.", en: "Hints bias the results." } } },

    { id: "heuristics", m: "m7", status: "evolved",
      title: { ko: "휴리스틱 평가", en: "Heuristic evaluation" },
      src: { ko: "UX 강의 노트: 휴리스틱 평가, 리디자인 덱(3_12)", en: "UX lecture notes: heuristic evaluation, redesign deck (3_12)" },
      then: {
        ko: ["닐슨의 10가지 사용성 휴리스틱: 상태 가시성, 현실 세계와의 일치, 사용자 통제와 자유, 일관성, 오류 예방, 기억보다 인식, 유연성·효율성, 심미적·미니멀 디자인, 오류 인식·진단·복구, 도움말.", "장점: 기준이 명확하고 저렴. 단점: 평가자 역량에 좌우되고 실제 데이터가 아니다."],
        en: ["Nielsen's 10 heuristics: visibility of status, match with the real world, user control and freedom, consistency, error prevention, recognition over recall, flexibility and efficiency, aesthetic and minimalist design, error recovery, help.", "Pros: clear criteria, cheap. Cons: depends on evaluators; opinions, not data."]
      },
      now: {
        ko: ["10개 모두 유효하고, AI에선 더 날카로워진다: '상태 가시성'은 AI가 무엇을 하는 중인지, '통제와 자유'는 중단·되돌리기다.", "AI용 추가 휴리스틱 후보: 능력의 한계 알리기, 근거·출처 보여주기, 불확실성 표현, 수정 가능성, 기억과 개인정보의 투명성.", "AI로 1차 휴리스틱 평가를 돌릴 수 있지만, 평가자 역량 문제는 그대로 남는다."],
        en: ["All 10 still hold and get sharper with AI: 'visibility' means showing what the AI is doing; 'control' means stop and undo.", "Candidate AI heuristics: state limits, show sources, express uncertainty, allow correction, be transparent about memory and data.", "AI can run a first-pass heuristic review, but the evaluator-quality problem remains."]
      },
      practice: { ko: "자주 쓰는 AI 도구를 10+5 휴리스틱(닐슨 10 + AI 5)으로 평가하고 심각도 1–4로 매겨 보세요.", en: "Evaluate an AI tool against 10 + 5 heuristics (Nielsen + AI) with severity 1–4." },
      quiz: { q: { ko: "AI 어시스턴트에서 '사용자 통제와 자유'의 대표 예는?", en: "In an AI assistant, 'user control and freedom' looks like…" },
        opts: [{ ko: "생성 중단과 되돌리기", en: "Stop generating and undo" }, { ko: "답변 길게 쓰기", en: "Longer answers" }, { ko: "다크 모드", en: "Dark mode" }],
        a: 0, why: { ko: "원치 않는 상태에서 쉽게 빠져나올 '비상구'다.", en: "It's the clearly marked emergency exit." } } },

    { id: "data-driven", m: "m7", status: "evolved",
      title: { ko: "데이터 드리븐 · A/B 테스트", en: "Data-driven design · A/B tests" },
      src: { ko: "UX 강의 노트: 디자인 시안 테스트, 데이터 드리븐", en: "UX lecture notes: design option tests, data-driven" },
      then: {
        ko: ["디자인 시안 테스트, 투사법 테스트로 선호를 확인한다.", "A/B 테스트: 경쟁사 UI 비교, 화면 설계 A/B, 운영 A/B."],
        en: ["Test design options and use projective techniques to read preference.", "A/B tests: competitor UI, screen design, live operations."]
      },
      now: {
        ko: ["AI 기능에선 A/B 외에 '오프라인 평가(eval)'가 먼저다: 출시 전에 대표 질문 세트로 품질을 잰다.", "클릭률만 보면 안 된다. 수정률, 재생성률, 신뢰를 잃은 이탈 같은 지표가 필요하다.", "데이터 분석 배경이 디자이너의 강점이 되는 영역이다."],
        en: ["For AI features, offline evaluation comes before A/B: measure quality on a representative question set before launch.", "Click-through is not enough. Track edit rate, regenerate rate and trust-driven drop-off.", "A data-analysis background is a real edge for designers here."]
      },
      practice: { ko: "AI 기능 하나의 성공 지표 3개와 '실패 신호' 지표 2개를 정의해 보세요.", en: "Define 3 success metrics and 2 failure-signal metrics for one AI feature." },
      quiz: { q: { ko: "AI 기능 품질의 실패 신호로 적절한 지표는?", en: "A good failure signal for an AI feature?" },
        opts: [{ ko: "높은 재생성 비율", en: "A high regenerate rate" }, { ko: "높은 페이지뷰", en: "High page views" }, { ko: "긴 세션 시간", en: "Long sessions" }],
        a: 0, why: { ko: "다시 생성한다는 건 첫 답이 맞지 않았다는 뜻일 수 있다.", en: "Regenerating often means the first answer missed." } } },

    // ───────── 08 AI & Agentic UX (new)
    { id: "uncertain-output", m: "m8", status: "new",
      title: { ko: "불확실한 출력을 설계하기", en: "Designing for uncertain output" },
      src: { ko: "신규 — 그때 과정에 없음", en: "New — not in the original course" },
      then: {
        ko: ["그때의 UI는 결정적이었다: 같은 입력엔 같은 결과.", "오류는 '예외 상황'으로 다뤘다 (휴리스틱 9: 오류 인식·복구)."],
        en: ["Interfaces then were deterministic: same input, same output.", "Errors were treated as edge cases (heuristic 9: error recovery)."]
      },
      now: {
        ko: ["AI 출력은 확률적이다. 같은 질문에도 답이 달라지고, 그럴듯하게 틀릴 수 있다.", "설계 원칙: 기대치를 먼저 설정하고, 근거를 보여주고, 수정을 쉽게 하고, 틀릴 때를 기본 경로로 설계한다.", "빈 상태(empty state)는 '무엇을 할 수 있고 무엇은 못 하는지' 알려주는 가장 좋은 자리다."],
        en: ["AI output is probabilistic: answers vary and can be confidently wrong.", "Principles: set expectations up front, show the basis, make correction easy, design 'wrong' as a main path.", "The empty state is the best place to say what it can and can't do."]
      },
      practice: { ko: "AI 기능 하나의 빈 상태, 로딩, 좋은 결과, 애매한 결과, 틀린 결과 5개 화면을 그려 보세요.", en: "Sketch 5 states for one AI feature: empty, loading, good, ambiguous, wrong." },
      quiz: { q: { ko: "확률적 출력을 설계할 때 '틀린 답'은 어떻게 다뤄야 하나?", en: "How should 'wrong answer' be treated for probabilistic output?" },
        opts: [{ ko: "드문 예외라 무시한다", en: "A rare edge case to ignore" }, { ko: "주요 경로로 설계한다", en: "A main path to design" }, { ko: "오류 코드로 보여준다", en: "Show an error code" }],
        a: 1, why: { ko: "틀림은 반드시 일어나므로 복구 경로가 기본이어야 한다.", en: "It will happen, so recovery must be first-class." } } },

    { id: "trust-control", m: "m8", status: "new",
      title: { ko: "신뢰 · 설명가능성 · 통제", en: "Trust, explainability, control" },
      src: { ko: "신규 — 휴리스틱 1·3의 확장", en: "New — extends heuristics 1 and 3" },
      then: {
        ko: ["상태 가시성(휴리스틱 1)과 사용자 통제(휴리스틱 3)가 기반 개념이었다.", "신뢰는 브랜드·비주얼의 문제로 다뤄지는 경우가 많았다."],
        en: ["Visibility of status (heuristic 1) and user control (heuristic 3) were the foundations.", "Trust was often treated as a brand or visual problem."]
      },
      now: {
        ko: ["목표는 '최대 신뢰'가 아니라 '적정 신뢰(calibrated trust)': 맞을 땐 믿고, 틀릴 땐 의심할 수 있게.", "설명가능성: 출처, 사용한 데이터, 추론 요약을 필요한 만큼만 보여준다.", "통제: 중단, 편집, 되돌리기, 기억 관리, 자동화 수준 조절."],
        en: ["The goal is calibrated trust, not maximum trust: rely when right, doubt when wrong.", "Explainability: show sources, data used and a short rationale, only as much as needed.", "Control: stop, edit, undo, manage memory, set the level of automation."]
      },
      practice: { ko: "지금 쓰는 AI 도구 하나에서 '적정 신뢰'를 돕는 요소와 해치는 요소를 각각 3개씩 찾으세요.", en: "In an AI tool you use, find 3 elements that help calibrated trust and 3 that hurt it." },
      quiz: { q: { ko: "AI UX에서 신뢰의 목표는?", en: "The goal for trust in AI UX?" },
        opts: [{ ko: "가능한 한 높은 신뢰", en: "As much trust as possible" }, { ko: "정확도에 맞춘 적정 신뢰", en: "Trust calibrated to accuracy" }, { ko: "신뢰는 상관없다", en: "Trust doesn't matter" }],
        a: 1, why: { ko: "과신은 틀린 답을 그대로 쓰게 만든다.", en: "Over-trust leads people to use wrong answers as-is." } } },

    { id: "agent-handoff", m: "m8", status: "new",
      title: { ko: "에이전트 핸드오프 · Human-in-the-loop", en: "Agent hand-offs · human-in-the-loop" },
      src: { ko: "신규 — 에이전틱 UX 실무에서", en: "New — from current work on agentic UX" },
      then: {
        ko: ["사용자가 모든 단계를 직접 실행했다. 플로우 = 사용자의 클릭 경로.", "서비스 블루프린트는 사람과 시스템의 역할을 나눴지만, 시스템이 스스로 판단하진 않았다."],
        en: ["The user performed every step. A flow was the user's click path.", "Service blueprints split roles between people and systems, but systems didn't decide."]
      },
      now: {
        ko: ["에이전트는 여러 단계를 스스로 실행한다. 디자이너는 '언제 멈추고 사람에게 묻는가'를 설계한다.", "확인 지점 기준: 되돌릴 수 없는가, 비용이 큰가, 타인에게 영향을 주는가, 확신도가 낮은가.", "진행 상황 보고, 중간 개입, 결과 검토 화면이 새로운 핵심 UI다."],
        en: ["Agents run many steps on their own. The designer decides when to stop and ask a person.", "Checkpoint criteria: irreversible, costly, affects others, low confidence.", "Progress reports, mid-task intervention and result review are the new core screens."]
      },
      practice: { ko: "업무 하나를 에이전트에 맡긴다고 가정하고, 단계별로 '자동 / 확인 후 실행 / 사람만' 3등급을 매기세요.", en: "Hand one workflow to an agent. Rate each step: automatic / confirm first / human only." },
      quiz: { q: { ko: "에이전트가 반드시 사람에게 확인받아야 하는 단계는?", en: "Which step should an agent always confirm with a person?" },
        opts: [{ ko: "검색어 입력", en: "Typing a search query" }, { ko: "되돌릴 수 없는 결제·전송", en: "An irreversible payment or send" }, { ko: "탭 열기", en: "Opening a tab" }],
        a: 1, why: { ko: "되돌릴 수 없고 영향이 큰 행동이 확인 지점이다.", en: "Irreversible, high-impact actions are checkpoints." } } },

    { id: "evals", m: "m8", status: "new",
      title: { ko: "평가(Eval)를 디자인 도구로", en: "Evals as a design tool" },
      src: { ko: "신규 — 사용성 테스트·데이터 드리븐의 확장", en: "New — extends usability testing and data-driven design" },
      then: {
        ko: ["품질은 사용성 테스트와 A/B로 확인했다.", "디자인 결과물은 화면이었다."],
        en: ["Quality was checked with usability tests and A/B tests.", "The design deliverable was screens."]
      },
      now: {
        ko: ["AI 기능의 디자인 결과물에는 '좋은 답의 기준'이 포함된다. 그 기준을 테스트 세트(eval)로 만든다.", "디자이너가 할 일: 실제 사용자 과업에서 대표 질문을 고르고, 좋은/나쁜 답의 예를 쓰고, 채점 기준을 정의한다.", "ML 이해를 보여주는 좋은 포트폴리오 소재이기도 하다."],
        en: ["For AI features, the deliverable includes what a good answer is, turned into a test set (an eval).", "Designer's part: pick representative tasks from real users, write good and bad answer examples, define the grading rubric.", "It's also strong portfolio material for showing ML understanding."]
      },
      practice: { ko: "한 AI 기능의 대표 질문 10개와 채점 기준(1–3점) 표를 만들어 보세요.", en: "Build 10 representative prompts and a 1–3 grading rubric for one AI feature." },
      quiz: { q: { ko: "Eval 설계에서 디자이너의 가장 큰 기여는?", en: "The designer's biggest contribution to an eval?" },
        opts: [{ ko: "GPU 설정", en: "GPU settings" }, { ko: "실제 과업 기반 질문과 '좋은 답'의 기준", en: "Real-task prompts and what 'good' means" }, { ko: "모델 학습 코드", en: "Training code" }],
        a: 1, why: { ko: "사용자 맥락을 아는 사람이 품질 기준을 정해야 한다.", en: "Whoever knows the user's context should define quality." } } },

    // ───────── 09 Practice & Career
    { id: "design-exercise", m: "m9", status: "holds",
      title: { ko: "디자인 과제 프레임워크", en: "Design exercise framework" },
      src: { ko: "디자인 과제 가이드북, 과제 테스트, 디자인 챌린지", en: "Design-exercise guidebook, take-home tests, design challenges" },
      then: {
        ko: ["7단계: 목표(Why) → 대상(Who) → 맥락·니즈(When/Where) → 아이디어(What) → 우선순위 → 해결 → 성공 측정(How).", "내 챌린지 정의: Who 시각장애인, When 야외·안내견 없음, What 목적지 찾기, Where 대중교통, How 앱.", "과제 테스트는 결과만큼 과정과 시간 추정을 본다."],
        en: ["7 steps: goal (why) → audience (who) → context and needs (when/where) → ideas (what) → prioritise → solve → measure (how).", "My challenge frame: who: a blind user; when: outdoors, no guide dog; what: find a destination; where: public transit; how: an app.", "Take-homes judge process and time estimates as much as output."]
      },
      now: {
        ko: ["프레임워크는 그대로 강력하다. '측정' 단계에 AI 품질 지표가 추가된다.", "이제 과제에서 '이 문제에 AI가 필요한가?'를 스스로 묻는 것이 성숙도의 신호다.", "AI 도구를 썼다면 어디에 썼고 무엇을 직접 판단했는지 투명하게 밝힌다."],
        en: ["Still a strong framework. 'Measure' now includes AI quality metrics.", "Asking 'does this problem even need AI?' is now a sign of maturity.", "If you used AI tools, say where, and what you judged yourself."]
      },
      practice: { ko: "그때의 시각장애인 내비 챌린지를 7단계로 45분 안에 다시 풀고, 그때 버전과 비교하세요.", en: "Re-solve the old blind-navigation challenge in 45 minutes with the 7 steps. Compare with your original version." },
      quiz: { q: { ko: "디자인 과제 프레임워크의 첫 단계는?", en: "The first step of the framework?" },
        opts: [{ ko: "아이디어 나열", en: "List ideas" }, { ko: "목표(Why) 이해", en: "Understand the goal (why)" }, { ko: "와이어프레임", en: "Wireframe" }],
        a: 1, why: { ko: "목표가 정해져야 대상과 해법을 판단할 수 있다.", en: "The goal frames every later choice." } } },

    { id: "portfolio-interview", m: "m9", status: "evolved",
      title: { ko: "포트폴리오 · 인터뷰", en: "Portfolio · interviews" },
      src: { ko: "수업, 포트폴리오 수업 노트, How to make a portfolio", en: "Class, portfolio class notes, How to make a portfolio" },
      then: {
        ko: ["독자가 누구인지부터 정한다. 메인·서브 페이지, 썸네일, GIF, About, CV·커버레터.", "인터뷰 단계: 라이브 화이트보드 챌린지, 과제 테스트, 발표, 포트폴리오 발표(15/15/30분).", "단골 질문 20개: 기억에 남는 프로젝트, 개발자와의 협업, Agile & Lean UX, MVP까지의 기간 등."],
        en: ["Decide who the audience is first. Main and sub pages, thumbnails, GIFs, about page, CV and cover letter.", "Interview stages: live whiteboard challenge, take-home, presentation, portfolio talk (15/15/30 min).", "20 common questions: most memorable project, working with developers, Agile & Lean UX, time to MVP, and more."]
      },
      now: {
        ko: ["결과 화면보다 판단 과정이 더 중요해졌다. AI가 화면은 만들 수 있지만 '왜'는 만들 수 없다.", "추가될 질문: AI를 어떻게 쓰나? AI 기능의 품질을 어떻게 판단했나? 에이전트 UX 경험은?", "이 교재 자체가 포트폴리오다: 그때에서 지금으로 이어지는 학습 궤적과 ML 이해를 보여준다."],
        en: ["Reasoning outweighs final screens. AI can make screens; it can't make your 'why'.", "New questions: how do you use AI? How did you judge an AI feature's quality? Any agentic UX work?", "This textbook is itself portfolio material: it shows a then-to-now learning arc and ML understanding."]
      },
      practice: { ko: "그때의 질문 20개 중 5개를 골라 지금의 나로서 답을 다시 쓰고, 새 AI 질문 3개에도 답하세요.", en: "Pick 5 of the old questions and answer them as you are now. Add answers to 3 new AI questions." },
      quiz: { q: { ko: "AI 시대 포트폴리오에서 가장 차별화되는 요소는?", en: "What differentiates a portfolio in the AI era?" },
        opts: [{ ko: "화면의 수", en: "Number of screens" }, { ko: "판단 과정과 그 근거", en: "Your reasoning and its evidence" }, { ko: "화려한 모션", en: "Flashy motion" }],
        a: 1, why: { ko: "생성은 쉬워졌고, 판단은 여전히 사람의 몫이다.", en: "Generating is easy now; judgment is still yours." } } }
  ]
};

// ── Class scenes: short animated highlights, re-written with fictional characters.
// Real classmates are never mapped 1:1; lines are paraphrased, not quoted.
window.COURSE.cast = {
  t:   { ko: "강사 A", en: "Instructor A", voice: "rounded", rate: 0.95, animal: "elephant", hue: ["#FFFFFF","#C3C8D4","#5E6678"], accent: "#F4C2D4" },
  t2:  { ko: "강사 B", en: "Instructor B", voice: "buttery", rate: 0.9, animal: "bear", hue: ["#FFF7EE","#E0B48A","#8A5530"], accent: "#FFD2A8" },
  min: { ko: "민",   en: "Min",        voice: "glassy", rate: 1.05, animal: "cat",    hue: ["#F2F9FF","#8CC4FF","#2E6FD0"], accent: "#FF9EC4", bio: { ko: "개발자 출신", en: "Ex-developer" } },
  seo: { ko: "서아", en: "Seoa",       voice: "airy", rate: 1.05, animal: "rabbit", hue: ["#FFF3FA","#FF9ED2","#D93C8E"], accent: "#FFC2DE", bio: { ko: "시각 디자인 전공", en: "Visual design grad" } },
  jun: { ko: "준",   en: "Jun",        voice: "buttery", rate: 1.1, animal: "fox",    hue: ["#FFF4EC","#FFA36B","#D9481E"], accent: "#FFF4EC", bio: { ko: "비전공 전환자", en: "Career switcher" } },
  ria: { ko: "리아", en: "Ria",        voice: "glassy", rate: 0.95, animal: "deer", hue: ["#F0FFF8","#7FE0B5","#1F8F66"], accent: "#FFD9A8", bio: { ko: "건축 전공", en: "Architecture grad" } },
  me:  { ko: "그때의 나", en: "Me, then", voice: "airy", rate: 1.15,         animal: "owlet", hue: ["#FFFFFF","#C9C6C2","#7D7670"], accent: "#FFD34D" },
  now: { ko: "지금의 나", en: "Me, now", voice: "airy", rate: 0.95, animal: "snowy", hue: ["#FFFFFF","#EEF0F6","#9AA3B8"], accent: "#FFD34D", sparkle: true }
};
window.COURSE.scenes = {
  "good-design": {
    draft: false, session: "220307",
    source: { ko: "첫 수업(220307) 22:30–55:00 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class (220307), 22:30–55:00" },
    beats: [
      { who: "t",   t: "00:22:33", text: { ko: "오늘은 여러분이 그동안 갖고 있던 디자인, UX라는 개념을 한 번 다 깨볼 거예요.", en: "Today we're going to break whatever idea of design and UX you came in with." } },
      { who: "t",   t: "00:29:08", text: { ko: "디자인의 정의를 내려봅시다. 한 줄씩. 디자인이란 뭘까요?", en: "Let's define design. One line each. What is design?" }, card: { kind: "title", ko: "디자인이란 ___ 이다", en: "Design is ___" } },
      { who: "seo", t: "00:26:33", text: { ko: "클라이언트를 만족시키는 거라고 생각해요.", en: "I'd say it's satisfying the client." }, card: { kind: "list", ko: ["클라이언트를 만족시키는 것"], en: ["Satisfying the client"] } },
      { who: "jun", t: "00:29:13", text: { ko: "저는… 창조하는 것?", en: "For me… creating something?" }, card: { kind: "list", ko: ["클라이언트를 만족시키는 것", "창조하는 것"], en: ["Satisfying the client", "Creating"] } },
      { who: "me",  t: "00:29:33", text: { ko: "균형이요. 아름다운 것과 실용적인 것의 균형.", en: "Balance. Between what's beautiful and what's practical." }, card: { kind: "quote", ko: "아름다운 것과 실용적인 것의 균형", en: "A balance between the beautiful and the practical" } },
      { who: "t",   t: "00:31:46", text: { ko: "디자인의 원래 뜻은 '고안하다'예요. 무언가를 만들어내는 창조가 아니라, 문제를 해결할 방법을 생각해내는 거예요.", en: "The root meaning of design is 'to devise'. Not creating something, but thinking up a way to solve a problem." }, card: { kind: "title", ko: "디자인 = 문제를 푸는 방법을 고안하는 것", en: "Design = devising a way to solve a problem" } },
      { who: "t",   t: "00:33:33", text: { ko: "누구의 문제냐면, 사용자예요. 세 가지만 기억하세요. 사용자가 누구인지, 그 사람의 문제가 무엇인지, 어떻게 해결할지.", en: "Whose problem? The user's. Remember three things: who the user is, what their problem is, how to solve it." }, card: { kind: "list", ko: ["사용자는 누구인가", "그 사람의 문제는 무엇인가", "어떻게 해결할 것인가"], en: ["Who is the user?", "What is their problem?", "How will we solve it?"] } },
      { who: "t",   t: "00:34:08", text: { ko: "사용자는 바꿀 수 없어요. 문제는 이미 있고, 사용자는 말해주지 않아요. 왜 우리가 원하는 대로 따라오지 않는지, 그걸 찾아내는 게 여러분 일이에요.", en: "You can't change users. The problem already exists, and they won't tell you. Finding out why they don't follow the path you planned is your job." } },
      { who: "t",   t: "00:44:59", text: { ko: "반 고흐는 살아 있는 동안 그림을 한 장밖에 못 팔았어요. 지금은 최고로 인정받지만요.", en: "Van Gogh sold one painting in his lifetime. Today he's among the most celebrated." }, card: { kind: "vs", a: { icon: "frame", ko: "그림: 시대가 나중에 알아본 예술", en: "Painting: art the world recognised later" }, b: { icon: "bag", ko: "허니버터칩: 그때 팔린 디자인", en: "Honey Butter Chip: design that sold at the time" } } },
      { who: "t",   t: "00:48:11", text: { ko: "허니버터칩은 2, 30대 여성이 가장 많이 찾는 맛을 데이터로 분석해서 단맛과 짠맛을 같이 넣었어요. 그리고 대박이 났죠.", en: "Honey Butter Chip came from data: what flavours women in their 20s and 30s searched for most. Sweet and salty together. It was a hit." }, card: { kind: "vs", a: { icon: "frame", ko: "그림: 시대가 나중에 알아본 예술", en: "Painting: art the world recognised later" }, b: { icon: "bag", ko: "허니버터칩: 그때 팔린 디자인", en: "Honey Butter Chip: design that sold at the time" }, emph: "b" } },
      { who: "t",   t: "00:51:48", text: { ko: "디자인은 팔려야 해요. 예술에는 '나'가 있지만, 디자인에 나는 없어요. 사용자만 있을 뿐이죠.", en: "Design has to sell. Art has an 'I' in it; design doesn't. There is only the user." }, card: { kind: "quote", ko: "디자인에 나는 없다. 사용자만 있다.", en: "There's no 'I' in design. Only the user." } },
      { who: "t",   t: "00:52:29", text: { ko: "2002년에 LG가 '아이패드'라는 이름의 태블릿을 냈어요. 정말 잘 만들었는데, 스마트폰도 없던 때라 쓸 데가 없었죠. 디자인은 시대를 너무 앞서가도 안 돼요.", en: "In 2002 LG released a tablet literally called 'iPad'. Beautifully made, but with no smartphones yet, nobody had a use for it. Design can't run too far ahead of its time either." }, card: { kind: "title", ko: "그때 그 상황에서 사용자가 원하는 것", en: "What users want, then and there" } },
      { who: "t",   t: "00:28:42", text: { ko: "그래픽만 생각하면 포토샵이 맞아요. 그런데 개발이 들어가면 포토샵은 좋지 않아요. 그래서 1차부터 전부 피그마로 옮겼어요.", en: "For pure graphics, Photoshop is right. Once development is involved, it isn't. So we moved everything to Figma from the start." }, card: { kind: "vs", a: { icon: "brush", ko: "포토샵: 그래픽", en: "Photoshop: graphics" }, b: { icon: "grid", ko: "피그마: 개발과 협업", en: "Figma: built with developers" }, emph: "b" } },
      { who: "t",   t: "00:25:06", text: { ko: "숙제예요. 책 두 권은 꼭 읽고, 다큐 감상문 쓰고, 앱을 많이 써 보세요.", en: "Homework: read these two books, write the documentary reflection, and use a lot of apps." }, card: { kind: "list", ko: ["다큐 감상문 (Objectified)", "『디자인과 인간 심리』 (도널드 노먼)", "『사용자를 생각하게 하지 마』 → 세 장으로 요약", "앱을 많이 써 보기"], en: ["Documentary reflection (Objectified)", "The Design of Everyday Things (Don Norman)", "Don't Make Me Think → summarise in 3 pages", "Use a lot of apps"] } },
      { who: "now", text: { ko: "'디자인에 나는 없다'는 지금도 맞아요. 다만 이제 사용자 곁에 AI도 서 있죠. AI가 그럴듯하게 만든 화면 앞에서도, 사용자가 누구고 무슨 문제인지부터 물어야 해요.", en: "'No I in design' still holds. But now AI stands beside the user too. Even with a plausible AI-made screen in front of you, ask first who the user is and what their problem is." }, card: { kind: "shift", then: { ko: "허니버터칩: 데이터로 찾은 맛", en: "Honey Butter Chip: a flavour found in data" }, now: { ko: "AI가 분석은 순식간에, 무엇을 물을지는 사람이", en: "AI analyses in seconds; people decide what to ask" } } },
      { who: "now", text: { ko: "그리고 그때 내가 쓴 '아름다움과 실용의 균형'에 하나를 더하고 싶어요. 정직함. AI 기능은 그럴듯한 것보다 믿을 수 있어야 하니까요.", en: "And to my old answer, 'beautiful and practical', I'd add one more: honest. An AI feature has to be trustworthy, not just plausible." }, card: { kind: "title", ko: "아름다움 · 실용 · 정직함", en: "Beautiful · Practical · Honest" } }
    ]
  }
  ,"ux-pyramid": {
    draft: false, session: "220307 2부",
    source: { ko: "첫 수업 2부(220307) 1:00–1:08 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class, part 2 (220307), 1:00–1:08" },
    beats: [
      { who: "t", t: "01:07:12", text: { ko: "아이리버 알아요? 한때 이게 없으면 아싸였던 MP3 플레이어예요.", en: "Anyone know iRiver? There was a time you were out of the loop without one." }, card: { kind: "title", ko: "아이리버 vs 아이팟", en: "iRiver vs iPod" } },
      { who: "jun", t: "01:07:16", text: { ko: "음… 잘 모르겠어요.", en: "Hmm… not really." } },
      { who: "t", t: "01:07:56", text: { ko: "기기는 극찬을 받았는데 2년 만에 밀렸어요. 아이팟은 인터넷에 연결해서 스토어에서 노래를 사면 끝이었거든요. 아이리버는 파일을 받아서 직접 옮겨야 했고요.", en: "The device was praised, then overtaken within two years. With the iPod you connected, bought the song in the store, and that was it. With iRiver you downloaded files and moved them yourself." }, card: { kind: "vs", a: { icon: "frame", ko: "아이리버: 좋은 기기", en: "iRiver: a great device" }, b: { icon: "grid", ko: "아이팟: 기기 + 서비스", en: "iPod: device + service" }, emph: "b" } },
      { who: "t", t: "01:01:18", text: { ko: "그래서 '원 앱, 원 퍼포즈'예요. 왓츠앱은 일대일 보안, 위치 공유처럼 소통 하나를 깊게 파요.", en: "Hence 'one app, one purpose'. WhatsApp digs deep into one thing, communication: end-to-end security, live location." }, card: { kind: "list", ko: ["한 앱은 한 목적", "목적에 맞는 기능을 깊게", "이것저것 다 팔지 않기"], en: ["One app, one purpose", "Go deep on what serves it", "Don't sell everything"] } },
      { who: "t", t: "01:01:21", text: { ko: "스포티파이를 리디자인한다면, 비즈니스 목표와 사용자가 원하는 기능을 어떻게 더 잘 드러낼지 생각하세요. 타이머나 게임 같은 기능을 끼워 넣지 말고요.", en: "If you redesign Spotify, think about how to surface its business goals and what users want. Don't bolt on timers or games." } },
      { who: "t", t: "01:00:36", text: { ko: "좋은 UX를 직접 써 봐야 해요. 김밥은 똑같아도 호텔에서 먹는 김밥은 부가가치가 달라요.", en: "You have to use good UX yourself. Same gimbap, but hotel gimbap carries different added value." }, card: { kind: "quote", ko: "같은 김밥, 다른 부가가치", en: "Same gimbap, different added value" } },
      { who: "now", text: { ko: "지금 보면 아이팟 이야기는 AI에서도 똑같아요. 모델이 좋아도, 사람이 쓰는 흐름과 서비스가 없으면 밀려요.", en: "The iPod story repeats with AI. A great model loses without the flow and the service people actually use." }, card: { kind: "shift", then: { ko: "기기 < 기기 + 스토어", en: "Device < device + store" }, now: { ko: "모델 < 모델 + 흐름 · 신뢰 · 데이터", en: "Model < model + flow, trust, data" } } },
      { who: "now", text: { ko: "'원 앱, 원 퍼포즈'도 다시 읽혀요. 에이전트는 여러 앱을 넘나들며 일하니까, 이제 기준은 '한 번에 하나의 분명한 일'이에요.", en: "'One app, one purpose' reads differently too. Agents work across apps, so the test now is one clear job at a time." } }
    ]
  },
  "journey": {
    draft: false, session: "220307 2부",
    source: { ko: "첫 수업 2부(220307) 1:05–1:12 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class, part 2 (220307), 1:05–1:12" },
    beats: [
      { who: "t", t: "01:08:44", text: { ko: "이런 경험 있죠? 문의했더니 '저희 담당 아니에요, 다른 데로 문의하세요.'", en: "You've had this, right? You ask, and hear: 'Not our department, try somewhere else.'" }, card: { kind: "title", ko: "“저희 담당 아니에요”", en: "“Not our department”" } },
      { who: "jun", t: "01:10:22", text: { ko: "있어요. 교육 지원 하나 신청하는데 여기저기 다 다녔어요.", en: "Yes. I went to office after office for one training subsidy." } },
      { who: "t", t: "01:09:57", text: { ko: "영국은 정부 사이트가 하나예요. 세금, 의료, 구직이 한곳에 통합돼 있어서 외국인이 살아도 오히려 쉬워요.", en: "In the UK there's one government site. Tax, health, jobs, all in one place. Even as a foreigner it's easier." }, card: { kind: "vs", a: { icon: "frame", ko: "부서마다 다른 창구", en: "A desk per department" }, b: { icon: "grid", ko: "하나로 통합된 서비스", en: "One joined-up service" }, emph: "b" } },
      { who: "t", t: "01:11:45", text: { ko: "기술도 좋고 디자이너 손도 좋은데, 서비스 디자인이 안 되니 결과물이 이상해지는 거예요.", en: "The engineering is good, the craft is good, but without service design the result comes out wrong." } },
      { who: "t", t: "01:05:39", text: { ko: "그리고 당신은 소수를 위한 사회적 디자인을 담아 보세요. 에너지 빈곤 같은 문제요.", en: "And you, put social design for the few into your work. Problems like energy poverty." }, card: { kind: "quote", ko: "소수를 위한 사회적 디자인", en: "Social design for the few" } },
      { who: "now", text: { ko: "지금은 여기에 에이전트가 더해져요. 창구가 나뉘어 있어도 에이전트가 대신 오갈 수 있죠.", en: "Now agents join the picture. Even with separate desks, an agent can go between them for you." }, card: { kind: "shift", then: { ko: "사이트 하나로 통합", en: "Join it into one site" }, now: { ko: "에이전트가 창구를 잇고, 사람이 확인한다", en: "An agent joins the desks; a person confirms" } } },
      { who: "now", text: { ko: "그래도 누가 책임지는지, 어디서 사람이 확인하는지는 여정지도에 꼭 그려야 해요. 소수를 위한 디자인이라면 더더욱.", en: "Still, the journey map has to show who is accountable and where a person checks. More so when designing for the few." } }
    ]
  },
  "desk-research": {
    draft: false, session: "220307 2부",
    source: { ko: "첫 수업 2부(220307) 1:13–1:17 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class, part 2 (220307), 1:13–1:17" },
    beats: [
      { who: "t", t: "01:13:35", text: { ko: "웹 어워즈 사이트들이 있어요. 들어가서 하나씩 클릭해 보세요.", en: "There are web award sites. Go in and click through them one by one." }, card: { kind: "list", ko: ["Awwwards", "CSS Design Awards", "Best Website Design 어워즈"], en: ["Awwwards", "CSS Design Awards", "Best Website Design awards"] } },
      { who: "t", t: "01:14:46", text: { ko: "최소 20개는 북마크해 오세요. 그러려면 200~300개는 봐야 해요.", en: "Bring at least 20 bookmarks. To get there you'll look at 200 to 300 sites." }, card: { kind: "title", ko: "300개 보고 20개 고르기", en: "See 300, keep 20" } },
      { who: "t", t: "01:15:01", text: { ko: "인스펙트로 화면이 줄어들 때 어떻게 바뀌는지도 보세요.", en: "Use inspect to see how each site changes as the screen shrinks." } },
      { who: "seo", t: "01:15:08", text: { ko: "보다 보면 제 취향인 스타일만 고르게 될 것 같아요.", en: "I'll probably end up picking only my own style." } },
      { who: "t", t: "01:15:10", text: { ko: "그건 무시하세요. 예쁜 건 대부분 에이전시 사이트예요. 회사, 대학, 학교도 보고, 업종별로 어떤 기능이 잘 구현됐는지 보세요.", en: "Ignore that. Most pretty ones are agency sites. Look at companies, universities, schools too, and see which features each industry does well." }, card: { kind: "list", ko: ["에이전시는 조금만", "회사 · 대학 · 학교 사이트", "업종별로 잘된 기능", "줄어들 때의 변화"], en: ["Agencies, only a few", "Company, university, school sites", "What each industry does well", "How it adapts as it shrinks"] } },
      { who: "t", t: "01:13:38", text: { ko: "비핸스, 드리블은 아직 보지 마세요. 쇼케이스용 화면과 실제 서비스를 아직 구분하지 못하니까요.", en: "Hold off on Behance and Dribbble for now. You can't yet tell a showcase from a real service." } },
      { who: "now", text: { ko: "지금은 AI가 수백 개 사이트를 대신 훑어 줄 수 있어요. 그래도 고르는 눈은 직접 300개를 본 사람에게 생겨요.", en: "Today AI can skim hundreds of sites for you. But the eye for choosing still comes from seeing 300 yourself." }, card: { kind: "shift", then: { ko: "300개를 직접 보고 20개 고르기", en: "See 300 yourself, keep 20" }, now: { ko: "AI가 모으고, 고르는 건 내가", en: "AI gathers; I choose" } } },
      { who: "now", text: { ko: "쇼케이스와 실제 서비스를 구분하라는 말은 AI가 만든 화면에도 그대로예요. 그럴듯한 화면과 실제로 작동하는 화면은 달라요.", en: "'Tell a showcase from a real service' applies to AI-made screens too. Plausible isn't the same as working." } }
    ]
  }

  ,"responsive": {
    draft: false, session: "220307",
    source: { ko: "첫 수업(220307) 1:08–1:56 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class (220307), 1:08–1:56" },
    beats: [
      { who: "t",   t: "01:10:38", text: { ko: "르크루제 알아요? 냄비 브랜드예요. 영국 사이트와 한국 사이트를 나란히 비교해 볼게요.", en: "Know Le Creuset? The cookware brand. Let's compare its UK site and its Korean site side by side." }, card: { kind: "vs", a: { icon: "frame", ko: "한국 사이트", en: "Korean site" }, b: { icon: "grid", ko: "영국 사이트", en: "UK site" } } },
      { who: "t",   t: "01:11:22", text: { ko: "마우스 오른쪽 버튼으로 '검사'를 누르고, 폰 모양 아이콘을 누르면 화면 크기를 바꿔 볼 수 있어요.", en: "Right-click, choose Inspect, then the phone icon. Now you can change the screen size." }, card: { kind: "list", ko: ["오른쪽 클릭 → 검사", "폰 모양 아이콘", "화면 폭을 늘였다 줄였다"], en: ["Right-click → Inspect", "The phone icon", "Stretch and shrink the width"] } },
      { who: "ria", t: "01:13:02", text: { ko: "한국 사이트는 그냥 줄이면 글씨가 잘려요.", en: "The Korean one just cuts the text off when it shrinks." } },
      { who: "seo", t: "01:14:20", text: { ko: "한국 건 메인 화면 아래로는 거의 다 상품이랑 가격이에요. 영국 건 이미지랑 이야기가 더 많고요.", en: "Below the hero, the Korean site is almost all products and prices. The UK one has more images and story." } },
      { who: "t",   t: "01:22:14", text: { ko: "줄였을 때 한국 사이트는 잘려 보이죠. 외국 사이트는 모든 게 크기에 맞춰져요. 이걸 반응형이라고 해요. 이번 1차 과제가 이거예요.", en: "Shrink it and the Korean site gets cut off. The other one adapts to every size. That's responsive design, and it's your first assignment." }, card: { kind: "vs", a: { icon: "frame", ko: "PC 화면만 생각한 사이트: 잘린다", en: "Desktop-only: gets cut off" }, b: { icon: "grid", ko: "반응형: 모든 크기에 맞춘다", en: "Responsive: fits every size" }, emph: "b" } },
      { who: "t",   t: "01:23:49", text: { ko: "웹 따로, 폰 따로가 아니에요. 모든 게 통합돼야 해요. 유니버설 디자인이죠.", en: "Not web here and phone there. Everything has to come together. That's universal design." } },
      { who: "t",   t: "01:23:58", text: { ko: "그리고 접근성도 생각해야 해요. 장애가 있는 사람, 조건이 다른 사람도 쓸 수 있는 제품이요. 휠체어가 못 들어가면 건물을 지을 수 없는 나라도 있어요.", en: "And think about accessibility: products that people with disabilities, or different circumstances, can use too. Some countries won't let you build if a wheelchair can't get in." }, card: { kind: "list", ko: ["반응형: 모든 화면 크기", "유니버설 디자인: 모든 기기", "접근성: 모든 사람"], en: ["Responsive: every screen size", "Universal design: every device", "Accessibility: every person"] } },
      { who: "t",   t: "01:27:14", text: { ko: "해상도는 화면 크기가 아니에요. 1인치 안에 점이 몇 개 들어가느냐예요. 24인치든 32인치든 1920×1080일 수 있어요.", en: "Resolution isn't screen size. It's how many dots fit. A 24-inch and a 32-inch screen can both be 1920×1080." }, card: { kind: "title", ko: "해상도 ≠ 화면 크기", en: "Resolution ≠ screen size" } },
      { who: "t",   t: "01:35:37", text: { ko: "맥북으로 캡처하면 두 배로 찍혀요. 점이 훨씬 많아서 선명하죠. 그런데 사용자가 다 그런 화면을 쓰는 건 아니에요. 사용자가 최종적으로 어떻게 보게 될지 확인해야 해요.", en: "Capture on a MacBook and you get twice the pixels: much sharper. But not every user has that screen. Check how they'll actually see it." }, card: { kind: "title", ko: "내 화면 ≠ 사용자 화면", en: "My screen ≠ the user's screen" } },
      { who: "t",   t: "01:40:21", text: { ko: "사람은 눈이 앞에 달려 있어서 시야가 그렇게 넓지 않아요. 한눈에 들어오게 컨테이너 폭을 잡아야 해요.", en: "Our eyes face forward, so our field of view isn't wide. Set the container so the page reads at a glance." } },
      { who: "jun", t: "01:54:35", text: { ko: "스메그 한국 사이트는 내릴 때마다 그림이 움직여서 정신없어요. 나이 드신 분은 쓰기 어려울 것 같아요.", en: "SMEG's Korean site animates on every scroll. It's hectic. Older people would struggle." }, card: { kind: "vs", a: { icon: "frame", ko: "움직임이 많은 사이트", en: "A site that moves a lot" }, b: { icon: "grid", ko: "한눈에 찾고 바로 사는 사이트", en: "A site you scan and buy from" }, emph: "b" } },
      { who: "me",  t: "01:55:36", text: { ko: "처음엔 한국 사이트가 예쁘다고 생각했어요. 그런데 내리면서 버벅거리고 한눈에 안 들어와서 답답했어요. 영국 사이트는 내가 소비자라면 빨리 클릭해서 살 수 있겠다 싶었고요.", en: "At first I thought the Korean site was pretty. Scrolling, it stuttered and nothing fit in one glance, which was frustrating. With the UK site I felt that, as a shopper, I could click and buy quickly." } },
      { who: "t",   t: "01:10:18", text: { ko: "넷플릭스는 웹에 있어서 접속만 하면 어느 기기에서든 봐요. 설치 파일을 서너 개 깔아야 하는 서비스와는 출발이 달라요.", en: "Netflix lives on the web: sign in and watch on any device. That starts from a different place than a service that needs three or four installers." } },
      { who: "now", text: { ko: "지금은 반응형이 기본이 됐어요. 기준은 화면 크기를 넘어 맥락이에요. 같은 서비스를 채팅창으로, 옆 패널의 AI로, 음성으로도 쓰니까요.", en: "Responsive is the default now. The test has moved past screen size to context: the same service through chat, an AI side panel, or voice." }, card: { kind: "shift", then: { ko: "모든 화면 크기에 맞춘다", en: "Fit every screen size" }, now: { ko: "모든 맥락에 맞춘다: 화면 · 음성 · AI 패널", en: "Fit every context: screen, voice, AI panel" } } },
      { who: "now", text: { ko: "접근성도 AI 기능에 그대로 적용돼요. 실시간으로 쓰여 나오는 답이 스크린 리더에 어떻게 읽히는지까지 설계해야 해요.", en: "Accessibility applies to AI features too. Design how a streaming answer is read by a screen reader." } }
    ]
  }

  ,"web-coding": {
    draft: false, session: "220307",
    source: { ko: "첫 수업(220307) 1:39–1:58 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class (220307), 1:39–1:58" },
    beats: [
      { who: "t",   t: "01:56:32", text: { ko: "그래픽 스킬에만 집중하면 기기 이야기를 놓쳐요. 예쁜 게 전부가 되죠.", en: "Focus only on graphic skill and you lose the devices. Pretty becomes everything." } },
      { who: "t",   t: "01:57:03", text: { ko: "디자이너도 HTML, CSS 기본은 알아야 해요. 직접 코딩하라는 게 아니라, 내 디자인이 웹에서 어떤 구조로 만들어지는지는 알아야 하니까요.", en: "Designers need HTML and CSS basics. Not to code everything, but to know how your design is structured on the web." }, card: { kind: "title", ko: "코딩은 못 해도, 구조는 안다", en: "You may not code it, but you know its structure" } },
      { who: "t",   t: "01:57:18", text: { ko: "해외 채용 공고에도 그렇게 써 있어요. 코딩까지 할 필요는 없지만, 디자인이 웹에서 어떻게 구조화되는지는 알아야 한다고요.", en: "Job posts abroad say exactly that: you needn't code, but you must understand how a design is structured on the web." } },
      { who: "min", text: { ko: "개발할 때도 구조를 아는 디자이너랑 일하면 훨씬 수월했어요.", en: "Back when I was a developer, designers who understood structure were far easier to work with." } },
      { who: "t",   t: "01:39:18", text: { ko: "그래서 피그마를 써요. 개발자가 거기서 바로 뽑아 쓸 수 있게요.", en: "That's why we use Figma: developers can take things straight out of it." }, card: { kind: "list", ko: ["HTML · CSS 기본", "기기와 해상도 이해", "피그마로 개발자와 공유"], en: ["HTML and CSS basics", "Devices and resolution", "Share with developers in Figma"] } },
      { who: "t",   t: "01:50:22", text: { ko: "UI를 모르는 UX 디자이너보다, UI를 아는 UX 디자이너가 제일 강해요.", en: "A UX designer who knows UI beats one who doesn't, every time." }, card: { kind: "quote", ko: "UI를 아는 UX 디자이너가 제일 강하다", en: "The UX designer who knows UI is strongest" } },
      { who: "now", text: { ko: "지금은 한 걸음 더 갔어요. AI 코딩 도구로 디자이너가 직접 동작하는 화면을 만들어요. 그래서 구조를 아는 게 더 중요해졌죠.", en: "We've gone a step further: with AI coding tools, designers build working screens themselves. Knowing the structure matters more than ever." }, card: { kind: "shift", then: { ko: "구조를 알아야 한다", en: "Know the structure" }, now: { ko: "구조를 알고, 직접 만들어 본다", en: "Know the structure, and build it yourself" } } },
      { who: "now", text: { ko: "생성된 코드를 읽고 고칠 수 있어야, 그 결과물을 내가 책임질 수 있어요.", en: "Only if you can read and fix the generated code can you stand behind the result." } }
    ]
  }

  ,"interaction-handoff": {
    draft: false, session: "220307 2부",
    source: { ko: "첫 수업 2부(220307) 0:00–0:04 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class, part 2 (220307), 0:00–0:04" },
    beats: [
      { who: "t",   t: "00:00:16", text: { ko: "애자일 UX라는 책이 있어요. 첫 장이 이래요. IT 역사 20년 동안 디자이너는 개발자에게 우선순위를 내줬다.", en: "There's a book called Agile UX. Its first chapter says: for twenty years of IT history, designers ceded priority to developers." }, card: { kind: "quote", ko: "디자이너는 개발자에게 우선순위를 내줬다", en: "Designers ceded priority to developers" } },
      { who: "t",   t: "00:02:07", text: { ko: "그래서 개발자랑 의사소통하는 게 정말 중요해요. 유저 플로우 같은 걸로 같은 말을 하게 되죠.", en: "So talking with developers really matters. Things like user flows give you a shared language." } },
      { who: "t",   t: "00:03:13", text: { ko: "개발자는 생각하는 방식이 달라요. 디테일을 300% 주지 않으면, 디자인은 40% 정도로 만들어져요.", en: "Developers think differently. Unless you give 300% of the detail, your design gets built at about 40%." }, card: { kind: "title", ko: "300% 디테일을 줘야 40%가 나온다", en: "Give 300% detail to get 40% built" } },
      { who: "min", text: { ko: "개발할 땐 예쁜 화면 하나보다, 상태랑 예외가 다 정리된 게 훨씬 반가웠어요.", en: "As a developer, I'd take every state and edge case written down over one beautiful screen." }, card: { kind: "list", ko: ["모든 상태 (기본, 로딩, 빈 화면, 오류)", "예외와 경계 사례", "간격과 크기 값", "움직임의 의도"], en: ["Every state: default, loading, empty, error", "Edge cases", "Spacing and size values", "What the motion is for"] } },
      { who: "now", text: { ko: "지금은 핸드오프가 문서에서 코드로 옮겨가고 있어요. 디자인 시스템과 AI 코딩 도구로, 디테일을 코드로 직접 남길 수 있죠.", en: "Hand-off is moving from documents to code. With design systems and AI coding tools, designers leave the detail in code themselves." }, card: { kind: "shift", then: { ko: "300% 디테일을 문서로 넘긴다", en: "Hand over 300% detail in documents" }, now: { ko: "디테일을 코드와 디자인 시스템에 직접 남긴다", en: "Put the detail into code and the design system" } } },
      { who: "now", text: { ko: "AI 기능이라면 디테일이 하나 더 늘어요. 프롬프트, 예시 답변, 그리고 틀렸을 때의 화면까지.", en: "For an AI feature there's one more layer of detail: the prompt, example answers, and the screen for when it's wrong." } }
    ]
  },
  "ideation": {
    draft: false, session: "220307 2부",
    source: { ko: "첫 수업 2부(220307) 0:09–0:13 구간을 받아쓰기로 재구성", en: "Reconstructed from the first class, part 2 (220307), 0:09–0:13" },
    beats: [
      { who: "t",   t: "00:09:27", text: { ko: "스마트웨어라는 게 있었어요. 옷 안에 컴퓨터 기능을 넣은 거예요. 화면 달고, 전선 연결하고, 배터리 넣고.", en: "There was something called smart wear: computers built into clothing. A display, wires, a battery." } },
      { who: "ria", text: { ko: "옷인데 전선이랑 배터리가 들어 있으면, 빨래는 어떻게 해요?", en: "If there are wires and a battery in it, how do you wash it?" } },
      { who: "t",   t: "00:12:33", text: { ko: "그게 문제였어요. 빨지도, 갈아입지도 못해요. 그 옷만 계속 입어야 하죠.", en: "That was the problem. You couldn't wash it or change out of it. You'd have to wear the same thing every day." }, card: { kind: "vs", a: { icon: "frame", ko: "옷 속에 넣은 컴퓨터", en: "A computer sewn into clothes" }, b: { icon: "grid", ko: "뗐다 붙이는 액세서리", en: "An accessory you clip on and off" }, emph: "b" } },
      { who: "t",   t: "00:12:49", text: { ko: "결국 옷은 마음껏 갈아입고, 기기는 액세서리처럼 오가는 쪽으로 갔죠. 지금의 웨어러블처럼요.", en: "In the end: change clothes freely, and let the device come and go like an accessory. Like wearables today." } },
      {"who": "t2", "text": {"ko": "HMW는 문제 정의 앞에 '어떻게 하면 우리가'를 붙여서 질문으로 바꾸는 거예요. 문제만 던지면 회의에서 한두 사람만 말하다 끝나거든요. 질문으로 바꾸면 부담 없이 답할 수 있어요.", "en": "HMW puts 'How might we' in front of the problem statement, turning it into a question. State only the problem and one or two people do all the talking. A question is easier to answer."}, "t": "02:51:13", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "문제: 사람들이 납부 기한을 자꾸 넘긴다", "en": "Problem: people keep missing the payment deadline"}, "b": {"icon": "frame", "ko": "HMW: 어떻게 하면 기한 안에 내게 할 수 있을까", "en": "HMW: how might we help them pay on time?"}}, "s": "220613"},
      {"who": "t2", "text": {"ko": "'Might'은 아직 정답이 아니라는 뜻이고, 'We'는 다 같이 한다는 뜻이에요.", "en": "'Might' means it isn't the answer yet. 'We' means we do it together."}, "t": "02:52:54", "card": {"kind": "list", "ko": ["How: 방법을 묻는다", "Might: 아직 정답이 아니다", "We: 다 같이 한다"], "en": ["How: asks for a way", "Might: not the answer yet", "We: together"]}, "s": "220613"},
      {"who": "t2", "text": {"ko": "기능을 다 만들 수는 없으니 우선순위를 정해요. 한 축은 사용자에게 얼마나 필요한지, 다른 축은 노력과 돈과 시간이 얼마나 드는지예요.", "en": "You can't build everything, so prioritise. One axis is how much users need it; the other is how much effort, money and time it takes."}, "t": "02:54:54", "card": {"kind": "list", "ko": ["많이 필요 + 적은 노력 → 지금 한다", "많이 필요 + 큰 노력 → 다음에 한다", "덜 필요 + 적은 노력 → 나중에", "덜 필요 + 큰 노력 → 하지 않는다"], "en": ["High need + low effort → do now", "High need + high effort → do next", "Low need + low effort → do later", "Low need + high effort → don't do"]}, "s": "220613"},
      {"who": "t2", "text": {"ko": "기본으로 있어야 하는 것은 무조건 채우고, 사람들이 기대하는 것까지는 채워요. 기대하지 않던 것까지 주는 건 그다음 문제예요.", "en": "Always cover what must be there, and cover what people expect. Delighting them with what they didn't expect comes after."}, "t": "03:00:34", "card": {"kind": "list", "ko": ["기본: 없으면 쓸 수 없다", "기대: 있을 거라 여긴다", "감동: 없어도 모르지만 있으면 좋다"], "en": ["Basic: unusable without it", "Expected: assumed to be there", "Delight: not missed, but loved"]}, "s": "220613"},
      { who: "now", text: { ko: "가정 매핑으로 다시 보면, '사람들이 이 옷을 매일 입을 것이다'가 가장 위험한 가정이었어요. 기술이 아니라 생활에서 깨진 거죠.", en: "Through assumption mapping, the riskiest assumption was 'people will wear this every day'. It broke in daily life, not in the tech." }, card: { kind: "shift", then: { ko: "기술은 됐지만 생활에 안 맞았다", en: "The tech worked; daily life didn't" }, now: { ko: "AI 기능도 '사람들이 매일 켜둘 것이다'부터 확인한다", en: "For AI too: test 'people will keep this on every day' first" } } }
    ]
  }

  ,"usability-testing": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 0:30–0:33 구간을 받아쓰기로 재구성", en: "Reconstructed from the 9 May class (220509), 0:30–0:33" },
    beats: [
      { who: "t2", t: "00:30:04", text: { ko: "느낌이나 반응을 알고 싶으면, 구체적인 과제를 주세요. 예를 들면 '동네에서 가장 가까운 날짜의 요가 수업을 찾아보세요.'", en: "If you want their reactions, give a concrete task. For example: 'Find the soonest yoga class near you.'" }, card: { kind: "title", ko: "막연한 질문 대신 구체적인 과제", en: "A concrete task, not a vague question" } },
      { who: "t2", t: "00:30:37", text: { ko: "먼저 성공했는지 보고, 시간이 얼마나 걸렸는지도 적어 두세요. 10분 걸려 찾은 사람과 1분 걸린 사람은 분명 뭔가 달라요.", en: "First note whether they succeeded, and how long it took. Someone who took ten minutes differs from someone who took one." }, card: { kind: "list", ko: ["성공했는가", "얼마나 걸렸는가", "어떤 행동과 표정이었나", "끝나고 직접 묻기"], en: ["Did they succeed?", "How long did it take?", "What did they do and show?", "Ask them afterwards"] } },
      { who: "t2", t: "00:31:22", text: { ko: "UX에서는 말한 것만으로 평가하지 않아요.", en: "In UX we don't judge on what people say alone." } },
      { who: "t2", t: "00:31:32", text: { ko: "UX는 경험이잖아요. 사람들이 하는 말보다 행동이 더 중요해요. 어떤 제스처를 하는지, 기뻐하는지, 화를 내는지.", en: "UX is about experience. What people do matters more than what they say: their gestures, whether they light up or get annoyed." }, card: { kind: "quote", ko: "말보다 행동", en: "Behaviour over words" } },
      { who: "now", text: { ko: "AI 기능을 테스트할 땐 하나가 더해져요. 같은 과제라도 답이 매번 달라서, 사용자가 틀린 답을 알아챘는지도 봐야 해요.", en: "Testing an AI feature adds one more thing. Answers vary even for the same task, so watch whether people notice a wrong answer." }, card: { kind: "shift", then: { ko: "성공 · 시간 · 행동", en: "Success, time, behaviour" }, now: { ko: "+ AI 답을 믿었는가, 틀린 걸 알아챘는가", en: "+ Did they trust the AI? Did they catch the mistake?" } } },
      { who: "now", text: { ko: "녹화 요약은 AI가 해줘도, 망설이는 순간과 표정은 직접 봐야 해요. 말보다 행동이라는 원칙은 그대로예요.", en: "AI can summarise the recordings, but you still watch the hesitations and faces yourself. Behaviour over words still holds." } }
    ]
  },
  "affinity": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 0:33–0:37 과제 리뷰를 받아쓰기로 재구성", en: "Reconstructed from a project review in the 9 May class (220509), 0:33–0:37" },
    beats: [
      { who: "seo", t: "00:33:19", text: { ko: "인터뷰 내용을 공감 지도로 나눠봤어요. 말한 것, 생각한 것, 행동한 것, 느낀 것, 네 가지로요.", en: "I sorted the interviews into an empathy map: says, thinks, does, feels." }, card: { kind: "list", ko: ["말한 것: '원하는 정보를 찾기 힘들어요'", "생각한 것: '동네에서 필요한 걸 얻고 싶다'", "행동한 것: 검색했지만 원하는 결과가 없었다", "느낀 것: 광고가 많아 뭐가 뭔지 모르겠다"], en: ["Says: 'It's hard to find what I want'", "Thinks: 'I want to get things locally'", "Does: searched, didn't find it", "Feels: too many ads to tell what's what"] } },
      { who: "seo", t: "00:34:56", text: { ko: "솔직히 '생각'이랑 '느낌'은 구분이 좀 모호했어요.", en: "Honestly, 'thinks' and 'feels' were hard to tell apart." } },
      { who: "seo", t: "00:35:08", text: { ko: "나온 키워드로 2×2 매트릭스를 만들었어요. 가장 많이 나온 게 광고였는데, 광고는 UX로 해결할 수 없어서 아래쪽에 뒀어요. 검색 오류나 앱 멈춤 같은 기술 문제도요.", en: "I put the keywords on a 2×2. Ads came up most, but UX can't fix ads, so they went to the bottom. Same for technical issues like broken search or freezes." }, card: { kind: "vs", a: { icon: "frame", ko: "UX 밖의 문제: 광고, 버그", en: "Outside UX: ads, bugs" }, b: { icon: "grid", ko: "적은 노력, 큰 가치: 먼저 한다", en: "Low effort, high value: do first" }, emph: "b" } },
      { who: "seo", t: "00:36:07", text: { ko: "그래서 홈 화면, 가입 과정, '더보기' 탭, 이 세 가지를 다시 디자인하기로 했어요.", en: "So I chose three things to redesign: the home screen, sign-up, and the More tab." } },
      { who: "now", text: { ko: "지금은 AI가 인터뷰를 공감 지도로 금방 나눠줘요. 그래도 '이건 UX로 풀 수 있는 문제인가'를 가르는 판단은 사람 몫이에요.", en: "AI can sort interviews into an empathy map in seconds. Deciding 'can UX actually solve this?' is still a human call." }, card: { kind: "shift", then: { ko: "손으로 분류하고 2×2에 놓기", en: "Sort by hand, place on a 2×2" }, now: { ko: "AI가 분류하고, 풀 문제는 사람이 고른다", en: "AI sorts; people choose what to solve" } } }
    ]
  },
  "user-flow": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 0:36–0:43 과제 리뷰를 받아쓰기로 재구성", en: "Reconstructed from a project review in the 9 May class (220509), 0:36–0:43" },
    beats: [
      { who: "seo", t: "00:37:03", text: { ko: "지금 가입 과정은 주소, 가입 방법, 이름, 위치 허용, 이사 날짜, 배우자 이메일, 이웃 초대, 첫 글 쓰기까지 너무 길어요. 개인정보 문제도 있고요.", en: "Sign-up today runs through address, sign-up method, name, location, moving date, a partner's email, inviting neighbours, and a first post. Too long, and there are privacy issues." }, card: { kind: "title", ko: "가입까지 열 단계", en: "Ten steps to sign up" } },
      { who: "seo", t: "00:38:41", text: { ko: "그래서 주소를 직접 쓰는 대신 현재 위치를 쓰고, 개인정보 설정을 앞쪽에서 하게 바꿨어요.", en: "So I use the current location instead of typing an address, and moved privacy settings to the front." } },
      { who: "seo", t: "00:40:45", text: { ko: "첫 글 쓰기가 가입 과정에 꼭 필요한지는 계속 의문이었어요.", en: "I kept wondering whether a first post really belongs in sign-up." } },
      { who: "t2",   t: "00:41:18", text: { ko: "그건 맨 끝으로 가야 하지 않아요? 아직 설명도 안 했는데 중간에 갑자기 글을 쓰라고 하면 부담스럽죠.", en: "Shouldn't that come last? Asking for a post midway, before you've explained anything, is a lot." } },
      { who: "t2",   t: "00:41:51", text: { ko: "그래도 첫 글 쓰기 자체는 좋은 장치예요. 다운만 받고 떠나지 않게 하고, 회사 입장에서도 참여가 늘어나니까요.", en: "Still, a first post is a good device. It stops people downloading and leaving, and for the company, engagement goes up." }, card: { kind: "vs", a: { icon: "frame", ko: "중간에 글쓰기 요청: 부담", en: "Ask for a post midway: pressure" }, b: { icon: "grid", ko: "끝에 글쓰기: 참여로 이어진다", en: "Ask at the end: leads to engagement" }, emph: "b" } },
      { who: "now", text: { ko: "지금은 온보딩을 AI가 대화로 대신하기도 해요. 그래도 순서의 원칙은 같아요. 가치를 먼저 보여주고, 요청은 나중에.", en: "Today an AI conversation sometimes replaces onboarding. The rule of order holds: show value first, ask later." }, card: { kind: "shift", then: { ko: "요청은 끝으로, 개인정보는 앞으로", en: "Requests last, privacy first" }, now: { ko: "AI가 개인정보를 쓴다면, 그 설정은 맨 앞에", en: "If AI uses personal data, that setting comes first" } } }
    ]
  },
  "ia": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 0:44–0:49 과제 리뷰를 받아쓰기로 재구성", en: "Reconstructed from a project review in the 9 May class (220509), 0:44–0:49" },
    beats: [
      { who: "seo", t: "00:44:24", text: { ko: "'더보기' 탭에 있는 카테고리를 다 적어보고 다시 묶었어요. 홈에서 필터로 볼 수 있는 건 빼고, 나머지는 비즈니스와 뉴스 안으로 그룹을 만들었어요.", en: "I listed every category in the More tab and regrouped them. Anything the home filter covers came out; the rest went under Business and News." }, card: { kind: "list", ko: ["홈에서 필터링 가능 → 메뉴에서 뺀다", "가게, 지역 행사 → 비즈니스", "분실물, 안전 → 뉴스", "계정, 도움말 → 설정"], en: ["Filterable on home → remove from menu", "Shops, local events → Business", "Lost & found, safety → News", "Account, help → Settings"] } },
      { who: "t2",   t: "00:47:00", text: { ko: "알림은 홈에만 있으면 안 돼요. 사고팔 때 바로 받아야 하는 중요한 기능이라, 다른 화면에서도 계속 보여야 해요.", en: "Notifications can't live only on home. They matter when buying and selling, so they have to stay visible on other screens too." }, card: { kind: "title", ko: "중요한 기능은 어디서든 닿게", en: "Keep key features within reach everywhere" } },
      { who: "t2",   t: "00:48:01", text: { ko: "순서도 '설정'이 먼저, '더보기'가 나중인 게 자연스러워요. 이름도 '설정'보다 'My'가 위계에 맞고요.", en: "Settings before More reads more naturally. And 'My' fits the hierarchy better than 'Settings'." } },
      { who: "now", text: { ko: "지금은 메뉴를 뒤지는 대신 검색하거나 AI에게 물어서 찾기도 하죠. 그래도 어디에 무엇이 있는지 구조가 분명해야 AI도 정확히 안내해요.", en: "People now search or ask AI instead of digging through menus. A clear structure is still what lets AI point them to the right place." }, card: { kind: "shift", then: { ko: "메뉴를 정리해 찾기 쉽게", en: "Tidy menus so things are easy to find" }, now: { ko: "구조가 분명해야 검색과 AI도 정확해진다", en: "Clear structure makes search and AI accurate" } } }
    ]
  }

  ,"uncertain-output": {
    draft: false, session: "220307 2부",
    source: { ko: "첫 수업 2부(220307) 0:19–0:25 구간을 받아쓰기로 재구성. 이 모듈의 출발점이 된 말", en: "Reconstructed from the first class, part 2 (220307), 0:19–0:25: the remark this module starts from" },
    beats: [
      { who: "t",   t: "00:19:22", text: { ko: "인터넷이 생기니까 웹 디자이너라는 말이 생겼어요.", en: "When the internet arrived, the job title 'web designer' appeared." } },
      { who: "t",   t: "00:19:29", text: { ko: "아이폰이 성공한 이유는 받을 앱이 많았기 때문이에요. 사람들한테 앱이라는 개념도 없던 때인데, 이미 다 만들어 놨던 거죠.", en: "The iPhone succeeded because there were so many apps to download. People didn't even have the idea of an app yet, and they were already built." }, card: { kind: "list", ko: ["인터넷 → 웹 디자이너", "스마트폰 → 앱 디자이너", "서비스 전체 → UX · UI 디자이너"], en: ["Internet → web designer", "Smartphone → app designer", "Whole service → UX/UI designer"] } },
      { who: "t",   t: "00:21:50", text: { ko: "기억하세요. 기술이 먼저고, 디자인은 뒤따라가요.", en: "Remember: technology comes first, and design follows." }, card: { kind: "quote", ko: "기술이 먼저, 디자인은 뒤따라간다", en: "Technology first, design follows" } },
      { who: "t",   t: "00:22:49", text: { ko: "아바타 같은 영화도 이야기는 훨씬 먼저 있었어요. 만들 기술이 생길 때까지 기다린 거죠.", en: "A film like Avatar had its story long before. It waited until the technology to make it existed." } },
      { who: "t",   t: "00:24:28", text: { ko: "요즘은 AR, VR, 이머시브 경험 같은 쪽이 새로 열리고 있어요.", en: "These days AR, VR and immersive experiences are opening up." } },
      { who: "t",   t: "00:25:25", text: { ko: "그래서 여러분은 기술과 디바이스를 정확하게 알고 있어야 해요. 그래야 프로덕트를 그 기술과 맞물리게 낼 수 있어요.", en: "So you need to know technology and devices precisely. That's how a product meshes with the technology of its time." } },
      { who: "now", text: { ko: "그 말대로 됐어요. 이번엔 AI라는 기술이 먼저 왔고, 디자인이 뒤따라가는 중이에요. 확률적으로 답하는 기계를 위한 디자인은 아직 정답이 정해지지 않았어요.", en: "It played out exactly so. This time AI arrived first and design is catching up. Design for machines that answer in probabilities has no settled answers yet." }, card: { kind: "shift", then: { ko: "인터넷 → 웹, 스마트폰 → 앱", en: "Internet → web, smartphone → apps" }, now: { ko: "AI → 불확실한 출력을 설계하는 디자인", en: "AI → designing for uncertain output" } } },
      { who: "now", text: { ko: "그래서 이 모듈은 그때 수업에 없었어요. 대신 '기술을 정확히 알아라'라는 그때의 말이 이 모듈의 출발점이에요.", en: "That's why this module wasn't in the course. But that old line, 'know the technology precisely', is where it begins." } }
    ]
  }

  ,"persona": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 1:30–1:42 과제 리뷰를 받아쓰기로 재구성", en: "Reconstructed from a project review in the 9 May class (220509), 1:30–1:42" },
    beats: [
      { who: "ria", t: "01:33:02", text: { ko: "온라인 강의 앱을 리디자인하면서 퍼소나를 두 명 만들었어요. 은퇴하신 분 한 명, 일하는 사용자 한 명이요.", en: "Redesigning an online-course app, I made two personas: one retiree and one working user." }, card: { kind: "vs", a: { icon: "frame", ko: "실비아: 에듀케이션 시커", en: "Sylvia: education seeker" }, b: { icon: "grid", ko: "오스틴: 커리어 빌더", en: "Austin: career builder" } } },
      { who: "ria", t: "01:33:52", text: { ko: "실비아는 '에듀케이션 시커'예요. 은퇴 후 코스타리카에 살고, 온라인 강의로 새 지식을 쌓아서 강사로 일하고 싶어 해요.", en: "Sylvia is an 'education seeker'. Retired in Costa Rica, she wants to learn online and work as an instructor." }, card: { kind: "list", ko: ["목표: 배우고, 강사로 일하기", "어려움: 인터넷이 자주 끊김", "어려움: 새 기술에 아직 낯섦", "기기: 데스크톱, 안드로이드, 돋보기"], en: ["Goal: learn, then teach", "Pain: unreliable internet", "Pain: newer tools feel unfamiliar", "Devices: desktop, Android, a magnifier"] } },
      { who: "ria", t: "01:35:20", text: { ko: "어려움은 사는 곳에서 와요. 지진이나 홍수 때문에 인터넷이 자주 끊기거든요.", en: "Her difficulty comes from where she lives: earthquakes and floods keep cutting the internet." } },
      { who: "ria", t: "01:37:21", text: { ko: "오스틴은 일부러 실비아와 반대로 잡았어요. 20대 소프트웨어 엔지니어, '커리어 빌더'예요. 바쁘고, 화면을 오래 봐서 피곤하고, 버벅이면 참을성이 없어요.", en: "I made Austin Sylvia's opposite on purpose: a software engineer in his 20s, a 'career builder'. Busy, screen-tired, impatient when things lag." } },
      { who: "ria", t: "01:36:37", text: { ko: "속성은 다섯 가지를 5점 척도로 매겼어요.", en: "I rated five attributes on a 5-point scale." }, card: { kind: "list", ko: ["호기심", "끈기", "신중함", "기술 친숙도", "목표 지향성"], en: ["Curiosity", "Persistence", "Caution", "Tech-savviness", "Goal orientation"] } },
      { who: "t2",   t: "01:41:58", text: { ko: "아주 꼼꼼하네요. 실제 인물 같고, 왜 이렇게 설정했는지 앞뒤가 다 맞아요.", en: "Very thorough. It feels like a real person, and every setting has a reason that holds together." }, card: { kind: "quote", ko: "왜 그렇게 설정했는지 앞뒤가 맞는 퍼소나", en: "A persona whose every setting has a reason" } },
      { who: "t2",   t: "01:30:18", text: { ko: "인터뷰할 땐 얼굴이 안 나오게 사진을 찍어 두세요. 포트폴리오에서 과정의 증거도 되고, 읽는 사람이 잠깐 숨 돌릴 틈도 돼요.", en: "When you interview, take photos without faces. In a portfolio they prove the process and give the reader a moment to breathe." } },
      { who: "now", text: { ko: "지금은 AI가 그럴듯한 퍼소나를 몇 초 만에 써줘요. 그래서 그때 칭찬받은 지점, '왜 이렇게 설정했는지 근거가 있는가'가 더 중요해졌어요.", en: "AI now writes a plausible persona in seconds. That makes the thing praised back then, a reason behind every setting, matter more." }, card: { kind: "shift", then: { ko: "실제 인물 같은 디테일", en: "Detail that feels real" }, now: { ko: "디테일보다 근거: 리서치에서 나온 설정인가", en: "Evidence over detail: did research produce it?" } } },
      { who: "now", text: { ko: "실비아의 '인터넷이 자주 끊긴다'는 AI 기능에서 더 중요해요. 연결이 끊겨도 답이 날아가지 않게, 다시 시도하고 이어 받는 흐름을 설계해야 하니까요.", en: "Sylvia's flaky internet matters even more for AI features: design so an answer isn't lost when the connection drops, with retry and resume." } }
    ]
  }

  ,"wireframe-fidelity": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 2:00–2:51 크레이지 8 스케치 리뷰를 받아쓰기로 재구성", en: "Reconstructed from the Crazy 8's sketch review in the 9 May class (220509), 2:00–2:51" },
    beats: [
      { who: "t2",  t: "02:01:56", text: { ko: "카테고리 순서에 의미가 없다면 그냥 알파벳순이 제일 좋아요. 기준이 안 보이면 사용자는 결국 전부 열어봐야 하거든요.", en: "If the category order means nothing, just go alphabetical. When people can't see the rule, they end up opening everything." }, card: { kind: "list", ko: ["알파벳순: 기준이 없을 때", "인기순: 데이터가 쌓였을 때", "최신순: 날짜가 의미 있을 때"], en: ["Alphabetical: when there's no other rule", "Popularity: once you have the data", "Newest: when dates matter"] } },
      { who: "ria", t: "02:03:44", text: { ko: "퍼소나 실비아는 인터넷이 자주 끊기잖아요. 그래서 강의를 미리 받아두고 오프라인에서도 들을 수 있게 다운로드를 눈에 띄게 뒀어요.", en: "Sylvia's connection keeps dropping, so I made download prominent: save lessons ahead and watch offline." }, card: { kind: "title", ko: "퍼소나의 어려움 → 오프라인 다운로드", en: "Persona's pain → offline download" } },
      { who: "ria", t: "02:05:01", text: { ko: "강의 페이지는 글이 많아서 읽기 힘들어요. 설정 안에만 두지 말고, 그 페이지에서 바로 글자 크기를 바꿀 수 있게 'Aa' 버튼을 넣었어요.", en: "Lesson pages are text-heavy. Instead of hiding it in settings, I added an 'Aa' button to change text size right on the page." } },
      { who: "t2",  t: "02:05:31", text: { ko: "지금 하는 게 다 UX의 핵심이에요. 도움말 센터는 밖으로 꺼냈다는 것, 왜 꺼냈는지만 말하면 돼요. 따로 디자인까지 안 해도 돼요.", en: "Everything you're doing is core UX. For the help centre, just show that you moved it out and why. No need to design it." } },
      { who: "t2",  t: "02:10:47", text: { ko: "이제 스케치를 더 하는 것보다는 와이어프레임으로 넘어가는 게 나아요.", en: "At this point, moving to wireframes beats sketching more." }, card: { kind: "title", ko: "스케치는 충분, 이제 와이어프레임", en: "Enough sketching. Now wireframes." } },
      { who: "jun", t: "02:12:11", text: { ko: "저는 습관 앱을 했어요. 홈 위의 날짜 줄은 빼고 달력 아이콘 하나로 바꿨고, 체크 대신 +1을 넣었다가 되돌리기 버튼이 없어서 언두도 같이 넣어봤어요.", en: "I did a habit app. I swapped the date strip on Home for one calendar icon, and replaced the checkmark with +1, then added undo because there was none." }, card: { kind: "list", ko: ["날짜 줄 → 달력 아이콘", "체크 → +1", "+1 옆에 되돌리기"], en: ["Date strip → calendar icon", "Checkmark → +1", "Undo next to +1"] } },
      { who: "jun", t: "02:14:58", text: { ko: "고민은 스와이프예요. 밀자마자 건너뛰기가 될지, 밀고 나서 한 번 더 눌러야 할지. 저는 실수할까 봐 한 번 더 누르는 쪽인데, 인터뷰에선 바로 넘어가는 게 좋다는 분도 있었어요.", en: "My open question is swipe: skip as soon as you swipe, or swipe then tap? I'd add the tap in case of mistakes, but some interviewees wanted it instant." }, card: { kind: "vs", a: { icon: "grid", ko: "밀면 바로 건너뛰기", en: "Swipe skips instantly" }, b: { icon: "frame", ko: "밀고 나서 한 번 더 누르기", en: "Swipe, then tap to confirm" } } },
      { who: "t2",  t: "02:49:23", text: { ko: "어떤 앱이 필터 화면에서 'Apply' 버튼을 없앴어요. 지저분하다고요. 그런데 사용자들은 안 누르면 적용이 안 된 줄 알고 헷갈려해서, 결국 다시 돌려놨어요.", en: "An app once removed the 'Apply' button from its filter screen because it looked cluttered. People thought nothing applied without pressing it, so it came back." }, card: { kind: "list", ko: ["Apply 버튼 제거 → 깔끔해짐", "사용자: '적용 안 된 거 아냐?'", "결국 버튼 복구"], en: ["Removed Apply → looks cleaner", "Users: 'did it even apply?'", "Button restored"] } },
      { who: "t2",  t: "02:50:40", text: { ko: "인스타그램 하트는 누르면 바로 되죠. 잘못 눌러도 다시 누르면 되돌아가니까요. 스와이프도 언두가 있으면 바로 건너뛰어도 괜찮아요.", en: "An Instagram heart acts instantly because pressing again undoes it. With undo, a swipe can skip right away too." }, card: { kind: "quote", ko: "되돌릴 수 있으면, 바로 실행해도 된다", en: "If it can be undone, it can happen instantly" } },
      { who: "t2",  t: "02:21:38", text: { ko: "지금 한 게 딱 크레이지 8이에요. 하나를 여러 개로 펼쳐보고, 그중 제일 괜찮은 걸로 진행하는 거죠.", en: "That's exactly Crazy 8's: spread one idea into many, then take the best one forward." } },
      { who: "t2",  t: "02:22:21", text: { ko: "UI만 바꿨다고 했는데, 빼고 더하는 건 UX예요. 크기나 순서는 UI일 수 있지만, 의미 없는 걸 빼서 더 보기 편하게 만드는 건 UX예요.", en: "You said it's only UI, but adding and removing is UX. Size and order can be UI; cutting what means nothing so it's easier to use is UX." }, card: { kind: "quote", ko: "빼고 더하는 것은 UX다", en: "Adding and removing is UX" } },
      { who: "t2",  t: "02:48:10", text: { ko: "시안은 많이 만들어 보세요. 그런데 회사에서 보여줄 땐 두 개를 넘기지 마세요. 열 개를 보여주면 대답은 늘 '다 괜찮은데 몇 개 더 해볼까요?'예요.", en: "Make lots of options. But at work, show no more than two. Show ten and the answer is always 'they're all fine, can we try a few more?'" }, card: { kind: "title", ko: "많이 만들고, 두 개만 보여준다", en: "Make many, show two" } },
      { who: "t2",  t: "02:27:15", text: { ko: "차트에는 기준선이 하나 있으면 좋아요. 목표든 평균이든. 그래야 이 막대가 나한테 무슨 뜻인지 알 수 있어요.", en: "Give a chart a reference line, a goal or an average, so people know what a bar means for them." }, card: { kind: "list", ko: ["목표선: 얼마나 더 해야 하나", "평균선: 평소보다 잘했나", "둘 다 있으면 둘 다"], en: ["Goal line: how far to go", "Average line: better than usual?", "If you have both, show both"] } },
      { who: "t2",  t: "02:28:03", text: { ko: "달력이 화면 높이를 너무 많이 차지해요. 첫 화면에 퍼센트랑 달력만 보이면, 아래 걸 비교하기도 전에 의미 없는 높이가 너무 길어요.", en: "The calendar takes too much height. If the first screen is just a percentage and a calendar, there's too much empty height before anything to compare." } },
      { who: "now", text: { ko: "지금은 프롬프트 한 줄로 하이파이 화면이 나와요. 그런데 이 리뷰에서 나온 결정들, 정렬 기준, 오프라인, 되돌리기, 뭘 뺄지는 픽셀이 아니라 와이어프레임 단계에서 정해지는 것들이에요.", en: "Today one prompt gives you a hi-fi screen. But every decision in this review, sort order, offline, undo, what to cut, is made at wireframe level, not in pixels." }, card: { kind: "shift", then: { ko: "스케치 → 와이어프레임 → 하이파이", en: "Sketch → wireframe → hi-fi" }, now: { ko: "하이파이는 공짜. 와이어프레임 단계의 결정은 여전히 사람 몫", en: "Hi-fi is free; wireframe-level decisions are still yours" } } },
      { who: "now", text: { ko: "그날 결론, '되돌릴 수 있으면 바로 실행'은 AI 에이전트에서 그대로 다시 나와요. 되돌릴 수 있는 일은 바로 하고 언두를 주고, 되돌릴 수 없는 일만 한 번 더 확인받아요.", en: "That day's answer, 'if it can be undone, act now', returns with AI agents: do reversible things instantly with undo, and confirm only what can't be undone." }, card: { kind: "vs", a: { icon: "grid", ko: "되돌릴 수 있음 → 바로 + 언두", en: "Reversible → act now, offer undo" }, b: { icon: "frame", ko: "되돌릴 수 없음 → 한 번 더 확인", en: "Irreversible → confirm first" } } }
    ]
  }

  ,"interviews": {
    draft: false, session: "220509",
    source: { ko: "5월 9일 수업(220509) 2:41–2:47 스케치 리뷰 중 인터뷰 답변에 대한 피드백을 받아쓰기로 재구성", en: "Reconstructed from feedback on interview answers during the 9 May sketch review (220509), 2:41–2:47" },
    beats: [
      { who: "jun", t: "02:41:06", text: { ko: "인터뷰에서 숫자는 나중에 나왔으면 좋겠다고 했어요. 달력으로 언제 성공하고 실패했는지를 한눈에 보고 싶다고요. 그래서 달력을 맨 위에 올렸어요.", en: "Interviewees wanted numbers later. They wanted to see on a calendar, at a glance, when they succeeded and failed. So I put the calendar on top." } },
      { who: "t2",  t: "02:43:33", text: { ko: "그런데 실제로 그렇게 다 보여주는 앱이 있을까요? '한눈에 보고 싶다'고만 한 건지, 실제로 그런 앱을 써봤는지 물어보세요. 써본 것 중에 제일 편했던 게 뭐였는지요.", en: "But does any app really show it all like that? Ask whether they only said 'at a glance', or have actually used such an app, and which one felt easiest." }, card: { kind: "list", ko: ["'한눈에 보고 싶다' → 말뿐인가?", "그런 앱을 실제로 써봤나?", "그중 제일 편했던 건 무엇인가?"], en: ["'At a glance': just words?", "Have they actually used such an app?", "Which one felt easiest?"] } },
      { who: "t2",  t: "02:44:20", text: { ko: "인터뷰나 테스트에서 사람들은 대부분 깨끗하고 단순했으면 좋겠다고 해요. 그런데 단순하게 하려면 콘텐츠를 빼야 하잖아요. 그러면 또 싫어해요.", en: "In interviews and tests, most people say they want it clean and simple. But simple means cutting content, and they hate that too." }, card: { kind: "quote", ko: "콘텐츠는 그대로, 화면은 깨끗하게", en: "Keep all the content, but make it clean" } },
      { who: "t2",  t: "02:44:56", text: { ko: "그러니까 남는 방법은 하나예요. 눈앞에는 단순하게, 보고 싶을 때 펼치거나 눌러서 다음 단계로 가게.", en: "So there's one way left: simple on the surface, and expand or tap through when they want more." }, card: { kind: "title", ko: "겉은 단순하게, 깊이는 눌러서", en: "Simple on top, depth on tap" } },
      { who: "t2",  t: "02:47:07", text: { ko: "파란 칸 15개랑 빨간 칸 13개를 한눈에 구별할 수 있는 사람이 몇이나 될까요? 큰 숫자를 먼저 보여주고, 아래로 갈수록 자세하게 가는 게 맞아요.", en: "Who can tell 15 blue days from 13 red ones at a glance? Lead with the big numbers, then get more detailed as you go down." }, card: { kind: "vs", a: { icon: "grid", ko: "달력 먼저: 색을 세야 함", en: "Calendar first: count the colours" }, b: { icon: "frame", ko: "숫자 먼저, 달력은 아래 디테일", en: "Numbers first, calendar as detail" }, emph: "b" } },
      { who: "now", text: { ko: "지금은 AI가 인터뷰 녹취를 몇 분 만에 요약해줘요. 그런데 요약은 '단순했으면 좋겠다'를 그대로 옮겨 적어요. '그런 앱을 써봤나요?'라고 되묻는 건 여전히 인터뷰 자리에서 사람이 해야 해요.", en: "AI now summarises interview recordings in minutes, but a summary just copies 'they want it simple'. Asking back, 'have you used an app like that?', still has to happen live, by a person." }, card: { kind: "shift", then: { ko: "사용자가 원한다고 말한 것", en: "What users say they want" }, now: { ko: "말한 것 + 그 말을 되물어서 나온 근거", en: "What they say, plus the evidence from asking back" } } },
      { who: "now", text: { ko: "'콘텐츠는 그대로, 화면은 깨끗하게'는 AI 답변에도 똑같아요. 짧은 답을 먼저 주고, 근거와 출처는 펼쳐 보게 해요.", en: "'All the content, but clean' applies to AI answers too: lead with the short answer, and let people expand the reasoning and sources." } }
    ]
  }

  ,"ux-laws": {"draft": false, "notes": true, "source": {"ko": "강의 노트를 바탕으로 재구성한 장면 (녹화본 받아쓰기 아님)", "en": "Reconstructed from lecture notes (not from a recording)"}, "beats": [{"who": "t", "text": {"ko": "UX 법칙은 외우는 게 아니라, 왜 불편한지 설명할 때 쓰는 말이에요. 오늘은 네 개만 봐요.", "en": "UX laws aren't for memorising. They're words for explaining why something feels wrong. Four today."}, "card": {"kind": "list", "ko": ["피츠의 법칙: 멀고 작으면 누르기 어렵다", "제이콥의 법칙: 익숙한 패턴을 기대한다", "도허티 임계: 0.4초 안에 반응", "파레토: 20%가 80%를 만든다"], "en": ["Fitts: far and small is hard to hit", "Jakob: people expect familiar patterns", "Doherty: respond within 0.4s", "Pareto: 20% drives 80%"]}}, {"who": "min", "text": {"ko": "피츠의 법칙이면, 자주 누르는 버튼은 크고 가깝게 두라는 거죠?", "en": "So Fitts means: make frequent buttons big and close?"}}, {"who": "t", "text": {"ko": "맞아요. 모바일에서 주요 버튼이 엄지 닿는 아래쪽에 있는 이유예요.", "en": "Right. It's why primary buttons on mobile sit low, where the thumb reaches."}, "card": {"kind": "title", "ko": "크게, 가깝게", "en": "Big and close"}}, {"who": "me", "text": {"ko": "저는 노트에 '피츠의 법칙 - 3클릭 규칙'이라고 같이 적었어요.", "en": "In my notes I wrote 'Fitts's law - 3-click rule' as one thing."}}, {"who": "now", "text": {"ko": "그 둘은 다른 거야. 피츠는 거리와 크기의 법칙이고, 3클릭 규칙은 근거가 약한 통념이야. 클릭 수보다 매 클릭이 확신을 주는지가 중요해.", "en": "Those are different. Fitts is about distance and size; the 3-click rule is a weakly supported myth. What matters is whether each click feels sure, not the count."}, "card": {"kind": "vs", "a": {"icon": "grid", "ko": "피츠의 법칙: 거리와 크기", "en": "Fitts's law: distance and size"}, "b": {"icon": "frame", "ko": "3클릭 규칙: 근거 약한 통념", "en": "3-click rule: a weak myth"}}}, {"who": "now", "text": {"ko": "제이콥의 법칙에서 '익숙한 패턴'에는 이제 채팅창과 명령 바도 들어가. 사람들이 이미 다른 데서 배워 오거든.", "en": "Jakob's 'familiar patterns' now include chat boxes and command bars. People arrive having learned them elsewhere."}}, {"who": "now", "text": {"ko": "도허티 임계는 AI에서 제일 자주 깨져. 모델은 0.4초 안에 답을 못 주니까, 스트리밍과 진행 표시로 기다림 자체를 설계해야 해.", "en": "The Doherty threshold breaks most often with AI. A model can't answer in 0.4s, so you design the wait itself: streaming and progress."}, "card": {"kind": "shift", "then": {"ko": "0.4초 안에 응답", "en": "Respond within 0.4s"}, "now": {"ko": "응답은 늦다. 기다림을 설계한다", "en": "Responses are slow. Design the wait"}}}]}
  ,"ethics": {"draft": false, "session": "220331", "source": {"ko": "3월 31일 수업(220331) 1:20–1:27 인클루시브 디자인 조사 발표와 강사 코멘트를 받아쓰기로 재구성", "en": "Reconstructed from a research presentation on inclusive design and the instructor's comments in the 31 March class (220331), 1:20–1:27"}, "beats": [{"who": "seo", "text": {"ko": "인클루시브 디자인을 조사했어요. 사용자가 겪을 수 있는 모든 상황과 조건, 언어, 성별, 나이를 고려해서 모두를 위한 제품을 만드는 거예요.", "en": "I researched inclusive design: making products for everyone by considering every situation and condition people may be in, language, gender, age."}, "t": "01:20:38"}, {"who": "seo", "text": {"ko": "조사하다 보면 용어 세 개가 계속 같이 나와요.", "en": "Three terms keep appearing together."}, "t": "01:21:06", "card": {"kind": "list", "ko": ["유니버설 디자인: 주로 제품과 건물", "인클루시브 디자인: 디지털·서비스까지 넓게", "접근성: 장애가 있는 사용자가 쓸 수 있게"], "en": ["Universal design: mostly products and buildings", "Inclusive design: broader, digital and services", "Accessibility: usable by people with disabilities"]}}, {"who": "seo", "text": {"ko": "핵심은 특별한 집단을 겨냥하는 게 아니라, 어떤 집단도 함부로 배제하지 않는 거예요.", "en": "The core isn't targeting a special group. It's not carelessly excluding any group."}, "t": "01:23:14", "card": {"kind": "quote", "ko": "어떤 집단도 함부로 배제하지 않는다", "en": "Don't carelessly exclude any group"}}, {"who": "seo", "text": {"ko": "예시예요. 나이 많은 사용자가 읽기 힘들어해서 글자 크기 옵션을 넣고 행간과 서체를 바꿨더니, 그분들만이 아니라 모두가 만족했어요.", "en": "An example: older users struggled to read, so a text-size option was added and line spacing and typeface changed. Everyone was happier, not only them."}, "t": "01:23:53", "card": {"kind": "title", "ko": "한 집단을 위한 개선이 모두에게 좋았다", "en": "A fix for one group helped everyone"}}, {"who": "seo", "text": {"ko": "성별 선택지를 네 개에서 서른 개 이상으로 늘린 앱도 있고, 일러스트를 다양한 인종과 연령대가 나오게 바꾼 서비스도 있어요.", "en": "One app went from four gender options to over thirty; another service redrew its illustrations with varied races and ages."}, "t": "01:24:30", "card": {"kind": "list", "ko": ["글자 크기 옵션", "더 많은 성별 선택지", "다양한 사람이 나오는 일러스트"], "en": ["Text-size option", "More gender options", "Illustrations showing varied people"]}}, {"who": "t", "text": {"ko": "여러분이 정말 조심해야 할 부분이에요. 우리는 '다 비슷한 사람들'이라는 생각에 익숙하잖아요. 외국 앱을 많이 써보세요. 성별을 고르는 화면 하나도 다르게 만들어요.", "en": "This is where you must be careful. We're used to assuming everyone is alike. Use lots of apps from other countries: even a gender picker is built differently."}, "t": "01:26:49", "card": {"kind": "quote", "ko": "'다 비슷하다'는 가정을 조심한다", "en": "Beware assuming everyone is alike"}}, {"who": "now", "text": {"ko": "그땐 수업 중 조사 발표 하나였는데, 지금은 핵심 과목이야. AI는 학습한 데이터의 '보통 사람'을 기본값으로 삼거든. 배제가 화면이 아니라 답변 안에서 일어나.", "en": "Back then it was one research presentation. Now it's core. AI defaults to the 'typical person' in its training data, so exclusion happens inside the answer, not on the screen."}, "card": {"kind": "shift", "then": {"ko": "화면에서 누가 빠졌나", "en": "Who is left out of the screen?"}, "now": {"ko": "AI의 답에서 누가 빠졌나", "en": "Who is left out of the AI's answer?"}}}, {"who": "now", "text": {"ko": "그리고 윤리의 다른 절반은 조종이야. AI는 아첨하고, 사람인 척하고, 계속 말 걸게 만들 수 있어. 기능마다 물어봐. 이건 사용자가 원하는 걸 돕나, 우리가 원하는 행동을 끌어내나?", "en": "The other half of ethics is manipulation. AI can flatter, pose as human and keep people talking. Ask of every feature: does it help people do what they want, or steer them to what we want?"}, "card": {"kind": "quote", "ko": "사용자가 원하는 것인가, 우리가 원하는 것인가", "en": "What they want, or what we want?"}}]}
  ,"visual-basics": {"draft": false, "session": "220505", "source": {"ko": "5월 5일 수업(220505) 2:29–2:43 타이포그래피 질의응답과 강의를 받아쓰기로 재구성", "en": "Reconstructed from a typography Q&A and lecture in the 5 May class (220505), 2:29–2:43"}, "beats": [{"who": "min", "text": {"ko": "가독성이 UX라고 하셨잖아요. 잘 읽히게 하는 정해진 법칙 같은 게 있나요?", "en": "You said readability is UX. Are there set rules for making text readable?"}, "t": "02:29:51"}, {"who": "t2", "text": {"ko": "가독성은 접근성 안에 있고, 접근성은 인클루시브 디자인 안에 있어요. 우산 안에 우산이 있는 거죠. 그리고 폰트가 있는 이유는 하나예요. 가독성. 안 읽히는 폰트는 아무 의미가 없어요.", "en": "Readability sits inside accessibility, which sits inside inclusive design: umbrellas within umbrellas. And a font exists for one reason: readability. A font you can't read means nothing."}, "t": "02:31:15", "card": {"kind": "quote", "ko": "안 읽히는 폰트는 아무 의미가 없다", "en": "A font you can't read means nothing"}}, {"who": "t2", "text": {"ko": "산세리프는 친근하고 읽기 쉽고 모던해요. 앱들이 대부분 쓰죠. 세리프는 고상해 보여요. 뉴스 사이트에 가보면 다 세리프예요.", "en": "Sans-serif feels friendly, readable and modern; most apps use it. Serif looks refined; news sites are almost all serif."}, "t": "02:33:06", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "산세리프: 친근, 모던, 앱", "en": "Sans-serif: friendly, modern, apps"}, "b": {"icon": "frame", "ko": "세리프: 고상함, 뉴스", "en": "Serif: refined, news"}}}, {"who": "t2", "text": {"ko": "5, 6년 전에 명품 브랜드들이 한꺼번에 로고를 세리프에서 산세리프로 바꿨어요. 젊은 사람들에게 다가가려고요. 폰트는 브랜드가 누구에게 말을 거는지를 정해요.", "en": "Five or six years ago luxury brands all switched their logos from serif to sans-serif, to reach younger people. A font decides who the brand is talking to."}, "t": "02:35:25", "card": {"kind": "title", "ko": "폰트는 브랜드가 말을 거는 상대를 정한다", "en": "A font decides who the brand speaks to"}}, {"who": "t2", "text": {"ko": "룰은 룰일 뿐이에요. 무조건 따를 필요는 없지만, 알고 있으면 잘못된 길로는 안 가요. 세 가지만 기억하세요.", "en": "Rules are just rules. You needn't always follow them, but knowing them keeps you off the wrong path. Remember three."}, "t": "02:37:03", "card": {"kind": "list", "ko": ["모바일 최소 글자 크기: 11pt", "행간: 글자 크기의 120~150%, 무난한 건 140%", "한 줄 길이: 70~80자 (영어 기준 13단어쯤)"], "en": ["Minimum size on mobile: 11pt", "Line height: 120–150% of size; 140% is safe", "Line length: 70–80 characters (about 13 words)"]}}, {"who": "t2", "text": {"ko": "행간은 기본값에 맡기지 말고 직접 넣으세요. 글씨가 작으면 더 벌리고, 크면 덜 벌려요. 140으로 넣어보고 조금씩 옮겨 보세요.", "en": "Don't leave line height on default; set it yourself. Smaller text needs more, larger needs less. Start at 140 and nudge."}, "t": "02:39:49"}, {"who": "t2", "text": {"ko": "줄이 너무 길면 끝까지 갔다가 다음 줄을 못 찾아요. 그래서 자를 대고 읽는 분들이 있는 거예요. 이건 영어 기준이라 한글은 다를 수 있어요.", "en": "If a line is too long, the eye reaches the end and can't find the next line. That's why some people read with a ruler. This is for English; Korean may differ."}, "t": "02:41:27", "card": {"kind": "title", "ko": "줄이 길면 다음 줄을 못 찾는다", "en": "Long lines make the next line hard to find"}}, {"who": "t2", "text": {"ko": "디자인은 많은 것 중에 제일 중요한 것만 남기는 거예요. 그게 잘 보이게 하는 건 결국 여백이에요.", "en": "Design is keeping only what matters most. What makes it visible, in the end, is white space."}, "t": "02:42:33", "card": {"kind": "quote", "ko": "물건보다 그 옆의 여백이 더 중요하다", "en": "The space beside the thing matters more than the thing"}}, {"who": "me", "text": {"ko": "저는 그때 폰트를 천 개 넘게 모았어요.", "en": "Back then I collected over a thousand fonts."}}, {"who": "now", "text": {"ko": "모은 건 눈을 키워줬어. 그런데 그날 배운 숫자 세 개가 더 오래 남아. 지금은 그 숫자를 파일마다 넣지 않고 디자인 토큰으로 이름 붙여서, 사람도 AI도 같은 값을 쓰게 해.", "en": "Collecting trained your eye. But those three numbers lasted longer. Today they aren't typed per file; they're named design tokens that people and AI both use."}, "card": {"kind": "shift", "then": {"ko": "행간 140%를 매번 직접 입력", "en": "Type 140% line height each time"}, "now": {"ko": "토큰 하나를 모두가 사용", "en": "One token, used by everyone"}}}, {"who": "now", "text": {"ko": "그리고 AI 답변은 거의 다 긴 글이야. 11pt, 140%, 70~80자는 채팅 화면에서 그대로 통해. AI가 화면을 몇 초 만에 만들어도, 읽히는지 판단하는 건 여전히 이 눈이야.", "en": "And AI answers are mostly long text. 11pt, 140% and 70–80 characters apply directly to a chat screen. AI makes screens in seconds; judging whether they read well is still this eye."}}]}
  ,"aida": {"draft": false, "notes": true, "source": {"ko": "강의 노트를 바탕으로 재구성한 장면 (녹화본 받아쓰기 아님)", "en": "Reconstructed from lecture notes (not from a recording)"}, "beats": [{"who": "t", "text": {"ko": "랜딩 페이지는 AIDA 순서로 짜요. 위에서 아래로 한 단계씩.", "en": "Build a landing page in AIDA order, one step at a time from top to bottom."}, "card": {"kind": "list", "ko": ["Attention: 첫 화면에서 시선 잡기", "Interest: 무엇을 해주는지", "Desire: 후기와 증거", "Action: 버튼 하나"], "en": ["Attention: catch the eye up top", "Interest: what it does for you", "Desire: reviews and proof", "Action: one button"]}}, {"who": "min", "text": {"ko": "후기 섹션은 Desire에 들어가는 거죠?", "en": "So testimonials go under Desire?"}}, {"who": "t", "text": {"ko": "네. 다른 사람이 이미 써봤다는 게 제일 센 설득이에요. 그리고 Action 버튼은 하나만. 여러 개면 아무것도 안 눌러요.", "en": "Yes. That others already use it is the strongest persuasion. And one Action button. With several, people press none."}, "card": {"kind": "quote", "ko": "버튼이 여러 개면 아무것도 안 누른다", "en": "With several buttons, people press none"}}, {"who": "now", "text": {"ko": "구조는 지금도 그대로 써. 다만 많은 사람이 검색 결과나 AI 요약을 먼저 보고 와. 이미 관심 단계에서 도착하는 거야.", "en": "The structure still holds. But many people arrive via search results or an AI summary, already at Interest."}, "card": {"kind": "shift", "then": {"ko": "첫 화면에서 주의를 끈다", "en": "Win attention on the first screen"}, "now": {"ko": "이미 요약을 읽고 온다. 바로 확인시켜 준다", "en": "They've read a summary. Confirm it fast"}}}, {"who": "now", "text": {"ko": "AI가 페이지를 읽고 요약하니까, 멋진 문구보다 분명한 문장이 중요해졌어. 무엇을, 누구에게, 얼마에.", "en": "AI reads and summarises the page, so plain sentences beat clever copy: what, for whom, for how much."}}, {"who": "now", "text": {"ko": "그리고 가짜 후기는 안 돼. 설득이 아니라 신뢰를 한 번에 잃는 길이야.", "en": "And never fake reviews. That isn't persuasion; it's losing trust in one go."}}]}
  ,"wom-voc": {"draft": false, "notes": true, "source": {"ko": "강의 노트를 바탕으로 재구성한 장면 (녹화본 받아쓰기 아님)", "en": "Reconstructed from lecture notes (not from a recording)"}, "beats": [{"who": "t2", "text": {"ko": "WOM 분석은 사람들이 인터넷에 남긴 말을 모으는 거예요. 그런데 그냥 모으면 안 되고, 먼저 스토리라인을 정해요.", "en": "WOM analysis collects what people say online. But first you define a storyline."}, "card": {"kind": "list", "ko": ["1. 과업 기준 스토리라인 정의", "2. 검색어로 VOC 수집", "3. 스토리라인에 매핑", "4. 긍정/부정 분류", "5. 인사이트 → 기능 우선순위"], "en": ["1. Define a task-based storyline", "2. Collect VOC by search term", "3. Map to the storyline", "4. Tag positive/negative", "5. Insights → feature priority"]}}, {"who": "jun", "text": {"ko": "스토리라인이 뭐예요?", "en": "What's a storyline?"}}, {"who": "t2", "text": {"ko": "사용자가 하는 일의 순서예요. 찾기, 비교하기, 결제하기처럼요. 그 칸에 후기를 넣어보면 어디서 불만이 몰리는지 보여요.", "en": "The sequence of what users do: find, compare, pay. Put reviews in those slots and you see where complaints pile up."}, "card": {"kind": "title", "ko": "불만이 몰리는 단계를 찾는다", "en": "Find the step where complaints pile up"}}, {"who": "me", "text": {"ko": "저는 엑셀에 하나씩 붙여넣고 색칠했어요. 며칠 걸렸어요.", "en": "I pasted them into a spreadsheet one by one and coloured them. It took days."}}, {"who": "now", "text": {"ko": "지금은 모델이 리뷰 수천 개를 몇 분 만에 분류해. 그래서 일이 옮겨갔어. 분류 체계를 설계하고, 분류가 맞는지 샘플을 직접 검수하는 쪽으로.", "en": "A model now sorts thousands of reviews in minutes. So the work moved: design the categories, and check samples yourself."}, "card": {"kind": "shift", "then": {"ko": "직접 읽고 직접 분류", "en": "Read and tag by hand"}, "now": {"ko": "분류 체계 설계 + 샘플 검수", "en": "Design the scheme + audit samples"}}}, {"who": "now", "text": {"ko": "검수는 숫자로 해. 100개를 뽑아서 모델 라벨과 내 라벨이 몇 개나 맞는지 세어 봐. 데이터 분석을 해본 게 여기서 강점이 돼.", "en": "Audit with numbers. Pull 100 and count how many model labels match yours. Your data-analysis background pays off here."}, "card": {"kind": "quote", "ko": "100개를 뽑아 직접 세어 본다", "en": "Pull 100 and count for yourself"}}]}
  ,"stakeholder-ci": {"draft": false, "session": "220516", "source": {"ko": "5월 16일 수업(220516) 2:30–2:46 디자인 리서치 강의를 받아쓰기로 재구성", "en": "Reconstructed from the design-research lecture in the 16 May class (220516), 2:30–2:46"}, "beats": [{"who": "t2", "text": {"ko": "디자인 리서치는 사용자를 중심으로 연구하는 틀이에요. 우리 사용자가 누구인지, 제품을 어떤 방법으로 쓰는지를 알아내서 더 나은 제품을 만들려고 하는 거예요.", "en": "Design research is a framework for studying users: who they are and how they use the product, so we can make a better one."}, "t": "02:30:45"}, {"who": "t2", "text": {"ko": "인사이트는 사람들이 말한 걸 받아 적어서 나오는 게 아니에요. 말한 것, 행동한 것, 표정, 결과, 걸린 시간을 다 합쳐서 나와요.", "en": "Insight doesn't come from writing down what people said. It comes from combining what they said, did, their expressions, the result and the time it took."}, "t": "02:31:56", "card": {"kind": "list", "ko": ["말한 것", "행동한 것", "표정", "실제 결과", "걸린 시간"], "en": ["What they said", "What they did", "Their expressions", "The actual result", "Time taken"]}}, {"who": "t2", "text": {"ko": "항상 기억하세요. 디자이너는 디자인을 시작하는 순간부터 사용자가 아니에요. 그래서 남의 말을 듣고, 모으고, 분석해야 해요.", "en": "Always remember: the moment you start designing, you're no longer the user. So you must listen to others, collect, and analyse."}, "t": "02:33:32", "card": {"kind": "quote", "ko": "디자인을 시작하는 순간, 나는 사용자가 아니다", "en": "Once you start designing, you are not the user"}}, {"who": "jun", "text": {"ko": "방법은 어떤 게 있어요?", "en": "What methods are there?"}, "t": "02:34:54"}, {"who": "t2", "text": {"ko": "제일 흔한 건 유저 인터뷰예요. 궁금한 게 풀릴 때까지 계속 물어볼 수 있어서, 들인 시간에 비해 가장 많이 얻어요.", "en": "The most common is the user interview. You can keep asking until your question is answered, so it yields the most for the time spent."}, "t": "02:35:17", "card": {"kind": "list", "ko": ["유저 인터뷰", "관찰 리서치", "장기 추적 연구", "서베이·설문", "카드소팅", "사용성 테스트"], "en": ["User interviews", "Observational research", "Longitudinal studies", "Surveys", "Card sorting", "Usability testing"]}}, {"who": "t2", "text": {"ko": "관찰 리서치는 말을 듣고 해석하는 게 아니라, 행동을 보고 이해하는 방법이에요.", "en": "Observational research means understanding by watching behaviour, not interpreting what people say."}, "t": "02:37:50", "card": {"kind": "title", "ko": "말을 해석하지 않고 행동을 본다", "en": "Watch behaviour; don't interpret words"}}, {"who": "t2", "text": {"ko": "서베이는 시간을 덜 들이고 정보를 받을 수 있어요. 대신 예/아니오나 객관식이라 얻는 정보가 제한적이에요.", "en": "Surveys get information with less time. But yes/no and multiple choice limit what you learn."}, "t": "02:40:07", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "서베이: 빠르다, 얕다", "en": "Survey: fast, shallow"}, "b": {"icon": "frame", "ko": "인터뷰: 느리다, 깊다", "en": "Interview: slow, deep"}}}, {"who": "t2", "text": {"ko": "프로토타입이라는 말은 원래 쓰고 버린다는 뜻에서 왔어요. 종이로도 돼요. 꼭 와이어프레임까지 만들어야 테스트할 수 있는 게 아니에요.", "en": "'Prototype' comes from something you use and throw away. Paper works. You don't need wireframes before you can test."}, "t": "02:41:48", "card": {"kind": "quote", "ko": "프로토타입은 쓰고 버리는 것이다", "en": "A prototype is made to be thrown away"}}, {"who": "t2", "text": {"ko": "용어 하나 조심하세요. 유저 테스트와 사용성 테스트는 다른 말이에요. 유저 테스트가 더 넓고, 사용성 테스트는 기능이 쓸 만한지만 봐요. 인터뷰에서 헷갈리지 마세요.", "en": "Mind one term: user testing and usability testing differ. User testing is broader; usability testing checks only whether functions are usable. Don't mix them up in interviews."}, "t": "02:42:27", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "유저 테스트: 넓다 (컨셉 테스트 포함)", "en": "User testing: broad (incl. concept tests)"}, "b": {"icon": "frame", "ko": "사용성 테스트: 기능이 쓸 만한가", "en": "Usability testing: are functions usable?"}}}, {"who": "now", "text": {"ko": "'행동을 본다'는 AI가 대신 못 해. 에이전트를 설계하려면 실제 업무에서 일이 어디서 넘겨지고, 확인되고, 고쳐지는지 직접 봐야 하거든.", "en": "'Watch behaviour' can't be delegated to AI. To design an agent you have to see where real work is handed off, checked and corrected."}, "card": {"kind": "title", "ko": "넘기는 곳, 확인하는 곳, 고치는 곳", "en": "Where work is handed off, checked, fixed"}}, {"who": "now", "text": {"ko": "'나는 사용자가 아니다'는 한 단계 더 가. AI도 사용자가 아니야. AI가 만든 가상 사용자 반응은 가설로만 쓰고, 근거는 실제 사람에게서 얻어.", "en": "'I am not the user' goes one step further: AI isn't the user either. Treat AI-simulated user reactions as hypotheses; get evidence from real people."}, "card": {"kind": "shift", "then": {"ko": "나는 사용자가 아니다", "en": "I am not the user"}, "now": {"ko": "나도, AI도 사용자가 아니다", "en": "Neither I nor the AI is the user"}}}, {"who": "now", "text": {"ko": "그리고 AI 기능이면 이해관계자에게 세 가지를 더 물어.", "en": "And for AI features, ask stakeholders three more things."}, "card": {"kind": "list", "ko": ["허용할 수 있는 오류는 어느 정도인가", "틀렸을 때 누가 책임지나", "절대 자동화하면 안 되는 일은 무엇인가"], "en": ["How much error is acceptable?", "Who is responsible when it's wrong?", "What must never be automated?"]}}]}
  ,"fgi-survey": {"draft": false, "notes": true, "source": {"ko": "강의 노트를 바탕으로 재구성한 장면 (녹화본 받아쓰기 아님)", "en": "Reconstructed from lecture notes (not from a recording)"}, "beats": [{"who": "t2", "text": {"ko": "서베이는 만들기 전에 먼저 물어요. 정말 서베이가 필요한가?", "en": "Before building a survey, ask: do we need one at all?"}, "card": {"kind": "vs", "a": {"icon": "grid", "ko": "서베이: 얼마나 많은가", "en": "Survey: how many?"}, "b": {"icon": "frame", "ko": "인터뷰: 왜 그런가", "en": "Interview: why?"}}}, {"who": "min", "text": {"ko": "분석은 평균만 보면 되나요?", "en": "Is the average enough for analysis?"}}, {"who": "t2", "text": {"ko": "평균만 보면 놓쳐요. 누가 답했는지, 상위 두 칸이 몇 퍼센트인지, 그룹별로 나눠서 봐요. 그리고 주관식으로 이유를 봐요.", "en": "Averages hide things. Look at who answered, the top-two share, and split by group. Then read open answers for why."}, "card": {"kind": "list", "ko": ["응답자 프로파일", "문항별 평균", "Top 2 비율", "교차 분석", "Why 분석"], "en": ["Respondent profile", "Mean per question", "Top-2 share", "Cross-tabs", "Why analysis"]}}, {"who": "t2", "text": {"ko": "FGI는 여러 명을 한자리에 모으는 거예요. 그룹별로 프로토타입 반응을 비교할 때 좋아요. 다만 목소리 큰 사람을 조심하세요.", "en": "A focus group puts several people in one room. Good for comparing reactions by group. Watch for the loudest voice."}}, {"who": "now", "text": {"ko": "요즘 온라인 서베이에는 AI가 쓴 답이 섞여. 주관식이 다 매끈하고 비슷하면 의심해 봐.", "en": "Online surveys now contain AI-written answers. If open answers are all smooth and alike, be suspicious."}, "card": {"kind": "list", "ko": ["주의 확인 문항 넣기", "주관식 직접 읽기", "믿을 수 있는 모집 경로"], "en": ["Add attention checks", "Read open answers yourself", "Recruit from trusted sources"]}}, {"who": "now", "text": {"ko": "반대로 다이어리 스터디는 다시 중요해졌어. AI 어시스턴트는 몇 주 써봐야 신뢰가 어떻게 변하는지 보이거든.", "en": "Diary studies matter again. With an AI assistant, how trust changes only shows over weeks of use."}, "card": {"kind": "shift", "then": {"ko": "한 번 써본 반응", "en": "Reaction to one session"}, "now": {"ko": "몇 주 동안 변하는 신뢰", "en": "Trust changing over weeks"}}}]}
  ,"card-sorting": {"draft": false, "session": "220613", "source": {"ko": "6월 13일 수업(220613) 3:01–3:08 정보 구조와 카드소팅 강의를 받아쓰기로 재구성", "en": "Reconstructed from the information-architecture and card-sorting lecture in the 13 June class (220613), 3:01–3:08"}, "beats": [{"who": "t2", "text": {"ko": "정보 구조는 도서관 사서를 생각하면 돼요. 새 책이 오면 농업, 채소 기르기 하는 식으로 분류해서 꽂고, 찾는 사람이 바로 찾게 해주잖아요. 똑같아요.", "en": "Think of information architecture as a librarian. A new book gets classified, farming, growing vegetables, shelved, and made findable. Same thing."}, "t": "03:01:25", "card": {"kind": "title", "ko": "정보 구조 = 도서관 사서의 일", "en": "Information architecture = a librarian's job"}}, {"who": "t2", "text": {"ko": "사람들은 목적이 있어서 와요. 길을 잃지 않고, 다른 데를 안 거치고 바로 가게 해주는 게 첫 번째 이유예요.", "en": "People arrive with a purpose. The first reason is to get them there without getting lost or detouring."}, "t": "03:02:45"}, {"who": "t2", "text": {"ko": "정보 구조를 만드는 방법의 90% 이상은 카드소팅이에요. 쉽고, 돈이 안 들어요. 참여자를 불러서 할 수도 있고, 팀끼리 할 수도 있어요.", "en": "Over 90% of IA work uses card sorting. It's easy and costs nothing. You can run it with participants or within the team."}, "t": "03:04:05", "card": {"kind": "quote", "ko": "쉽고, 돈이 안 든다", "en": "Easy, and it costs nothing"}}, {"who": "t2", "text": {"ko": "오픈 카드소팅은 카드를 주고 비슷한 것끼리 묶어 보라고 해요. 그리고 묶음에 이름을 직접 붙이게 해요. 바나나와 사과를 묶고 '과일'이라고 붙이면, 그게 메뉴가 돼요.", "en": "In an open sort, people group similar cards, then name each group themselves. Group banana and apple, name it 'Fruit', and that becomes a menu."}, "t": "03:05:10", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "오픈: 묶고, 이름도 직접 붙인다", "en": "Open: group, then name the groups"}, "b": {"icon": "frame", "ko": "클로즈드: 정해진 그룹에 넣는다", "en": "Closed: place into given groups"}}}, {"who": "jun", "text": {"ko": "바나나랑 사과는 너무 뻔한데요?", "en": "Banana and apple seem too obvious."}, "t": "03:07:01"}, {"who": "t2", "text": {"ko": "예시라서 그래요. 실제 사이트를 해보면 이게 여기 들어가야 할지 저기 들어가야 할지 헷갈리는 게 꼭 나와요. 그게 카드소팅으로 찾으려는 거예요.", "en": "That's just the example. On a real site there's always something that could go here or there. That's what card sorting is for."}, "t": "03:07:12", "card": {"kind": "title", "ko": "헷갈리는 카드를 찾는 것이 목적", "en": "The goal is to find the ambiguous cards"}}, {"who": "t2", "text": {"ko": "클로즈드에서 애매한 카드가 나오면, 메뉴 구조를 나무처럼 보여주고 '이건 어디에 들어갈까요?' 하고 물어요. 맥락을 하나 더 주는 거예요.", "en": "When a card is ambiguous in a closed sort, show the menu as a tree and ask 'where would this go?' You're giving one more piece of context."}, "t": "03:07:59"}, {"who": "now", "text": {"ko": "방법은 그대로야. AI에게 먼저 묶어보게 할 수도 있는데, 그건 예상일 뿐이야. '헷갈리는 카드'는 실제 사람이 망설이는 걸 봐야 나와.", "en": "The method stands. You can ask AI to sort first, but that's a guess. The ambiguous cards only show when you watch real people hesitate."}, "card": {"kind": "vs", "a": {"icon": "grid", "ko": "AI 예상 분류: 가설", "en": "AI's sort: a hypothesis"}, "b": {"icon": "frame", "ko": "사용자 분류: 근거", "en": "Users' sort: the evidence"}}}, {"who": "now", "text": {"ko": "사서 비유는 AI 시대에 더 잘 맞아. 이제 정보를 찾는 건 사람만이 아니라 AI 검색이기도 해. 분류와 이름이 분명해야 AI도 맞는 문서를 꺼내 와.", "en": "The librarian fits the AI era even better. AI search now does the finding too. Clear categories and names help AI pull the right document."}, "card": {"kind": "shift", "then": {"ko": "사람이 메뉴에서 찾는다", "en": "People find it in the menu"}, "now": {"ko": "사람도 찾고, AI도 찾아서 답한다", "en": "People find it, and AI finds it to answer"}}}]}
  ,"design-system": {"draft": false, "session": "220328", "source": {"ko": "3월 28일 수업(220328) 0:19–0:31 디자인 시스템 조사 발표·강사 보충과 5월 30일 수업(220530) 2:14–2:23 스페이싱 시스템 강의를 받아쓰기로 재구성", "en": "Reconstructed from a design-system research presentation and instructor notes in the 28 March class (220328), 0:19–0:31, and the spacing-system lecture in the 30 May class (220530), 2:14–2:23"}, "beats": [{"who": "jun", "text": {"ko": "디자인 시스템을 조사했어요. 일관된 디자인과 패턴, 컴포넌트를 만들어 두고 같이 쓰는 거예요. 개발자와 디자이너 사이의 불필요한 소통을 줄여줘요.", "en": "I researched design systems: consistent design, patterns and components made once and shared. They cut needless back-and-forth between developers and designers."}, "t": "00:19:32"}, {"who": "t", "text": {"ko": "이 한 장이 80%예요. 디자인 시스템에서 중요한 건 두 가지, 일관성과 커뮤니케이션 비용이에요. 개발자와 디자이너는 생각하는 방식이 정말 달라요. 그 비용을 줄이는 수단이에요.", "en": "This one page is 80% of it. Two things matter in a design system: consistency and communication cost. Developers and designers think very differently; this is how you lower that cost."}, "t": "00:20:05", "card": {"kind": "list", "ko": ["일관성", "커뮤니케이션 비용 줄이기"], "en": ["Consistency", "Lower communication cost"]}}, {"who": "t", "text": {"ko": "몇 달 하고 끝나는 프로젝트는 시스템 없이 들어가기도 해요. 그런데 큰 회사에 가면 앞사람이 하던 걸 이어받고, 내 뒤에도 누가 이어받아요. 그래서 필요해요.", "en": "A project that ends in a few months may skip the system. At a large company you inherit work and someone inherits yours. That's why you need one."}, "t": "00:21:36", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "짧은 프로젝트: 없이도 간다", "en": "Short project: can go without"}, "b": {"icon": "frame", "ko": "오래 가는 제품: 이어받기 위해 필요", "en": "Long-lived product: needed for handover"}}}, {"who": "jun", "text": {"ko": "색과 글자를 정해 두면 브랜드가 일관되게 전달되고, 작업 시간이 줄고, 고칠 때 한 번에 바뀌어요.", "en": "With colour and type defined, the brand stays consistent, work goes faster, and a change updates everything at once."}, "t": "00:23:15", "card": {"kind": "title", "ko": "고칠 때 한 번에 바뀐다", "en": "One change updates everything"}}, {"who": "jun", "text": {"ko": "종류를 묶어 봤어요. 운영체제용은 기기별로 나뉘고 내용이 방대해요. 어떤 곳은 색과 글자뿐 아니라 말투까지 정해요. '결제를 취소하시겠어요?'를 어떤 어조로 쓸지요.", "en": "I grouped the types. OS-level systems are split by device and are huge. Some define tone of voice as well as colour and type: how to phrase 'Cancel this payment?'"}, "t": "00:24:13", "card": {"kind": "list", "ko": ["운영체제 가이드: 기기별, 방대함", "제품 디자인 시스템: 자유도가 높음", "브랜드 시스템: 말투와 접근성까지"], "en": ["OS guidelines: per device, vast", "Product systems: more freedom", "Brand systems: tone of voice and accessibility too"]}}, {"who": "t", "text": {"ko": "잘했어요. 앱을 만들면 플랫폼 가이드를 꼭 보세요. 운영체제마다 개발 언어도, 정해 둔 규칙도 달라요. 화면 가장자리의 안전 영역 같은 값도 거기 있어요.", "en": "Well done. When you build an app, read the platform guidelines. Each OS has its own language and rules; values like the screen's safe area are in there."}, "t": "00:29:03"}, {"who": "t2", "text": {"ko": "여백을 바탕으로 디자인하세요. 넉넉하게 주고, 묶을 건 같이 묶어요. 가까우면 한 덩어리로, 멀면 다른 덩어리로 읽혀요.", "en": "Design from white space. Be generous, and group what belongs together. Close reads as one group; far reads as another."}, "t": "02:14:07", "card": {"kind": "title", "ko": "가까우면 한 덩어리, 멀면 다른 덩어리", "en": "Near means together; far means separate"}, "s": "220530"}, {"who": "t2", "text": {"ko": "간격을 재는 방법은 두 가지예요. 글자 상자로 재거나 베이스라인으로 재거나. 뭘 쓰든 맞지만, 디자인에서 잰 방법 그대로 개발해야 해요. 다르면 10픽셀씩 어긋나요.", "en": "There are two ways to measure spacing: by the text box or by the baseline. Either is fine, but development must use the same one as design, or you're off by ten pixels."}, "t": "02:17:30", "card": {"kind": "quote", "ko": "디자인에서 잰 방법 그대로 개발한다", "en": "Build with the same measure you designed with"}, "s": "220530"}, {"who": "t2", "text": {"ko": "간격 값이 수십 개면 디자인도 개발도 힘들어요. 몇 개만 정해서 쓰세요. 그리고 8의 배수가 가장 안전해요. 2배, 3배로 내보내도 비율이 안 깨져요.", "en": "Dozens of spacing values make both design and development hard. Pick a few. Multiples of 8 are safest: exports at 2x and 3x keep their proportions."}, "t": "02:19:49", "card": {"kind": "list", "ko": ["간격 값은 몇 개만", "8의 배수: 8, 16, 24, 32…", "2배·3배 화면에서도 비율 유지"], "en": ["Only a few spacing values", "Multiples of 8: 8, 16, 24, 32…", "Proportions hold at 2x and 3x"]}, "s": "220530"}, {"who": "t2", "text": {"ko": "6과 8처럼 너무 비슷한 간격은 모호해요. 간격을 다르게 주는 이유는 대비예요. 대비는 크기, 위치, 색으로도 줄 수 있지만 가장 효과적인 게 여백이에요.", "en": "Spacing that's too similar, like 6 and 8, is ambiguous. We vary spacing for contrast. Size, position and colour give contrast too, but space is the most effective."}, "t": "02:22:29", "card": {"kind": "title", "ko": "비슷한 간격은 모호하다. 차이는 분명하게", "en": "Similar gaps are ambiguous. Make the difference clear"}, "s": "220530"}, {"who": "now", "text": {"ko": "지금은 이 시스템을 읽는 사람이 늘었어. 사람만이 아니라 AI도 읽어. '커뮤니케이션 비용'이 디자이너와 개발자 사이에서 사람과 AI 사이로 넓어진 거야.", "en": "The system now has more readers: AI as well as people. 'Communication cost' has widened from designer–developer to human–AI."}, "card": {"kind": "shift", "then": {"ko": "디자이너와 개발자 사이의 소통 비용", "en": "Communication cost between designer and developer"}, "now": {"ko": "사람과 AI 사이의 소통 비용까지", "en": "Plus the cost between people and AI"}}}, {"who": "now", "text": {"ko": "8의 배수 같은 규칙은 이제 토큰으로 적어 둬. 규칙이 분명하면 AI가 일관된 화면을 만들고, 애매하면 화면마다 다른 간격이 나와. 말투를 정해 둔 시스템은 AI가 쓰는 문장에도 그대로 쓰여.", "en": "Rules like multiples of 8 now live as tokens. Clear rules give consistent AI-built screens; vague ones give a different gap each time. A system that defines tone of voice also governs the sentences AI writes."}}, {"who": "now", "text": {"ko": "그리고 AI 기능에만 있는 컴포넌트가 생겼어.", "en": "And there are components only AI features need."}, "card": {"kind": "list", "ko": ["스트리밍 텍스트", "출처 표시", "확신도 표시", "피드백 버튼"], "en": ["Streaming text", "Source citations", "Confidence display", "Feedback buttons"]}}]}
  ,"heuristics": {"draft": false, "session": "220502", "source": {"ko": "5월 2일 수업(220502) 2:37–2:53 휴리스틱 평가 강의를 받아쓰기로 재구성", "en": "Reconstructed from the heuristic-evaluation lecture in the 2 May class (220502), 2:37–2:53"}, "beats": [{"who": "t2", "text": {"ko": "휴리스틱 평가는 정해진 기준으로 화면의 결함을 찾는 거예요. 오래된 이론이지만 안 쓰는 건 아니에요. 리디자인할 때 어디를 고칠지 기준점이 생겨요.", "en": "Heuristic evaluation finds flaws in a screen against set criteria. It's an old theory but not a dead one. In a redesign it tells you what to fix."}, "t": "02:37:44", "card": {"kind": "title", "ko": "고칠 곳의 기준점을 만든다", "en": "It gives you a baseline for what to fix"}}, {"who": "t2", "text": {"ko": "첫째, 뭔가 하면 바로 알려줘야 해요. 장바구니에 담겼는지, 로그인이 됐는지. 아무 말 없이 넘어가면 사용자는 어떻게 됐는지 몰라요.", "en": "First, respond right away: was it added to the cart, did login work? If the screen says nothing, people don't know what happened."}, "t": "02:39:45", "card": {"kind": "title", "ko": "1. 한 일에는 바로 피드백", "en": "1. Immediate feedback for every action"}}, {"who": "t2", "text": {"ko": "둘째, 익숙한 말을 써요. 온라인에 진짜 장바구니는 없잖아요. 그래도 '장바구니'라고 부르니까 바로 알아들어요.", "en": "Second, use familiar words. There's no real basket online, but call it a 'cart' and everyone understands."}, "t": "02:40:48", "card": {"kind": "title", "ko": "2. 생활에서 쓰는 말로", "en": "2. Speak in everyday words"}}, {"who": "t2", "text": {"ko": "셋째, 사용자에게 선택권을 줘요. 그래서 온보딩에 '건너뛰기'가 있어요. 메일을 보내고 나면 2~3초 동안 '보내기 취소'가 뜨죠. 마음을 돌릴 시간을 주는 거예요.", "en": "Third, give people a choice. That's why onboarding has 'Skip'. After you send an email, 'Undo' shows for two or three seconds: time to change your mind."}, "t": "02:41:49", "card": {"kind": "list", "ko": ["온보딩의 '건너뛰기'", "메일 '보내기 취소' 2~3초"], "en": ["'Skip' in onboarding", "'Undo send' for 2–3 seconds"]}}, {"who": "t2", "text": {"ko": "넷째는 일관성이에요. 가장 쉽게 고칠 수 있는 거예요. 이 페이지에서 빨간 네모였던 버튼이 다음 페이지에서 노란 동그라미면 사용자는 엄청 헷갈려요.", "en": "Fourth is consistency, the easiest thing to fix. If a red square button turns into a yellow circle on the next page, people get very confused."}, "t": "02:43:21", "card": {"kind": "quote", "ko": "일관성은 가장 쉽게 고칠 수 있는 UX다", "en": "Consistency is the easiest UX fix"}}, {"who": "t2", "text": {"ko": "다섯째, 실수를 막아요. 돈을 보낼 때는 금액과 받는 곳을 요약해서 마지막에 한 번 더 물어요. 보내고 나면 복구가 안 되니까요.", "en": "Fifth, prevent mistakes. When sending money, summarise the amount and recipient and ask once more. Once sent, it can't be recovered."}, "t": "02:44:59", "card": {"kind": "title", "ko": "5. 되돌릴 수 없으면 한 번 더 묻는다", "en": "5. If it can't be undone, ask again"}}, {"who": "t2", "text": {"ko": "여섯째, 사람은 단기 기억이 약해요. 한꺼번에 많이 주면 정리를 못 해요. 그래서 메뉴를 다 펼치지 않고 묶어서 작은 카테고리로 나눠요.", "en": "Sixth, short-term memory is weak. Give people a lot at once and they can't sort it. So don't spread the whole menu out; group it into small categories."}, "t": "02:45:40", "card": {"kind": "title", "ko": "6. 다 펼치지 말고 묶는다", "en": "6. Group it; don't spread it all out"}}, {"who": "t2", "text": {"ko": "일곱째, 메뉴 말고 더 빠른 길도 줘요. 단축키나 제스처요. 잘 만든 캐러셀은 클릭도 되지만 키보드 화살표로도 넘어가요. 말은 안 해도 숨겨 둔 거죠.", "en": "Seventh, offer a faster path than the menu: shortcuts and gestures. A good carousel works by click, and also by arrow keys. Unannounced, but there."}, "t": "02:48:29", "card": {"kind": "title", "ko": "7. 익숙한 사람을 위한 빠른 길", "en": "7. A fast path for experienced users"}}, {"who": "t2", "text": {"ko": "오류가 나면 무엇이 잘못됐는지 알아듣게 말해줘요. '에러 코드 20'을 누가 알겠어요? 뭐가 문제인지 알아야 같은 실수를 반복하지 않아요.", "en": "When an error happens, say what went wrong in words people understand. Who knows what 'error code 20' means? Knowing the problem stops the same mistake."}, "t": "02:50:47", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "'에러 코드 20'", "en": "'Error code 20'"}, "b": {"icon": "frame", "ko": "무엇이 잘못됐고 어떻게 고치나", "en": "What went wrong and how to fix it"}}}, {"who": "t2", "text": {"ko": "단점은 시간이 많이 걸린다는 거예요. 그리고 내 기준으로 판단하는 거라, 편견을 줄이려면 여러 사람이 같이 해야 해요.", "en": "The downside is time. And it's judged by your own standard, so to reduce bias several people should do it together."}, "t": "02:52:40", "card": {"kind": "list", "ko": ["장점: 항목별로 명확한 체크리스트", "단점: 화면마다 점검해서 오래 걸림", "단점: 평가자 기준에 좌우됨 → 여러 명이"], "en": ["Plus: a clear checklist per item", "Minus: slow, screen by screen", "Minus: depends on the evaluator → use several"]}}, {"who": "now", "text": {"ko": "그날 배운 항목은 지금도 다 맞아. AI에서는 뜻이 더 날카로워져. 바로 피드백은 'AI가 지금 뭘 하는 중인가'가 되고, 선택권은 '멈추고 되돌릴 수 있는가'가 돼.", "en": "Everything from that day still holds, and sharpens with AI. Immediate feedback becomes 'what is the AI doing right now?'; choice becomes 'can I stop and undo?'"}, "card": {"kind": "shift", "then": {"ko": "바로 피드백: 장바구니에 담겼습니다", "en": "Feedback: added to cart"}, "now": {"ko": "바로 피드백: AI가 지금 하는 일", "en": "Feedback: what the AI is doing now"}}}, {"who": "now", "text": {"ko": "메일 '보내기 취소'와 송금 전 확인은 에이전트 설계 그대로야. 되돌릴 수 있는 일엔 취소할 시간을 주고, 되돌릴 수 없는 일은 요약해서 한 번 더 물어.", "en": "'Undo send' and the pre-transfer check are agent design exactly: give a window to cancel what's reversible; summarise and ask again for what isn't."}}, {"who": "now", "text": {"ko": "AI 화면에는 몇 가지를 더 봐.", "en": "For AI screens, check a few more."}, "card": {"kind": "list", "ko": ["할 수 없는 일을 알려주는가", "근거와 출처를 보여주는가", "확실하지 않을 때 그렇게 말하는가", "틀린 답을 고칠 수 있는가", "무엇을 기억하는지 보이는가"], "en": ["Does it say what it can't do?", "Does it show sources?", "Does it say when unsure?", "Can a wrong answer be corrected?", "Is what it remembers visible?"]}}]}
  ,"data-driven": {"draft": false, "session": "220704", "source": {"ko": "7월 4일 수업(220704) 2:45–2:55 데이터 시각화(차트 고르기) 강의를 받아쓰기로 재구성", "en": "Reconstructed from the data-visualisation (choosing charts) lecture in the 4 July class (220704), 2:45–2:55"}, "beats": [{"who": "t2", "text": {"ko": "핀테크, 교육, 의료 쪽으로 가면 데이터 시각화를 정말 많이 써요. UX와 UI 중간쯤에 있는 일인데, 이걸 아는 사람이 조금 더 유리해요.", "en": "In fintech, education and healthcare you'll use data visualisation a lot. It sits between UX and UI, and knowing it gives you an edge."}, "t": "02:45:18"}, {"who": "t2", "text": {"ko": "차트 종류는 백 개도 넘지만 거의 다 파생이에요. 무엇을 보여주려는지로 고르면 돼요.", "en": "There are over a hundred chart types, but most are variations. Choose by what you want to show."}, "t": "02:46:22", "card": {"kind": "list", "ko": ["관계: 산점도, 버블", "비교: 막대, 선", "구성: 파이", "분포: 히스토그램"], "en": ["Relationship: scatter, bubble", "Comparison: bar, line", "Composition: pie", "Distribution: histogram"]}}, {"who": "t2", "text": {"ko": "막대 차트는 읽기 쉬워요. 높으면 많고 낮으면 적고. 레이블 붙이기도 쉬워요. 다만 막대가 수십 개가 되면 지저분해져요.", "en": "Bar charts are easy to read: tall is more, short is less, and labels are simple. But dozens of bars get messy."}, "t": "02:47:09", "card": {"kind": "title", "ko": "막대: 읽기 쉽고 레이블 붙이기 쉽다", "en": "Bar: easy to read, easy to label"}}, {"who": "t2", "text": {"ko": "무슨 차트를 쓰든 괜찮은데, 절대로 쓰지 말아야 할 게 하나 있어요. 3D예요. 건물처럼 세운 막대, 쓰지 마세요.", "en": "Any chart is fine if it fits, with one thing never to use: 3D. Bars standing like buildings: don't."}, "t": "02:48:25", "card": {"kind": "quote", "ko": "3D 차트는 절대 쓰지 않는다", "en": "Never use 3D charts"}}, {"who": "t2", "text": {"ko": "파이는 조각 크기가 비슷해지면 뭐가 더 큰지 비교하기 힘들어요. 세 개면 괜찮지만 서른 개면 아무것도 몰라요. 그리고 시간에 따른 변화는 못 보여줘요.", "en": "With a pie, similar slices are hard to compare. Three is fine; thirty tells you nothing. And it can't show change over time."}, "t": "02:49:25", "card": {"kind": "list", "ko": ["카테고리가 적을 때만", "비슷한 크기는 비교가 어렵다", "시간의 변화는 못 보여준다"], "en": ["Only with few categories", "Similar sizes are hard to compare", "Can't show change over time"]}}, {"who": "t2", "text": {"ko": "선 차트는 일, 주, 월처럼 시간에 따라 어떻게 변하는지 볼 때 제일 많이 써요. 다만 점과 점 사이를 선으로 이으니까 실제보다 데이터가 더 있는 것처럼 보일 수 있어요.", "en": "Line charts are used most for change over time: day, week, month. But the line between points can suggest more data than there is."}, "t": "02:50:06", "card": {"kind": "vs", "a": {"icon": "grid", "ko": "선: 시간에 따른 변화", "en": "Line: change over time"}, "b": {"icon": "frame", "ko": "주의: 점 사이는 실제 데이터가 아니다", "en": "Caution: between points isn't real data"}}}, {"who": "t2", "text": {"ko": "산점도는 두 가지의 상관관계를 눈으로 쉽게 보여줘요. 데이터 과학자들이 제일 좋아하는 차트예요. 만들기는 쉽지 않아요.", "en": "A scatter plot makes the correlation between two things visible. It's data scientists' favourite. It isn't easy to make."}, "t": "02:52:07"}, {"who": "me", "text": {"ko": "데이터 분석 일을 했던 게 여기서 쓸모가 있네요.", "en": "So my data-analysis work is useful here."}}, {"who": "now", "text": {"ko": "응. 그리고 AI 기능에서는 볼 숫자가 달라져. 클릭률만으로는 답이 좋았는지 알 수 없어.", "en": "Yes. And with AI features the numbers to watch change. Click-through can't tell you whether an answer was good."}, "card": {"kind": "list", "ko": ["수정률: 답을 고쳐 쓴 비율", "재생성률: 다시 만들기를 누른 비율", "신뢰를 잃고 떠난 비율"], "en": ["Edit rate: how often answers get rewritten", "Regeneration rate", "Drop-off after losing trust"]}}, {"who": "now", "text": {"ko": "순서도 달라졌어. 출시 전에 대표 질문 세트로 답의 품질을 먼저 재고, 그다음에 A/B 테스트를 해.", "en": "The order changed too: measure answer quality on a representative question set before launch, then A/B test."}, "card": {"kind": "shift", "then": {"ko": "출시하고 A/B로 확인", "en": "Ship, then A/B"}, "now": {"ko": "출시 전 평가 세트, 그다음 A/B", "en": "Eval set before launch, then A/B"}}}, {"who": "now", "text": {"ko": "'선이 없는 데이터를 있는 것처럼 보이게 한다'는 경고는 AI가 그린 차트에 더 중요해. AI는 그럴듯한 차트를 바로 만들어 주니까, 축과 원본 숫자를 직접 확인해.", "en": "The warning that a line can imply data that isn't there matters more for AI-drawn charts. AI produces a plausible chart instantly, so check the axes and the source numbers yourself."}, "card": {"kind": "quote", "ko": "그럴듯한 차트일수록 원본 숫자를 확인한다", "en": "The more plausible the chart, the more you check the source numbers"}}]}
  ,"trust-control": {"draft": false, "notes": true, "source": {"ko": "새로 쓴 장면: '지금의 나'가 '그때의 나'에게 설명", "en": "Newly written: Me-now explains to Me-then"}, "beats": [{"who": "me", "text": {"ko": "AI 기능은 사용자가 최대한 믿게 만들면 좋은 거 아니에요?", "en": "For AI features, isn't it best to make users trust it as much as possible?"}}, {"who": "now", "text": {"ko": "아니야. 목표는 최대 신뢰가 아니라 적정 신뢰야. 맞을 땐 믿고, 틀릴 땐 의심할 수 있어야 해.", "en": "No. The goal isn't maximum trust but calibrated trust: believe it when it's right, doubt it when it's wrong."}, "card": {"kind": "vs", "a": {"icon": "bag", "ko": "최대 신뢰: 틀려도 믿는다", "en": "Maximum trust: believed even when wrong"}, "b": {"icon": "frame", "ko": "적정 신뢰: 맞을 때만 믿는다", "en": "Calibrated trust: believed when right"}}}, {"who": "me", "text": {"ko": "사용자가 맞는지 틀린지 어떻게 알아요?", "en": "How would users know if it's right or wrong?"}}, {"who": "now", "text": {"ko": "그래서 설명을 보여줘. 어디서 가져왔는지, 무슨 데이터를 썼는지, 어떻게 판단했는지. 다만 필요한 만큼만. 다 보여주면 아무도 안 읽어.", "en": "So show the explanation: where it came from, what data it used, how it reasoned. But only as much as needed. Show everything and nobody reads it."}, "card": {"kind": "list", "ko": ["출처: 어디서 왔나", "데이터: 무엇을 썼나", "추론 요약: 왜 이 답인가"], "en": ["Sources: where from", "Data: what it used", "Reasoning summary: why this answer"]}}, {"who": "now", "text": {"ko": "그리고 통제권을 줘. 휴리스틱 3번 '사용자 통제와 자유'가 AI에서 이렇게 늘어나.", "en": "And give control. Heuristic 3, 'user control and freedom', grows like this with AI."}, "card": {"kind": "list", "ko": ["중단", "편집", "되돌리기", "기억 관리", "자동화 수준 조절"], "en": ["Stop", "Edit", "Undo", "Manage memory", "Adjust autonomy level"]}}, {"who": "me", "text": {"ko": "그땐 신뢰가 브랜드나 비주얼 문제인 줄 알았어요.", "en": "Back then I thought trust was a brand and visuals thing."}}, {"who": "now", "text": {"ko": "그것도 있어. 그런데 지금은 예쁜 화면이 틀린 답을 더 믿게 만들 수도 있어. 그래서 신뢰는 꾸미는 게 아니라 맞춰주는 거야.", "en": "That's part of it. But a polished screen can now make a wrong answer more believable. So trust isn't decorated; it's calibrated."}, "card": {"kind": "shift", "then": {"ko": "신뢰 = 브랜드와 비주얼", "en": "Trust = brand and visuals"}, "now": {"ko": "신뢰 = 실제 정확도에 맞춘 믿음", "en": "Trust = belief matched to real accuracy"}}}]}
  ,"agent-handoff": {"draft": false, "notes": true, "source": {"ko": "새로 쓴 장면: '지금의 나'가 '그때의 나'에게 설명", "en": "Newly written: Me-now explains to Me-then"}, "beats": [{"who": "me", "text": {"ko": "유저 플로우는 사용자가 누르는 순서를 그리는 거잖아요. 에이전트는 뭐가 달라요?", "en": "A user flow draws the order of what the user taps. What changes with an agent?"}}, {"who": "now", "text": {"ko": "에이전트는 여러 단계를 스스로 해. 그래서 플로우에 새 질문이 생겨. 언제 멈추고 사람에게 물을까?", "en": "An agent runs several steps on its own. So the flow has a new question: when does it stop and ask a person?"}, "card": {"kind": "shift", "then": {"ko": "플로우 = 사용자의 클릭 경로", "en": "Flow = the user's click path"}, "now": {"ko": "플로우 = 에이전트가 멈추는 지점", "en": "Flow = where the agent stops"}}}, {"who": "me", "text": {"ko": "전부 물어보면 안전하지 않아요?", "en": "Wouldn't asking every time be safest?"}}, {"who": "now", "text": {"ko": "전부 물으면 사람은 읽지 않고 '확인'만 눌러. 그러면 확인이 의미가 없어져. 물을 곳만 골라서 물어.", "en": "Ask every time and people stop reading and just hit confirm. Then confirming means nothing. Ask only where it counts."}, "card": {"kind": "list", "ko": ["되돌릴 수 없는가", "비용이 큰가", "다른 사람에게 영향을 주는가", "확신이 낮은가"], "en": ["Is it irreversible?", "Is it costly?", "Does it affect other people?", "Is confidence low?"]}}, {"who": "now", "text": {"ko": "스와이프 리뷰에서 배운 거랑 같아. 되돌릴 수 있으면 바로 하고 언두를 주고, 되돌릴 수 없는 것만 확인받아.", "en": "Same as the swipe review: if it can be undone, act and offer undo; confirm only what can't be undone."}}, {"who": "me", "text": {"ko": "그럼 디자이너는 무슨 화면을 그려요?", "en": "So what screens does the designer draw?"}}, {"who": "now", "text": {"ko": "세 가지가 새 핵심 화면이야.", "en": "Three new core screens."}, "card": {"kind": "list", "ko": ["진행 보고: 지금 뭘 하는 중인가", "중간 개입: 멈추고 방향 바꾸기", "결과 검토: 무엇을 했고 무엇이 바뀌었나"], "en": ["Progress: what it's doing now", "Intervention: stop and redirect", "Review: what it did and what changed"]}}, {"who": "now", "text": {"ko": "서비스 블루프린트를 그릴 줄 알면 이미 절반은 온 거야. 사람 줄과 시스템 줄 사이에, 스스로 판단하는 에이전트 줄이 하나 생긴 거니까.", "en": "If you can draw a service blueprint you're halfway there: between the people lane and the system lane, there's now an agent lane that makes its own calls."}}]}
  ,"evals": {"draft": false, "notes": true, "source": {"ko": "새로 쓴 장면: '지금의 나'가 '그때의 나'에게 설명", "en": "Newly written: Me-now explains to Me-then"}, "beats": [{"who": "me", "text": {"ko": "AI 기능은 답이 매번 다른데, 잘 만들었는지 어떻게 알아요?", "en": "An AI feature answers differently each time. How do you know it's good?"}}, {"who": "now", "text": {"ko": "'좋은 답'이 뭔지 먼저 정해. 그리고 그걸 시험 문제 세트로 만들어. 그게 평가, eval이야.", "en": "First define what a 'good answer' is. Then turn it into a set of test questions. That's an eval."}, "card": {"kind": "title", "ko": "좋은 답의 기준을 시험 문제로 만든다", "en": "Turn 'a good answer' into test questions"}}, {"who": "me", "text": {"ko": "그건 개발자 일 아니에요?", "en": "Isn't that the engineers' job?"}}, {"who": "now", "text": {"ko": "실행은 같이 해. 그런데 사용자에게 무엇이 좋은 답인지 제일 잘 아는 사람은 리서치를 한 디자이너야.", "en": "You run it together. But the person who best knows what a good answer is for users is the designer who did the research."}, "card": {"kind": "list", "ko": ["실제 과업에서 대표 질문 고르기", "좋은 답과 나쁜 답의 예 쓰기", "채점 기준 정하기"], "en": ["Pick representative questions from real tasks", "Write examples of good and bad answers", "Define the scoring criteria"]}}, {"who": "me", "text": {"ko": "사용성 테스트의 과업 시나리오 쓰는 거랑 비슷하네요.", "en": "That's like writing task scenarios for a usability test."}}, {"who": "now", "text": {"ko": "맞아. 사용성 테스트는 사람 다섯 명에게 화면을 주고 보는 거고, eval은 모델에게 질문 백 개를 주고 채점하는 거야.", "en": "Exactly. A usability test gives a screen to five people; an eval gives the model a hundred questions and scores them."}, "card": {"kind": "vs", "a": {"icon": "grid", "ko": "사용성 테스트: 사람 5명, 화면", "en": "Usability test: 5 people, a screen"}, "b": {"icon": "frame", "ko": "Eval: 질문 100개, 모델의 답", "en": "Eval: 100 questions, the model's answers"}}}, {"who": "now", "text": {"ko": "그래서 디자인 결과물이 달라졌어. 화면만이 아니라 좋은 답의 기준도 결과물이야.", "en": "So the deliverable changed: not only screens, but the definition of a good answer."}, "card": {"kind": "shift", "then": {"ko": "결과물 = 화면", "en": "Deliverable = screens"}, "now": {"ko": "결과물 = 화면 + 좋은 답의 기준", "en": "Deliverable = screens + what good looks like"}}}]}
  ,"design-exercise": {"draft": false, "notes": true, "source": {"ko": "강의 노트를 바탕으로 재구성한 장면 (녹화본 받아쓰기 아님)", "en": "Reconstructed from lecture notes (not from a recording)"}, "beats": [{"who": "t", "text": {"ko": "디자인 과제를 받으면 바로 화면부터 그리지 마세요. 일곱 단계로 가요.", "en": "When you get a design exercise, don't start with screens. Take seven steps."}, "card": {"kind": "list", "ko": ["1. 목표 (Why)", "2. 대상 (Who)", "3. 맥락과 니즈 (When/Where)", "4. 아이디어 (What)", "5. 우선순위", "6. 해결", "7. 성공 측정 (How)"], "en": ["1. Goal (Why)", "2. Audience (Who)", "3. Context and needs (When/Where)", "4. Ideas (What)", "5. Prioritise", "6. Solve", "7. Measure success (How)"]}}, {"who": "me", "text": {"ko": "저는 시각장애인이 목적지를 찾는 과제를 했어요. 야외이고, 안내견이 없고, 대중교통을 타는 상황으로 좁혔어요.", "en": "Mine was helping a blind person find a destination. I narrowed it: outdoors, no guide dog, on public transport."}}, {"who": "t", "text": {"ko": "좋아요. 그렇게 좁혀야 풀 수 있어요. 과제는 결과만큼 과정을 봐요. 왜 그렇게 좁혔는지, 시간을 어떻게 썼는지요.", "en": "Good. Narrowing makes it solvable. An exercise is judged on process as much as result: why you narrowed, how you spent the time."}, "card": {"kind": "quote", "ko": "결과만큼 과정을 본다", "en": "Process counts as much as the result"}}, {"who": "now", "text": {"ko": "일곱 단계는 지금도 그대로 써. 달라진 건 두 가지야. 먼저 아이디어 단계에서 스스로 물어. 이 문제에 AI가 정말 필요한가?", "en": "The seven steps still work. Two things changed. First, at the ideas step ask yourself: does this problem really need AI?"}, "card": {"kind": "title", "ko": "이 문제에 AI가 필요한가?", "en": "Does this problem need AI?"}}, {"who": "now", "text": {"ko": "둘째로 측정 단계에 AI 품질이 들어가. 길 안내라면 틀린 안내가 얼마나 위험한지, 얼마나 자주 틀려도 되는지까지.", "en": "Second, measurement now includes AI quality. For navigation: how dangerous is a wrong instruction, and how often may it be wrong?"}, "card": {"kind": "shift", "then": {"ko": "성공 측정: 과업을 끝냈는가", "en": "Success: did they finish the task?"}, "now": {"ko": "+ AI가 틀렸을 때의 위험과 빈도", "en": "+ Risk and rate of AI being wrong"}}}, {"who": "now", "text": {"ko": "그리고 과제에 AI 도구를 썼으면 밝혀. 어디에 썼고, 무엇을 직접 판단했는지. 그게 지금의 '과정'이야.", "en": "And if you used AI tools on the exercise, say so: where, and what you judged yourself. That's what 'process' means now."}}]}
};
