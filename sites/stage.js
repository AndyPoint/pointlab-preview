/* DESIGN ONLY (v2.6): texts, projects and media come from content/stage/ via content/manifest.js.
    SUBSITE CONFIG — Stage / Scenography (v2.5). Andy's stage-design practice, lately the
   biggest commercial line. Placeholder productions: stage photographs, a model or render,
   and a production video. Standard menus; a Jost wordmark on the default dark ground.
   Only the centred wordmark animates (top page + interludes). ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'stage', lang:'en',
  theme:{vars:{'--font-display':'"Jost","Archivo",sans-serif'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:600;letter-spacing:-.03em}.logo{font-size:clamp(56px,12vw,180px)}`},
  logo:{hold:2600,dissolve:true},
  hero:{generator:'plan'},
  interludes:true
};
