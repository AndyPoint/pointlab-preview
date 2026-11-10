/* SUBSITE CONFIG — Atelier (fashion). Bone paper, serif display, oxblood, drape hero. Text is static; only the logo animates (v2.1). */
window.PL_SITE={
  id:'fashion', name:'Atelier', title:'Atelier — Pointlab (mockup)', lang:'en',
  /* v2.3 redesign (Andy: "the red example site"): anttipiste colour grade 'Kapoor Red' — every image and video is mapped to a
     red/black duotone (engine grade), red-black ground, soft vignette, small mono uppercase type. Kept subtle: no ticker,
     no grain, no overlays, no text over media; only the centred wordmark animates. */
  grade:'kapoor',
  theme:{vars:{'--bg':'#0D0606','--fg':'#F2F2F2','--dim':'#8A8A8A','--line':'#2A1716','--accent':'#D8261C',
    '--veil':'rgba(13,6,6,.7)','--panel':'#130909','--panel-line':'#2E1A19','--panel-fg':'#F2F2F2','--panel-dim':'#8F8582','--ui-bg':'rgba(13,6,6,.45)',
    '--font-display':'"Space Grotesk","Archivo",sans-serif','--font-text':'"IBM Plex Mono",ui-monospace,Menlo,monospace',
    '--ease':'cubic-bezier(.16,.84,.2,1)','--dur':'.9s'},
    css:`.h1,.h2{font-family:var(--font-display);font-weight:700;letter-spacing:-.02em;text-transform:uppercase}
         .h1{font-size:clamp(40px,7vw,112px);line-height:.92}
         .logo{font-family:var(--font-display);font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:clamp(52px,11vw,184px);padding-left:.06em}
         .lede,.txt,.body p,.notes p{font-size:12px;line-height:18px;letter-spacing:.02em}
         .kick,.d,.meta,.notes small{font-size:10px;letter-spacing:.16em;text-transform:uppercase}
         .panel{font-family:var(--font-mono)}`},
  logo:{text:'ATELIER',html:'ATELIER',hold:2600,dissolve:true},
  hero:{generator:'drape',opt:{lines:64}},
  interludes:true,
  /* artist shown in the left ≡ panel (portrait:null = empty portrait slot). Placeholder bio — replace with approved text. */
  artist:{name:'Andy Point',role:'Designer · Atelier',bio:'Placeholder bio. Two or three lines about the artist, the studio and the way the work is made.',portrait:null},
  identity:{line:'Fashion. Collections told as sequences: idea, making, details, runway.',
    blocks:[{h:'Atelier',p:'Placeholder identity text for the fashion brand.'}]},
  labels:{full:'Look'},
  projects:[
    {id:'text',settings:['whole'],links:[{label:'Lookbook',kind:'placeholder'}],title:'Text collection',info:'Placeholder text. Slogans written by hand on cloth, walls and bodies.',slides:[
      {type:'concept',title:'Words\nworn',lede:'Placeholder concept text. A collection where slogans are written by hand on cloth, walls and bodies.',meta:[['Season','AW'],['Looks','12'],['Medium','Print, hand lettering']]},
      {type:'full',kicker:'Origin',title:'The wall',text:'Placeholder: the text first appears on a gallery wall.',img:'media/fashion-wall.jpg'},
      {type:'full',kicker:'Process',title:'Writing',text:'Placeholder: lettering transferred from wall to fabric.',img:'media/fashion-gallery.jpg'},
      {type:'shot',kicker:'Detail',title:'Knit',text:'Placeholder: hand-lettered knit, grey on grey.',img:'media/fashion-no-war.jpg',cover:true},
      {type:'shot',kicker:'Detail',title:'Suits',text:'Placeholder: full-body text print on tailoring.',img:'media/fashion-text-suits.jpg',cover:true},
      {type:'shot',kicker:'Detail',title:'Moss coat',text:'Placeholder: moss-dyed coat with scattered lettering.',img:'media/fashion-moss.jpg',cover:true},
      {type:'shot',kicker:'Detail',title:'Back',text:'Placeholder: the back panel carries the longest line.',img:'media/fashion-jacket.jpg',cover:true},
      {type:'full',kicker:'Line-up',title:'Line-up',text:'Placeholder caption.',img:'media/fashion-lineup.jpg'},
      {type:'full',kicker:'Runway',title:'Finale',text:'Placeholder caption.',img:'media/fashion-white-line.jpg'},
      {type:'notes',title:'Looks'}]},
    {id:'procession',settings:['autoplay'],links:[{label:'Runway video',href:'media/fashion-runway.mp4',kind:'video'}],title:'Procession',info:'Placeholder text. The collection shown as a street parade.',slides:[
      {type:'concept',title:'Procession',lede:'Placeholder concept text. The collection shown as a street parade instead of a runway.',meta:[['Season','SS'],['Venue','Old town square']]},
      {type:'full',kicker:'Street',title:'Square',text:'Placeholder caption.',img:'media/fashion-street-show.jpg'},
      {type:'full',kicker:'Street',title:'Passage',text:'Placeholder caption.',img:'media/fashion-street-show-2.jpg'},
      {type:'video',title:'Runway video',text:'Placeholder caption.',video:'media/fashion-runway.mp4',fit:'contain'},
      {type:'notes',title:'Looks'}]}
  ]
};
