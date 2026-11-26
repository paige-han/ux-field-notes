"""End-to-end checks for the Then -> Now site (webapp-testing pattern)."""
from playwright.sync_api import sync_playwright

BASE = "http://localhost:8790/index.html"
results = []

def check(name, ok, detail=""):
    results.append((name, bool(ok), detail))

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("console", lambda m: m.type == "error" and errors.append(m.text))

    page.goto(BASE + "#home"); page.wait_for_load_state("networkidle")
    check("home renders curriculum list", page.locator(".modlist li").count() == 9)
    check("summary sentence present", str(page.evaluate("window.COURSE.lessons.length")) in page.locator(".summary").inner_text())
    page.screenshot(path="/home/claude/out/e2e_home.png", full_page=True)

    # open a lesson from the list
    page.locator(".modlist a").first.click(); page.wait_for_timeout(300)
    check("module link opens a lesson", "#l-" in page.url, page.url)

    page.goto(BASE + "#l-ux-laws"); page.wait_for_timeout(300)
    # status change -> journal entry
    page.click('[data-st="holds"]'); page.wait_for_timeout(200)
    check("status pill pressed", page.locator('[data-st="holds"]').get_attribute("aria-pressed") == "true")
    # quiz
    page.click('[data-opt="1"]'); page.wait_for_timeout(200)
    check("quiz shows feedback", page.locator(".why").count() == 1)
    check("correct option marked", page.locator(".opt.right").count() == 1)
    page.click("#retry"); page.wait_for_timeout(200)
    check("retry clears quiz", page.locator(".why").count() == 0)
    # notes autosave to local storage
    page.fill("#note", "e2e note"); page.wait_for_timeout(1300)
    saved = page.evaluate("JSON.parse(localStorage.getItem('tn-state')||'{}').lessons?.['ux-laws']?.note")
    check("note saved", saved == "e2e note", str(saved))
    # done toggle + progress
    page.click("#doneBtn"); page.wait_for_timeout(200)
    check("progress shows 1 done", ("1/"+str(page.evaluate("window.COURSE.lessons.length"))) in page.locator("#progTxt").inner_text(), page.locator("#progTxt").inner_text())
    page.reload(); page.wait_for_timeout(500)
    check("note survives reload", page.input_value("#note") == "e2e note")

    # journal
    page.goto(BASE + "#log"); page.wait_for_timeout(300)
    tl = page.locator(".timeline").inner_text()
    check("journal logs status change and completion", ("판단 변경" in tl or "Changed take" in tl) and ("레슨 완료" in tl or "Lesson done" in tl))
    page.fill("#logIn", "e2e journal line"); page.click("#logAdd"); page.wait_for_timeout(200)
    check("journal entry added", "e2e journal line" in page.locator(".timeline").inner_text())

    # language toggle
    page.click('.lang button[data-lang="en"]'); page.wait_for_timeout(200)
    check("English UI", page.locator(".navtop a").nth(1).inner_text().strip() == "Journal")
    page.click('.lang button[data-lang="ko"]'); page.wait_for_timeout(200)

    # class scene
    page.goto(BASE + "#l-good-design"); page.wait_for_timeout(400)
    check("scene present", page.locator("#scene").count() == 1)
    page.click("#scNext"); page.wait_for_timeout(300)
    check("scene advances", page.locator("#segs .seg.cur").get_attribute("data-seg") == "1")
    page.click('[data-seg="5"]'); page.wait_for_timeout(300)
    check("seek shows a card", page.locator("#cardbox .ccard").count() == 1)
    check("speaker highlighted", page.locator("#scene .who.on").count() == 1)
    page.click("#scPlay"); page.wait_for_timeout(500)
    check("play toggles label", page.locator("#scPlay").inner_text() in ("일시정지", "Pause"))
    page.click("#scPlay")

    # keyboard nav between lessons
    page.locator("body").click(position={"x": 5, "y": 5}); page.keyboard.press("ArrowRight"); page.wait_for_timeout(300)
    check("arrow key goes to next lesson", page.url.endswith("#l-ux-laws"), page.url)

    # focus ring visible on a control
    page.keyboard.press("Tab")
    check("keyboard focus lands on a control", page.evaluate("document.activeElement && document.activeElement.tagName") in ("A", "BUTTON"))

    # mobile layout
    m = browser.new_page(viewport={"width": 375, "height": 812})
    m.goto(BASE + "#l-good-design"); m.wait_for_timeout(500)
    sw = m.evaluate("document.documentElement.scrollWidth")
    check("no horizontal scroll at 375px", sw <= 375, f"scrollWidth={sw}")
    m.click("#menuBtn"); m.wait_for_timeout(300)
    check("mobile menu opens", "open" in (m.locator("#side").get_attribute("class") or ""))
    m.screenshot(path="/home/claude/out/e2e_mobile.png")


    # English is the default language; browser speech fallback works and stops on navigation
    v = browser.new_page(viewport={"width": 1200, "height": 900})
    v.add_init_script("""
      window.__sp={speak:0,cancel:0};
      const fake={speak(u){window.__sp.speak++; window.__last=u;}, cancel(){window.__sp.cancel++;}, getVoices(){return []}};
      Object.defineProperty(window,'speechSynthesis',{value:fake,configurable:true});
    """)
    v.goto("http://localhost:8790/#l-persona"); v.wait_for_timeout(700)
    check("default language is English", v.evaluate("document.documentElement.lang") == "en" and v.locator('.lang button[aria-pressed="true"]').inner_text().strip() == "EN")
    check("sound toggle is available without hosted voices", v.locator("#scVoice").is_visible())
    v.click("#scVoice"); v.wait_for_timeout(300)
    check("turning sound on starts speaking", v.evaluate("window.__sp.speak") >= 1 and v.evaluate("window.__last.lang") == "en-US")
    before = v.evaluate("window.__sp.cancel")
    v.evaluate("location.hash='#l-journey'"); v.wait_for_timeout(500)
    check("leaving a lesson stops its sound", v.evaluate("window.__sp.cancel") > before)
    v.close()

    check("no console or page errors", not errors, "; ".join(errors)[:300])
    browser.close()

w = max(len(n) for n, _, _ in results)
for n, ok, d in results:
    print(("PASS " if ok else "FAIL ") + n.ljust(w) + ("  " + d if (d and not ok) else ""))
print(f"\n{sum(ok for _, ok, _ in results)}/{len(results)} passed")
