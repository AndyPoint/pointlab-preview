# Media slots (stand-ins — swap freely)

All media in this mockup is a stand-in taken from files already on the box. Media curation comes later.

Two ways to swap a picture or video:
1. **Same name:** drop your new file into `media/` with the exact file name below (keep .jpg / .mp4). Nothing else changes.
2. **New name:** put the file in `media/` and edit the `img:` / `video:` path on the line listed below.

Recommended: JPG, long edge 2400 px for `full` slides, 1600 px for `shot` slides; MP4 (H.264), muted, under ~15 MB.
`full` = fills the screen (cropped, cover); `shot` = shown whole on the project's ground (add `cover:true` to fill).

v2.5 notes
- Three new sites (We Are The Nature, Stage / Scenography, Works) share a project registry in sites/projects.js.
  A project is stored once, with a `tags` array. Works lists every project that carries any of its discipline
  tags (brand identity, graphic design, typography, illustration, photography, commercial film), so the two
  We Are The Nature commercial films also appear there. Stage / Scenography productions are tagged
  'stage design' and stay on that site. Swap a slot by dropping a file of the same name, or edit the path
  on the sites/projects.js line listed below.
- All media below are the same already-cleared stand-ins already in media/ (no new files, no private
  reference images, no grades on these three sites). Nature and Stage need Andy's own photographs,
  films, models and production videos; Works needs the client-work stills.
