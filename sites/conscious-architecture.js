/* SUBSITE CONFIG — Conscious Architecture Company (v2.4). Data-visualisation language (from Andy's private references, kept
   only in the design plan): navy-charcoal ground, white/grey hairlines, ONE crimson accent used only where data or meaning sits
   (current item, a guide, a node), small mono uppercase labels, radial/grid construction, scale bars and legends.
   The top page is a self-constructing radial drawing (generator 'construct') behind the centred wordmark; still with reduced
   motion / Animations off. Only the wordmark animates as text. Media = self-generated PLACEHOLDER drawings (tests/make_cac_drawings.py).
   ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'conscious', name:'Conscious Architecture Company', title:'Conscious Architecture Company — Pointlab (mockup)', lang:'en',
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
  logo:{text:'CONSCIOUS ARCHITECTURE',html:'CONSCIOUS <span>ARCHITECTURE</span>',hold:3400,dissolve:true},
  hero:{generator:'construct',opt:{seed:11,fold:6,spokes:24,cycle:26000}},
  interludes:true,
  labels:{full:'Drawing',shot:'Drawing'},
  artist:{name:'Andy Point',role:'Architect · Conscious Architecture Company',bio:'Placeholder bio. Two or three lines about the practice, its method and the way the work is made.',portrait:null},
  identity:{line:'Placeholder: an architecture practice and a body of theory on consciousness, presence and spatial design.',
    blocks:[{h:'Practice',p:'Placeholder identity text. Buildings and rooms designed for attention: light, threshold, material, silence.'}]},
  projects:[
    {id:'presence',settings:['whole'],title:'Presence Pavilion',info:'Placeholder text. A small pavilion designed around one continuous movement of light through the day.',
      facts:[['Year','2026 (placeholder)'],['Type','Pavilion · built study'],['Status','Concept'],['Tools','Physical model · 3D']],
      links:[{label:'Drawings set (PDF)',kind:'placeholder'},{label:'Radial study (placeholder drawing)',href:'media/cac-presence-radial.svg',kind:'image'}],
      slides:[
      {type:'concept',title:'Presence\npavilion',lede:'Placeholder concept text. A room you enter slowly; the plan is a single curve that keeps the visitor in the present.',meta:[['Area','40 m² (placeholder)'],['Material','Placeholder']]},
      {type:'full',title:'Presence, radial',text:'Placeholder drawing. Presence over a day, rings by hour; heat marks where people stay.',img:'media/cac-presence-radial.svg'},
      {type:'shot',title:'Construction',text:'Placeholder drawing. The plan figure built from a radial grid in three steps.',img:'media/cac-construction-sequence.svg'},
      {type:'full',title:'Passage detail',text:'Placeholder drawing. Section through the entry passage, numbered legend and scale bar.',img:'media/cac-passage-section.svg'},
      {type:'notes',title:'Notes'}]},
    {id:'threshold',settings:['whole'],title:'Threshold Rooms',info:'Placeholder text. A series of studies on the moment of crossing from outside to inside.',
      facts:[['Year','2025 (placeholder)'],['Type','Spatial research'],['Status','Ongoing']],
      links:[{label:'Research notes',kind:'placeholder'}],
      slides:[
      {type:'text',kicker:'Theory',title:'Thresholds',body:['Placeholder text. A short paragraph on the threshold as the place where attention changes.','Placeholder text. A second paragraph on light, sound and material at the edge of a room.']},
      {type:'full',title:'Threshold plan',text:'Placeholder drawing. The rooms in plan; red marks the measured crossing.',img:'media/cac-threshold-plan.svg'},
      {type:'full',title:'Relations',text:'Placeholder drawing. Rooms as a network; red nodes are thresholds.',img:'media/cac-relations-network.svg'},
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
