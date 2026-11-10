/* POINTLAB ENGINE v2 — one shared engine for every subsite, rebuilt on the anttipiste index
   (typography, Kehä hero, scramble/decode text animations, title stamp, suites × slides) with
   JUST SITTING's side panels. Text animations live in engine/text.js (window.PLText).
   Reads window.PL_SITE (the subsite config) and window.PL_REGISTRY (all subsites).
   Builds: hero + projects (vertical) × typed slides (horizontal), two corner symbols,
   left identity drawer, right works directory, play mode for live web apps. */
(function(){
'use strict';
const S=window.PL_SITE,REG=window.PL_REGISTRY||[],G=window.PL_GEN||{};
const doc=document,body=doc.body,root=doc.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const T=window.PLText;
const el=(t,cls,parent,html)=>{const e=doc.createElement(t);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;if(parent)parent.appendChild(e);return e;};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pad2=n=>String(n).padStart(2,'0');
const UI=Object.assign({hideAfter:2000,tapHideAfter:3000,revealBand:72,cornerFree:120,tapZone:[.15,.85]},S.ui||{});

/* ---------- 1. identity layer (theme) ---------- */
Object.entries(S.theme.vars||{}).forEach(([k,v])=>root.style.setProperty(k,v));
root.dataset.site=S.id;root.lang=S.lang||'en';doc.title=S.title;
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

/* ---------- 3. text animations (live inside hero + slides, never in the frame) ---------- */
const TX={
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
function animateIn(scope){scope.querySelectorAll('[data-a]').forEach(e=>{const role=e.dataset.a;const kind=(S.motion&&S.motion[role])||'fade';(TX[kind]||TX.fade)(e);});}

/* ---------- 4. slide types (fixed behaviour, styled by theme) ---------- */
const LABEL=Object.assign({concept:'Concept',tutorial:'Tutorial',shot:'Screenshot',video:'Video',app:'Live web app',news:'News',links:'Sites',full:'Work'},S.labels||{});
function idx(n,N,type,sl){return `<div class="idx"><i>${pad2(n)}</i> / ${pad2(N)} — ${esc(sl.kicker||LABEL[type])}</div>`;}
function media(sl,wrap){
  if(sl.video){const v=el('video','',wrap);v.src=sl.video;v.muted=true;v.loop=true;v.playsInline=true;v.preload='none';v.setAttribute('aria-label',sl.title||'video');v.dataset.autoplay='1';return;}
  if(sl.img){const i=el('img','',wrap);i.src=sl.img;i.alt=sl.alt||sl.title||'';i.loading='lazy';i.decoding='async';return;}
  mountGen(el('canvas','',wrap),sl.gen||'plate',sl.genOpt||{seed:sl.seed});
}
const R={
  concept(s,sl,n,N){s.innerHTML=`<div class="pad">${idx(n,N,'concept',sl)}<h2 class="h1" data-a="title">${esc(sl.title)}</h2>
    <p class="lede" data-a="body">${esc(sl.lede)}</p>${sl.meta?`<div class="meta" data-a="body">${sl.meta.map(m=>`<div>${esc(m[0])}<b>${esc(m[1])}</b></div>`).join('')}</div>`:''}</div>`;},
  tutorial(s,sl,n,N){s.innerHTML=`<div class="pad">${idx(n,N,'tutorial',sl)}<h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title)}</h2>
    <ol>${sl.steps.map(t=>`<li><span data-a="step">${esc(t)}</span></li>`).join('')}</ol></div>`;},
  shot(s,sl,n,N){const g=el('div','grid',s);const cap=el('div','cap',g);
    cap.innerHTML=`${idx(n,N,'shot',sl)}<h3 class="h2" data-a="title">${esc(sl.title)}</h3><p class="txt" data-a="body">${esc(sl.text)}</p>${sl.ph?`<span class="ph">${esc(sl.ph)}</span>`:''}`;
    media(sl,el('div','art'+(sl.cover?' cover':''),g));},
  full(s,sl,n,N){media(sl,s);const l=el('div','lab',s);l.innerHTML=`${idx(n,N,'full',sl)}<h3 class="h2" data-a="title">${esc(sl.title)}</h3>${sl.text?`<p class="txt" data-a="body">${esc(sl.text)}</p>`:''}`;},
  video(s,sl,n,N){if(sl.fit==='contain')s.classList.add('contain');media(sl,s);const l=el('div','lab',s);
    l.innerHTML=`${idx(n,N,'video',sl)}<h3 class="h2" data-a="title">${esc(sl.title)}</h3>${sl.text?`<p class="txt" data-a="body">${esc(sl.text)}</p>`:''}<span class="ph">${esc(sl.ph||'Video placeholder')}</span>`;},
  app(s,sl,n,N){const f=el('iframe','',s);f.dataset.src=sl.src;f.title=sl.title||'Live web app';f.setAttribute('tabindex','-1');s._frame=f;
    const h=el('div','hint',s);h.innerHTML=`${idx(n,N,'app',sl)}<h3 class="h2" data-a="title">${esc(sl.title)}</h3><p class="txt" data-a="body">${esc(sl.hint||'Press ▶ next to the top-right symbol to play. Press it again or Esc to return to the site.')}</p>`;},
  news(s,sl,n,N){s.innerHTML=`<div class="pad">${idx(n,N,'news',sl)}<h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title)}</h2>
    <ul class="list">${sl.items.map(i=>`<li><span class="d">${esc(i.date)}</span><b>${esc(i.title)}</b><p>${esc(i.text)}</p></li>`).join('')}</ul></div>`;},
  links(s,sl,n,N){const tiles=REG.filter(r=>r.id!==S.id).map(r=>r.href
      ?`<a class="tile" href="${esc(r.href)}">${r.thumb?`<img src="${esc(r.thumb)}" alt="" loading="lazy">`:''}<small>${esc(r.role)}</small><b>${esc(r.name)}</b></a>`
      :`<span class="tile">${r.thumb?`<img src="${esc(r.thumb)}" alt="" loading="lazy">`:''}<small>${esc(r.role)} · planned</small><b>${esc(r.name)}</b></span>`).join('');
    s.innerHTML=`<div class="pad">${idx(n,N,'links',sl)}<h2 class="h2" style="margin-top:auto" data-a="title">${esc(sl.title)}</h2><div class="tiles">${tiles}</div></div>`;}
};

/* ---------- 5. build DOM ---------- */
const stage=el('main','',body);stage.id='stage';stage.tabIndex=-1;
const secs=[];   // {el, slides:[el], scroller, proj}
if(S.hero){const h=el('section','sec hero',stage);h.setAttribute('aria-label','Top');
  if(S.hero.video){const v=el('video','',h);v.src=S.hero.video;v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.dataset.autoplay='1';}
  else if(S.hero.image){const i=el('img','bgm',h);i.src=S.hero.image;i.alt='';}
  if(S.hero.generator)mountGen(el('canvas','',h),S.hero.generator,S.hero.opt);
  if(S.hero.video||S.hero.image)el('div','shade',h);
  const cp=el('div','hero-copy',h);const t=el('h1','hero-title',cp);T.setText(t,S.hero.title,S.hero.titleHTML);h.addEventListener('click',e=>{if(!e.target.closest('button'))heroSeq(secs[0]);});const sub=el('p','hero-sub',cp);sub.textContent=S.hero.sub||'';
  const dn=el('button','hero-down',h,'<svg viewBox="0 0 18 18"><path d="M3 6l6 6 6-6"/></svg>');dn.setAttribute('aria-label','Next');dn.onclick=()=>goSection(1);
  secs.push({el:h,slides:[h],scroller:null,hero:true,title:t,sub});}
S.projects.forEach((p,pi)=>{const sec=el('section','sec proj',stage);sec.setAttribute('aria-label',p.title);
  const sc=el('div','slides',sec);const list=[];
  p.slides.forEach((sl,i)=>{const s=el('article','slide s-'+sl.type,sc);s.dataset.type=sl.type;(R[sl.type]||R.concept)(s,sl,i+1,p.slides.length);list.push(s);});
  /* anttipiste title stamp (bottom-left) + counter (bottom-right) */
  const stamp=el('div','stamp',sec);stamp.innerHTML=`<span class="st-n">${pad2(pi+1)}</span><span class="st-d">//</span><span class="st-t"></span>${p.author?`<span class="st-a">· ${esc(p.author)}</span>`:''}`;
  const stT=stamp.querySelector('.st-t');T.setText(stT,p.title.toUpperCase());
  const count=el('div','count',sec);count.textContent=list.length>1?`01 / ${pad2(list.length)}`:'';
  secs.push({el:sec,slides:list,scroller:sc,proj:p,stT,count});});

/* corner symbols + play symbol + edge arrows + drawers */
const ICON={menu:'<svg class="g" viewBox="0 0 18 18"><path d="M2 4.5h14M2 9h14M2 13.5h14"/></svg>',
  dir:'<svg class="g" viewBox="0 0 18 18"><path d="M4.5 2v14M9 2v14M13.5 2v14"/></svg>',x:'<svg class="x" viewBox="0 0 18 18"><path d="M3.5 3.5l11 11M14.5 3.5l-11 11"/></svg>'};
const symL=el('button','sym',body,ICON.menu+ICON.x);symL.id='symL';symL.setAttribute('aria-label','Menu: sites and identity');
const symR=el('button','sym',body,ICON.dir+ICON.x);symR.id='symR';symR.setAttribute('aria-label','Works directory');
const symP=el('button','sym',body,'<svg class="tri" viewBox="0 0 18 18"><path d="M5 3l10 6-10 6z"/></svg><svg class="pause" viewBox="0 0 18 18"><path d="M6 3v12M12 3v12"/></svg>');
symP.id='symP';symP.setAttribute('aria-label','Play mode: give input to the web app');symP.setAttribute('aria-pressed','false');
[symL,symR].forEach(b=>b.setAttribute('aria-expanded','false'));
const edgeL=el('button','edge l',body,'<svg viewBox="0 0 16 32"><path d="M13 2L3 16l10 14"/></svg>');edgeL.setAttribute('aria-label','Previous slide');
const edgeR=el('button','edge r',body,'<svg viewBox="0 0 16 32"><path d="M3 2l10 14L3 30"/></svg>');edgeR.setAttribute('aria-label','Next slide');
/* side panels (JUST SITTING): dark surface, no veil, flat sections, 44 px targets, 120 ms slide-in.
   Left = identity + sites (no works); right = works only, each project once with its slides. */
const PCFG=Object.assign({glitch:false},S.panel||{});
const head=(label,id)=>`<div class="p-head">${PCFG.glitch?'<canvas class="p-glitch" aria-hidden="true"></canvas>':''}<span class="p-lab">${esc(label)}</span><button class="p-x" data-close aria-label="Close ${esc(label)}">×</button></div>`;
const dL=el('nav','panel left',body);dL.id='drawerL';dL.setAttribute('aria-label','Sites and identity');dL.setAttribute('aria-hidden','true');
const dR=el('nav','panel right',body);dR.id='drawerR';dR.setAttribute('aria-label','Works directory');dR.setAttribute('aria-hidden','true');
dL.innerHTML=head(S.name)+`<div class="p-sec"><p class="p-line">${esc(S.identity.line)}</p></div>
  ${(S.identity.blocks||[]).map(b=>`<div class="p-sec"><h4 class="p-h">${esc(b.h)}</h4><p class="p-p">${esc(b.p)}</p></div>`).join('')}
  <div class="p-sec"><h4 class="p-h">${esc(S.labels&&S.labels.sites||'Sites')}</h4><ul class="p-list">${REG.map(r=>r.id===S.id
    ?`<li><span class="off cur">${esc(r.name)}<small>here</small></span></li>`
    :r.href?`<li><a href="${esc(r.href)}">${esc(r.name)}<small>${esc(r.role)}</small></a></li>`
    :`<li><span class="off">${esc(r.name)}<small>planned</small></span></li>`).join('')}</ul></div>`;
dR.innerHTML=head(S.labels&&S.labels.works||'Works')+(S.hero?`<div class="p-sec"><ul class="p-list"><li><button data-go="0,0">${esc(S.labels&&S.labels.top||'Top')}<small>00</small></button></li></ul></div>`:'')+
  secs.map((s,si)=>s.proj?`<div class="p-sec"><button class="p-proj" data-go="${si},0"><b>${pad2(si)}</b>${esc(s.proj.title)}<small>${pad2(s.slides.length)}</small></button>
    <ul class="p-sub">${s.proj.slides.map((sl,i)=>`<li><button data-go="${si},${i}"><b>${pad2(i+1)}</b>${esc(sl.title||LABEL[sl.type])}</button></li>`).join('')}</ul></div>`:'').join('');

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
  if(sec.hero)heroSeq(sec);else{stopHero();animateIn(s);}
  root.style.setProperty('--accent',(sec.proj&&sec.proj.code)||(sec.hero&&S.hero.code)||ACCENT0);
  if(sec.count)sec.count.textContent=sec.slides.length>1?`${pad2(i+1)} / ${pad2(sec.slides.length)}`:'';
  if(sec.stT&&prevS!==si)T.scrambleIn(sec.stT);  /* stamp re-decodes when its project is entered; other projects stay still */
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

/* hero: decode → hold → dissolve, replays when the hero is entered again or tapped */
let heroRun=null,heroRot=null;
function stopHero(){if(heroRun){heroRun.stop();heroRun=null;}if(heroRot){heroRot.stop();heroRot=null;}}
function heroSeq(sec){stopHero();T.setText(sec.title,S.hero.title,S.hero.titleHTML);T.setText(sec.sub,(S.hero.subs&&S.hero.subs[0])||S.hero.sub||'');
  heroRun=T.heroDecode(sec.title,sec.sub,{hold:S.hero.hold,dissolve:S.hero.dissolve,speed:S.motion.scrambleSpeed||22});
  if(S.hero.subs&&S.hero.subs.length>1)heroRot=T.rotate(sec.sub,S.hero.subs,{every:S.hero.rotateEvery||4500});}
doc.addEventListener('visibilitychange',()=>{if(doc.hidden&&heroRot){heroRot.stop();heroRot=null;}else if(!doc.hidden&&!heroRot&&cur.s===0&&secs[0].hero&&S.hero.subs&&S.hero.subs.length>1)heroRot=T.rotate(secs[0].sub,S.hero.subs,{every:S.hero.rotateEvery||4500});});

/* wheel: one gesture = one step (trackpad inertia filtered) */
let wLock=0,wLast=0,wMag=0;
addEventListener('wheel',e=>{if(playing||drawer)return;e.preventDefault();const now=performance.now();
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
function canHide(){return !(secIndex()===0&&!userHidTop)&&!drawer&&!nearTop&&!playing;}
function armHide(ms){clearTimeout(hideT);hideT=setTimeout(()=>{if(canHide())body.classList.add('ui-hidden');},ms||UI.hideAfter);}
let userHidTop=false;
function updateUIAfterMove(top){if(top){userHidTop=false;clearTimeout(hideT);showUI();}else armHide();}
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;updateEdges();
  const inBand=e.clientY<UI.revealBand&&e.clientX>UI.cornerFree&&e.clientX<innerWidth-UI.cornerFree;
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
  const gc=d.querySelector('.p-glitch');if(gc)T.glitch(gc,{bg:'#161616'});
  const f=d.querySelector('.p-x');setTimeout(()=>f&&f.focus({preventScroll:true}),130);}
function closeDrawer(keep){if(!drawer)return;drawer=null;delete body.dataset.drawer;symL.setAttribute('aria-expanded','false');symR.setAttribute('aria-expanded','false');
  dL.setAttribute('aria-hidden','true');dR.setAttribute('aria-hidden','true');
  if(keep)return;const lf=lastFocus;lastFocus=null;if(lf&&lf.focus)lf.focus({preventScroll:true});if(secIndex()!==0)armHide();}
symL.onclick=()=>{lastFocus=symL;drawer==='L'?closeDrawer():openDrawer('L');};
symR.onclick=()=>{lastFocus=symR;drawer==='R'?closeDrawer():openDrawer('R');};
[dL,dR].forEach(d=>d.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeDrawer();}));
dR.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(!b)return;const [si,i]=b.dataset.go.split(',').map(Number);closeDrawer();goTo(si,i);});

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

/* ---------- 11. start (deep link #p=section&s=slide) ---------- */
window.PL={goTo,goSection,goSlide,openDrawer,closeDrawer,state:()=>({section:cur.s,slide:cur.i,playing,drawer,uiHidden:body.classList.contains('ui-hidden')})};
const hp=new URLSearchParams(location.hash.slice(1));const p0=+hp.get('p')||0,s0=+hp.get('s')||0;
requestAnimationFrame(()=>{if(secs[p0]){goSlide(secs[p0],s0,false);goSection(p0,false);}settle();if(p0!==0)armHide();});
})();
