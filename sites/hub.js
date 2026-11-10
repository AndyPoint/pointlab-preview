/* SUBSITE CONFIG — Pointlab hub. Identity = theme + logo + hero generator. No engine code here.
   v2.1 rules: no text over project media (captions go into 'notes' / 'text' slides and the left panel);
   the only text animation is the logo (hero + interludes). Media paths: see media/MEDIA.md. */
window.PL_SITE={
  id:'hub', name:'Pointlab', title:'Pointlab — hub (mockup v2.2)', lang:'en',
  /* anttipiste palette — ground #F6F6F6 (top page + interludes), void #060606 slides, ink #0A0A0A, mid #888, Kapoor red */
  theme:{vars:{'--bg':'#060606','--fg':'#F6F6F6','--dim':'#888888','--line':'#2A2A2A','--accent':'#D8261C',
    '--hero-bg':'#F6F6F6','--hero-fg':'#0A0A0A','--ease':'cubic-bezier(.16,1,.3,1)','--dur':'.8s'}},
  /* the one text animation: centred logo decode → hold → dissolve */
  logo:{text:'POINTLAB',html:'POINT<span>LAB</span>',hold:2600,dissolve:true},
  hero:{generator:'keha',opt:{bg:'#F6F6F6',ink:'#0A0A0A',accent:'#D8261C',chord:'#002FA7',grid:48,scale:.44,cx:.5,cy:.5}},
  interludes:true,   /* a logo page between consecutive projects; false = none, [1,3] = before those projects */
  /* artist shown in the left ≡ panel (portrait:null = empty portrait slot). Placeholder bio — replace with approved text. */
  artist:{name:'Andy Point',role:'Artist · Pointlab',bio:'Placeholder bio. Two or three lines about the artist, the studio and the way the work is made.',portrait:null},
  identity:{line:'Hub for the monthly gallery, news and the Pointlab sites.',
    blocks:[{h:'About',p:'Placeholder identity text. One short paragraph describing Pointlab goes here.'}]},
  projects:[
    {id:'gallery',title:'Gallery — November',settings:['whole'],links:[{label:'Print edition',kind:'placeholder'},{label:'Pigment room image',href:'media/art-pigment-room.jpg',kind:'image'}],info:'Work of the month: Symmetry studies by Andy Point (placeholder text).',code:'#002FA7',slides:[
      {type:'concept',title:'Symmetry\nstudies',lede:'Work of the month. Placeholder text: a short curatorial note about the series, its method and why it is shown this month.',
        meta:[['Month','11 / 2026'],['Series','Symmetry studies'],['Artist','Andy Point'],['Works','3']]},
      {type:'full',kicker:'Room',title:'Pigment room',text:'Placeholder image (Midjourney). How the series is hung: one blue room before the three studies.',img:'media/art-pigment-room.jpg'},
      {type:'shot',kicker:'Work 1 / 3',title:'Blue axis',text:'Placeholder caption. One line on how the form was generated and mirrored.',img:'media/art-blue-symmetry.jpg'},
      {type:'shot',kicker:'Work 2 / 3',title:'Red / blue',text:'Placeholder caption. The second study adds a counter-colour layer.',img:'media/art-red-blue-symmetry.jpg'},
      {type:'shot',kicker:'Work 3 / 3',title:'Cross',text:'Placeholder caption. Four-fold symmetry closes the series.',img:'media/art-cross-symmetry.jpg'},
      {type:'notes',title:'List of works'}]},
    /* news / blog suite — reusable on any site: kind:'news' + entries (date, title, lede, body, optional img) */
    {id:'news',title:'News',kind:'news',info:'News and blog entries from all Pointlab sites (placeholder text).',code:'#D8261C',entries:[
      {date:'10.11.2026',iso:'2026-11-10',title:'November gallery: Symmetry studies',img:'media/art-blue-symmetry.jpg',alt:'Blue symmetry study',
        lede:'Placeholder text. Three works, shown for one month.',
        body:['Placeholder text — replace with the real article. This paragraph introduces the November gallery and why the Symmetry studies were chosen for it.',
              'Placeholder text. A second paragraph on the method: how each form is generated, mirrored and coloured, and how the three works relate.',
              'Placeholder text. A closing paragraph with dates, where to see the works and a link to the gallery suite.']},
      {date:'02.11.2026',iso:'2026-11-02',title:'Studio: furniture series',img:'media/studio-sofa.jpg',alt:'Sofa and table, studio photograph',
        lede:'Placeholder text. Sofa and table designs from the studio.',
        body:['Placeholder text — replace with the real article. A short introduction to the studio’s sofa and table series.',
              'Placeholder text. Materials, dimensions and production notes go here.']},
      {date:'20.10.2026',iso:'2026-10-20',title:'Codelab: Field Toy is live',img:'media/toy-orbit.jpg',alt:'Field Toy, orbit law',
        lede:'Placeholder text. A playable web app inside the site.',
        body:['Placeholder text — replace with the real article. Field Toy is the first live web app on Codelab; this paragraph says what it does.',
              'Placeholder text. How to play it: open Codelab, go to Field Toy and press ▶ on the live-app slide.']}]},
    {id:'sites',title:'Sites',code:'#D8261C',info:'All Pointlab sites: live ones open, planned ones listed.',slides:[{type:'links',title:'Sites'}]}
  ]
};
