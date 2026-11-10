/* POINTLAB ENGINE v2.1 — one shared engine for every subsite, rebuilt on the anttipiste index
   (typography, Kehä hero, suites × slides) with JUST SITTING's side panels.
   Rules (Andy, v2.1): NO information on top of projects — over project content only the bare
   ≡ / ||| symbols and ▶ on live-app slides. Titles, numbers and captions live in the left panel and
   in the projects' own text slides (concept, tutorial, text, notes, news articles).
   The ONLY text animation is the logo animation (decode of e.g. POINT<span>LAB</span>), centred
   on the top page and on the interlude pages between projects. engine/text.js keeps the other
   animations available, unused. The edge ticker component stays in components/, unused.
   Per-site override (Codelab): S.text={mode:'cover',anims:['decode','rotate','ticker'],scope:'first'} keeps
   the anttipiste text animations on the top page and on each project's first ('cover') slide, over a dimmed
   full-bleed app screenshot; with scope:'first' every other slide is fullscreen with no text.
   Reads window.PL_SITE (the subsite config) and window.PL_REGISTRY (all subsites). */
(function(){
'use strict';
const S=window.PL_SITE,REG=window.PL_REGISTRY||[],G=window.PL_GEN||{},SHARED=window.PL_SHARED||{};
/* every site gets the full frame (symbols + both panels) even with a thin config */
S.identity=S.identity||{line:''};S.motion=S.motion||{};S.projects=S.projects||[];S.theme=S.theme||{};S.name=S.name||S.id||'Pointlab';
const doc=document,body=doc.body,root=doc.documentElement;
/* visitor settings (right panel), stored per browser */
const PREF={get:k=>{try{return localStorage.getItem('pl-'+k);}catch(e){return null;}},set:(k,v)=>{try{localStorage.setItem('pl-'+k,v);}catch(e){}}};
const motionOff=PREF.get('motion')==='off';if(motionOff)window.PL_REDUCED=true;
const reduced=motionOff||matchMedia('(prefers-reduced-motion: reduce)').matches;const T=window.PLText;
const el=(t,cls,parent,html)=>{const e=doc.createElement(t);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;if(parent)parent.appendChild(e);return e;};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tt=x=>String(x||'').replace(/\n/g,' ');
const pad2=n=>String(n).padStart(2,'0');
/* text-animation policy (per site): mode 'logo' = only the centred logo animation (hero + interludes);
   mode 'cover' = anttipiste set (anims) on the top page and each project's first slide only (scope 'first') */
const TXM=Object.assign({mode:'logo',anims:['logo'],scope:'all',rotateEvery:4500,speed:22,hold:2600},S.text||{});
const COVER=TXM.mode==='cover',hasA=a=>(TXM.anims||[]).includes(a);
const TEXT_TYPES=['concept','tutorial','text','notes'];
const UI=Object.assign({hideAfter:2000,tapHideAfter:3000,revealBand:72,cornerFree:120,tapZone:[.15,.85]},S.ui||{});

/* ---------- 1. identity layer (theme) ---------- */
Object.entries(S.theme.vars||{}).forEach(([k,v])=>root.style.setProperty(k,v));
root.dataset.site=S.id;if(S.fullbleed)root.classList.add('fullbleed');root.lang=S.lang||'en';doc.title=S.title;
if(S.theme.css){const st=doc.createElement('style');st.textContent=S.theme.css;doc.head.appendChild(st);}
const cs=getComputedStyle(root),TH={};['bg','fg','dim','line','accent'].forEach(k=>TH[k]=cs.getPropertyValue('--'+k).trim());
const ACCENT0=TH.accent;

/* ---------- 2. canvas loop (only visible canvases run) ---------- */
const arts=[];
const io=new IntersectionObserver(es=>es.forEach(e=>{const a=e.target._art;if(a)a.vis=e.isIntersecting;}),{threshold:0.01});
function mountGen(cv,name,opt){const g=G[name]||G.plate;const a={cv,ctx:cv.getContext('2d'),g,opt:opt||{},vis:false,state:null,w:0,h:0,drawn:false};
  cv._art=a;arts.push(a);io.observe(cv);return a;}
function loop(t){if(!doc.hidden)for(const a of arts){if(!a.vis)continue;const r=a.cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);
    const w=Math.round(r.width),h=Math.round(r.height);if(!w||!h)continue;
    if(w!==a.w||h!==a.h){a.w=w;a.h=h;a.cv.width=w*d;a.cv.height=h*d;a.ctx.setTransform(d,0,0,d,0,0);a.state=a.g.init(a.ctx,w,h,a.opt,TH);a.drawn=false;}
    if(a.g.animated||!a.drawn){a.g.draw(a.ctx,w,h,reduced?0:t,a.state,a.opt,TH);a.drawn=true;}}
  requestAnimationFrame(loop);}
requestAnimationFrame(loop);

/* ---------- 3. slide text: static (v2.1). The movers below stay available via S.motion, unused. ---------- */
const TX={
  none(){},
  scramble(e,cb){T.scrambleIn(e,{speed:S.motion.scrambleSpeed||22},cb);},
  scrambleOut(e,cb){T.scrambleOut(e,cb);},
  rise(e){if(!e._split){const words=(e.dataset.orig??e.textContent).split(/(\s+)/);e.dataset.orig=e.textContent;e.textContent='';let i=0;
      words.forEach(w=>{if(/^\s+$/.test(w)){e.appendChild(doc.createTextNode(w.includes('\n')?'\n':' '));return;}
        const s=el('span','w',e);const inner=el('span','',s);inner.textContent=w;inner.style.setProperty('--i',i++);});
      e.classList.add('rise');e._split=1;}
    e.classList.remove('in');void e.offsetWidth;e.classList.add('in');},
  type(e){const o=e.dataset.orig??e.textContent;e.dataset.orig=o;clearInterval(e._t);e.classList.add('type');e.classList.remove('done');
    if(reduced){e.textContent=o;e.classList.add('done');return;}let i=0;e.textContent='';
    e._t=setInterval(()=>{e.textContent=o.slice(0,++i);if(i>=o.length){clearInterval(e._t);e.classList.add('done');}},S.motion.typeSpeed||18);},
  fade(e){e.classList.add('fade');e.classList.remove('in');void e.offsetWidth;e.classList.add('in');}
};
function animateIn(scope){scope.querySelectorAll('[data-a]').forEach(e=>{const role=e.dataset.a;const kind=(S.motion&&S.motion[role])||'none';(TX[kind]||TX.none)(e);});}

/* ---------- 4. slide types (fixed behaviour, styled by theme). Media slides carry NO text over them. ---------- */
const LABEL=Object.assign({concept:'Concept',tutorial:'Tutorial',text:'Text',notes:'Notes',shot:'Screenshot',video:'Video',app:'Live web app',
  newslist:'All entries',article:'Article',links:'Sites',full:'Work'},S.labels||{});
const paras=b=>(Array.isArray(b)?b:String(b||'').split(/\n\n+/)).filter(Boolean).map(x=>`<p>${esc(x)}</p>`).join('');
function media(sl,wrap){
  if(sl.video){const v=el('video','',wrap);v.src=sl.video;v.muted=true;v.loop=true;v.playsInline=true;v.preload='none';v.setAttribute('aria-label',sl.alt||sl.title||'video');v.dataset.autoplay='1';return;}
  if(sl.img){const i=el('img','',wrap);i.src=sl.img;i.alt=sl.alt||sl.title||'';i.loading='lazy';i.decoding='async';return;}
  mountGen(el('canvas','',wrap),sl.gen||'plate',sl.genOpt||{seed:sl.seed});
}
const R={
  /* cover (mode 'cover'): the project's app screenshot full-bleed and dimmed, with the animated title + rotating line */
  cover(s,sl){if(sl.img||sl.video)media(sl,s);el('div','dim',s);const w=el('div','cover-wrap',s);
    const t=el('h2','cover-title',w);T.setText(t,tt(sl.title),sl.titleHTML);const u=el('p','cover-sub',w);T.setText(u,(sl.subs&&sl.subs[0])||'');
    s._tx={title:t,sub:u,subs:sl.subs||[]};},
  concept(s,sl){s.innerHTML=`<div class="pad"><h2 class="h1" data-a="title">${esc(sl.title)}</h2>
    <p class="lede" data-a="body">${esc(sl.lede)}</p>${sl.meta?`<div class="meta" data-a="body">${sl.meta.map(m=>`<div>${esc(m[0])}<b>${esc(m[1])}</b></div>`).join('')}</div>`:''}</div>`;},
  tutorial(s,sl){s.innerHTML=`<div class="pad"><h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title)}</h2>
    <ol>${sl.steps.map(t=>`<li><span data-a="step">${esc(t)}</span></li>`).join('')}</ol></div>`;},
  /* explanation slide: the text is the content, on the project's own ground */
  text(s,sl){s.innerHTML=`<div class="pad scrolly"><div class="col">${sl.kicker?`<div class="kick">${esc(sl.kicker)}</div>`:''}<h2 class="h2" data-a="title">${esc(sl.title)}</h2><div class="body">${paras(sl.body)}</div></div></div>`;},
  /* notes: the captions of the project's media slides, listed as content (auto-collected unless items are given) */
  notes(s,sl,c){const items=sl.items||c.p.slides.filter(x=>['shot','full','video','app'].includes(x.type)&&(x.title||x.text)).map(x=>[x.title||LABEL[x.type],x.text||'',x.kicker||'']);
    s.innerHTML=`<div class="pad scrolly"><h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title||'Notes')}</h2>
      <ol class="notes">${items.map(it=>`<li><b>${esc(it[0])}</b><p>${esc(it[1])}</p>${it[2]?`<small>${esc(it[2])}</small>`:''}</li>`).join('')}</ol></div>`;},
  shot(s,sl){media(sl,el('div','art'+(sl.cover?' cover':''),s));},
  full(s,sl){media(sl,s);},
  video(s,sl){if(sl.fit==='contain')s.classList.add('contain');media(sl,s);},
  app(s,sl){const f=el('iframe','',s);f.dataset.src=sl.src;f.title=sl.title||'Live web app';f.setAttribute('tabindex','-1');s._frame=f;},
  /* news / blog suite (reusable on any site: a project with kind:'news' and entries[]) */
  newslist(s,sl,c){s.innerHTML=`<div class="pad scrolly"><h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title||'News')}</h2>
    <ul class="nlist">${sl.entries.map((e,k)=>`<li><button data-go="${c.si},${k+1}"><span class="d">${esc(e.date)}</span><b>${esc(e.title)}</b><p>${esc(e.lede||'')}</p></button></li>`).join('')}</ul></div>`;},
  article(s,sl,c){s.innerHTML=`<div class="art-col scrolly"><article class="col">
    <time class="d" datetime="${esc(sl.iso||'')}">${esc(sl.date)}</time><h2 class="h2">${esc(sl.title)}</h2>
    ${sl.lede?`<p class="lede">${esc(sl.lede)}</p>`:''}${sl.img?`<figure><img src="${esc(sl.img)}" alt="${esc(sl.alt||'')}" loading="lazy"></figure>`:''}
    <div class="body">${paras(sl.body)}</div>
    <button class="back" data-go="${c.si},0">← ${esc(LABEL.newslist)}</button></article></div>`;},
  links(s,sl){const tiles=REG.filter(r=>r.id!==S.id).map(r=>r.href
      ?`<a class="tile" href="${esc(r.href)}">${r.thumb?`<img src="${esc(r.thumb)}" alt="" loading="lazy">`:''}<small>${esc(r.role)}</small><b>${esc(r.name)}</b></a>`
      :`<span class="tile">${r.thumb?`<img src="${esc(r.thumb)}" alt="" loading="lazy">`:''}<small>${esc(r.role)} · planned</small><b>${esc(r.name)}</b></span>`).join('');
    s.innerHTML=`<div class="pad"><h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title)}</h2><div class="tiles">${tiles}</div></div>`;}
};
R.news=(s,sl,c)=>R.newslist(s,Object.assign({entries:(sl.items||[]).map(i=>({date:i.date,title:i.title,lede:i.text}))},sl),c);
/* a news project expands to: entry list + one article slide per entry */
function expand(p){if(p.kind!=='news'){let L=p.slides||[];
    if(COVER&&p.cover)L=[Object.assign({type:'cover',title:p.title},p.cover)].concat(L);
    if(TXM.scope==='first')L=L.filter((x,i)=>i===0||!TEXT_TYPES.includes(x.type)&&x.type!=='cover');   /* text lives only on the first slide */
    return L;}const E=p.entries||[];
  return [{type:'newslist',title:p.listTitle||p.title,entries:E}].concat(E.map(e=>Object.assign({type:'article'},e)));}

/* ---------- 5. build DOM ---------- */
const stage=el('main','',body);stage.id='stage';stage.tabIndex=-1;
const LOGO=Object.assign({text:'POINTLAB',html:'POINT<span>LAB</span>',hold:2600,dissolve:true},S.logo||{});
const secs=[];   // {el, slides:[el], scroller, proj, pi} | {hero} | {interlude}
function logoEl(parent,tag){const w=el('div','logo-wrap',parent);const t=el(tag,'logo',w);T.setText(t,LOGO.text,LOGO.html);return t;}
if(S.hero){const h=el('section','sec hero',stage);h.setAttribute('aria-label','Top');
  if(S.hero.video){const v=el('video','',h);v.src=S.hero.video;v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.dataset.autoplay='1';}
  else if(S.hero.image){const i=el('img','bgm',h);i.src=S.hero.image;i.alt='';}
  if(S.hero.generator)mountGen(el('canvas','',h),S.hero.generator,S.hero.opt);
  if(COVER&&(S.hero.image||S.hero.video))el('div','dim',h);
  const t=logoEl(h,'h1');let hs=null;
  if(COVER){hs=el('p','cover-sub',t.parentNode);T.setText(hs,(S.hero.subs&&S.hero.subs[0])||'');h.classList.add('is-cover');}
  const dn=el('button','hero-down',h,'<svg viewBox="0 0 18 18"><path d="M3 6l6 6 6-6"/></svg>');dn.setAttribute('aria-label','Next');dn.onclick=()=>goSection(1);
  secs.push({el:h,slides:[h],scroller:null,hero:true,logo:t,sub:hs,subs:S.hero.subs||[]});}
/* interludes: full-screen pages between consecutive projects; the centred logo animation and nothing else */
const ILV=S.interludes;const wantI=pi=>ILV===true||(Array.isArray(ILV)&&ILV.includes(pi));
S.projects.forEach((p,pi)=>{
  if(pi>0&&wantI(pi)){const x=el('section','sec interlude',stage);x.setAttribute('aria-label',LOGO.text);
    const t=logoEl(x,'div');t.setAttribute('aria-hidden','true');secs.push({el:x,slides:[x],scroller:null,interlude:true,logo:t});}
  const sec=el('section','sec proj',stage);sec.setAttribute('aria-label',p.title);sec.dataset.proj=p.id||pi;
  const sc=el('div','slides',sec);const list=[];const SL=expand(p);const si=secs.length;
  SL.forEach((sl,i)=>{const s=el('article','slide s-'+sl.type,sc);s.dataset.type=sl.type;s.setAttribute('aria-label',(sl.title||LABEL[sl.type]).replace(/\n/g,' '));
    (R[sl.type]||R.concept)(s,sl,{p:Object.assign({},p,{slides:SL}),pi,i,si});list.push(s);});
  secs.push({el:sec,slides:list,scroller:sc,proj:p,pi,SL});});

/* corner symbols + play symbol + edge arrows + drawers */
const ICON={menu:'<svg class="g" viewBox="0 0 18 18"><path d="M2 4.5h14M2 9h14M2 13.5h14"/></svg>',
  dir:'<svg class="g" viewBox="0 0 18 18"><path d="M4.5 2v14M9 2v14M13.5 2v14"/></svg>',x:'<svg class="x" viewBox="0 0 18 18"><path d="M3.5 3.5l11 11M14.5 3.5l-11 11"/></svg>'};
const symL=el('button','sym',body,ICON.menu+ICON.x);symL.id='symL';symL.setAttribute('aria-label','Index: projects and slides');
const symR=el('button','sym',body,ICON.dir+ICON.x);symR.id='symR';symR.setAttribute('aria-label','Pointlab sites');
const symP=el('button','sym',body,'<svg class="tri" viewBox="0 0 18 18"><path d="M5 3l10 6-10 6z"/></svg><svg class="pause" viewBox="0 0 18 18"><path d="M6 3v12M12 3v12"/></svg>');
symP.id='symP';symP.setAttribute('aria-label','Play mode: give input to the web app');symP.setAttribute('aria-pressed','false');
[symL,symR].forEach(b=>b.setAttribute('aria-expanded','false'));
const edgeL=el('button','edge l',body,'<svg viewBox="0 0 16 32"><path d="M13 2L3 16l10 14"/></svg>');edgeL.setAttribute('aria-label','Previous slide');
const edgeR=el('button','edge r',body,'<svg viewBox="0 0 16 32"><path d="M3 2l10 14L3 30"/></svg>');edgeR.setAttribute('aria-label','Next slide');
/* side panels (JUST SITTING): dark surface, no veil, no glitch banner, equal 320 px width,
   flat collapsible groups (one level), 44 px targets, 120 ms slide-in.
   Left (≡) = this site: one group per project with its slides (current one highlighted), About.
   Right (|||) = all Pointlab sites. */
const head=label=>`<div class="p-head"><span class="p-lab">${esc(label)}</span><button class="p-x" data-close aria-label="Close ${esc(label)}">×</button></div>`;
let gid=0;
const group=(title,inner,o={})=>{const id='pg'+(++gid);return `<div class="p-grp${o.cls?' '+o.cls:''}"${o.si!=null?` data-si="${o.si}"`:''}><h3 class="p-gh"><button class="p-tog" aria-expanded="${o.open?'true':'false'}" aria-controls="${id}">
  <span class="p-gt">${esc(title)}</span>${o.n!=null?`<small>${pad2(o.n)}</small>`:''}<i aria-hidden="true"></i></button></h3><div class="p-items" id="${id}"${o.open?'':' hidden'}>${inner}</div></div>`;};
const dL=el('nav','panel left',body);dL.id='drawerL';dL.setAttribute('aria-label',S.name+' index');dL.setAttribute('aria-hidden','true');
const dR=el('nav','panel right',body);dR.id='drawerR';dR.setAttribute('aria-label','Tools, settings and contact');dR.setAttribute('aria-hidden','true');
/* LEFT ≡ : information + navigation — projects (info, facts, every slide), About, all Pointlab sites */
const facts=p=>{const f=p.facts||((p.slides||[]).find(x=>x.type==='concept')||{}).meta||[];return f.length?`<dl class="p-facts">${f.map(m=>`<div><dt>${esc(m[0])}</dt><dd>${esc(m[1])}</dd></div>`).join('')}</dl>`:'';};
const hub=REG.find(r=>r.id==='hub');
const sitesList=`<ul>${REG.filter(r=>r.href).map(r=>r.id===S.id?`<li><span class="cur" aria-current="page">${esc(r.name)}<small>here</small></span></li>`:`<li><a href="${esc(r.href)}">${esc(r.name)}<small>${esc(r.id==='hub'?'hub':r.role)}</small></a></li>`).join('')}
  ${REG.filter(r=>!r.href).map(r=>`<li><span class="off">${esc(r.name)}<small>planned</small></span></li>`).join('')}</ul>`;
dL.innerHTML=head(S.name)+(S.identity.line?`<p class="p-line">${esc(S.identity.line)}</p>`:'')+
  `<ul class="p-top">${S.hero?`<li><button data-go="0,0">${esc(S.labels&&S.labels.top||'Top')}</button></li>`:''}${hub&&S.id!=='hub'?`<li><a href="${esc(hub.href)}" class="p-hub">← Pointlab hub</a></li>`:''}</ul>`+
  secs.map((s,si)=>s.proj?group(s.proj.title,`${s.proj.info?`<p class="p-p p-info">${esc(s.proj.info)}</p>`:''}${facts(s.proj)}<ul>${s.SL.map((sl,i)=>`<li><button data-go="${si},${i}"><b>${pad2(i+1)}</b><span>${esc(tt(sl.title)||LABEL[sl.type])}</span>${sl.date?`<small>${esc(sl.date)}</small>`:''}</button></li>`).join('')}</ul>`,{si,n:s.slides.length}):'').join('')+
  (S.identity.blocks||[]).map(b=>group(b.h,`<p class="p-p">${esc(b.p)}</p>`,{cls:'about'})).join('')+
  group('Pointlab sites',sitesList,{cls:'sites',n:REG.length});
/* RIGHT ||| : shared tools, settings and contact (same on every site; contact from window.PL_SHARED) */
const sw=(id,label,on)=>`<li><button class="p-sw" role="switch" data-pref="${id}" aria-checked="${on}"><span>${esc(label)}</span><i aria-hidden="true"></i></button></li>`;
const CONTACT=SHARED.contact||[];
dR.innerHTML=head(SHARED.toolsLabel||'Tools')+
  group('Settings',`<ul>${sw('motion','Animations',!motionOff)}${sw('autohide','Auto-hide symbols',PREF.get('autohide')!=='off')}</ul>`,{open:true})+
  group('Tools',`<ul><li><button data-tool="copy"><span>Copy link to this page</span><small class="t-msg"></small></button></li>${doc.fullscreenEnabled?'<li><button data-tool="fs"><span>Full screen</span></button></li>':''}</ul>
    <p class="p-p p-keys">Keys: ↑↓ projects · ←→ slides · I index · W tools · Esc close</p>`)+
  (CONTACT.length?group('Contact',`<ul>${CONTACT.map(c=>c.href?`<li><a href="${esc(c.href)}"${/^https?:/.test(c.href)?' target="_blank" rel="noopener"':''}>${esc(c.label)}<small>${esc(c.value)}</small></a></li>`:`<li><span class="off">${esc(c.label)}<small>${esc(c.value)}</small></span></li>`).join('')}</ul>`):'');
dR.addEventListener('click',e=>{const b=e.target.closest('.p-sw');if(b){const on=b.getAttribute('aria-checked')!=='true';b.setAttribute('aria-checked',on);const k=b.dataset.pref;PREF.set(k,on?'on':'off');
    if(k==='motion'){window.PL_REDUCED=!on;setTimeout(()=>location.reload(),150);}if(k==='autohide'){if(!on){clearTimeout(hideT);showUI();}}return;}
  const t=e.target.closest('[data-tool]');if(!t)return;
  if(t.dataset.tool==='copy'){const m=t.querySelector('.t-msg');const done=x=>{m.textContent=x;setTimeout(()=>m.textContent='',1600);};
    try{navigator.clipboard.writeText(location.href).then(()=>done('copied'),()=>done(location.hash||'#'));}catch(_){done(location.hash||'#');}}
  if(t.dataset.tool==='fs'){doc.fullscreenElement?doc.exitFullscreen():root.requestFullscreen().catch(()=>{});}});
function toggleGroup(btn,force){const on=force!=null?force:btn.getAttribute('aria-expanded')!=='true';btn.setAttribute('aria-expanded',on);
  const box=doc.getElementById(btn.getAttribute('aria-controls'));if(box)box.hidden=!on;}
[dL,dR].forEach(d=>{d.addEventListener('click',e=>{const t=e.target.closest('.p-tog');if(t)toggleGroup(t);});
  /* keyboard: ↑↓ move between visible targets, Home/End jump; Enter/Space are native on buttons; ←/→ collapse/expand a header */
  d.addEventListener('keydown',e=>{const k=e.key;if(!['ArrowDown','ArrowUp','Home','End','ArrowLeft','ArrowRight'].includes(k))return;
    const all=[...d.querySelectorAll('button,a')].filter(x=>x.offsetParent!==null);const i=all.indexOf(doc.activeElement);
    if(k==='ArrowLeft'||k==='ArrowRight'){const t=doc.activeElement.closest('.p-tog');if(t){toggleGroup(t,k==='ArrowRight');e.preventDefault();}return;}
    let n=k==='Home'?0:k==='End'?all.length-1:i+(k==='ArrowDown'?1:-1);n=Math.max(0,Math.min(all.length-1,n));all[n]&&all[n].focus();e.preventDefault();e.stopPropagation();});});
function markPanel(si,i){dL.querySelectorAll('[data-go]').forEach(b=>{const [a,c]=b.dataset.go.split(',').map(Number);
    if(a===si&&c===i)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});
  dL.querySelectorAll('.p-grp[data-si]').forEach(g=>g.classList.toggle('cur',+g.dataset.si===si));}

/* ---------- 6. navigation ---------- */
let cur={s:-1,i:-1},playing=false,drawer=null;
const H=()=>stage.clientHeight;
const secIndex=()=>Math.max(0,Math.min(secs.length-1,Math.round(stage.scrollTop/H())));
const slideIndex=sec=>sec.scroller?Math.round(sec.scroller.scrollLeft/(sec.scroller.clientWidth||1)):0;
function goSection(i,smooth=true){i=Math.max(0,Math.min(secs.length-1,i));stage.scrollTo({top:secs[i].el.offsetTop,behavior:smooth&&!reduced?'smooth':'auto'});}
function goSlide(sec,i,smooth=true){if(!sec.scroller)return;i=Math.max(0,Math.min(sec.slides.length-1,i));
  sec.scroller.scrollTo({left:i*sec.scroller.clientWidth,behavior:smooth&&!reduced?'smooth':'auto'});}
function goTo(si,i){const sec=secs[si];if(!sec)return;const far=si!==secIndex();goSlide(sec,i,!far);goSection(si);}
function stepSlide(d){goSlide(secs[secIndex()],slideIndex(secs[secIndex()])+d);}
function stepSection(d){goSection(secIndex()+d);}

function settle(){const si=secIndex(),sec=secs[si],i=slideIndex(sec);
  if(si===cur.s&&i===cur.i)return;
  if(playing)exitPlay();
  const prev=secs[cur.s]&&secs[cur.s].slides[cur.i];if(prev)prev.classList.remove('active');
  const prevS=cur.s;cur={s:si,i};const s=sec.slides[i];s.classList.add('active');
  const cov=COVER&&(sec.hero||s._tx);
  if(cov)coverSeq(sec.hero?{title:sec.logo,sub:sec.sub,subs:sec.subs,text:LOGO.text,html:LOGO.html}:s._tx);
  else if(sec.logo){if(prevS!==si)logoSeq(sec);}else{stopHero();animateIn(s);}
  body.classList.toggle('tx-on',!!cov&&hasA('ticker'));
  root.style.setProperty('--accent',(sec.proj&&sec.proj.code)||ACCENT0);
  body.classList.toggle('at-logo',!!sec.logo);markPanel(si,i);
  /* apps load only when their slide (or a neighbour) is active; others are unloaded */
  secs.forEach((x,xi)=>x.slides.forEach((sl,k)=>{const f=sl._frame;if(!f)return;const near=xi===si&&Math.abs(k-i)<=1;
    if(near&&!f.getAttribute('src'))f.setAttribute('src',f.dataset.src);else if(!near&&f.getAttribute('src'))f.removeAttribute('src');}));
  doc.querySelectorAll('video[data-autoplay]').forEach(v=>{const on=s.contains(v);if(on){v.play().catch(()=>{});}else v.pause();});
  body.classList.toggle('has-app',s.dataset.type==='app');
  body.classList.toggle('at-top',si===0);
  try{history.replaceState(null,'',`#p=${si}&s=${i}`);}catch(e){}
  updateUIAfterMove(si===0);
  updateEdges();}
let st,lock=null;function onScroll(){if(playing&&lock){/* the app owns input: undo any scroll that chains out of it */
  if(stage.scrollTop!==lock.t)stage.scrollTop=lock.t;if(lock.sc&&lock.sc.scrollLeft!==lock.l)lock.sc.scrollLeft=lock.l;return;}clearTimeout(st);st=setTimeout(settle,90);if(secIndex()!==0)armHide();}
stage.addEventListener('scroll',onScroll,{passive:true});
secs.forEach(s=>s.scroller&&s.scroller.addEventListener('scroll',onScroll,{passive:true}));
addEventListener('resize',()=>{const c=cur;cur={s:-1,i:-1};goSlide(secs[c.s]||secs[0],c.i,false);goSection(c.s,false);settle();});

/* the logo animation (the only text animation): decode → hold → dissolve, on the top page and on interludes.
   Replays when the page is entered again or tapped. Only one runs at a time. */
let heroRun=null,heroRot=null,lastCov=null;
function stopHero(){if(heroRun){heroRun.stop();heroRun=null;}if(heroRot){heroRot.stop();heroRot=null;}}
/* cover mode: decode title + subtitle, then rotate the subtitle; the set is S.text.anims */
function coverSeq(c){stopHero();lastCov=c;if(c.text!=null)T.setText(c.title,c.text,c.html);else T.setText(c.title,c.title.dataset.plText||c.title.textContent,c.title.dataset.plHtml);
  if(c.sub)T.setText(c.sub,c.subs[0]||'');
  if(hasA('decode'))heroRun=T.heroDecode(c.title,c.sub,{dissolve:false,hold:TXM.hold,speed:TXM.speed});
  if(hasA('rotate')&&c.sub&&c.subs.length>1)heroRot=T.rotate(c.sub,c.subs,{every:TXM.rotateEvery,speed:TXM.speed});}
doc.addEventListener('visibilitychange',()=>{if(doc.hidden){if(heroRot){heroRot.stop();heroRot=null;}}
  else if(lastCov&&!heroRot&&body.classList.contains('tx-on')&&hasA('rotate')&&lastCov.sub&&lastCov.subs.length>1)heroRot=T.rotate(lastCov.sub,lastCov.subs,{every:TXM.rotateEvery,speed:TXM.speed});});
function logoSeq(sec){stopHero();lastCov=null;T.setText(sec.logo,LOGO.text,LOGO.html);
  heroRun=T.heroDecode(sec.logo,null,{hold:LOGO.hold,dissolve:LOGO.dissolve,speed:LOGO.speed||22});}
secs.forEach(x=>{if(x.logo)x.el.addEventListener('click',e=>{if(e.target.closest('button'))return;
  if(COVER&&x.hero)coverSeq({title:x.logo,sub:x.sub,subs:x.subs,text:LOGO.text,html:LOGO.html});else logoSeq(x);});});
/* in-content navigation (news list → article, back) */
stage.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(!b||drawer)return;const [a,c]=b.dataset.go.split(',').map(Number);goTo(a,c);});

