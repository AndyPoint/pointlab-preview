/* DESIGN ONLY (v2.6): texts, projects and media come from content/system8/ via content/manifest.js.
   SUBSITE CONFIG — System 8. Kickstarter promo for Andy's System 8 Codelab tools, laid out as a 2D grid
   on the existing engine: each project folder is a ROW (vertical scroll; 001 = the concept + promo video),
   each numbered file in it is a PAGE (horizontal scroll: overview, tools, demo projects, example videos,
   functionalities, help). Page names come from the "# 01 Overview" lines in project.txt; the "# Help"
   block is shown in the left panel. Top page = centred SYSTEM 8 wordmark over a dimmed content/system8/top.jpg.
   Campaign texts and the Kickstarter link: content/system8/site.txt. Neutral black/white, no accent, no grade. */
window.PL_SITE={
  id:'system8', lang:'en',
  theme:{vars:{'--accent':'#F2F2F2'},
    css:`.logo{font-size:clamp(44px,10vw,160px)}.logo span{color:inherit}`},
  logo:{hold:2600,dissolve:true},
  hero:{dim:true},
  fullbleed:true,
  interludes:false,
  grid:true
};
