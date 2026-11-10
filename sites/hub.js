/* SUBSITE CONFIG — Pointlab hub. Identity = theme + motion + hero generator. No engine code here. */
window.PL_SITE={
  id:'hub', name:'Pointlab', title:'Pointlab — hub (mockup)', lang:'en',
  /* v2: anttipiste palette — ground #F6F6F6 hero, void #060606 slides, ink #0A0A0A, mid #888, Kapoor red */
  theme:{vars:{'--bg':'#060606','--fg':'#F6F6F6','--dim':'#888888','--line':'#2A2A2A','--accent':'#D8261C',
    '--hero-bg':'#F6F6F6','--hero-fg':'#0A0A0A','--ease':'cubic-bezier(.16,1,.3,1)','--dur':'.8s'}},
  panel:{glitch:true},
  motion:{title:'scramble',body:'fade',step:'fade',scrambleSpeed:22},
  hero:{generator:'keha',opt:{bg:'#F6F6F6',ink:'#0A0A0A',accent:'#D8261C',chord:'#002FA7',grid:48,scale:.44,cx:.5,cy:.5},
    title:'POINTLAB',titleHTML:'POINT<span>LAB</span>',sub:'Monthly gallery — news — sites',hold:2600},
  identity:{line:'Hub for the monthly gallery, news and the Pointlab sites.',
    blocks:[{h:'About',p:'Placeholder identity text. One short paragraph describing Pointlab goes here.'}]},
  /* standalone four-edge ticker (components/edge-ticker.js); delete this key to remove it */
  components:{edgeTicker:{texts:{
    top:['Pointlab','Monthly gallery','November 2026','Symmetry studies','Pigment room','Blue axis','Red / blue','Cross'],
    right:['News','10.11.2026 November gallery','02.11.2026 Studio: furniture series','20.10.2026 Codelab: Field Toy is live'],
    bottom:['Sites'].concat((window.PL_REGISTRY||[]).map(r=>r.name)),
    left:['Pointlab hub','Gallery','News','Sites']},opacity:.7}},
  projects:[
    {id:'gallery',title:'Gallery — November',code:'#002FA7',author:'Andy Point',slides:[
      {type:'concept',title:'Symmetry\nstudies',lede:'Work of the month. Placeholder text: a short curatorial note about the series, its method and why it is shown this month.',
        meta:[['Month','11 / 2026'],['Series','Symmetry studies'],['Works','3']]},
      {type:'full',kicker:'Room',title:'Pigment room',text:'Placeholder image (Midjourney). How the series is hung: one blue room before the three studies.',img:'media/art-pigment-room.jpg'},
      {type:'shot',kicker:'Work 1 / 3',title:'Blue axis',text:'Placeholder caption. One line on how the form was generated and mirrored.',img:'media/art-blue-symmetry.jpg'},
      {type:'shot',kicker:'Work 2 / 3',title:'Red / blue',text:'Placeholder caption. The second study adds a counter-colour layer.',img:'media/art-red-blue-symmetry.jpg'},
      {type:'shot',kicker:'Work 3 / 3',title:'Cross',text:'Placeholder caption. Four-fold symmetry closes the series.',img:'media/art-cross-symmetry.jpg'}]},
    {id:'news',title:'News',code:'#D8261C',slides:[
      {type:'news',title:'News',items:[
        {date:'10.11.2026',title:'November gallery: Symmetry studies',text:'Placeholder news text. Three works, shown for one month.'},
        {date:'02.11.2026',title:'Studio: furniture series',text:'Placeholder news text. Sofa and table designs, see next slide.'},
        {date:'20.10.2026',title:'Codelab: Field Toy is live',text:'Placeholder news text. A playable web app inside the site.'}]},
      {type:'full',kicker:'Studio',title:'Sofa and table series',text:'Design and photograph: Pointlab studio. Placeholder caption.',img:'media/studio-sofa.jpg'}]},
    {id:'sites',title:'Sites',code:'#D8261C',slides:[{type:'links',title:'Sites'}]}
  ]
};
