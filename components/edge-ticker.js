/* EDGE TICKER — standalone four-edge text loop, ported from anttipiste/index.html (.frame-stream).
   No engine dependency. Works as a classic <script src> (file:// safe) and as a side-effect import;
   ES module exports live in edge-ticker.mjs.
     const t = PLEdgeTicker.mountEdgeTicker(document.body, { text: 'POINTLAB // NEWS' });
     t.update({ duration: 20 }); t.destroy();
   or <edge-ticker text="POINTLAB // NEWS" duration="32"></edge-ticker>
   Original motion: mono 8.5px, 0.24em tracking, uppercase, 15px strips with a 25% rule on the inner side,
   mix-blend-mode difference, 32s linear loop; top runs left, bottom runs right, left runs down (text
   rotated 180deg), right runs up. Each strip holds two identical copies and moves -50%, so it loops seamlessly. */
(function (g) {
  'use strict';
  if (g.PLEdgeTicker) return;
  var STYLE_ID = 'pl-edge-ticker-css', live = 0;
  var CSS = [
    '.pl-et{position:fixed;inset:0;pointer-events:none!important;user-select:none;-webkit-user-select:none;contain:layout style;',
    'z-index:var(--pl-et-z,100);opacity:var(--pl-et-opacity,1);color:var(--pl-et-color,var(--fg,#fff));mix-blend-mode:var(--pl-et-blend,difference);',
    'font-family:var(--pl-et-font,var(--font-mono,"IBM Plex Mono",ui-monospace,monospace));font-size:var(--pl-et-size,8.5px);',
    'letter-spacing:.24em;text-transform:uppercase;line-height:var(--pl-et-h,15px)}',
    '.pl-et.pl-et--abs{position:absolute}',
    '.pl-et *{pointer-events:none!important}',
    '.pl-et__s{position:absolute;overflow:hidden;white-space:nowrap;border:0 solid color-mix(in srgb,currentColor 25%,transparent)}',
    '.pl-et--norules .pl-et__s{border-width:0!important}',
    '.pl-et__s--top{top:var(--pl-et-inset,0px);left:var(--pl-et-corner,120px);right:var(--pl-et-corner,120px);height:var(--pl-et-h,15px);border-bottom-width:1px}',
    '.pl-et__s--bottom{bottom:var(--pl-et-inset,0px);left:var(--pl-et-corner,120px);right:var(--pl-et-corner,120px);height:var(--pl-et-h,15px);border-top-width:1px}',
    '.pl-et__s--left{left:var(--pl-et-inset,0px);top:var(--pl-et-corner,120px);bottom:var(--pl-et-corner,120px);width:var(--pl-et-h,15px);border-right-width:1px}',
    '.pl-et__s--right{right:var(--pl-et-inset,0px);top:var(--pl-et-corner,120px);bottom:var(--pl-et-corner,120px);width:var(--pl-et-h,15px);border-left-width:1px}',
    '.pl-et__t{display:flex;width:max-content;will-change:transform;animation-duration:var(--pl-et-dur,32s);animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:var(--pl-et-dir,normal)}',
    '.pl-et__t>span{flex:none;white-space:pre}',
    '.pl-et__s--left .pl-et__t,.pl-et__s--right .pl-et__t{writing-mode:vertical-rl;text-orientation:mixed;width:auto;height:max-content}',
    '.pl-et__s--top .pl-et__t{animation-name:pl-et-left}',
    '.pl-et__s--bottom .pl-et__t{animation-name:pl-et-right;transform:translateX(-50%)}',
    '.pl-et__s--left .pl-et__t{animation-name:pl-et-down;transform:rotate(180deg)}',
    '.pl-et__s--right .pl-et__t{animation-name:pl-et-up}',
    '.pl-et--paused .pl-et__t{animation-play-state:paused}',
    '@keyframes pl-et-left{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}',
    '@keyframes pl-et-right{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}',
    '@keyframes pl-et-down{0%{transform:translateY(0) rotate(180deg)}100%{transform:translateY(-50%) rotate(180deg)}}',
    '@keyframes pl-et-up{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}',
    '@media (prefers-reduced-motion:reduce){.pl-et__t{animation-duration:calc(var(--pl-et-dur,32s) * 3)!important}}',   /* v2.4: OS reduce motion = a 3x slower drift, not a freeze; static:true (site Animations off) freezes */
    '.pl-et--static .pl-et__t{animation:none!important}'
  ].join('\n');
  var EDGES = ['top', 'right', 'bottom', 'left'];
  var DEFAULTS = { text: '', texts: null, duration: 32, direction: 'normal', font: null, color: null, size: null,
    inset: 0, corner: 120, opacity: 1, blend: 'difference', rules: true, zIndex: null, minWidth: 0, separator: ' // ', static: false };

  function injectCSS(doc) { if (doc.getElementById(STYLE_ID)) return; var s = doc.createElement('style'); s.id = STYLE_ID; s.textContent = CSS; doc.head.appendChild(s); }
  function px(v) { return typeof v === 'number' ? v + 'px' : String(v); }
  function textFor(o, edge) {
    var t = (o.texts && o.texts[edge] != null) ? o.texts[edge] : o.text;
    if (Array.isArray(t)) t = t.join(o.separator);
    t = String(t == null ? '' : t).trim();
    return t ? t + o.separator : '';
  }

  function mountEdgeTicker(target, options) {
    target = target || document.body;
    var doc = target.ownerDocument || document, win = doc.defaultView || g;
    var o = {}, k; for (k in DEFAULTS) o[k] = DEFAULTS[k];
    injectCSS(doc); live++;
    var root = doc.createElement('div');
    root.className = 'pl-et'; root.setAttribute('aria-hidden', 'true'); root.setAttribute('inert', ''); root.dataset.edgeTicker = '';
    if (target !== doc.body && target !== doc.documentElement) root.classList.add('pl-et--abs');
    var strips = {};
    EDGES.forEach(function (e) { var s = doc.createElement('div'); s.className = 'pl-et__s pl-et__s--' + e; var t = doc.createElement('div'); t.className = 'pl-et__t'; s.appendChild(t); root.appendChild(s); strips[e] = { s: s, t: t }; });
    target.appendChild(root);
    var mq = null;

    /* fill each strip: two identical copies, each at least as long as the strip, so -50% loops without a gap */
    function fill() {
      var vertical, len, copy, n, i, span, unit;
      EDGES.forEach(function (e) {
        var st = strips[e], txt = textFor(o, e);
        st.s.style.display = txt ? '' : 'none'; st.t.textContent = '';
        if (!txt) return;
        vertical = e === 'left' || e === 'right';
        len = vertical ? st.s.clientHeight : st.s.clientWidth;
        span = doc.createElement('span'); span.textContent = txt; st.t.appendChild(span);
        unit = vertical ? span.getBoundingClientRect().height : span.getBoundingClientRect().width;
        n = unit > 0 ? Math.max(1, Math.ceil(len / unit)) : 1;
        copy = ''; for (i = 0; i < n; i++) copy += txt;
        span.textContent = copy;
        var b = span.cloneNode(true); st.t.appendChild(b);
      });
    }
    function applyVars() {
      var r = root.style;
      r.setProperty('--pl-et-dur', (+o.duration || 32) + 's');
      r.setProperty('--pl-et-dir', o.direction === 'reverse' ? 'reverse' : 'normal');
      r.setProperty('--pl-et-inset', px(o.inset));
      r.setProperty('--pl-et-corner', px(o.corner));
      r.setProperty('--pl-et-opacity', String(o.opacity));
      r.setProperty('--pl-et-blend', o.blend || 'normal');
      ['font', 'color', 'size'].forEach(function (p) { if (o[p] != null && o[p] !== '') r.setProperty('--pl-et-' + p, p === 'size' ? px(o[p]) : o[p]); else r.removeProperty('--pl-et-' + p); });
      if (o.zIndex != null) r.setProperty('--pl-et-z', String(o.zIndex)); else r.removeProperty('--pl-et-z');
      root.classList.toggle('pl-et--norules', !o.rules);
      root.classList.toggle('pl-et--static', !!o.static);
      if (mq) { mq.removeEventListener && mq.removeEventListener('change', onMin); }
      mq = win.matchMedia && o.minWidth ? win.matchMedia('(max-width:' + (o.minWidth - 1) + 'px)') : null;
      if (mq) mq.addEventListener && mq.addEventListener('change', onMin);
      onMin();
    }
    function onMin() { root.style.display = mq && mq.matches ? 'none' : ''; }
    function onVis() { root.classList.toggle('pl-et--paused', doc.hidden); }
    var ro = win.ResizeObserver ? new win.ResizeObserver(function () { fill(); }) : null;
    function onResize() { fill(); }
    if (ro) ro.observe(root); else win.addEventListener('resize', onResize);
    doc.addEventListener('visibilitychange', onVis);

    function update(next) { next = next || {}; for (var key in next) if (key in DEFAULTS) o[key] = next[key]; applyVars(); fill(); onVis(); }
    var dead = false;
    function destroy() {
      if (dead) return; dead = true;
      if (ro) ro.disconnect(); else win.removeEventListener('resize', onResize);
      doc.removeEventListener('visibilitychange', onVis);
      if (mq && mq.removeEventListener) mq.removeEventListener('change', onMin);
      if (root.parentNode) root.parentNode.removeChild(root);
      live--; if (live <= 0) { live = 0; var s = doc.getElementById(STYLE_ID); if (s) s.parentNode.removeChild(s); }
    }
    update(options);
    return { update: update, destroy: destroy, element: root };
  }

  /* <edge-ticker> custom element: attributes text, top, right, bottom, left, duration, direction, font, color,
     size, inset, corner, opacity, blend, rules ("false" turns off), z-index, min-width, separator, static */
  var ATTRS = ['text', 'top', 'right', 'bottom', 'left', 'duration', 'direction', 'font', 'color', 'size', 'inset', 'corner', 'opacity', 'blend', 'rules', 'z-index', 'min-width', 'separator', 'static'];
  function optsFromAttrs(el) {
    var o = {}, texts = {}, has = false, num = function (v) { return v === '' || v == null || isNaN(+v) ? v : +v; };
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return; var v = el.getAttribute(a);
      if (EDGES.indexOf(a) >= 0) { texts[a] = v; has = true; }
      else if (a === 'rules') o.rules = v !== 'false';
      else if (a === 'static') o.static = v !== 'false';
      else if (a === 'z-index') o.zIndex = num(v);
      else if (a === 'min-width') o.minWidth = num(v);
      else if (a === 'duration' || a === 'opacity' || a === 'inset' || a === 'corner' || a === 'size') o[a] = num(v);
      else o[a] = v;
    });
    o.texts = has ? texts : null;
    return o;
  }
  var EdgeTickerElement = null;
  if (g.customElements && g.HTMLElement) {
    EdgeTickerElement = class extends g.HTMLElement {
      static get observedAttributes() { return ATTRS; }
      connectedCallback() { this.style.display = 'contents'; this._t = mountEdgeTicker(this.hasAttribute('contained') ? this.parentNode : this, optsFromAttrs(this)); }
      attributeChangedCallback() { if (this._t) this._t.update(optsFromAttrs(this)); }
      disconnectedCallback() { if (this._t) { this._t.destroy(); this._t = null; } }
    };
    if (!g.customElements.get('edge-ticker')) g.customElements.define('edge-ticker', EdgeTickerElement);
  }
  g.PLEdgeTicker = { mountEdgeTicker: mountEdgeTicker, EdgeTickerElement: EdgeTickerElement, defaults: DEFAULTS };
})(typeof globalThis !== 'undefined' ? globalThis : window);
