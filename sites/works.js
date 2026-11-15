/* DESIGN ONLY (v2.6): texts, projects and media come from content/works/ via content/manifest.js.
   SUBSITE CONFIG — Works. A typographic, grid-strict portfolio of client work. The projects are the
   folders in content/works/ PLUS every project on another site whose Tags match "Include tags:" in
   content/works/site.txt (so We Are The Nature commercial films appear here without copying them).
   "Tag filter:" there turns on the filter in the right-panel Projects group. Standard menus; paper
   ground, Space Grotesk, lattice hero. Only the centred wordmark animates (top page + interludes). */
window.PL_SITE={
  id:'works', lang:'en',
  theme:{vars:{'--bg':'#F4F4F2','--fg':'#111111','--dim':'#6A6A6A','--line':'#D6D6D2','--accent':'#111111',
    '--veil':'rgba(244,244,242,.7)','--panel':'#111111','--panel-line':'#2A2A2A','--panel-fg':'#F4F4F2','--panel-dim':'#8A8A8A','--ui-bg':'rgba(244,244,242,.5)',
    '--hero-bg':'#F4F4F2','--hero-fg':'#111111',
    '--font-display':'"Space Grotesk","Archivo",sans-serif','--font-text':'"Space Grotesk","Archivo",sans-serif',
    '--ease':'cubic-bezier(.2,.8,.2,1)','--dur':'.35s'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:700;letter-spacing:-.04em}
         .logo{font-size:clamp(64px,14vw,220px)}.logo span{color:var(--fg)}
         .s-shot{background:#EDEDE9}
         .panel .p-items button[aria-current]::before,.panel .p-grp.cur>.p-gh .p-gt::before{background:var(--panel-fg)}
         .panel .p-tog:hover,.panel .p-top button:hover,.panel .p-top a:hover,.panel .p-items .cur{color:var(--panel-fg)}
         .panel .p-sw[aria-checked="true"] i{border-color:var(--panel-fg)}
         .panel .p-sw[aria-checked="true"] i::after{background:var(--panel-fg)}`},
  logo:{hold:2600,dissolve:true},
  hero:{generator:'lattice'},
  interludes:true
};
