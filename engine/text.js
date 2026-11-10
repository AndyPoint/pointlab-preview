/* POINTLAB TEXT — reusable text animations ported from anttipiste/index.html (+ the rotating subtitle
   from its older script.js). Plain JS, no engine dependency: window.PLText. Classic script so it works
   on file://. v2.4: the site's own Animations setting (window.PL_REDUCED) freezes every text effect (final state at
   once). The OS "Reduce motion" setting does NOT freeze these small text effects: they run in a soft form instead
   (each hidden letter keeps ONE stable glyph, no flicker, then resolves left to right). Set window.PL_TEXT_OS='freeze'
   to make the OS setting freeze them as before. The real text stays available to screen readers via aria-label. */
(function (g) {
  'use strict';
  var GLYPHS = ['◍', '▚', '✕', '1', '0', '■', '▲', '↗', '◈', '░', '▓', '▒'];   // anttipiste set
  var KEEP = ' /+\n—';                                                          // never scrambled
  var mq = g.matchMedia ? g.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  function reduced() { return !!(g.PL_REDUCED || (mq.matches && g.PL_TEXT_OS === 'freeze')); }   /* frozen: site setting (or OS when opted in) */
  function soft() { return !!(mq.matches && !reduced()); }                                        /* OS reduce motion: calm form */
  function glyphs(n) { var a = []; for (var i = 0; i < n; i++) a.push(pick()); return a; }
  function pick() { return GLYPHS[(Math.random() * GLYPHS.length) | 0]; }
  function cancel(el) { if (el && el._plT) { clearInterval(el._plT); el._plT = 0; } }
  function begin(el) {
    cancel(el);
    if (el.dataset.plHtml == null) el.dataset.plHtml = el.innerHTML;      // keeps markup such as POINT<span>LAB</span>
    var text = el.dataset.plText != null ? el.dataset.plText : el.textContent;
    el.dataset.plText = text; el.setAttribute('aria-label', text);
    return text;
  }
  function finish(el, show) {
    cancel(el);
    if (show) el.innerHTML = el.dataset.plHtml; else el.textContent = '';
    el.removeAttribute('aria-label');
  }
  /* scramble-in: 22 ms tick, one letter resolves per two ticks, left to right */
  function scrambleIn(el, opt, cb) {
    if (typeof opt === 'function') { cb = opt; opt = {}; } opt = opt || {};
    var o = begin(el);
    if (reduced()) { finish(el, true); cb && cb(); return; }
    var p = 0, calm = soft() ? glyphs(o.length) : null;
    el._plT = setInterval(function () {
      p++; var s = '';
      for (var i = 0; i < o.length; i++) { var ch = o[i]; s += (KEEP.indexOf(ch) >= 0 || i < p / 2) ? ch : (calm ? calm[i] : pick()); }
      el.textContent = s;
      if (p >= o.length * 2) { finish(el, true); cb && cb(); }
    }, opt.speed || 22);
  }
  /* scramble-out: 20 ms tick, letters collapse from the right into blanks */
  function scrambleOut(el, opt, cb) {
    if (typeof opt === 'function') { cb = opt; opt = {}; } opt = opt || {};
    var o = begin(el);
    if (reduced()) { finish(el, false); cb && cb(); return; }
    var p = 0, calm = soft() ? glyphs(o.length) : null;
    el._plT = setInterval(function () {
      p++; var s = '';
      for (var i = 0; i < o.length; i++) { var ch = o[i]; s += ch === ' ' || ch === '\n' ? ch : (i >= o.length - p / 2 ? ' ' : (calm ? calm[i] : pick())); }
      el.textContent = s;
      if (p >= o.length * 2) { finish(el, false); cb && cb(); }
    }, opt.speed || 20);
  }
  function setText(el, text, html) { cancel(el); el.dataset.plText = text; el.dataset.plHtml = html != null ? html : escapeHTML(text); el.innerHTML = el.dataset.plHtml; }
  function escapeHTML(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* hero decode: title decodes, holds (2.6 s in anttipiste), both lines scramble out, then fade with
     scale .96 / 6 px drop (CSS class .pl-dissolved). Returns { stop() }. */
  function heroDecode(title, sub, opt) {
    opt = opt || {}; var t = 0, dead = false;
    title.classList.remove('pl-dissolved'); sub && sub.classList.remove('pl-dissolved');
    if (sub && opt.subTyped !== false) scrambleIn(sub, { speed: opt.subSpeed || 18 });
    scrambleIn(title, { speed: opt.speed || 22 }, function () {
      if (dead || opt.dissolve === false) return;
      t = setTimeout(function () {
        if (dead) return;
        scrambleOut(title, function () { title.classList.add('pl-dissolved'); });
        if (sub) scrambleOut(sub, function () { sub.classList.add('pl-dissolved'); });
      }, opt.hold == null ? 2600 : opt.hold);
    });
    return { stop: function () { dead = true; clearTimeout(t); cancel(title); sub && cancel(sub); } };
  }

  /* rotating subtitle: every 4.5 s the next line scrambles in. Returns { stop() }. */
  function rotate(el, lines, opt) {
    opt = opt || {}; var i = 0, id = 0;
    if (!lines || lines.length < 2) return { stop: function () {} };
    id = setInterval(function () { i = (i + 1) % lines.length; setText(el, lines[i]); if (!reduced()) scrambleIn(el, { speed: opt.speed || 22 }); }, opt.every || 4500);
    return { stop: function () { clearInterval(id); cancel(el); } };
  }

  /* glitch banner: raster bars and glyphs for 18 frames at 60 ms (~1.1 s), then settles to a quiet
     field with a hairline. Colours default to anttipiste's (void, red, white). */
  function glitch(canvas, opt) {
    opt = opt || {};
    var ctx = canvas.getContext('2d'), W = canvas.clientWidth || 320, H = canvas.clientHeight || 44, D = Math.min(g.devicePixelRatio || 1, 2);
    canvas.width = W * D; canvas.height = H * D; ctx.setTransform(D, 0, 0, D, 0, 0);
    var bg = opt.bg || '#0A0A0A', hot = opt.hot || 'rgba(216,38,28,.4)', cold = opt.cold || 'rgba(255,255,255,.25)', ink = opt.ink || 'rgba(255,255,255,.6)';
    var settle = function () { ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); ctx.fillStyle = opt.line || 'rgba(255,255,255,.15)'; ctx.fillRect(0, H - 1, W, 1); };
    clearInterval(canvas._plG);
    if (reduced() || mq.matches) { settle(); return; }   /* the glitch banner flashes: frozen under OS reduce motion too */
    var f = 0, max = opt.frames || 18;
    canvas._plG = setInterval(function () {
      f++; ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      if (f < max - 3) {
        var bars = 6 + ((Math.random() * 8) | 0);
        for (var i = 0; i < bars; i++) { ctx.fillStyle = Math.random() > 0.6 ? hot : cold; ctx.fillRect(0, Math.random() * H, W, 2 + Math.random() * 5); }
        ctx.font = '10px "IBM Plex Mono", monospace'; ctx.fillStyle = ink;
        for (var j = 0; j < 4; j++) ctx.fillText(pick(), Math.random() * (W - 20), 12 + Math.random() * (H - 16));
      } else { clearInterval(canvas._plG); settle(); }
    }, opt.interval || 60);
  }

  g.PLText = { GLYPHS: GLYPHS, scrambleIn: scrambleIn, scrambleOut: scrambleOut, heroDecode: heroDecode, rotate: rotate,
    glitch: glitch, setText: setText, cancel: cancel, reduced: reduced, soft: soft };
})(typeof globalThis !== 'undefined' ? globalThis : window);
