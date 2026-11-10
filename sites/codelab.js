/* SUBSITE CONFIG — Codelab. Mono type, teal signal colour. Text animations on the top page + project covers only (v2.1). */
window.PL_SITE={
  id:'codelab', name:'Codelab', title:'Codelab — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#060707','--fg':'#E6ECEA','--dim':'#6E7B79','--line':'#1A2221','--accent':'#35F2C2',
    '--veil':'rgba(6,7,7,.7)','--ui-bg':'rgba(6,7,7,.45)',
    '--font-display':'ui-monospace,"JetBrains Mono","SF Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace',
    '--font-text':'ui-monospace,"JetBrains Mono","SF Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace',
    '--ease':'cubic-bezier(.3,0,.1,1)','--dur':'.35s'},
    css:`.h1{font-size:clamp(34px,6vw,96px);letter-spacing:-.04em;font-weight:400}.h2{font-weight:400;letter-spacing:-.03em}
         .logo,.cover-title{font-weight:400;letter-spacing:-.05em}.logo{font-size:clamp(44px,10vw,160px)}.txt,.lede{font-size:14px}.lede{max-width:52ch}`},
  /* Codelab keeps the anttipiste text animations (Andy, v2.1) — but ONLY on the top page and on each project's
     first slide (its 'cover'), over a dimmed full-bleed app screenshot. Every other slide is fullscreen, no text.
     These are settings: change anims or scope here, or set mode:'logo' to use the hub rule instead. */
  text:{mode:'cover',anims:['decode','rotate','ticker'],scope:'first',rotateEvery:4500,speed:14},
  logo:{text:'CODELAB',html:'CODE<span>LAB</span>'},
  hero:{image:'media/toy-orbit.jpg',
    subs:['Code projects / live web apps','Field Toy / play it in the page','Radial Sequencer / screens','Mirror Field / screens']},
  fullbleed:true,     /* media slides fill the screen edge to edge */
  interludes:false,   /* the cover slides do the job of the interludes here */
  components:{edgeTicker:{texts:{
    top:['Codelab','Code projects','Live web apps'],
    right:['Field Toy','Radial Sequencer','Mirror Field'],
    bottom:['Pointlab','Codelab','Play it in the page'],
    left:['Orbit','Flow','Repel']},opacity:.7}},
  /* artist shown in the left ≡ panel (portrait:null = empty portrait slot). Placeholder bio — replace with approved text. */
  artist:{name:'Andy Point',role:'Code · Pointlab Instruments',bio:'Placeholder bio. Two or three lines about the artist, the studio and the way the work is made.',portrait:null},
  identity:{line:'Code projects. Each project is a playable web app with its own tutorial.',
    blocks:[{h:'Use',p:'Swipe or ←→ through a project. ▶ appears when a slide holds a live app.'}]},
  projects:[
    {id:'field',settings:['autoplay'],links:[{label:'Open the live app',href:'apps/field-toy.html',kind:'live app'},{label:'Source repository',kind:'placeholder'},{label:'Session video',href:'media/toy-session.mp4',kind:'video'}],facts:[['Year','2026 (placeholder)'],['Tech','JavaScript · Canvas 2D'],['Type','Live web app'],['Input','Touch / mouse / keys']],title:'Field Toy',code:'#35F2C2',
      info:'Live web app by Pointlab Instruments. Press ▶ beside the top-right symbol to play: drag to pull the field, tap for an attractor, keys 1–3 switch orbit / flow / repel, Space clears. Press ▶ again or Esc to return.',
      cover:{img:'media/toy-orbit.jpg',subs:['Particles follow a vector field you shape with your hand','Press ▶ to play · drag to pull · tap for an attractor','Keys 1–3: orbit / flow / repel · Esc returns to the site']},
      slides:[
      {type:'shot',title:'Controls',text:'The control strip is only visible in play mode.',img:'media/toy-controls.jpg',cover:true},
      {type:'app',title:'Try it',src:'apps/field-toy.html'},
      {type:'shot',title:'Orbit',text:'Law 1. Particles circle the attractor and condense into rings.',img:'media/toy-orbit.jpg',cover:true},
      {type:'shot',title:'Several attractors',text:'Taps add up to six attractors.',img:'media/toy-attractors.jpg',cover:true},
      {type:'shot',title:'Flow',text:'Law 2. A slow noise field carries the particles.',img:'media/toy-flow.jpg',cover:true},
      {type:'shot',title:'Repel',text:'Law 3. Attractors push particles away.',img:'media/toy-repel.jpg',cover:true},
      {type:'video',title:'Video example',text:'Screen recording of a session (placeholder).',video:'media/toy-session.mp4'},
      {type:'video',title:'Video output',text:'Rendered output of the flow law (placeholder).',video:'media/toy-output.mp4'}]},
    {id:'radial',settings:['autoplay'],links:[{label:'Source repository',kind:'placeholder'},{label:'Output video',href:'media/code-circuit.mp4',kind:'video'}],facts:[['Year','2025 (placeholder)'],['Tech','JavaScript · Web Audio'],['Type','Web app'],['Status','Screens only']],title:'Radial Sequencer',info:'Web app, screens only. A circular score where each ring is a voice and each segment a step (placeholder).',
      cover:{img:'media/code-tool-radial.jpg',subs:['A circular score: each ring a voice, each segment a step','Screens only / web app']},
      slides:[
      {type:'shot',title:'Score view',img:'media/code-tool-radial.jpg'},
      {type:'shot',title:'Dense pattern',img:'media/code-tool-radial-2.jpg'},
      {type:'video',title:'Video output',video:'media/code-circuit.mp4'}]},
    {id:'mirror',settings:['whole'],links:[{label:'Source repository',kind:'placeholder'}],facts:[['Year','2025 (placeholder)'],['Tech','JavaScript · WebGL'],['Type','Web app'],['Status','Screens only']],title:'Mirror Field',info:'Web app, screens only. A kaleidoscopic field generator with a parameter panel (placeholder).',
      cover:{img:'media/code-tool-field.jpg',subs:['A kaleidoscopic field generator','Parameter panel + mirrored output']},
      slides:[
      {type:'shot',title:'Panel + field',img:'media/code-tool-field.jpg'},
      {type:'shot',title:'Variation',img:'media/code-tool-panel.jpg'},
      {type:'shot',title:'Ring mode',img:'media/code-tool-ring.jpg'}]}
  ]
};
