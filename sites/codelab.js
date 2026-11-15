/* DESIGN ONLY (v2.6): texts, projects and media come from content/codelab/ via content/manifest.js.
   SUBSITE CONFIG — Codelab. Mono type, plain white on black (v2.3.1: no green/teal — Andy). Text animations on the top page + project covers only (v2.1). */
window.PL_SITE={
  id:'codelab', lang:'en',
  theme:{vars:{'--bg':'#000000','--fg':'#FFFFFF','--dim':'#8A8A8A','--line':'#262626','--accent':'#FFFFFF',
    '--veil':'rgba(0,0,0,.7)','--ui-bg':'rgba(0,0,0,.45)','--panel':'#111111','--panel-line':'#2A2A2A','--panel-fg':'#FFFFFF','--panel-dim':'#8A8A8A',
    '--font-display':'ui-monospace,"JetBrains Mono","SF Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace',
    '--font-text':'ui-monospace,"JetBrains Mono","SF Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace',
    '--ease':'cubic-bezier(.3,0,.1,1)','--dur':'.35s'},
    css:`.h1{font-size:clamp(34px,6vw,96px);letter-spacing:-.04em;font-weight:400}.h2{font-weight:400;letter-spacing:-.03em}
         .logo,.cover-title{font-weight:400;letter-spacing:-.05em}.logo{font-size:clamp(44px,10vw,160px)}.txt,.lede{font-size:14px}.lede{max-width:52ch}`},
  /* Codelab keeps the anttipiste text animations (Andy, v2.1) — but ONLY on the top page and on each project's
     first slide (its 'cover'), over a dimmed full-bleed app screenshot. Every other slide is fullscreen, no text.
     Cover picture + lines: "Cover image:" / "Cover line:" in each project.txt; top page: content/codelab/top.jpg + "Top line:". */
  text:{mode:'cover',anims:['decode','rotate','ticker'],scope:'first',rotateEvery:4500,speed:14},
  logo:{},
  hero:{},
  /* no image grade (v2.3.1, Andy): images, screenshots and videos keep their true colours. */
  fullbleed:true,     /* media slides fill the screen edge to edge */
  interludes:false,   /* the cover slides do the job of the interludes here */
  components:{edgeTicker:{opacity:.7}}   /* edge texts: "Edge top/right/bottom/left:" in content/codelab/site.txt */
};
