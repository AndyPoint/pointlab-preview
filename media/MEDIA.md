# Media slots (stand-ins — swap freely)

All media in this mockup is a stand-in taken from files already on the box. Media curation comes later.

Two ways to swap a picture or video:
1. **Same name:** drop your new file into `media/` with the exact file name below (keep .jpg / .mp4). Nothing else changes.
2. **New name:** put the file in `media/` and edit the `img:` / `video:` path on the line listed below.

Recommended: JPG, long edge 2400 px for `full` slides, 1600 px for `shot` slides; MP4 (H.264), muted, under ~15 MB.
`full` = fills the screen (cropped, cover); `shot` = shown whole on the project's ground (add `cover:true` to fill).

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
| sites/registry.js:4 | Conscious Architecture Company | thumb | media/studio-sofa-2.jpg | 1200×685 |
| sites/registry.js:5 | VJSH1FT | thumb | media/vj-sh1ft.jpg | 1200×640 |
| sites/registry.js:6 | Asset Store | thumb | media/code-tool-3d.jpg | 500×262 |
| sites/registry.js:7 | Generative Design | thumb | media/art-cross-symmetry.jpg | 1600×1791 |
| sites/registry.js:8 | Codelab | thumb | media/code-tool-radial.jpg | 500×661 |
| sites/registry.js:9 | Atelier | thumb | media/fashion-white-line.jpg | 1003×1100 |
| sites/registry.js:10 | Artist personalities | thumb | media/art-blue-room.jpg | 1024×1024 |
| sites/registry.js:11 | Studio | thumb | media/studio-sofa.jpg | 1920×1076 |
| sites/registry.js:12 | Art | thumb | media/art-red-figure.jpg | 1600×1791 |
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
| sites/conscious-architecture.js:26 | Interior | img | media/studio-sofa.jpg | 1920×1076 |
| sites/conscious-architecture.js:27 | Second view | img | media/studio-sofa-2.jpg | 1200×685 |
| sites/conscious-architecture.js:28 | Model study | img | media/code-tool-3d.jpg | 500×262 |
| sites/conscious-architecture.js:35 | Site: ice | img | media/art-ice.jpg | 1200×685 |
| sites/conscious-architecture.js:36 | Material grid | img | media/code-tool-grid.jpg | 500×638 |
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
