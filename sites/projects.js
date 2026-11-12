/* Shared project registry (v2.5). Each project is stored once, with a tags array.
   Brand sites (We Are The Nature, Stage / Scenography) list projects whose `sites` include them.
   Works lists every project that carries any of its discipline tags, so a Nature commercial
   film tagged 'commercial film' also appears there. Stage/scenography work is tagged
   'stage design' and so stays on its own site unless it also carries a Works tag.
   ALL TEXT AND MEDIA ARE PLACEHOLDERS — swap via media/MEDIA.md. */
window.PL_WORKS_TAGS=['brand identity','graphic design','typography','illustration','photography','commercial film'];
window.PL_PROJECTS=[
  {id:'nature-commercial-1',sites:['nature'],tags:['photography','commercial film'],
    settings:['autoplay'],title:'Commercial project 1',
    info:'Placeholder text. A commercial film and stills series in which nature fills the frame and is given the hero space. Swap this stand-in for the real We Are The Nature project.',
    facts:[['Year','2026 (placeholder)'],['Type','Commercial film · photography'],['Brand','We Are The Nature'],['Format','4K / stills (placeholder)']],
    links:[{label:'Film (placeholder)',href:'media/art-sea.mp4',kind:'video'},{label:'Client (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Still 1',text:'Placeholder caption. A still from the film: nature fills the frame.',img:'media/art-ice.jpg'},
      {type:'video',title:'Film',text:'Placeholder caption. The commercial film, muted loop.',video:'media/art-sea.mp4'},
      {type:'full',title:'Still 2',text:'Placeholder caption. A second still from the same project.',img:'media/art-silhouettes.jpg'}]},
  {id:'nature-commercial-2',sites:['nature'],tags:['photography','commercial film'],
    settings:['autoplay'],title:'Commercial project 2',
    info:'Placeholder text. A second commercial project for We Are The Nature: drone-scale landscape stills and a nature film. Swap this stand-in for the real work.',
    facts:[['Year','2025 (placeholder)'],['Type','Commercial film · photography'],['Brand','We Are The Nature'],['Format','4K / stills (placeholder)']],
    links:[{label:'Film (placeholder)',href:'media/art-sea.mp4',kind:'video'},{label:'Client (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Landscape',text:'Placeholder caption. A wide still in which the land takes the frame.',img:'media/art-violet-field.jpg'},
      {type:'full',title:'Close',text:'Placeholder caption. A closer still from the same series.',img:'media/art-red-plant.jpg'},
      {type:'video',title:'Film',text:'Placeholder caption. The commercial film, muted loop.',video:'media/art-sea.mp4'}]},
  {id:'stage-production-1',sites:['stage'],tags:['stage design'],
    settings:['autoplay'],title:'Production 1',
    info:'Placeholder text. A stage / scenography production: the set as built, a model or render, and a production video. Swap this stand-in for the real production.',
    facts:[['Year','2026 (placeholder)'],['Type','Stage design · scenography'],['Venue','Placeholder'],['Role','Set and space (placeholder)']],
    links:[{label:'Production video',href:'media/fashion-runway.mp4',kind:'video'},{label:'Credits (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Stage photograph',text:'Placeholder caption. The set as built, photographed on stage.',img:'media/art-blue-room.jpg'},
      {type:'shot',title:'Model / render',text:'Placeholder caption. The model or render for the production.',img:'media/code-tool-3d.jpg'},
      {type:'video',title:'Production video',text:'Placeholder caption. A short from the production.',video:'media/fashion-runway.mp4'},
      {type:'full',title:'Space',text:'Placeholder caption. A second photograph of the space.',img:'media/art-pigment-room.jpg'}]},
  {id:'stage-production-2',sites:['stage'],tags:['stage design'],
    settings:['autoplay'],title:'Production 2',
    info:'Placeholder text. A second stage / scenography production. Photographs, a model or render, and a production video. Swap this stand-in for the real production.',
    facts:[['Year','2025 (placeholder)'],['Type','Stage design · scenography'],['Venue','Placeholder'],['Role','Set and space (placeholder)']],
    links:[{label:'Production video',href:'media/toy-session.mp4',kind:'video'},{label:'Credits (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Stage photograph',text:'Placeholder caption. The set as built.',img:'media/art-kul.jpg'},
      {type:'shot',title:'Model / render',text:'Placeholder caption. The model or render.',img:'media/code-tool-ring.jpg'},
      {type:'video',title:'Production video',text:'Placeholder caption. A short from the production.',video:'media/toy-session.mp4'},
      {type:'full',title:'Detail',text:'Placeholder caption. A detail of the set.',img:'media/art-red-figure.jpg'}]},
  {id:'works-brand',sites:['works'],tags:['brand identity'],
    settings:['whole'],title:'Brand identity',
    info:'Placeholder text. A client brand-identity project: wordmark, applications and a typographic system. Swap this stand-in for the real work.',
    facts:[['Year','2026 (placeholder)'],['Discipline','Brand identity'],['Client','Placeholder'],['Deliverables','Wordmark, system (placeholder)']],
    links:[{label:'Case study (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Wordmark',text:'Placeholder caption. The wordmark on a wall.',img:'media/fashion-wall.jpg'},
      {type:'shot',title:'Application',text:'Placeholder caption. The mark applied to a surface.',img:'media/fashion-gallery.jpg',cover:true},
      {type:'full',title:'System',text:'Placeholder caption. A later application of the same system.',img:'media/fashion-white-line.jpg'}]},
  {id:'works-graphic',sites:['works'],tags:['graphic design'],
    settings:['whole'],title:'Graphic design',
    info:'Placeholder text. A client graphic-design project: printed and worn applications of a typographic idea. Swap this stand-in for the real work.',
    facts:[['Year','2025 (placeholder)'],['Discipline','Graphic design'],['Client','Placeholder'],['Deliverables','Print, application (placeholder)']],
    links:[{label:'Case study (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'shot',title:'Print',text:'Placeholder caption. A printed application.',img:'media/fashion-text-suits.jpg',cover:true},
      {type:'shot',title:'Knit',text:'Placeholder caption. The graphic on cloth.',img:'media/fashion-no-war.jpg',cover:true},
      {type:'shot',title:'Panel',text:'Placeholder caption. A back-panel application.',img:'media/fashion-jacket.jpg',cover:true}]},
  {id:'works-type',sites:['works'],tags:['typography'],
    settings:['whole'],title:'Typography',
    info:'Placeholder text. A typographic commission: lettering built as a system and applied at scale. Swap this stand-in for the real work.',
    facts:[['Year','2025 (placeholder)'],['Discipline','Typography'],['Client','Placeholder'],['Deliverables','Lettering, applications (placeholder)']],
    links:[{label:'Type specimen (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Lettering',text:'Placeholder caption. The lettering at full scale.',img:'media/fashion-gallery.jpg'},
      {type:'shot',title:'Detail',text:'Placeholder caption. A closer typographic detail.',img:'media/fashion-no-war.jpg',cover:true},
      {type:'full',title:'Line-up',text:'Placeholder caption. The type in a sequence.',img:'media/fashion-lineup.jpg'}]},
  {id:'works-illustration',sites:['works'],tags:['illustration'],
    settings:['whole'],title:'Illustration',
    info:'Placeholder text. An illustration series for a client: form, colour and a repeated motif. Swap this stand-in for the real work.',
    facts:[['Year','2024 (placeholder)'],['Discipline','Illustration'],['Client','Placeholder'],['Deliverables','Series (placeholder)']],
    links:[{label:'Series (placeholder)',kind:'placeholder'}],
    slides:[
      {type:'full',title:'Figure',text:'Placeholder caption. The first plate of the series.',img:'media/art-red-figure.jpg'},
      {type:'full',title:'Study',text:'Placeholder caption. A second plate.',img:'media/art-cross-symmetry.jpg'},
      {type:'full',title:'Variation',text:'Placeholder caption. A third plate.',img:'media/art-blue-symmetry.jpg'}]}
];
window.PL_projectsFor=function(site,tags){
  const all=window.PL_PROJECTS||[];
  const copy=function(p){return JSON.parse(JSON.stringify(p));};
  if(tags&&tags.length) return all.filter(function(p){return (p.tags||[]).some(function(t){return tags.indexOf(t)>=0;});}).map(copy);
  return all.filter(function(p){return (p.sites||[]).indexOf(site)>=0;}).map(copy);
};