/* wheel: one gesture = one step (trackpad inertia filtered) */
let wLock=0,wLast=0,wMag=0;
addEventListener('wheel',e=>{if(playing||drawer)return;
  const sy=e.target.closest&&e.target.closest('.scrolly');if(sy&&Math.abs(e.deltaY)>Math.abs(e.deltaX)&&sy.scrollHeight>sy.clientHeight+1){
    const can=e.deltaY>0?sy.scrollTop+sy.clientHeight<sy.scrollHeight-1:sy.scrollTop>0;if(can){wLock=performance.now()+400;return;}}
  e.preventDefault();const now=performance.now();
  const ax=Math.abs(e.deltaX),ay=Math.abs(e.deltaY),m=Math.max(ax,ay);const quiet=now-wLast>180;const surge=m>wMag*1.6&&m>30;wLast=now;wMag=m;
  if(m<4||now<wLock||!(quiet||surge))return;
  if(ax>ay&&!e.shiftKey)stepSlide(Math.sign(e.deltaX));else if(e.shiftKey)stepSlide(Math.sign(e.deltaY||e.deltaX));else stepSection(Math.sign(e.deltaY));
  wLock=now+550;},{passive:false});

/* keys */
addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(playing)exitPlay();else if(drawer)closeDrawer();return;}
  if(playing||drawer||e.metaKey||e.ctrlKey||e.altKey)return;
  const k=e.key;
  if(k==='i'||k==='I'){openDrawer('L');return;}if(k==='w'||k==='W'){openDrawer('R');return;}
  if(k==='ArrowRight'){stepSlide(1);e.preventDefault();}else if(k==='ArrowLeft'){stepSlide(-1);e.preventDefault();}
  else if(k==='ArrowDown'||k==='PageDown'||(k===' '&&!e.shiftKey)){stepSection(1);e.preventDefault();}
  else if(k==='ArrowUp'||k==='PageUp'||(k===' '&&e.shiftKey)){stepSection(-1);e.preventDefault();}
  else if(k==='Home'){goSection(0);}else if(k==='End'){goSection(secs.length-1);}
});

