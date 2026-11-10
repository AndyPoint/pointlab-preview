/* SUBSITE CONFIG — Conscious Architecture Company (v2.3). Calm and architectural: warm stone ground, ink, oak accent,
   Jost Light set wide, slow rhythm. Only the centred wordmark animates (top page + interludes). ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'conscious', name:'Conscious Architecture Company', title:'Conscious Architecture Company — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#ECEAE4','--fg':'#1C1B18','--dim':'#77736B','--line':'#D6D2C8','--accent':'#9A7B4F',
    '--veil':'rgba(236,234,228,.7)','--panel':'#1C1B18','--panel-line':'#33312C','--panel-fg':'#ECEAE4','--panel-dim':'#8F8A80','--ui-bg':'rgba(236,234,228,.5)',
    '--font-display':'"Jost",-apple-system,sans-serif','--font-text':'"Jost",-apple-system,sans-serif',
    '--ease':'cubic-bezier(.25,.1,.25,1)','--dur':'1.4s'},
    css:`.h1,.h2{font-weight:300;letter-spacing:.02em}.h1{font-size:clamp(34px,5.4vw,84px);line-height:1.05}
         .logo{font-weight:300;letter-spacing:.32em;font-size:clamp(18px,3.6vw,52px);text-transform:uppercase;padding-left:.32em}
         .logo span{font-weight:500}.lede,.txt,.body p{font-weight:300;font-size:17px;line-height:1.7}.kick,.d{letter-spacing:.3em}
         .pad{padding-left:clamp(28px,9vw,160px);padding-right:clamp(28px,9vw,160px)}`},
  logo:{text:'CONSCIOUS ARCHITECTURE',html:'CONSCIOUS <span>ARCHITECTURE</span>',hold:3400,dissolve:true},
  hero:{generator:'plan',opt:{seed:11}},
  interludes:true,
  labels:{full:'Space'},
  artist:{name:'Andy Point',role:'Architect · Conscious Architecture Company',bio:'Placeholder bio. Two or three lines about the practice, its method and the way the work is made.',portrait:null},
  identity:{line:'Placeholder: an architecture practice and a body of theory on consciousness, presence and spatial design.',
    blocks:[{h:'Practice',p:'Placeholder identity text. Buildings and rooms designed for attention: light, threshold, material, silence.'}]},
  projects:[
    {id:'presence',settings:['whole'],title:'Presence Pavilion',info:'Placeholder text. A small pavilion designed around one continuous movement of light through the day.',
      facts:[['Year','2026 (placeholder)'],['Type','Pavilion · built study'],['Status','Concept'],['Tools','Physical model · 3D']],
      links:[{label:'Drawings set (PDF)',kind:'placeholder'},{label:'Model study image',href:'media/code-tool-3d.jpg',kind:'image'}],
      slides:[
      {type:'concept',title:'Presence\npavilion',lede:'Placeholder concept text. A room you enter slowly; the plan is a single curve that keeps the visitor in the present.',meta:[['Area','40 m² (placeholder)'],['Material','Oak, lime, glass']]},
      {type:'full',title:'Interior',text:'Placeholder caption. The seating curve and the column.',img:'media/studio-sofa.jpg'},
      {type:'full',title:'Second view',text:'Placeholder caption. The stair as a slow return.',img:'media/studio-sofa-2.jpg'},
      {type:'shot',title:'Model study',text:'Placeholder caption. Volume study in the 3D tool.',img:'media/code-tool-3d.jpg'},
      {type:'notes',title:'Notes'}]},
    {id:'threshold',settings:['whole'],title:'Threshold Rooms',info:'Placeholder text. A series of studies on the moment of crossing from outside to inside.',
      facts:[['Year','2025 (placeholder)'],['Type','Spatial research'],['Status','Ongoing']],
      links:[{label:'Research notes',kind:'placeholder'}],
      slides:[
      {type:'text',kicker:'Theory',title:'Thresholds',body:['Placeholder text. A short paragraph on the threshold as the place where attention changes.','Placeholder text. A second paragraph on light, sound and material at the edge of a room.']},
      {type:'full',title:'Site: ice',text:'Placeholder caption. A winter site study, the ground before the building.',img:'media/art-ice.jpg'},
      {type:'shot',title:'Material grid',text:'Placeholder caption. Surfaces sorted by light and grain.',img:'media/code-tool-grid.jpg'},
      {type:'notes',title:'Notes'}]},
    {id:'essay',title:'On Conscious Space',info:'Placeholder text. The theory text of the practice, in three short parts.',
      facts:[['Year','2026 (placeholder)'],['Type','Essay · theory'],['Length','3 parts']],
      links:[{label:'Full essay',kind:'placeholder'}],
      slides:[
      {type:'text',kicker:'Part 1',title:'Attention',body:['Placeholder text. What a room asks of the person inside it.','Placeholder text. Consciousness as something a plan can support or disturb.']},
      {type:'text',kicker:'Part 2',title:'Presence',body:['Placeholder text. Proportion, slowness and the single view.']},
      {type:'text',kicker:'Part 3',title:'Practice',body:['Placeholder text. How the company works: listening, drawing, building.']}]}
  ]
};
