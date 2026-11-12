/* SUBSITE CONFIG — Works (v2.5). A typographic, grid-strict portfolio of client work.
   Discipline tags: brand identity, graphic design, typography, illustration, photography,
   commercial film. The right-panel Projects group filters by tag. Works lists every project
   in the shared registry that carries any of these tags, so We Are The Nature commercial
   films also appear here. Standard menus; paper ground, Space Grotesk, lattice hero.
   Only the centred wordmark animates (top page + interludes). ALL TEXT IS PLACEHOLDER. */
(function(){
  const TAGS=window.PL_WORKS_TAGS;
  const order=['works-brand','works-graphic','works-type','works-illustration','nature-commercial-1','nature-commercial-2'];
  const byId={};
  window.PL_projectsFor(null,TAGS).forEach(function(p){byId[p.id]=p;});
  window.PL_SITE={
    id:'works', name:'Works', title:'Works — Pointlab (mockup)', lang:'en',
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
    logo:{text:'WORKS',html:'WORKS',hold:2600,dissolve:true},
    hero:{generator:'lattice'},
    interludes:true,
    filter:{key:'tags',label:'Discipline',all:'All disciplines',options:TAGS},
    artist:{name:'Andy Point',role:'Designer · Works',bio:'Placeholder bio. Two or three lines about the commercial design practice: brand, graphic design, typography, illustration, photography and film.',portrait:null},
    identity:{line:'Placeholder: client work in brand identity, graphic design, typography, illustration, photography and commercial film.',
      blocks:[{h:'Works',p:'Placeholder text. A project appears here when it carries one of the discipline tags. Filter by tag from the Projects group in the right panel.'}]},
    projects:order.map(function(id){return byId[id];}).filter(Boolean)
  };
})();