/* edge arrows (mouse only, middle band of the side edges — never the corners) */
let mx=-1,my=-1;
function updateEdges(){const sec=secs[cur.s];if(!sec||!sec.scroller||mx<0){edgeL.classList.remove('on');edgeR.classList.remove('on');return;}
  const band=my>innerHeight*.22&&my<innerHeight*.78,i=slideIndex(sec);
  edgeL.classList.toggle('on',band&&mx<110&&i>0);edgeR.classList.toggle('on',band&&mx>innerWidth-110&&i<sec.slides.length-1);}
edgeL.onclick=()=>stepSlide(-1);edgeR.onclick=()=>stepSlide(1);

/* ---------- 7. symbol visibility ---------- */
let hideT=null,nearTop=false;
function showUI(){body.classList.remove('ui-hidden');}
function canHide(){return PREF.get('autohide')!=='off'&&!(secIndex()===0&&!userHidTop)&&!drawer&&!nearTop&&!playing;}
function armHide(ms){clearTimeout(hideT);hideT=setTimeout(()=>{if(canHide())body.classList.add('ui-hidden');},ms||UI.hideAfter);}
let userHidTop=false;
function updateUIAfterMove(top){if(top){userHidTop=false;clearTimeout(hideT);showUI();}else armHide();}
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;updateEdges();
  const inBand=e.clientY<UI.revealBand&&(!playing||(e.clientX>UI.cornerFree&&e.clientX<innerWidth-UI.cornerFree));
  const onSym=!!e.target.closest('.sym');
  if(inBand||(onSym&&!body.classList.contains('ui-hidden'))){if(!nearTop){nearTop=true;showUI();clearTimeout(hideT);}}
  else if(nearTop){nearTop=false;if(secIndex()!==0)armHide();}},{passive:true});
