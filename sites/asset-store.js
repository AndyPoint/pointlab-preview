/* SUBSITE CONFIG — Asset Store (v2.3). Digital assets: 3D models, textures, video loops, tools.
   Each project is a product/asset page: media only on the slides; name, info, specs and a placeholder 'Get' row
   live in the LEFT panel only (project.get), never over the media. Clean shelf look: paper-grey ground, ink,
   safety-orange accent, Space Grotesk + mono specs, crisp rhythm. ALL TEXT AND PRICES ARE PLACEHOLDER. */
window.PL_SITE={
  id:'assets', name:'Asset Store', title:'Asset Store — Pointlab (mockup)', lang:'en',
  theme:{vars:{'--bg':'#EDEDEA','--fg':'#111111','--dim':'#77776F','--line':'#D4D4CE','--accent':'#FF5A1F',
    '--veil':'rgba(237,237,234,.7)','--panel':'#111111','--panel-line':'#2A2A2A','--panel-fg':'#EDEDEA','--panel-dim':'#8A8A84','--ui-bg':'rgba(237,237,234,.5)',
    '--font-display':'"Space Grotesk","Archivo",sans-serif','--font-text':'"Space Grotesk","Archivo",sans-serif',
    '--ease':'cubic-bezier(.2,.8,.2,1)','--dur':'.3s'},
    css:`.h1,.h2,.logo{font-weight:700;letter-spacing:-.03em}.logo{font-size:clamp(48px,10vw,168px)}.logo span{color:var(--accent)}
         .s-shot{background:#E4E4E0}`},
  logo:{text:'ASSETSTORE',html:'ASSET<span>STORE</span>',hold:2400,dissolve:true},
  hero:{generator:'lattice'},
  interludes:true,
  labels:{project:'Asset',shot:'Preview',video:'Loop preview'},
  artist:{name:'Andy Point',role:'Maker · Asset Store',bio:'Placeholder bio. Two or three lines about who makes the assets and how they are made.',portrait:null},
  identity:{line:'Placeholder: digital assets from the Pointlab studio — 3D models, textures, video loops and tools.',
    blocks:[{h:'Licence',p:'Placeholder text. Licence terms, formats and support will be described here.'}]},
  projects:[
    {id:'orbit-loops',settings:['autoplay','whole'],title:'Orbit Loop Pack',get:{label:'Get',price:'€ — (placeholder)',href:null},
      info:'Placeholder text. Ten seamless particle loops rendered from the Field Toy instrument.',
      facts:[['Type','Video loops'],['Format','MP4 · 1080p · 8 s'],['Items','10 (placeholder)'],['Licence','Placeholder']],
      links:[{label:'Preview loop',href:'media/toy-output.mp4',kind:'video'},{label:'Licence terms',kind:'placeholder'}],
      slides:[
      {type:'video',title:'Loop preview',text:'Placeholder caption.',video:'media/toy-output.mp4',fit:'contain'},
      {type:'shot',title:'Orbit still',text:'Placeholder caption.',img:'media/toy-orbit.jpg'},
      {type:'shot',title:'Flow still',text:'Placeholder caption.',img:'media/toy-flow.jpg'}]},
    {id:'pigment-textures',settings:['whole'],title:'Pigment Textures',get:{label:'Get',price:'€ — (placeholder)',href:null},
      info:'Placeholder text. High-resolution pigment and field textures for 3D and print.',
      facts:[['Type','Textures'],['Format','JPG · 4K (placeholder)'],['Items','24 (placeholder)'],['Licence','Placeholder']],
      links:[{label:'Licence terms',kind:'placeholder'}],
      slides:[
      {type:'shot',title:'Violet field',text:'Placeholder caption.',img:'media/art-violet-field.jpg'},
      {type:'shot',title:'Green orb',text:'Placeholder caption.',img:'media/code-green-orb.jpg'},
      {type:'shot',title:'Ice',text:'Placeholder caption.',img:'media/art-ice.jpg'}]},
    {id:'field-tools',settings:['whole'],title:'Field Tools',get:{label:'Get',price:'€ — (placeholder)',href:null},
      info:'Placeholder text. A set of browser tools for generating symmetric fields and 3D volumes.',
      facts:[['Type','Tools · web'],['Format','HTML / JS'],['Includes','3 tools (placeholder)'],['Licence','Placeholder']],
      links:[{label:'Documentation',kind:'placeholder'},{label:'Changelog',kind:'placeholder'}],
      slides:[
      {type:'shot',title:'Panel',text:'Placeholder caption.',img:'media/code-tool-panel.jpg'},
      {type:'shot',title:'Ring mode',text:'Placeholder caption.',img:'media/code-tool-ring.jpg'},
      {type:'shot',title:'3D volume',text:'Placeholder caption.',img:'media/code-tool-3d.jpg'}]}
  ]
};
