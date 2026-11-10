/* SUBSITE CONFIG — Generative Design (v2.3). Generative / algorithmic works. Night-violet ground, Syne display,
   violet signal, medium rhythm. Embeds a live generative canvas as a play-mode slide (apps/gen-canvas.html, as-is,
   with its own mini menu — same rules as Codelab). Only the centred wordmark animates. ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'generative', name:'Generative Design', title:'Generative Design — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#07060B','--fg':'#ECE8F6','--dim':'#7F7799','--line':'#1E1930','--accent':'#9B5CFF',
    '--veil':'rgba(7,6,11,.7)','--panel':'#0E0B16','--panel-line':'#241E38','--panel-fg':'#ECE8F6','--panel-dim':'#857D9F','--ui-bg':'rgba(7,6,11,.45)',
    '--font-display':'"Syne","Archivo",sans-serif',
    '--ease':'cubic-bezier(.45,0,.2,1)','--dur':'.6s'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:800;letter-spacing:-.02em}.logo{font-size:clamp(22px,7.4vw,124px)}
         .logo span{color:var(--accent)}`},
  logo:{text:'GENERATIVE DESIGN',html:'GENERATIVE <span>DESIGN</span>',hold:2600,dissolve:true},
  hero:{generator:'rose',opt:{n:8}},
  interludes:true,
  artist:{name:'Andy Point',role:'Generative works · Pointlab',bio:'Placeholder bio. Two or three lines about the generative practice and its systems.',portrait:null},
  identity:{line:'Placeholder: generative and algorithmic works — systems that draw, played live or printed.',
    blocks:[{h:'Use',p:'Swipe or ←→ through a work. ▶ appears when a slide holds a live canvas.'}]},
  projects:[
    {id:'symmetry-engine',settings:['whole'],title:'Symmetry Engine',
      info:'Placeholder text. A live generative canvas: press ▶ to draw with n-fold symmetry. The app keeps its own mini menu (≡ Gen, Folds). Press ▶, swipe in from the left edge or ← to return.',
      facts:[['Year','2026 (placeholder)'],['Tech','JavaScript · Canvas 2D'],['Type','Live generative canvas'],['Input','Touch / mouse / keys']],
      links:[{label:'Open the live canvas',href:'apps/gen-canvas.html',kind:'live app'},{label:'Source repository',kind:'placeholder'}],
      slides:[
      {type:'concept',title:'Symmetry\nengine',lede:'Placeholder concept text. One gesture, repeated around a centre: the system turns a line into a figure.',meta:[['Folds','4 – 12'],['Medium','Live canvas']]},
      {type:'shot',title:'Cross',text:'Placeholder caption. A four-fold output.',img:'media/art-cross-symmetry.jpg'},
      {type:'app',title:'Draw it',src:'apps/gen-canvas.html'},
      {type:'shot',title:'Blue axis',text:'Placeholder caption.',img:'media/art-blue-symmetry.jpg'},
      {type:'shot',title:'Red / blue',text:'Placeholder caption.',img:'media/art-red-blue-symmetry.jpg'},
      {type:'notes',title:'Outputs'}]},
    {id:'mirror-studies',settings:['whole'],title:'Mirror Studies',info:'Placeholder text. Prints from the mirrored field generator.',
      facts:[['Year','2025 (placeholder)'],['Type','Generative prints'],['Edition','Placeholder']],
      links:[{label:'Print edition',kind:'placeholder'}],
      slides:[
      {type:'full',title:'Red field',text:'Placeholder caption.',img:'media/art-red-figure.jpg'},
      {type:'full',title:'Violet field',text:'Placeholder caption.',img:'media/art-violet-field.jpg'},
      {type:'shot',title:'Generator',text:'Placeholder caption. The field generator with its panel.',img:'media/code-tool-field.jpg'}]},
    {id:'flow-prints',settings:['autoplay'],title:'Flow Prints',info:'Placeholder text. Particle-flow drawings captured as stills and a rendered loop.',
      facts:[['Year','2025 (placeholder)'],['Type','Generative stills + video'],['Tech','Canvas 2D']],
      links:[{label:'Rendered loop',href:'media/toy-output.mp4',kind:'video'}],
      slides:[
      {type:'full',title:'Flow',text:'Placeholder caption.',img:'media/toy-flow.jpg'},
      {type:'full',title:'Attractors',text:'Placeholder caption.',img:'media/toy-attractors.jpg'},
      {type:'video',title:'Loop',text:'Placeholder caption.',video:'media/toy-output.mp4'}]}
  ]
};