doc.addEventListener('mouseleave',()=>{mx=-1;updateEdges();if(nearTop){nearTop=false;if(secIndex()!==0)armHide();}});
/* touch: a tap in the middle of the content toggles the symbols (disabled in play mode) */
let down=null;
/* panels have no veil: a press anywhere on the work closes the open panel and is swallowed */
stage.addEventListener('pointerdown',e=>{if(drawer){e.preventDefault();e.stopPropagation();closeDrawer();down=null;swallow=true;}},{capture:true});
let swallow=false;stage.addEventListener('click',e=>{if(swallow){swallow=false;e.preventDefault();e.stopPropagation();}},{capture:true});
stage.addEventListener('pointerdown',e=>{down=(e.pointerType==='touch'||e.pointerType==='pen')?{x:e.clientX,y:e.clientY,t:performance.now()}:null;},{passive:true});
stage.addEventListener('pointerup',e=>{if(!down||playing||drawer)return;const d=down;down=null;
  if(Math.hypot(e.clientX-d.x,e.clientY-d.y)>10||performance.now()-d.t>350)return;
  if(e.target.closest('a,button,input,textarea,select,video[controls]'))return;
  const fx=e.clientX/innerWidth,fy=e.clientY/innerHeight;if(fx<UI.tapZone[0]||fx>UI.tapZone[1]||fy<.12||fy>.92)return;
  if(body.classList.contains('ui-hidden')){showUI();armHide(UI.tapHideAfter);}else{clearTimeout(hideT);body.classList.add('ui-hidden');if(secIndex()===0)userHidTop=true;}},{passive:true});
