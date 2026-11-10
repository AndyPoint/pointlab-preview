# Media slots (stand-ins — swap freely)

All media in this mockup is a stand-in taken from files already on the box. Media curation comes later.

Two ways to swap a picture or video:
1. **Same name:** drop your new file into `media/` with the exact file name below (keep .jpg / .mp4). Nothing else changes.
2. **New name:** put the file in `media/` and edit the `img:` / `video:` path on the line listed below.

Recommended: JPG, long edge 2400 px for `full` slides, 1600 px for `shot` slides; MP4 (H.264), muted, under ~15 MB.
`full` = fills the screen (cropped, cover); `shot` = shown whole on the project's ground (add `cover:true` to fill).

| Config line | Slide / site | Field | File | Stand-in size |
|---|---|---|---|---|
| sites/hub.js:23 | Pigment room | img | media/art-pigment-room.jpg | 1024×1024 |
| sites/hub.js:24 | Blue axis | img | media/art-blue-symmetry.jpg | 1600×1791 |
| sites/hub.js:25 | Red / blue | img | media/art-red-blue-symmetry.jpg | 1600×1791 |
| sites/hub.js:26 | Cross | img | media/art-cross-symmetry.jpg | 1600×1791 |
| sites/hub.js:32 | Sofa and table series | img | media/studio-sofa.jpg | 1920×1076 |
| sites/codelab.js:22 | Orbit | img | media/toy-orbit.jpg | 1440×900 |
| sites/codelab.js:23 | Several attractors | img | media/toy-attractors.jpg | 1440×900 |
| sites/codelab.js:24 | Flow | img | media/toy-flow.jpg | 1440×900 |
| sites/codelab.js:25 | Repel | img | media/toy-repel.jpg | 1440×900 |
| sites/codelab.js:26 | Controls | img | media/toy-controls.jpg | 1440×900 |
| sites/codelab.js:27 | Video example | video | media/toy-session.mp4 |  |
| sites/codelab.js:28 | Video output | video | media/toy-output.mp4 |  |
| sites/codelab.js:31 | Score view | img | media/code-tool-radial.jpg | 500×661 |
| sites/codelab.js:32 | Dense pattern | img | media/code-tool-radial-2.jpg | 500×661 |
| sites/codelab.js:33 | Video output | video | media/code-circuit.mp4 |  |
| sites/codelab.js:36 | Panel + field | img | media/code-tool-field.jpg | 500×661 |
| sites/codelab.js:37 | Variation | img | media/code-tool-panel.jpg | 899×1200 |
| sites/codelab.js:38 | Ring mode | img | media/code-tool-ring.jpg | 500×588 |
| sites/fashion.js:20 | The wall | img | media/fashion-wall.jpg | 907×1100 |
| sites/fashion.js:21 | Writing | img | media/fashion-gallery.jpg | 968×1100 |
| sites/fashion.js:22 | Knit | img | media/fashion-no-war.jpg | 907×1100 |
| sites/fashion.js:23 | Suits | img | media/fashion-text-suits.jpg | 1069×1100 |
| sites/fashion.js:24 | Back | img | media/fashion-jacket.jpg | 1100×567 |
| sites/fashion.js:25 | Line-up | img | media/fashion-lineup.jpg | 1100×545 |
| sites/fashion.js:26 | Finale | img | media/fashion-white-line.jpg | 1003×1100 |
| sites/fashion.js:29 | Square | img | media/fashion-street-show.jpg | 1280×640 |
| sites/fashion.js:30 | Passage | img | media/fashion-street-show-2.jpg | 1280×640 |
| sites/fashion.js:31 | Runway video | video | media/fashion-runway.mp4 |  |
| sites/registry.js:3 | Pointlab | thumb | media/art-blue-symmetry.jpg | 1600×1791 |
| sites/registry.js:4 | Artist personalities | thumb | media/art-blue-room.jpg | 1024×1024 |
| sites/registry.js:5 | Studio | thumb | media/studio-sofa.jpg | 1920×1076 |
| sites/registry.js:6 | Atelier | thumb | media/fashion-white-line.jpg | 1003×1100 |
| sites/registry.js:7 | Assets | thumb | media/code-tool-grid.jpg | 500×638 |
| sites/registry.js:8 | Sh1ft | thumb | media/vj-sh1ft.jpg | 1200×640 |
| sites/registry.js:9 | Codelab | thumb | media/code-tool-radial.jpg | 500×661 |
| sites/registry.js:10 | Art | thumb | media/art-red-figure.jpg | 1600×1791 |
