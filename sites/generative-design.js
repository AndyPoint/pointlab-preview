/* DESIGN ONLY (v2.6): texts, projects and media come from content/generative-design/ via content/manifest.js.
    SUBSITE CONFIG — Generative Design (v2.3). Generative / algorithmic works. Night-violet ground, Syne display,
   violet signal, medium rhythm. Embeds a live generative canvas as a play-mode slide (apps/gen-canvas.html, as-is,
   with its own mini menu — same rules as Codelab). Only the centred wordmark animates. ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'generative', lang:'en',
  theme:{vars:{'--bg':'#07060B','--fg':'#ECE8F6','--dim':'#7F7799','--line':'#1E1930','--accent':'#9B5CFF',
    '--veil':'rgba(7,6,11,.7)','--panel':'#0E0B16','--panel-line':'#241E38','--panel-fg':'#ECE8F6','--panel-dim':'#857D9F','--ui-bg':'rgba(7,6,11,.45)',
    '--font-display':'"Syne","Archivo",sans-serif',
    '--ease':'cubic-bezier(.45,0,.2,1)','--dur':'.6s'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:800;letter-spacing:-.02em}.logo{font-size:clamp(22px,7.4vw,124px)}
         .logo span{color:var(--accent)}`},
  logo:{hold:2600,dissolve:true},
  hero:{generator:'rose',opt:{n:8}},
  interludes:true
};
