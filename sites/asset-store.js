/* DESIGN ONLY (v2.6): texts, projects and media come from content/asset-store/ via content/manifest.js.
    SUBSITE CONFIG — Asset Store (v2.3). Digital assets: 3D models, textures, video loops, tools.
   Each project is a product/asset page: media only on the slides; name, info, specs and a placeholder 'Get' row
   live in the LEFT panel only (project.get), never over the media. Clean shelf look: paper-grey ground, ink,
   safety-orange accent, Space Grotesk + mono specs, crisp rhythm. ALL TEXT AND PRICES ARE PLACEHOLDER. */
window.PL_SITE={
  id:'assets', lang:'en',
  theme:{vars:{'--bg':'#EDEDEA','--fg':'#111111','--dim':'#77776F','--line':'#D4D4CE','--accent':'#FF5A1F',
    '--veil':'rgba(237,237,234,.7)','--panel':'#111111','--panel-line':'#2A2A2A','--panel-fg':'#EDEDEA','--panel-dim':'#8A8A84','--ui-bg':'rgba(237,237,234,.5)',
    '--font-display':'"Space Grotesk","Archivo",sans-serif','--font-text':'"Space Grotesk","Archivo",sans-serif',
    '--ease':'cubic-bezier(.2,.8,.2,1)','--dur':'.3s'},
    css:`.h1,.h2,.logo{font-weight:700;letter-spacing:-.03em}.logo{font-size:clamp(48px,10vw,168px)}.logo span{color:var(--accent)}
         .s-shot{background:#E4E4E0}`},
  logo:{hold:2400,dissolve:true},
  hero:{generator:'lattice'},
  interludes:true
};
