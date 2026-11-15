/* DESIGN ONLY (v2.6): texts, projects and media come from content/hub/ via content/manifest.js.
    SUBSITE CONFIG — Pointlab hub. Identity = theme + logo + hero generator. No engine code here.
   v2.1 rules: no text over project media (captions go into 'notes' / 'text' slides and the left panel);
   the only text animation is the logo (hero + interludes). Texts and media: content/hub/ (see content/HOW-TO-UPDATE.md). */
window.PL_SITE={
  id:'hub', lang:'en',
  /* anttipiste palette — ground #F6F6F6 (top page + interludes), void #060606 slides, ink #0A0A0A, mid #888, Kapoor red */
  theme:{vars:{'--bg':'#060606','--fg':'#F6F6F6','--dim':'#888888','--line':'#2A2A2A','--accent':'#D8261C',
    '--hero-bg':'#F6F6F6','--hero-fg':'#0A0A0A','--ease':'cubic-bezier(.16,1,.3,1)','--dur':'.8s'}},
  /* the one text animation: centred logo decode → hold → dissolve */
  logo:{hold:2600,dissolve:true},
  hero:{generator:'keha',opt:{bg:'#F6F6F6',ink:'#0A0A0A',accent:'#D8261C',chord:'#002FA7',grid:48,scale:.44,cx:.5,cy:.5}},
  interludes:true   /* a logo page between consecutive projects; false = none, [1,3] = before those projects */
};
