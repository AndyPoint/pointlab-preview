/* SUBSITE CONFIG — Codelab. Mono type, teal signal colour, fast scramble motion, flow-field hero. */
window.PL_SITE={
  id:'codelab', name:'Codelab', title:'Codelab — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#060707','--fg':'#E6ECEA','--dim':'#6E7B79','--line':'#1A2221','--accent':'#35F2C2',
    '--veil':'rgba(6,7,7,.7)','--ui-bg':'rgba(6,7,7,.45)',
    '--font-display':'ui-monospace,"JetBrains Mono","SF Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace',
    '--font-text':'ui-monospace,"JetBrains Mono","SF Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace',
    '--ease':'cubic-bezier(.3,0,.1,1)','--dur':'.35s'},
    css:`.h1{font-size:clamp(34px,6vw,96px);letter-spacing:-.04em;font-weight:400}.h2{font-weight:400;letter-spacing:-.03em}
         .hero-title{font-weight:400;letter-spacing:-.05em;font-size:clamp(44px,10vw,160px)}.txt,.lede{font-size:14px}.lede{max-width:52ch}`},
  motion:{title:'scramble',body:'type',step:'type',scrambleSpeed:14,typeSpeed:10},
  hero:{generator:'flow',opt:{seed:11},title:'CODELAB',sub:'Code projects / live web apps',dissolve:false,
    subs:['Code projects / live web apps','Field Toy / play it in the page','Radial Sequencer / screens','Mirror Field / screens'],rotateEvery:4500},
  identity:{line:'Code projects. Each project is a playable web app with its own tutorial.',
    blocks:[{h:'Use',p:'Swipe or ←→ through a project. ▶ appears when a slide holds a live app.'}]},
  projects:[
    {id:'field',title:'Field Toy',code:'#35F2C2',author:'Pointlab Instruments',slides:[
      {type:'concept',title:'Field Toy',lede:'Particles follow a vector field that you shape with your hand. Placeholder concept text: what the tool is for and what it produces.',
        meta:[['Type','Live web app'],['Input','Touch / mouse / keys'],['Output','Video, stills']]},
      {type:'tutorial',title:'How to use',steps:['Press ▶ beside the top-right symbol. It turns red: the app now takes your input.','Drag to pull the field. A short tap leaves an attractor.','Keys 1–3 switch the law: orbit, flow, repel. Space clears.','Press ▶ again, or Esc, to return to the site.']},
      {type:'app',title:'Try it',src:'apps/field-toy.html'},
      {type:'shot',title:'Orbit',text:'Law 1. Particles circle the attractor and condense into rings.',img:'media/toy-orbit.jpg',cover:true},
      {type:'shot',title:'Several attractors',text:'Taps add up to six attractors; their orbits interfere.',img:'media/toy-attractors.jpg',cover:true},
      {type:'shot',title:'Flow',text:'Law 2. A slow noise field carries the particles across the screen.',img:'media/toy-flow.jpg',cover:true},
      {type:'shot',title:'Repel',text:'Law 3. Attractors push particles away and leave dark voids.',img:'media/toy-repel.jpg',cover:true},
      {type:'shot',title:'Controls',text:'The control strip is only visible in play mode, so the frame stays clean.',img:'media/toy-controls.jpg',cover:true},
      {type:'video',title:'Video example',text:'Screen recording of a session (placeholder).',video:'media/toy-session.mp4'},
      {type:'video',title:'Video output',text:'Rendered output of the flow law (placeholder).',video:'media/toy-output.mp4'}]},
    {id:'radial',title:'Radial Sequencer',slides:[
      {type:'concept',title:'Radial\nSequencer',lede:'Placeholder concept text. A circular score where each ring is a voice and each segment a step.',meta:[['Type','Web app'],['Status','Screens only']]},
      {type:'shot',title:'Score view',text:'Rings, segments and the live cursor. Placeholder explanation.',img:'media/code-tool-radial.jpg'},
      {type:'shot',title:'Dense pattern',text:'The same score with more active steps. Placeholder explanation.',img:'media/code-tool-radial-2.jpg'},
      {type:'video',title:'Video output',text:'Placeholder: a related generative render.',video:'media/code-circuit.mp4'}]},
    {id:'mirror',title:'Mirror Field',slides:[
      {type:'concept',title:'Mirror\nField',lede:'Placeholder concept text. A kaleidoscopic field generator with a parameter panel.',meta:[['Type','Web app'],['Status','Screens only']]},
      {type:'shot',title:'Panel + field',text:'Parameters on the left, mirrored output on the right.',img:'media/code-tool-field.jpg'},
      {type:'shot',title:'Variation',text:'Same panel, a different seed.',img:'media/code-tool-panel.jpg'},
      {type:'shot',title:'Ring mode',text:'A single ring render from the same family of tools.',img:'media/code-tool-ring.jpg'}]}
  ]
};
