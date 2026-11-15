/* DESIGN ONLY (v2.6): texts, projects and media come from content/conscious-architecture/ via content/manifest.js.
    SUBSITE CONFIG — Conscious Architecture Company (v2.4). Data-visualisation language (from Andy's private references, kept
   only in the design plan): navy-charcoal ground, white/grey hairlines, ONE crimson accent used only where data or meaning sits
   (current item, a guide, a node), small mono uppercase labels, radial/grid construction, scale bars and legends.
   The top page is a self-constructing radial drawing (generator 'construct') behind the centred wordmark; still with reduced
   motion / Animations off. Only the wordmark animates as text. Media = self-generated PLACEHOLDER drawings (tests/make_cac_drawings.py).
   ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'conscious', lang:'en',
  theme:{vars:{'--bg':'#1C2233','--fg':'#EEF0F4','--dim':'#8B93A7','--line':'#2E3650','--accent':'#E8344E',
    '--veil':'rgba(28,34,51,.72)','--panel':'#161B29','--panel-line':'#2B3247','--panel-fg':'#EEF0F4','--panel-dim':'#8B93A7','--ui-bg':'rgba(28,34,51,.5)',
    '--font-display':'"Jost",-apple-system,sans-serif','--font-text':'"Jost",-apple-system,sans-serif',
    '--ease':'cubic-bezier(.25,.1,.25,1)','--dur':'1.4s'},
    css:`.h1,.h2{font-weight:300;letter-spacing:.02em}.h1{font-size:clamp(34px,5.4vw,84px);line-height:1.05}
         .logo{font-weight:300;letter-spacing:.32em;font-size:clamp(18px,3.6vw,52px);text-transform:uppercase;padding-left:.32em;color:var(--fg)}
         .logo span{font-weight:500;color:var(--fg)}.lede,.txt,.body p{font-weight:300;font-size:17px;line-height:1.7}.kick,.d{letter-spacing:.3em}
         .pad{padding-left:clamp(28px,9vw,160px);padding-right:clamp(28px,9vw,160px)}
         .meta div{border-top:1px solid var(--line);padding-top:10px}
         /* panels: hairlines, mono uppercase labels, accent only on the current item */
         .panel .p-lab,.panel .p-tog,.panel .p-top button,.panel .p-items button,.panel .p-items a,.panel .p-items span.off,.panel .p-items span.cur{
           font-family:var(--font-mono);font-weight:400;font-size:11px;letter-spacing:.14em;text-transform:uppercase}
         .panel .p-line{font-weight:300;letter-spacing:.02em}
         .panel .p-tog:hover,.panel .p-top button:hover,.panel .p-top a:hover{color:var(--panel-fg)}
         .panel .p-sw[aria-checked="true"] i{border-color:var(--panel-fg)} .panel .p-sw[aria-checked="true"] i::after{background:var(--panel-fg)}`},
  logo:{hold:3400,dissolve:true},
  hero:{generator:'construct',opt:{seed:11,fold:6,spokes:24,cycle:26000}},
  interludes:true
};
