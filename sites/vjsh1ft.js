/* SUBSITE CONFIG — VJSH1FT (v2.3). Andy's VJ / live-visual identity (Sh1ft). Dark, video-first, Resolume-style:
   black ground, Sh1ft violet signal (anttipiste --code-sh1ft), condensed Big Shoulders Display, fast rhythm.
   Project slides favour video. Only the centred wordmark animates. ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'vj', name:'VJSH1FT', title:'VJSH1FT — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#040404','--fg':'#EDEDED','--dim':'#6F6F6F','--line':'#1C1C1C','--accent':'#9B2BFF',
    '--veil':'rgba(4,4,4,.7)','--panel':'#0C0C0C','--panel-line':'#222','--panel-fg':'#EDEDED','--panel-dim':'#7A7A7A','--ui-bg':'rgba(4,4,4,.45)',
    '--font-display':'"Big Shoulders Display","Archivo",sans-serif',
    '--ease':'cubic-bezier(.7,0,.2,1)','--dur':'.22s'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:800;text-transform:uppercase;letter-spacing:.01em}
         .h1{font-size:clamp(56px,11vw,180px);line-height:.86}.logo{font-size:clamp(72px,17vw,280px);line-height:.85}
         .logo span{color:var(--accent)}.kick,.d{font-family:var(--font-mono)}`},
  logo:{text:'VJSH1FT',html:'VJSH<span>1</span>FT',hold:1800,dissolve:true,speed:12},
  hero:{generator:'scan'},
  fullbleed:true,
  interludes:true,
  labels:{video:'Clip',full:'Screen'},
  artist:{name:'Andy Point',role:'VJ · Sh1ft',bio:'Placeholder bio. Two or three lines about the live visual practice, the rig and the clubs and stages.',portrait:null},
  identity:{line:'Placeholder: live visuals and VJ sets by Sh1ft. Layers, loops and feedback played in real time.',
    blocks:[{h:'Rig',p:'Placeholder text. Resolume-style layer stack, controllers, generative sources and recorded loops.'}]},
  projects:[
    {id:'sets',settings:['autoplay'],title:'Live Sets',info:'Placeholder text. Recordings of live sets: each clip is one layer stack, played by hand.',
      facts:[['Year','2026 (placeholder)'],['Type','Live visuals'],['Software','Resolume-style rig (placeholder)'],['Output','1080p / LED']],
      links:[{label:'Set recording',href:'media/code-glitch.mp4',kind:'video'},{label:'Booking (placeholder)',kind:'placeholder'}],
      slides:[
      {type:'video',title:'Glitch layer',text:'Placeholder caption. Feedback layer, hand-played.',video:'media/code-glitch.mp4'},
      {type:'video',title:'Circuit',text:'Placeholder caption. Generative circuit source.',video:'media/code-circuit.mp4'},
      {type:'video',title:'Sea',text:'Placeholder caption. Slow water loop under the beat.',video:'media/art-sea.mp4'},
      {type:'full',title:'Deck',text:'Placeholder caption. The Sh1ft deck screen.',img:'media/vj-sh1ft.jpg'},
      {type:'notes',title:'Clips'}]},
    {id:'loops',settings:['autoplay'],title:'Loop Bank',info:'Placeholder text. Loops built for the sets, rendered from Pointlab code instruments.',
      facts:[['Year','2025 (placeholder)'],['Type','Loop library'],['Format','MP4 / H.264']],
      links:[{label:'Loop preview',href:'media/toy-output.mp4',kind:'video'}],
      slides:[
      {type:'video',title:'Flow output',text:'Placeholder caption.',video:'media/toy-output.mp4'},
      {type:'video',title:'Session',text:'Placeholder caption.',video:'media/toy-session.mp4'},
      {type:'full',title:'Red plant',text:'Placeholder caption. A still used as a source layer.',img:'media/art-red-plant.jpg'},
      {type:'notes',title:'Clips'}]}
  ]
};