stage.addEventListener('pointercancel',()=>{down=null;});

/* ---------- 8. drawers ---------- */
let lastFocus=null;
function openDrawer(side){if(playing)exitPlay();if(drawer&&drawer!==side)closeDrawer(true);drawer=side;body.dataset.drawer=side;showUI();clearTimeout(hideT);
  symL.setAttribute('aria-expanded',side==='L');symR.setAttribute('aria-expanded',side==='R');
  dL.setAttribute('aria-hidden',side!=='L');dR.setAttribute('aria-hidden',side!=='R');
  if(!lastFocus)lastFocus=side==='L'?symL:symR;const d=side==='L'?dL:dR;
  if(side==='L'){const g=dL.querySelector(`.p-grp[data-si="${cur.s}"] .p-tog`);if(g)toggleGroup(g,true);}
  const f=d.querySelector('.p-x');setTimeout(()=>f&&f.focus({preventScroll:true}),130);}
function closeDrawer(keep){if(!drawer)return;drawer=null;delete body.dataset.drawer;symL.setAttribute('aria-expanded','false');symR.setAttribute('aria-expanded','false');
  dL.setAttribute('aria-hidden','true');dR.setAttribute('aria-hidden','true');
  if(keep)return;const lf=lastFocus;lastFocus=null;if(lf&&lf.focus)lf.focus({preventScroll:true});if(secIndex()!==0)armHide();}
