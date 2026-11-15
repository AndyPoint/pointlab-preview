/* DESIGN ONLY (v2.6): texts, projects and media come from content/vjsh1ft/ via content/manifest.js.
    SUBSITE CONFIG — VJSH1FT (v2.3). Andy's VJ / live-visual identity (Sh1ft). Dark, video-first, Resolume-style:
   black ground, Sh1ft violet signal (anttipiste --code-sh1ft), condensed Big Shoulders Display, fast rhythm.
   Project slides favour video. Only the centred wordmark animates. ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'vj', lang:'en',
  theme:{vars:{'--bg':'#040404','--fg':'#EDEDED','--dim':'#6F6F6F','--line':'#1C1C1C','--accent':'#9B2BFF',
    '--veil':'rgba(4,4,4,.7)','--panel':'#0C0C0C','--panel-line':'#222','--panel-fg':'#EDEDED','--panel-dim':'#7A7A7A','--ui-bg':'rgba(4,4,4,.45)',
    '--font-display':'"Big Shoulders Display","Archivo",sans-serif',
    '--ease':'cubic-bezier(.7,0,.2,1)','--dur':'.22s'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:800;text-transform:uppercase;letter-spacing:.01em}
         .h1{font-size:clamp(56px,11vw,180px);line-height:.86}.logo{font-size:clamp(72px,17vw,280px);line-height:.85}
         .logo span{color:var(--accent)}.kick,.d{font-family:var(--font-mono)}`},
  logo:{hold:1800,dissolve:true,speed:12},
  hero:{generator:'scan'},
  fullbleed:true,
  interludes:true
};
