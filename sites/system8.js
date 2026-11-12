/* SUBSITE CONFIG — System 8 (v2.5). Kickstarter promo for Andy's System 8 Codelab tools,
   laid out as a 2D grid on the existing engine (vertical = rows, horizontal = pages).
   Top page = centred SYSTEM 8 wordmark over a dimmed app-screenshot placeholder.
   Row 1 = the overall System 8 concept: explanation in the left panel, promo video fullscreen.
   Rows 2–5 = placeholder apps App 1–App 4. Horizontal pages in each app row:
   Overview, Tools, Demo projects, Example videos, Functionalities, Help.
   Help text lives in the left panel; the help slide is a screenshot (no text over media).
   The left panel shows the current app and page, with jump lists for rows and pages.
   The campaign is not live: right-panel link "Coming to Kickstarter" (placeholder #);
   left panel says coming soon and keeps a launch-date placeholder (no reward tiers).
   Neutral default black/white engine look, no accent colour, no grade.
   Only the centred wordmark animates (top page). ALL TEXT IS PLACEHOLDER. */
(function(){
  const help=function(n){return 'Placeholder help for App '+n+'. This text lives in the left panel. One short paragraph on how to open the app, what the main tools do, and where to find the demo projects. Swap this stand-in for the real help.';};
  const app=function(n, media){
    return {id:'app-'+n,title:'App '+n,settings:['autoplay'],
      info:'Placeholder text. App '+n+' of System 8 — one of the Codelab tools in the set. Swap this stand-in for the real software.',
      facts:[['Set','System 8'],['Row','App '+n+' of 4'],['Status','Coming soon']],
      links:[{label:'Live app (placeholder)',kind:'placeholder'}],
      help:help(n),
      slides:[
        {type:'full',title:'Overview',text:'Placeholder caption. Overview of App '+n+'.',img:media.overview},
        {type:'shot',title:'Tools',text:'Placeholder caption. The tools in App '+n+'.',img:media.tools,cover:true},
        {type:'shot',title:'Demo projects',text:'Placeholder caption. Demo projects in App '+n+'.',img:media.demo,cover:true},
        {type:'video',title:'Example videos',text:'Placeholder caption. An example video from App '+n+'.',video:media.video},
        {type:'shot',title:'Functionalities',text:'Placeholder caption. Functionalities of App '+n+'.',img:media.func,cover:true},
        {type:'shot',title:'Help',text:'Placeholder caption. A help screenshot for App '+n+'. The help text is in the left panel.',img:media.help,cover:true}]};
  };
  window.PL_SITE={
    id:'system8', name:'System 8', title:'System 8 — Pointlab (mockup)', lang:'en',
    theme:{vars:{'--accent':'#F2F2F2'},
      css:`.logo{font-size:clamp(44px,10vw,160px)}.logo span{color:inherit}`},
    logo:{text:'SYSTEM 8',html:'SYSTEM 8',hold:2600,dissolve:true},
    hero:{image:'media/toy-controls.jpg',dim:true},
    fullbleed:true,
    interludes:false,
    grid:true,
    labels:{project:'Row',rows:'Rows',slides:'Pages',full:'Overview',shot:'Page',video:'Video',help:'Help'},
    artist:{name:'Andy Point',role:'Code · System 8',bio:'Placeholder bio. Two or three lines about System 8, the Codelab tools and the upcoming Kickstarter campaign.',portrait:null},
    identity:{line:'Placeholder: System 8 is a set of Codelab tools. A Kickstarter campaign is coming soon.',
      blocks:[{h:'Campaign',p:'Placeholder text. The campaign is not live yet. A launch date will be announced here.'}]},
    campaign:{
      status:'Coming soon',
      launch:'Date (placeholder)',
      kickstarter:{label:'Coming to Kickstarter',href:'#'}
    },
    projects:[
      {id:'concept',settings:['autoplay'],title:'System 8',
        info:'Placeholder text. The overall System 8 concept: a set of Codelab tools, each a row in this grid. The main explanation lives here in the left panel; the promo video fills the screen. Swap this stand-in for the real campaign film and copy.',
        facts:[['Type','Concept · promo'],['Set','System 8'],['Campaign','Coming soon'],['Launch','Date (placeholder)']],
        links:[{label:'Promo video (placeholder)',href:'media/toy-session.mp4',kind:'video'}],
        slides:[
          {type:'video',title:'Promo',text:'Placeholder caption. A promo video for System 8.',video:'media/toy-session.mp4'},
          {type:'full',title:'Still',text:'Placeholder caption. A still from the promo.',img:'media/toy-orbit.jpg'}]},
      app(1,{overview:'media/toy-orbit.jpg',tools:'media/toy-controls.jpg',demo:'media/toy-attractors.jpg',video:'media/toy-output.mp4',func:'media/toy-flow.jpg',help:'media/toy-repel.jpg'}),
      app(2,{overview:'media/code-tool-field.jpg',tools:'media/code-tool-panel.jpg',demo:'media/code-tool-grid.jpg',video:'media/code-circuit.mp4',func:'media/code-tool-ring.jpg',help:'media/code-tool-field.jpg'}),
      app(3,{overview:'media/code-tool-radial.jpg',tools:'media/code-tool-radial-2.jpg',demo:'media/code-tool-3d.jpg',video:'media/code-glitch.mp4',func:'media/code-tool-panel.jpg',help:'media/code-tool-ring.jpg'}),
      app(4,{overview:'media/code-tool-grid.jpg',tools:'media/code-tool-3d.jpg',demo:'media/toy-flow.jpg',video:'media/toy-session.mp4',func:'media/toy-attractors.jpg',help:'media/code-tool-radial.jpg'})
    ]
  };
})();
