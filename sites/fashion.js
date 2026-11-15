/* DESIGN ONLY (v2.6): texts, projects and media come from content/fashion/ via content/manifest.js.
    SUBSITE CONFIG — Atelier (fashion). Bone paper, serif display, oxblood, drape hero. Text is static; only the logo animates (v2.1). */
window.PL_SITE={
  id:'fashion', lang:'en',
  /* v2.3 redesign (Andy: "the red example site"): anttipiste colour grade 'Kapoor Red' — every image and video is mapped to a
     red/black duotone (engine grade), red-black ground, soft vignette, small mono uppercase type. Kept subtle: no ticker,
     no grain, no overlays, no text over media; only the centred wordmark animates. */
  grade:'kapoor',
  theme:{vars:{'--bg':'#0D0606','--fg':'#F2F2F2','--dim':'#8A8A8A','--line':'#2A1716','--accent':'#D8261C',
    '--veil':'rgba(13,6,6,.7)','--panel':'#130909','--panel-line':'#2E1A19','--panel-fg':'#F2F2F2','--panel-dim':'#8F8582','--ui-bg':'rgba(13,6,6,.45)',
    '--font-display':'"Space Grotesk","Archivo",sans-serif','--font-text':'"IBM Plex Mono",ui-monospace,Menlo,monospace',
    '--ease':'cubic-bezier(.16,.84,.2,1)','--dur':'.9s'},
    css:`.h1,.h2{font-family:var(--font-display);font-weight:700;letter-spacing:-.02em;text-transform:uppercase}
         .h1{font-size:clamp(40px,7vw,112px);line-height:.92}
         .logo{font-family:var(--font-display);font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:clamp(52px,11vw,184px);padding-left:.06em}
         .lede,.txt,.body p,.notes p{font-size:12px;line-height:18px;letter-spacing:.02em}
         .kick,.d,.meta,.notes small{font-size:10px;letter-spacing:.16em;text-transform:uppercase}
         .panel{font-family:var(--font-mono)}`},
  logo:{hold:2600,dissolve:true},
  hero:{generator:'drape',opt:{lines:64}},
  interludes:true
};
