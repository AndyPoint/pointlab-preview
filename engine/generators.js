/* POINTLAB ENGINE — generator library (hero canvases + placeholder plates).
   API: PL_GEN[name] = { animated, init(ctx,w,h,opt,th) -> state, draw(ctx,w,h,t,state,opt,th) } */
(function(){
'use strict';
function rgba(hex,a){hex=hex.replace('#','');if(hex.length===3)hex=hex.split('').map(c=>c+c).join('');
  const n=parseInt(hex,16);return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`;}
function rng(seed){let s=seed>>>0||1;return()=>((s=Math.imul(s^s>>>15,1|s)+0x6D2B79F5|0,((s^s>>>7)>>>0)%1e6)/1e6);}
const G={};

/* Kehä — adapted from Antti's initKehaSynthesizer (anttipiste/index.html), re-coloured by theme */
G.keha={animated:true,init(){return{angle:0}},draw(c,W,H,t,s,o,th){
  /* v2: anttipiste colours by default (ground #F6F6F6, ink, Kapoor red, Klein-blue chords, 48 px datum grid) */
  const bg=o.bg||th.bg,ink=o.ink||th.fg,acc=o.accent||th.accent,chord=o.chord||ink;
  c.fillStyle=bg;c.fillRect(0,0,W,H);
  if(o.grid){c.strokeStyle=rgba(ink,.035);c.lineWidth=1;for(let x=0;x<W;x+=o.grid){c.beginPath();c.moveTo(x+.5,0);c.lineTo(x+.5,H);c.stroke();}
    for(let y=0;y<H;y+=o.grid){c.beginPath();c.moveTo(0,y+.5);c.lineTo(W,y+.5);c.stroke();}}
  const time=t*0.00036, cy1=(Math.sin(time*.7)+1)/2, cy2=(Math.cos(time*.4)+1)/2;
  const maxR=Math.min(W,H)*(o.scale||0.44);
  c.save();c.translate(W*(o.cx||.5),H*(o.cy||.5));
  c.lineWidth=1;c.strokeStyle=rgba(ink,.12);
  for(let d=0;d<360;d+=15){const r=d*Math.PI/180,ri=d%45===0?maxR*.88:maxR*.94;
    c.beginPath();c.moveTo(Math.cos(r)*ri,Math.sin(r)*ri);c.lineTo(Math.cos(r)*maxR,Math.sin(r)*maxR);c.stroke();}
  for(let r=1;r<=7;r++){const rad=Math.max(8,maxR/7*r+Math.sin(time*1.2+r)*10);
    c.beginPath();c.arc(0,0,rad,0,Math.PI*2);c.strokeStyle=r%2===0?rgba(acc,.25):rgba(ink,.09);c.lineWidth=r===7?1.2:.9;
    c.setLineDash(r===3||r===5?[4,6]:[]);c.stroke();}
  c.setLineDash([]);s.angle=t*0.000096;c.rotate(s.angle);
  const P=12,st=Math.PI*2/P;
  for(let i=0;i<P;i++){c.save();c.rotate(i*st);
    const c1x=maxR*(.35+cy1*.2),c1y=maxR*(.22*(1-cy2)),c2x=maxR*(.68+cy2*.15),c2y=maxR*(.18*cy1);
    c.beginPath();c.moveTo(0,0);c.bezierCurveTo(c1x,c1y,c2x,c2y,maxR*(.85+cy1*.15),0);c.bezierCurveTo(c2x,-c2y,c1x,-c1y,0,0);
    c.strokeStyle=i%2===0?rgba(acc,.35):rgba(ink,.18);c.lineWidth=1.1;c.stroke();
    c.beginPath();c.moveTo(maxR*.45,0);c.lineTo(maxR*.75*Math.cos(st/2),maxR*.75*Math.sin(st/2));
    c.strokeStyle=rgba(chord,.16);c.stroke();c.restore();}
  c.rotate(-s.angle*1.8);c.beginPath();
  for(let k=0;k<8;k++){const a=k*Math.PI/4;k?c.lineTo(Math.cos(a)*maxR*.55,Math.sin(a)*maxR*.55):c.moveTo(maxR*.55,0);}
  c.closePath();c.strokeStyle=rgba(ink,.14);c.lineWidth=.8;c.stroke();c.restore();
}};

/* Flow — codelab: particle flow field over a measured grid, trails */
G.flow={animated:true,init(c,W,H,o,th){const r=rng(o.seed||7),n=Math.round(W*H/2600);
  c.fillStyle=th.bg;c.fillRect(0,0,W,H);
  return{p:Array.from({length:n},()=>[r()*W,r()*H,r()*200|0])};},
  draw(c,W,H,t,s,o,th){c.fillStyle=rgba(th.bg,.08);c.fillRect(0,0,W,H);
    const g=Math.max(32,Math.round(Math.min(W,H)/14));c.fillStyle=rgba(th.fg,.18);
    for(let x=g/2;x<W;x+=g)for(let y=g/2;y<H;y+=g)c.fillRect(x,y,1,1);
    const T=t*0.00008,f=o.freq||0.0026;c.strokeStyle=rgba(th.accent,.55);c.lineWidth=1;c.beginPath();
    for(const q of s.p){const a=(Math.sin(q[0]*f+T)+Math.cos(q[1]*f*1.3-T*1.7))*Math.PI;
      const nx=q[0]+Math.cos(a)*1.6,ny=q[1]+Math.sin(a)*1.6;c.moveTo(q[0],q[1]);c.lineTo(nx,ny);q[0]=nx;q[1]=ny;
      if(++q[2]>260||nx<0||ny<0||nx>W||ny>H){q[0]=Math.random()*W;q[1]=Math.random()*H;q[2]=0;}}
    c.stroke();}};

/* Drape — fashion: slow layered silk folds */
G.drape={animated:true,init(){return{}},draw(c,W,H,t,s,o,th){
  c.fillStyle=th.bg;c.fillRect(0,0,W,H);const T=t*0.00012,L=o.lines||64;
  for(let i=0;i<L;i++){const v=i/L;c.beginPath();
    for(let x=0;x<=W;x+=12){const u=x/W;
      const y=H*(.12+v*.8)+Math.sin(u*3.1+T+v*2.2)*H*.07*Math.sin(v*3.14)+Math.sin(u*9+T*1.7+v*6)*H*.012;
      x?c.lineTo(x,y):c.moveTo(x,y);}
    c.strokeStyle=i%9===4?rgba(th.accent,.55):rgba(th.fg,.10+.12*Math.sin(v*3.14));c.lineWidth=i%9===4?1.2:.8;c.stroke();}
}};

/* Plate — static generated placeholder (when no media given) */
G.plate={animated:false,init(){return{}},draw(c,W,H,t,s,o,th){
  const r=rng(o.seed||1);c.fillStyle=th.bg;c.fillRect(0,0,W,H);c.strokeStyle=rgba(th.fg,.2);c.lineWidth=1;
  for(let i=0;i<24;i++){c.beginPath();c.arc(W*r(),H*r(),r()*Math.min(W,H)*.4,0,Math.PI*2);c.stroke();}
  c.fillStyle=rgba(th.accent,.8);c.fillRect(W*r()*.8,H*r()*.8,W*.12,2);
}};


/* ===== v2.3 site generators (top page backgrounds; the centred logo sits on top, nothing else) ===== */
/* Plan — Conscious Architecture: a slow plan drawing. Datum grid, walls drawn line by line, one room of light. */
G.plan={animated:true,init(c,W,H,o){const r=rng(o.seed||11),g=Math.max(40,Math.round(Math.min(W,H)/10)),L=[];
    for(let i=0;i<22;i++){const h=r()<.5,x=Math.round(r()*W/g)*g,y=Math.round(r()*H/g)*g,l=g*(2+Math.floor(r()*6));L.push(h?[x,y,x+l,y]:[x,y,x,y+l]);}
    return{g,L};},
  draw(c,W,H,t,s,o,th){c.fillStyle=th.bg;c.fillRect(0,0,W,H);const g=s.g;c.strokeStyle=rgba(th.fg,.05);c.lineWidth=1;c.beginPath();
    for(let x=g/2;x<W;x+=g){c.moveTo(x+.5,0);c.lineTo(x+.5,H);}for(let y=g/2;y<H;y+=g){c.moveTo(0,y+.5);c.lineTo(W,y+.5);}c.stroke();
    const T=t*0.00005,cx=W/2+Math.sin(T)*g*.6,cy=H/2+Math.cos(T*.8)*g*.4,rg=c.createRadialGradient(cx,cy,0,cx,cy,Math.min(W,H)*.45);
    rg.addColorStop(0,rgba(th.accent,.10));rg.addColorStop(1,rgba(th.accent,0));c.fillStyle=rg;c.fillRect(0,0,W,H);
    const k=(t*0.00004)%1;c.strokeStyle=rgba(th.fg,.32);c.lineWidth=1.2;c.beginPath();
    s.L.forEach((l,i)=>{const p=Math.max(0,Math.min(1,(k*1.6*s.L.length-i)/1.5)),q=t?p:1;c.moveTo(l[0]+.5,l[1]+.5);c.lineTo(l[0]+(l[2]-l[0])*q+.5,l[1]+(l[3]-l[1])*q+.5);});c.stroke();}};
/* Scan — VJSH1FT: live-visual bands on black, beat-driven (Resolume-style layer stack, mono red signal). */
G.scan={animated:true,init(){return{}},draw(c,W,H,t,s,o,th){c.fillStyle=th.bg;c.fillRect(0,0,W,H);const T=t*0.001,beat=Math.pow(1-((T*2.1)%1),3);
  for(let i=0;i<14;i++){const y=(i/14)*H+Math.sin(T*.7+i)*H*.02,h=H/14*(.15+.6*Math.abs(Math.sin(T*.9+i*1.7)));
    c.fillStyle=i%5===2?rgba(th.accent,.10+.35*beat):rgba(th.fg,.03+.04*Math.abs(Math.sin(T+i)));c.fillRect(0,y,W,h);}
  c.fillStyle=rgba(th.fg,.06);for(let y=0;y<H;y+=3)c.fillRect(0,y,W,1);
  const x=((T*.18)%1)*W;c.fillStyle=rgba(th.accent,.25);c.fillRect(x,0,2,H);}};
/* Lattice — Asset Store: an isometric shelf of wire cubes, one turning (the 'asset' on the shelf). */
G.lattice={animated:true,init(){return{}},draw(c,W,H,t,s,o,th){c.fillStyle=th.bg;c.fillRect(0,0,W,H);const u=Math.max(26,Math.min(W,H)/16),T=t*0.0003;
  c.fillStyle=rgba(th.fg,.16);for(let x=u/2;x<W;x+=u)for(let y=u/2;y<H;y+=u*.58)c.fillRect(x+((y/(u*.58))%2?u/2:0),y,1.2,1.2);
  const cube=(cx,cy,r,a,col,lw)=>{const P=[];for(const X of[-1,1])for(const Y of[-1,1])for(const Z of[-1,1]){const x=X*Math.cos(a)-Z*Math.sin(a),z=X*Math.sin(a)+Z*Math.cos(a);
      P.push([cx+(x-z)*r*.87,cy+(x+z)*r*.5-Y*r]);}
    c.strokeStyle=col;c.lineWidth=lw;c.beginPath();[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]].forEach(e=>{c.moveTo(...P[e[0]]);c.lineTo(...P[e[1]]);});c.stroke();};
  for(let i=-3;i<=3;i++){if(!i)continue;cube(W/2+i*u*3.2,H*.72,u*.7,.785,rgba(th.fg,.18),1);}
  cube(W/2,H*.72,u*1.1,.785+T,rgba(th.accent,.9),1.4);}};
/* Rose — Generative Design: n-fold symmetric line growth, slowly re-seeding. */
G.rose={animated:true,init(c,W,H,o,th){c.fillStyle=th.bg;c.fillRect(0,0,W,H);return{a:0,n:o.n||8,seed:1};},
  draw(c,W,H,t,s,o,th){c.fillStyle=rgba(th.bg,.035);c.fillRect(0,0,W,H);const R=Math.min(W,H)*.42,T=t*0.00025,cx=W/2,cy=H/2;
    c.lineWidth=1;for(let k=0;k<s.n;k++){const b=k*Math.PI*2/s.n;c.strokeStyle=k%2?rgba(th.fg,.22):rgba(th.accent,.5);c.beginPath();
      for(let j=0;j<=40;j++){const u=j/40,r=R*u*(0.6+0.4*Math.sin(T*3+u*7)),a=b+Math.sin(T+u*4)*0.9*u;const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;j?c.lineTo(x,y):c.moveTo(x,y);}
      c.stroke();}}};

window.PL_GEN=G;window.PL_rgba=rgba;
})();
