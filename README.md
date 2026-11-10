# Pointlab engine — functional mockup v2.4 (private, not for publication)

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

v2.3 (Andy):
- Four new subsites on the same engine, each = sites/<id>.js + <id>.html + a registry line (they appear in every right-panel Sites list and on the hub Sites slide):
  conscious-architecture.html (Conscious Architecture Company), vjsh1ft.html (VJSH1FT), asset-store.html (Asset Store), generative-design.html (Generative Design).
- Identity per site = theme vars + one self-hosted face + rhythm (--ease/--dur) + hero generator (engine/generators.js: plan, scan, lattice, rose) + wordmark. All text is placeholder.
- Asset Store: each project is an asset page; `get:{label,price,href}` renders a Get row (placeholder) in the LEFT panel only, with specs as facts.
- Generative Design embeds apps/gen-canvas.html as-is (own mini menu "≡ Gen" + "Folds"), same play-mode rules and exits as Codelab.
- Image grade (port of anttipiste's colour grades): `grade:'kapoor'|'klein'|'monolith'|'violet'` (Emerald removed) maps project images/videos/screenshots to a duotone of the grade + anttipiste's soft vignette and faint light bleed. Never on live apps, never text.
  Living grade `grade:'klein-live'` (IKB pulse) stays in the engine as an UNUSED option: like the removed 'heat' it is a full-screen colour-blend layer over the media (Andy: reads as a flat colour surface on top), so it is not used anywhere.
v2.3.1 (Andy): 'heat' grade removed; Codelab has NO grade (true colours). Codelab is plain white on black: no green/teal anywhere
  (theme accent #FFF, neutral greys, white panel marker); the mock Field Toy app and its stand-in screenshots/videos are re-rendered white on black. The play ▶ stays red.
- Atelier redesigned in the red identity: grade 'kapoor', red-black ground, Space Grotesk wordmark + small mono uppercase type; no ticker, grain or overlays.
v2.4 (Andy): Conscious Architecture restyled in the data-visualisation language of Andy's private references
  (kept ONLY in the design plan Page — third-party works, never on the site): navy-charcoal ground #1C2233, white/grey hairlines,
  ONE crimson accent #E8344E only where data or meaning sits (current item, a guide, a node), small mono uppercase panel labels.
  Top page = generator 'construct' (engine/generators.js): radial grid → construction geometry (grey circles, red guides) → white
  final figure, ~26 s cycle, ≤30 fps, ~150 strokes/frame; with reduced motion / Animations off it draws the finished figure once.
  Media = self-generated placeholder SVG drawings (tests/make_cac_drawings.py): radial heat rings, plan, network, section, sequence.
  Text-animation fix (Andy: Codelab decode/rotate/ticker not animating on his Mac/iPad): the OS "Reduce motion" setting
  used to FREEZE all text effects. Now it only calms them (decode with stable glyphs, no flicker; ticker drifts 3x slower);
  the site's own Settings → Animations off is the one switch that freezes them. Spatial motion (smooth scroll, hero drawings,
  living grades, glitch banner) still honours the OS setting. window.PL_TEXT_OS='freeze' restores the old behaviour.
  Engine fix: the artist block in the left panel (name no longer squeezed into a 22 px column; role wraps).

Open directly in Chrome (file://, no server):
- index.html   — Pointlab hub (monthly gallery, news, links to sites)
- codelab.html — Codelab subsite (10-slide live-app project with play mode + 2 screen-only projects)
- fashion.html — Atelier fashion subsite (red Kapoor grade)
- conscious-architecture.html, vjsh1ft.html, asset-store.html, generative-design.html — v2.3 subsites

Structure
- engine/engine.css, engine/engine.js, engine/generators.js — the ONE shared engine
- engine/text.js — standalone text animations (PLText: scrambleIn, scrambleOut, heroDecode, rotate, glitch); usable anywhere
- engine/fonts.css + fonts/ — self-hosted Archivo (400–900) and IBM Plex Mono (400/500/700)
- components/edge-ticker.js (+ .mjs, EdgeTicker.jsx) — standalone four-edge ticker, enabled per site via config (hub only)
- sites/registry.js — list of all sites (left drawer + hub "Sites" slide)
- sites/<site>.js   — subsite config: theme vars (+ optional css string), motion, hero, identity text, projects → typed slides
- apps/field-toy.html, apps/gen-canvas.html — self-contained live web apps (play-mode demos; embedded as-is, own menus, optional postMessage protocol)
- media/ — stand-in media (swap list in media/MEDIA.md); tests/ — Playwright test + toy media renderer; shots/ — screenshots

New subsite = copy a shell .html, point it at a new sites/<id>.js, add a line in registry.js.
Slide types: concept, tutorial, shot, full, video, app, news, links. Deep link: #p=<section>&s=<slide>.
Live app protocol: engine → app {type:'pl-play',on}, {type:'pl-theme',accent}; app → engine {type:'pl-ready'}, {type:'pl-exit-play'} (Esc).

Keys: ↑↓ projects · ←→ slides · I left panel · W right panel · Esc close/exit play.
Tests: python3 tests/test_engine.py (headless Chrome).
