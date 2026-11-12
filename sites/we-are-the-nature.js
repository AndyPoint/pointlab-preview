/* SUBSITE CONFIG — We Are The Nature (v2.5). Andy's photo and video brand: drone nature films
   and nature photography, where nature is the hero and fills the screen. Opens with two
   commercial projects (placeholders). Standard black/white engine look, standard menus,
   no special colour scheme, no grade, no green in the UI. The footage carries its own colour.
   Only the centred wordmark animates (top page + interludes). ALL TEXT IS PLACEHOLDER. */
window.PL_SITE={
  id:'nature', name:'We Are The Nature', title:'We Are The Nature — Pointlab (mockup)', lang:'en',
  theme:{css:`.logo{font-size:clamp(28px,7.2vw,104px);line-height:.92}`},
  logo:{text:'WE ARE\nTHE NATURE',html:'WE ARE\nTHE NATURE',hold:2600,dissolve:true},
  hero:{generator:'keha'},
  fullbleed:true,
  interludes:true,
  labels:{full:'Still',video:'Film',project:'Project'},
  artist:{name:'Andy Point',role:'Photography · film · We Are The Nature',bio:'Placeholder bio. Two or three lines about the We Are The Nature practice: films and photographs in which nature is given the hero space.',portrait:null},
  identity:{line:'Placeholder: drone nature films and nature photography, where nature fills the screen.',
    blocks:[{h:'Practice',p:'Placeholder text. Commercial projects in which the land, water and weather take the frame. Two of them open this site.'}]},
  projects:window.PL_projectsFor('nature')
};