symL.onclick=()=>{lastFocus=symL;drawer==='L'?closeDrawer():openDrawer('L');};
symR.onclick=()=>{lastFocus=symR;drawer==='R'?closeDrawer():openDrawer('R');};
[dL,dR].forEach(d=>d.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeDrawer();}));
dL.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(!b)return;const [si,i]=b.dataset.go.split(',').map(Number);closeDrawer();goTo(si,i);});

/* ---------- 9. play mode ---------- */
function activeFrame(){const s=secs[cur.s]&&secs[cur.s].slides[cur.i];return s&&s._frame;}
function enterPlay(){const f=activeFrame();if(!f)return;if(drawer)closeDrawer();playing=true;const sc=secs[cur.s].scroller;lock={t:stage.scrollTop,sc,l:sc?sc.scrollLeft:0};body.classList.add('playing');symP.setAttribute('aria-pressed','true');
  showUI();clearTimeout(hideT);f.setAttribute('tabindex','0');f.contentWindow&&f.contentWindow.postMessage({type:'pl-play',on:true},'*');f.focus();
  /* corners belong to the app while playing: the two menu symbols step aside after the usual delay; ▶ stays */
  hideT=setTimeout(()=>{if(playing)body.classList.add('ui-hidden');},UI.hideAfter);}
