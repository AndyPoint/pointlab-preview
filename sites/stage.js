/* SUBSITE CONFIG — Stage / Scenography (v2.5). Andy's stage-design practice, lately the
   biggest commercial line. Placeholder productions: stage photographs, a model or render,
   and a production video. Standard menus; a Jost wordmark on the default dark ground.
   Only the centred wordmark animates (top page + interludes). ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'stage', name:'Stage / Scenography', title:'Stage / Scenography — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--font-display':'"Jost","Archivo",sans-serif'},
    css:`.h1,.h2,.logo{font-family:var(--font-display);font-weight:600;letter-spacing:-.03em}.logo{font-size:clamp(56px,12vw,180px)}`},
  logo:{text:'STAGE',html:'STAGE',hold:2600,dissolve:true},
  hero:{generator:'plan'},
  interludes:true,
  labels:{full:'Stage photograph',shot:'Model / render',video:'Production video',project:'Production'},
  artist:{name:'Andy Point',role:'Stage design · scenography',bio:'Placeholder bio. Two or three lines about the stage and scenography practice, the productions and the spaces.',portrait:null},
  identity:{line:'Placeholder: stage design and scenography — sets, models and production films.',
    blocks:[{h:'Practice',p:'Placeholder text. Productions shown as they were built, as models or renders, and as film from the performance.'}]},
  projects:window.PL_projectsFor('stage')
};
