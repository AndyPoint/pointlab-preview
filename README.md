# Pointlab engine — functional mockup v2.2 (private, not for publication)

v2 = anttipiste index as the design + code base, JUST SITTING side panels, tech and interface first.
Media are stand-ins; see media/MEDIA.md for every slot and how to swap it.

v2.1 rules (Andy):
- NO information over projects: over project content only the bare ≡ / ||| symbols and ▶ on live-app slides. Titles, numbers, facts and captions live in the left panel and in text slides (concept, tutorial, text, notes, news articles).
- Hub + Atelier: the only text animation is the centred logo animation (top page + interlude pages between projects: `interludes:true`).
- Codelab: `text:{mode:'cover',anims:['decode','rotate','ticker'],scope:'first'}` — anttipiste text animations + edge ticker only on the top page and each project's first slide, over a dimmed full-bleed app screenshot; every other slide fullscreen with no text.
- Both side panels on every site (engine guard): 320 px, no glitch, bare ×, flat collapsible groups.
v2.2 rules (Andy):
- LEFT ≡ = the current project, by context: PROJECT NAME heading, explanation, info facts (year, type, tech), Artist (bio + portrait slot), project Links (repo, live app, video…), Project settings (config `settings:['autoplay'|'whole']`, engine-side only, stored per project), compact slide list. Top page / interludes → site + artist + project list; news article → that entry's info.
- RIGHT ||| = site navigation: Projects of this site (current marked), Pointlab hub, News, Sites, About, Contact (window.PL_SHARED), Settings (animations, auto-hide), Tools (copy link, full screen). No project content.
- Codelab apps are embedded as-is and keep their OWN menus (apps/field-toy.html has a labelled MOCK app menu ≡ App top-left + Tools top-right). Homepage and app menus are separate layers, no shared state, never merged.
- Play mode: homepage collapses to the red ▶ parked top-centre (clear of app corners). Exits the app can't swallow: ▶, a 20 px strip on the left screen edge (middle 40 % of the height, clear of the corners) — drag inward → previous slide; ← / → (host focus, or the app forwards them via postMessage {type:'pl-nav',dir}); Esc via {type:'pl-exit-play'}. Leaving the app slide exits play and brings symbols + panels back.
- Deep link to a project: #proj=<id>.
- News / blog: a project with `kind:'news'` and `entries` (date, title, lede, body, img) → list + article pages. Reusable on any site.
- engine/text.js keeps all animations; components/edge-ticker.js is used only by Codelab's config.

Open directly in Chrome (file://, no server):
- index.html   — Pointlab hub (monthly gallery, news, links to sites)
- codelab.html — Codelab subsite (10-slide live-app project with play mode + 2 screen-only projects)
- fashion.html — Atelier fashion subsite

Structure
- engine/engine.css, engine/engine.js, engine/generators.js — the ONE shared engine
- engine/text.js — standalone text animations (PLText: scrambleIn, scrambleOut, heroDecode, rotate, glitch); usable anywhere
- engine/fonts.css + fonts/ — self-hosted Archivo (400–900) and IBM Plex Mono (400/500/700)
- components/edge-ticker.js (+ .mjs, EdgeTicker.jsx) — standalone four-edge ticker, enabled per site via config (hub only)
- sites/registry.js — list of all sites (left drawer + hub "Sites" slide)
- sites/<site>.js   — subsite config: theme vars (+ optional css string), motion, hero, identity text, projects → typed slides
- apps/field-toy.html — self-contained live web app (play-mode demo; talks to the engine via postMessage)
- media/ — stand-in media (swap list in media/MEDIA.md); tests/ — Playwright test + toy media renderer; shots/ — screenshots

New subsite = copy a shell .html, point it at a new sites/<id>.js, add a line in registry.js.
Slide types: concept, tutorial, shot, full, video, app, news, links. Deep link: #p=<section>&s=<slide>.
Live app protocol: engine → app {type:'pl-play',on}, {type:'pl-theme',accent}; app → engine {type:'pl-ready'}, {type:'pl-exit-play'} (Esc).

Keys: ↑↓ projects · ←→ slides · I left panel · W right panel · Esc close/exit play.
Tests: python3 tests/test_engine.py (headless Chrome).