function exitPlay(){lock=null;const f=activeFrame()||doc.querySelector('.s-app iframe[tabindex="0"]');playing=false;body.classList.remove('playing');symP.setAttribute('aria-pressed','false');
  doc.querySelectorAll('.s-app iframe').forEach(x=>{x.setAttribute('tabindex','-1');x.contentWindow&&x.contentWindow.postMessage({type:'pl-play',on:false},'*');});
  showUI();stage.focus({preventScroll:true});if(secIndex()!==0)armHide();}
symP.onclick=()=>playing?exitPlay():enterPlay();
addEventListener('message',e=>{const d=e.data||{};
  if(d.type==='pl-exit-play'&&playing)exitPlay();
  if(d.type==='pl-ready'&&e.source)e.source.postMessage({type:'pl-theme',accent:TH.accent},'*');});

/* ---------- 10. optional components (site config: components:{edgeTicker:{...}}; omit the key = not loaded) ---------- */
const COMP={edgeTicker:{src:'components/edge-ticker.js',ready:()=>window.PLEdgeTicker,
  mount:o=>window.PLEdgeTicker.mountEdgeTicker(body,Object.assign({zIndex:45},o))}};
const mounted={};
Object.entries(S.components||{}).forEach(([name,opt])=>{const c=COMP[name];if(!c||!opt)return;
  const go=()=>{mounted[name]=c.mount(opt);};
  if(c.ready())go();else{const sc=doc.createElement('script');sc.src=c.src;sc.onload=go;sc.onerror=()=>console.warn('component failed to load: '+name);doc.head.appendChild(sc);}});
window.PL_COMPONENTS=mounted;

/* ---------- 10b. guard: every site page must have both corner symbols and both panels ---------- */
['symL','symR','drawerL','drawerR'].forEach(id=>{if(!doc.getElementById(id))throw new Error('Pointlab engine: missing '+id+' — every site must ship both side panels');});

/* ---------- 11. start (deep link #p=section&s=slide) ---------- */
window.PL={goTo,goProject:(pi,i=0)=>{const k=secs.findIndex(x=>x.pi===pi);if(k>=0)goTo(k,i);},sections:()=>secs.map(x=>x.hero?'hero':x.interlude?'interlude':'project:'+(x.proj.id||x.pi)),goSection,goSlide,openDrawer,closeDrawer,state:()=>({section:cur.s,slide:cur.i,playing,drawer,uiHidden:body.classList.contains('ui-hidden')})};
const hp=new URLSearchParams(location.hash.slice(1));const p0=+hp.get('p')||0,s0=+hp.get('s')||0;
requestAnimationFrame(()=>{if(secs[p0]){goSlide(secs[p0],s0,false);goSection(p0,false);}settle();if(p0!==0)armHide();});
})();