- System 8 (system8.html) is a Kickstarter promo laid out as a 2D grid: vertical rows (concept + App 1–4),
  horizontal pages (Overview, Tools, Demo projects, Example videos, Functionalities, Help). The campaign
  is not live: the right-panel link reads "Coming to Kickstarter" (href #); the left panel says the campaign
  is coming soon and keeps a launch-date placeholder (no reward tiers). Help text lives in the left panel;
  the help slide is a screenshot. Hero, promo and app pages reuse existing toy-*/code-tool-* stand-ins;
  swap them for the real System 8 film, screenshots and help.

v2.4 notes
- Conscious Architecture uses ONLY self-generated placeholder drawings (media/cac-*.svg, made by tests/make_cac_drawings.py) in the
  data-visualisation language: navy-charcoal ground, white/grey hairlines, one crimson accent, legends as marks (no text inside).
  Andy's data-visualisation reference images are third-party works: they live only in the private design plan Page, never in this site.
  Swap a drawing by dropping an SVG/JPG with the same name, or edit the line listed below.

v2.3 notes
- New sites reuse only stand-ins already in `media/` (no new files). Swap per site by editing the lines below.
- Atelier images are shown through the engine's image grade (`grade:'kapoor'`); Codelab has no grade (v2.3.1):
  drop in your normal colour files — the grade is applied in the browser, never baked into the file.
- Asset Store slides are product previews; the price/Get row is config (`get:`) and shows in the left panel only.
- toy-*.jpg / toy-session.mp4 / toy-output.mp4 were re-rendered white on black from the mock Field Toy (tests/make_toy_media.py, v2.3.1).
- apps/gen-canvas.html (Generative Design live canvas) and apps/field-toy.html (Codelab) are placeholder apps, replace as-is.

| Config line | Slide / site | Field | File | Stand-in size |
|---|---|---|---|---|
| sites/registry.js:3 | Pointlab | thumb | media/art-blue-symmetry.jpg | 1600×1791 |
| sites/registry.js:4 | Conscious Architecture Company | thumb | media/cac-construction-sequence.svg | SVG (placeholder drawing) |
| sites/registry.js:5 | VJSH1FT | thumb | media/vj-sh1ft.jpg | 1200×640 |
| sites/registry.js:6 | Asset Store | thumb | media/code-tool-3d.jpg | 500×262 |
| sites/registry.js:7 | Generative Design | thumb | media/art-cross-symmetry.jpg | 1600×1791 |
| sites/registry.js:8 | Codelab | thumb | media/code-tool-radial.jpg | 500×661 |
| sites/registry.js:9 | System 8 | thumb | media/toy-controls.jpg | 1440×900 |
| sites/registry.js:10 | Atelier | thumb | media/fashion-white-line.jpg | 1003×1100 |
| sites/registry.js:11 | We Are The Nature | thumb | media/art-ice.jpg | 1200×685 |
| sites/registry.js:12 | Stage / Scenography | thumb | media/art-blue-room.jpg | 1024×1024 |
| sites/registry.js:13 | Works | thumb | media/fashion-gallery.jpg | 968×1100 |
| sites/registry.js:14 | Artist personalities | thumb | media/art-blue-room.jpg | 1024×1024 |
| sites/registry.js:15 | Studio | thumb | media/studio-sofa.jpg | 1920×1076 |
| sites/registry.js:16 | Art | thumb | media/art-red-figure.jpg | 1600×1791 |
| sites/conscious-architecture.js:37 | Presence, radial | img | media/cac-presence-radial.svg | SVG (placeholder drawing) |
| sites/conscious-architecture.js:38 | Construction | img | media/cac-construction-sequence.svg | SVG (placeholder drawing) |
| sites/conscious-architecture.js:39 | Passage detail | img | media/cac-passage-section.svg | SVG (placeholder drawing) |
| sites/conscious-architecture.js:46 | Threshold plan | img | media/cac-threshold-plan.svg | SVG (placeholder drawing) |
| sites/conscious-architecture.js:47 | Relations | img | media/cac-relations-network.svg | SVG (placeholder drawing) |
| sites/hub.js:21 | Pigment room | img | media/art-pigment-room.jpg | 1024×1024 |
| sites/hub.js:22 | Blue axis | img | media/art-blue-symmetry.jpg | 1600×1791 |
| sites/hub.js:23 | Red / blue | img | media/art-red-blue-symmetry.jpg | 1600×1791 |
| sites/hub.js:24 | Cross | img | media/art-cross-symmetry.jpg | 1600×1791 |
| sites/hub.js:28 | November gallery: Symmetry studies | img | media/art-blue-symmetry.jpg | 1600×1791 |
| sites/hub.js:33 | Studio: furniture series | img | media/studio-sofa.jpg | 1920×1076 |
| sites/hub.js:37 | Codelab: Field Toy is live | img | media/toy-orbit.jpg | 1440×900 |
| sites/codelab.js:16 | (hero) | image | media/toy-orbit.jpg | 1440×900 |
| sites/codelab.js:37 | (hero) | img | media/toy-orbit.jpg | 1440×900 |
| sites/codelab.js:39 | Controls | img | media/toy-controls.jpg | 1440×900 |
| sites/codelab.js:41 | Orbit | img | media/toy-orbit.jpg | 1440×900 |
| sites/codelab.js:42 | Several attractors | img | media/toy-attractors.jpg | 1440×900 |
| sites/codelab.js:43 | Flow | img | media/toy-flow.jpg | 1440×900 |
| sites/codelab.js:44 | Repel | img | media/toy-repel.jpg | 1440×900 |
| sites/codelab.js:45 | Video example | video | media/toy-session.mp4 |  |
| sites/codelab.js:46 | Video output | video | media/toy-output.mp4 |  |
| sites/codelab.js:48 | (hero) | img | media/code-tool-radial.jpg | 500×661 |
| sites/codelab.js:50 | Score view | img | media/code-tool-radial.jpg | 500×661 |
| sites/codelab.js:51 | Dense pattern | img | media/code-tool-radial-2.jpg | 500×661 |
| sites/codelab.js:52 | Video output | video | media/code-circuit.mp4 |  |
| sites/codelab.js:54 | (hero) | img | media/code-tool-field.jpg | 500×661 |
| sites/codelab.js:56 | Panel + field | img | media/code-tool-field.jpg | 500×661 |
| sites/codelab.js:57 | Variation | img | media/code-tool-panel.jpg | 899×1200 |
| sites/codelab.js:58 | Ring mode | img | media/code-tool-ring.jpg | 500×588 |
| sites/fashion.js:29 | The wall | img | media/fashion-wall.jpg | 907×1100 |
| sites/fashion.js:30 | Writing | img | media/fashion-gallery.jpg | 968×1100 |
| sites/fashion.js:31 | Knit | img | media/fashion-no-war.jpg | 907×1100 |
| sites/fashion.js:32 | Suits | img | media/fashion-text-suits.jpg | 1069×1100 |
| sites/fashion.js:33 | Moss coat | img | media/fashion-moss.jpg | 858×1100 |
| sites/fashion.js:34 | Back | img | media/fashion-jacket.jpg | 1100×567 |
| sites/fashion.js:35 | Line-up | img | media/fashion-lineup.jpg | 1100×545 |
| sites/fashion.js:36 | Finale | img | media/fashion-white-line.jpg | 1003×1100 |
| sites/fashion.js:40 | Square | img | media/fashion-street-show.jpg | 1280×640 |
| sites/fashion.js:41 | Passage | img | media/fashion-street-show-2.jpg | 1280×640 |
| sites/fashion.js:42 | Runway video | video | media/fashion-runway.mp4 |  |
| sites/vjsh1ft.js:26 | Glitch layer | video | media/code-glitch.mp4 |  |
| sites/vjsh1ft.js:27 | Circuit | video | media/code-circuit.mp4 |  |
| sites/vjsh1ft.js:28 | Sea | video | media/art-sea.mp4 |  |
| sites/vjsh1ft.js:29 | Deck | img | media/vj-sh1ft.jpg | 1200×640 |
| sites/vjsh1ft.js:35 | Flow output | video | media/toy-output.mp4 |  |
| sites/vjsh1ft.js:36 | Session | video | media/toy-session.mp4 |  |
| sites/vjsh1ft.js:37 | Red plant | img | media/art-red-plant.jpg | 1200×685 |
| sites/asset-store.js:26 | Loop preview | video | media/toy-output.mp4 |  |
| sites/asset-store.js:27 | Orbit still | img | media/toy-orbit.jpg | 1440×900 |
| sites/asset-store.js:28 | Flow still | img | media/toy-flow.jpg | 1440×900 |
| sites/asset-store.js:34 | Violet field | img | media/art-violet-field.jpg | 899×1200 |
| sites/asset-store.js:35 | Green orb | img | media/code-green-orb.jpg | 638×640 |
| sites/asset-store.js:36 | Ice | img | media/art-ice.jpg | 1200×685 |
| sites/asset-store.js:42 | Panel | img | media/code-tool-panel.jpg | 899×1200 |
| sites/asset-store.js:43 | Ring mode | img | media/code-tool-ring.jpg | 500×588 |
| sites/asset-store.js:44 | 3D volume | img | media/code-tool-3d.jpg | 500×262 |
| sites/generative-design.js:25 | Cross | img | media/art-cross-symmetry.jpg | 1600×1791 |
| sites/generative-design.js:27 | Blue axis | img | media/art-blue-symmetry.jpg | 1600×1791 |
| sites/generative-design.js:28 | Red / blue | img | media/art-red-blue-symmetry.jpg | 1600×1791 |
| sites/generative-design.js:34 | Red field | img | media/art-red-figure.jpg | 1600×1791 |
| sites/generative-design.js:35 | Violet field | img | media/art-violet-field.jpg | 899×1200 |
| sites/generative-design.js:36 | Generator | img | media/code-tool-field.jpg | 500×661 |
| sites/generative-design.js:41 | Flow | img | media/toy-flow.jpg | 1440×900 |
| sites/generative-design.js:42 | Attractors | img | media/toy-attractors.jpg | 1440×900 |
| sites/generative-design.js:43 | Loop | video | media/toy-output.mp4 |  |

| sites/projects.js:15 | We Are The Nature · Commercial project 1 · Still 1 | img | media/art-ice.jpg | 1200×685 |
| sites/projects.js:16 | We Are The Nature · Commercial project 1 · Film | video | media/art-sea.mp4 |  |
| sites/projects.js:17 | We Are The Nature · Commercial project 1 · Still 2 | img | media/art-silhouettes.jpg | 1200×675 |
| sites/projects.js:24 | We Are The Nature · Commercial project 2 · Landscape | img | media/art-violet-field.jpg | 899×1200 |
| sites/projects.js:25 | We Are The Nature · Commercial project 2 · Close | img | media/art-red-plant.jpg | 1200×685 |
| sites/projects.js:26 | We Are The Nature · Commercial project 2 · Film | video | media/art-sea.mp4 |  |
| sites/projects.js:33 | Stage / Scenography · Production 1 · Stage photograph | img | media/art-blue-room.jpg | 1024×1024 |
| sites/projects.js:34 | Stage / Scenography · Production 1 · Model / render | img | media/code-tool-3d.jpg | 500×262 |
| sites/projects.js:35 | Stage / Scenography · Production 1 · Production video | video | media/fashion-runway.mp4 |  |
| sites/projects.js:36 | Stage / Scenography · Production 1 · Space | img | media/art-pigment-room.jpg | 1024×1024 |
| sites/projects.js:43 | Stage / Scenography · Production 2 · Stage photograph | img | media/art-kul.jpg | 1200×675 |
| sites/projects.js:44 | Stage / Scenography · Production 2 · Model / render | img | media/code-tool-ring.jpg | 500×588 |
| sites/projects.js:45 | Stage / Scenography · Production 2 · Production video | video | media/toy-session.mp4 |  |
| sites/projects.js:46 | Stage / Scenography · Production 2 · Detail | img | media/art-red-figure.jpg | 1600×1791 |
| sites/projects.js:53 | Works · Brand identity · Wordmark | img | media/fashion-wall.jpg | 907×1100 |
| sites/projects.js:54 | Works · Brand identity · Application | img | media/fashion-gallery.jpg | 968×1100 |
| sites/projects.js:55 | Works · Brand identity · System | img | media/fashion-white-line.jpg | 1003×1100 |
| sites/projects.js:62 | Works · Graphic design · Print | img | media/fashion-text-suits.jpg | 1069×1100 |
| sites/projects.js:63 | Works · Graphic design · Knit | img | media/fashion-no-war.jpg | 907×1100 |
| sites/projects.js:64 | Works · Graphic design · Panel | img | media/fashion-jacket.jpg | 1100×567 |
| sites/projects.js:71 | Works · Typography · Lettering | img | media/fashion-gallery.jpg | 968×1100 |
| sites/projects.js:72 | Works · Typography · Detail | img | media/fashion-no-war.jpg | 907×1100 |
| sites/projects.js:73 | Works · Typography · Line-up | img | media/fashion-lineup.jpg | 1100×545 |
| sites/projects.js:80 | Works · Illustration · Figure | img | media/art-red-figure.jpg | 1600×1791 |
| sites/projects.js:81 | Works · Illustration · Study | img | media/art-cross-symmetry.jpg | 1600×1791 |
| sites/projects.js:82 | Works · Illustration · Variation | img | media/art-blue-symmetry.jpg | 1600×1791 |

| sites/system8.js:34 | System 8 · top page hero | image | media/toy-controls.jpg | 1440×900 |
| sites/system8.js:53 | System 8 · Concept · Promo | video | media/toy-session.mp4 |  |
| sites/system8.js:54 | System 8 · Concept · Still | img | media/toy-orbit.jpg | 1440×900 |
| sites/system8.js:55 | System 8 · App 1 · Overview | img | media/toy-orbit.jpg | 1440×900 |
| sites/system8.js:55 | System 8 · App 1 · Tools | img | media/toy-controls.jpg | 1440×900 |
| sites/system8.js:55 | System 8 · App 1 · Demo projects | img | media/toy-attractors.jpg | 1440×900 |
| sites/system8.js:55 | System 8 · App 1 · Example videos | video | media/toy-output.mp4 |  |
| sites/system8.js:55 | System 8 · App 1 · Functionalities | img | media/toy-flow.jpg | 1440×900 |
| sites/system8.js:55 | System 8 · App 1 · Help | img | media/toy-repel.jpg | 1440×900 |
| sites/system8.js:56 | System 8 · App 2 · Overview | img | media/code-tool-field.jpg | 500×661 |
| sites/system8.js:56 | System 8 · App 2 · Tools | img | media/code-tool-panel.jpg | 899×1200 |
| sites/system8.js:56 | System 8 · App 2 · Demo projects | img | media/code-tool-grid.jpg | 500×638 |
| sites/system8.js:56 | System 8 · App 2 · Example videos | video | media/code-circuit.mp4 |  |
| sites/system8.js:56 | System 8 · App 2 · Functionalities | img | media/code-tool-ring.jpg | 500×588 |
| sites/system8.js:56 | System 8 · App 2 · Help | img | media/code-tool-field.jpg | 500×661 |
| sites/system8.js:57 | System 8 · App 3 · Overview | img | media/code-tool-radial.jpg | 500×661 |
| sites/system8.js:57 | System 8 · App 3 · Tools | img | media/code-tool-radial-2.jpg | 500×661 |
| sites/system8.js:57 | System 8 · App 3 · Demo projects | img | media/code-tool-3d.jpg | 500×262 |
| sites/system8.js:57 | System 8 · App 3 · Example videos | video | media/code-glitch.mp4 |  |
| sites/system8.js:57 | System 8 · App 3 · Functionalities | img | media/code-tool-panel.jpg | 899×1200 |
| sites/system8.js:57 | System 8 · App 3 · Help | img | media/code-tool-ring.jpg | 500×588 |
| sites/system8.js:58 | System 8 · App 4 · Overview | img | media/code-tool-grid.jpg | 500×638 |
| sites/system8.js:58 | System 8 · App 4 · Tools | img | media/code-tool-3d.jpg | 500×262 |
| sites/system8.js:58 | System 8 · App 4 · Demo projects | img | media/toy-flow.jpg | 1440×900 |
| sites/system8.js:58 | System 8 · App 4 · Example videos | video | media/toy-session.mp4 |  |
| sites/system8.js:58 | System 8 · App 4 · Functionalities | img | media/toy-attractors.jpg | 1440×900 |
| sites/system8.js:58 | System 8 · App 4 · Help | img | media/code-tool-radial.jpg | 500×661 |
