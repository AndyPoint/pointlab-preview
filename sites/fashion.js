/* SUBSITE CONFIG — Atelier (fashion). Bone paper, serif display, oxblood, slow word-rise motion, drape hero. */
window.PL_SITE={
  id:'fashion', name:'Atelier', title:'Atelier — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#ECE8E1','--fg':'#141210','--dim':'#7D766C','--line':'#D3CCC1','--accent':'#8C1D18',
    '--veil':'rgba(236,232,225,.7)','--panel':'#141210','--panel-line':'#2A2622','--panel-fg':'#ECE8E1','--panel-dim':'#8F877C','--ui-bg':'rgba(236,232,225,.5)',
    '--font-display':'Didot,"Bodoni 72","Bodoni MT","Playfair Display","Libre Caslon Display",Georgia,serif',
    '--ease':'cubic-bezier(.16,.84,.2,1)','--dur':'1.25s'},
    css:`.h1,.hero-title{font-weight:400;letter-spacing:-.01em;font-style:italic}.h2{font-weight:400}
         .hero-title{font-size:clamp(56px,12vw,200px)}.idx,.ph,.hero-sub,.d-h{letter-spacing:.22em}
         .s-full::after{background:linear-gradient(to top,rgba(20,18,16,.55),transparent)}.s-full .lab{color:#F4F0EA}
         .s-full .idx,.s-full .txt{color:#E6DFD4}.s-full .idx i{color:#F4F0EA}`},
  motion:{title:'rise',body:'fade',step:'fade'},
  hero:{generator:'drape',opt:{lines:72},title:'Atelier',sub:'Collections — process — runway',dissolve:false},
  identity:{line:'Fashion. Collections told as sequences: idea, making, details, runway.',
    blocks:[{h:'Atelier',p:'Placeholder identity text for the fashion brand.'}]},
  labels:{full:'Look'},
  projects:[
    {id:'text',title:'Text collection',code:'#8C1D18',slides:[
      {type:'concept',title:'Words\nworn',lede:'Placeholder concept text. A collection where slogans are written by hand on cloth, walls and bodies.',meta:[['Season','AW'],['Looks','12'],['Medium','Print, hand lettering']]},
      {type:'full',kicker:'Origin',title:'The wall',text:'Placeholder: the text first appears on a gallery wall.',img:'media/fashion-wall.jpg'},
      {type:'full',kicker:'Process',title:'Writing',text:'Placeholder: lettering transferred from wall to fabric.',img:'media/fashion-gallery.jpg'},
      {type:'shot',kicker:'Detail',title:'Knit',text:'Placeholder: hand-lettered knit, grey on grey.',img:'media/fashion-no-war.jpg',cover:true},
      {type:'shot',kicker:'Detail',title:'Suits',text:'Placeholder: full-body text print on tailoring.',img:'media/fashion-text-suits.jpg',cover:true},
      {type:'shot',kicker:'Detail',title:'Back',text:'Placeholder: the back panel carries the longest line.',img:'media/fashion-jacket.jpg',cover:true},
      {type:'full',kicker:'Line-up',title:'Line-up',text:'Placeholder caption.',img:'media/fashion-lineup.jpg'},
      {type:'full',kicker:'Runway',title:'Finale',text:'Placeholder caption.',img:'media/fashion-white-line.jpg'}]},
    {id:'procession',title:'Procession',code:'#8C1D18',slides:[
      {type:'concept',title:'Procession',lede:'Placeholder concept text. The collection shown as a street parade instead of a runway.',meta:[['Season','SS'],['Venue','Old town square']]},
      {type:'full',kicker:'Street',title:'Square',text:'Placeholder caption.',img:'media/fashion-street-show.jpg'},
      {type:'full',kicker:'Street',title:'Passage',text:'Placeholder caption.',img:'media/fashion-street-show-2.jpg'},
      {type:'video',title:'Runway video',text:'Placeholder caption.',video:'media/fashion-runway.mp4',fit:'contain'}]}
  ]
};
