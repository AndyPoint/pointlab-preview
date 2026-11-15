/* POINTLAB BOOT v2.6 — folder-driven content.
   Page order: sites/registry.js → sites/<page>.js (design only) → engine/boot.js.
   boot.js loads content/manifest.js (built from the content/ folders by tools/build-content.mjs),
   merges the texts and projects into window.PL_SITE / PL_REGISTRY / PL_SHARED, then loads the
   engine (generators.js, text.js, engine.js). Works on GitHub Pages and when a page is opened
   straight from disk (file://). */
(function(){
'use strict';
const V='2.6';
const clone=o=>JSON.parse(JSON.stringify(o));

/* merge: pure function, also used by tests */
function mergeContent(S,REG,C){
  const me=REG.find(r=>r.id===S.id)||{};
  const folder=S.contentFolder||me.folder||S.id;
  const c=C.sites&&C.sites[folder];
  if(!c)throw new Error('Pointlab: no content for "'+folder+'" — add content/'+folder+'/site.txt and rebuild (node tools/build-content.mjs)');
  /* sites list: names, roles and pictures from each site.txt */
  REG.forEach(r=>{const x=C.sites[r.folder];if(!x)return;if(x.name)r.name=x.name;if(x.role)r.role=x.role;if(x.thumb)r.thumb=x.thumb;if(x.status==='planned')r.href=null;r.name=r.name||r.id;r.role=r.role||'';});
  S.name=c.name||S.name||S.id;S.title=c.title||S.name;
  S.logo=Object.assign({},S.logo||{},c.logo||{});if(!S.logo.text){S.logo.text=S.name.toUpperCase();S.logo.html=S.logo.text;}
  S.identity=c.identity||S.identity||{line:''};
  if(c.artist)S.artist=c.artist;
  if(c.labels)S.labels=Object.assign({},S.labels||{},c.labels);
  if(c.campaign)S.campaign=c.campaign;
  if(c.hero){S.hero=Object.assign({},S.hero||{});
    if(c.hero.image||c.hero.video){delete S.hero.generator;delete S.hero.opt;delete S.hero.image;delete S.hero.video;   /* a top.jpg / top.mp4 replaces the drawn top page */
      if(c.hero.image)S.hero.image=c.hero.image;else S.hero.video=c.hero.video;}
    if(c.hero.subs)S.hero.subs=c.hero.subs;}
  if(c.edgeTexts&&S.components&&S.components.edgeTicker)S.components.edgeTicker=Object.assign({},S.components.edgeTicker,{texts:c.edgeTexts});
  /* projects: this site's folders in number order, then (Include tags) matching projects of other sites, in Sites order */
  const P=C.projects||{};
  const own=(c.projects||[]).map(k=>P[k]).filter(Boolean);
  let list=own.slice();
  const inc=c.includeTags||[];
  if(inc.length){REG.forEach(r=>{if(r.folder===folder||!C.sites[r.folder])return;
    (C.sites[r.folder].projects||[]).forEach(k=>{const p=P[k];if(p&&(p.tags||[]).some(t=>inc.includes(t)))list.push(p);});});}
  const ids={};
  S.projects=list.map(p=>{const q=clone(p);let id=q.id||'project',n=2;while(ids[id])id=q.id+'-'+(n++);ids[id]=1;q.id=id;q.site=q.key.split('/')[0];return q;});
  if(c.filter){const opts=inc.length?inc:[...new Set(S.projects.flatMap(p=>p.tags||[]))];S.filter=Object.assign({key:'tags',options:opts},c.filter);}
  return S;
}
function sharedFrom(C,SH){return Object.assign({},SH||{},C.shared||{});}
/* registry helpers kept from v2.5 (every project stored once, tagged) */
function projectsFor(C,REG){
  const all=[];REG.forEach(r=>{const x=C.sites&&C.sites[r.folder];if(!x)return;(x.projects||[]).forEach(k=>{const p=C.projects[k];if(p)all.push(Object.assign(clone(p),{sites:[r.id]}));});});
  return {all,fn:function(site,tags){if(tags&&tags.length)return all.filter(p=>(p.tags||[]).some(t=>tags.includes(t))).map(clone);return all.filter(p=>(p.sites||[]).includes(site)).map(clone);}};
}
window.PL_mergeContent=mergeContent;

if(typeof document==='undefined')return;
const me=document.currentScript;const base=me&&me.src?me.src.replace(/engine\/boot\.js(\?.*)?$/,''):'';
function load(src){return new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.async=false;s.onload=ok;s.onerror=()=>no(new Error('could not load '+src));document.body.appendChild(s);});}
function fail(e){console.error(e);const d=document.createElement('pre');d.style.cssText='position:fixed;inset:auto 16px 16px 16px;z-index:999;margin:0;padding:12px 14px;font:12px/1.5 ui-monospace,monospace;background:#111;color:#fff;border:1px solid #444;white-space:pre-wrap';
  d.textContent='Pointlab: the page could not start.\n'+(e&&e.message||e)+'\nIf you changed files in content/, run: node tools/build-content.mjs (GitHub does this for you after a push).';document.body.appendChild(d);}
/* manifest: fresh copy at most once a minute, so a GitHub update shows without waiting for the browser cache */
load(base+'content/manifest.js?t='+Math.floor(Date.now()/60000)).then(()=>{
  const C=window.PL_CONTENT;if(!C)throw new Error('content/manifest.js is empty');
  const REG=window.PL_REGISTRY||[];
  mergeContent(window.PL_SITE,REG,C);
  window.PL_SHARED=sharedFrom(C,window.PL_SHARED);
  const R=projectsFor(C,REG);window.PL_PROJECTS=R.all;window.PL_projectsFor=R.fn;
  const works=C.sites.works;window.PL_WORKS_TAGS=works&&works.includeTags||[];
  return load(base+'engine/generators.js?v='+V);
}).then(()=>load(base+'engine/text.js?v='+V)).then(()=>load(base+'engine/engine.js?v='+V)).catch(fail);
})();
