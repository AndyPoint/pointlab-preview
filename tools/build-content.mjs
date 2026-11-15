#!/usr/bin/env node
/* Pointlab content builder (v2.6) — no npm install needed, plain Node 18+.
   Scans content/ and writes content/manifest.json + content/manifest.js (the pages load the .js).
   Run from the site folder:   node tools/build-content.mjs
   GitHub runs this automatically on every push (.github/workflows/build-content.yml).
   Folder rules: see content/HOW-TO-UPDATE.md. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');
const IMG = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'svg'];
const VID = ['mp4', 'webm', 'mov', 'm4v'];
const warnings = [];
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const posix = p => p.split(path.sep).join('/');

/* ---------- text-file parser (exported for tests) ----------
   File = header lines "Key: value" (until the first blank line), then free text,
   then optional blocks that start with "# 01 Title", "# Help" or "# Cover". */
const KEY_RE = /^([\p{L}\p{N}][\p{L}\p{N} _\-\/().&']{0,40}?)\s*:\s*(.*)$/u;
const BLOCK_RE = /^#\s*(\d+)\b[\s.:_-]*(.*)$/;
const NAMED_RE = /^#\s*(help|cover)\s*:?\s*$/i;
export function parseTxt(src) {
  const lines = String(src).replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').split('\n');
  const out = { header: [], body: [], blocks: [] };
  let i = 0;
  while (i < lines.length && !lines[i].trim()) i++;
  /* a header exists when the file starts with Name:/Title: or its whole first paragraph is Key: value lines */
  const isKey = l => { const m = l.match(KEY_RE); return !!m && !/^https?$/i.test(m[1]) && !BLOCK_RE.test(l.trim()); };
  let e = i; while (e < lines.length && lines[e].trim()) e++;
  const first = lines.slice(i, e);
  const hasHeader = first.length && (/^\s*(name|title)\s*:/i.test(first[0]) || first.every(isKey));
  for (; hasHeader && i < lines.length; i++) {           // header: contiguous Key: value lines
    const l = lines[i];
    if (!l.trim()) break;
    if (BLOCK_RE.test(l.trim()) || NAMED_RE.test(l.trim())) break;
    const m = l.match(KEY_RE);
    if (!m || /^https?$/i.test(m[1])) break;
    out.header.push([m[1].trim(), m[2].trim()]);
  }
  let cur = null, buf = [];
  const flush = () => { const t = buf; buf = []; return t; };
  for (; i < lines.length; i++) {
    const l = lines[i], t = l.trim();
    let m;
    if ((m = t.match(BLOCK_RE)) || (m = t.match(NAMED_RE))) {
      if (cur) cur.lines = flush(); else out.body = flush();
      cur = m.length === 3 ? { num: parseInt(m[1], 10), title: m[2].trim() } : { name: m[1].trim().toLowerCase(), title: '' };
      out.blocks.push(cur);
      continue;
    }
    buf.push(l);
  }
  if (cur) cur.lines = flush(); else out.body = flush();
  out.text = paragraphs(out.body);
  out.blocks.forEach(b => {
    const L = b.lines || []; delete b.lines;
    /* block keys: the Key: value lines right under the heading. Known slide keys always count;
       on a concept page any key counts (it is shown as that page's facts). */
    let j = 0; while (j < L.length && !L[j].trim()) j++;
    const run = []; for (let k = j; k < L.length; k++) { const mm = L[k].trim() && L[k].match(KEY_RE); if (!mm) break; run.push([mm[1].trim(), mm[2].trim()]); }
    const layout = ((run.find(([k]) => /^layout$/i.test(k)) || [])[1] || '').trim();
    const generic = /^concept$/i.test(layout);
    b.keys = [];
    for (const kv of run) { if (generic || SLIDE_KEYS.has(kv[0].toLowerCase())) { b.keys.push(kv); j++; } else break; }
    const n = j;
    b.text = paragraphs(L.slice(n));
  });
  return out;
}
const SLIDE_KEYS = new Set(['layout', 'kicker', 'app', 'embed', 'video', 'image', 'poster', 'alt', 'date', 'lede', 'fit', 'title', 'type']);
function paragraphs(lines) {
  const s = lines.join('\n').replace(/^\s+|\s+$/g, '');
  if (!s) return [];
  return s.split(/\n\s*\n+/).map(p => p.split('\n').map(x => x.trim()).join(' ').trim()).filter(Boolean);
}
export const get = (h, key) => { const k = key.toLowerCase(); const f = h.find(([a]) => a.toLowerCase() === k); return f ? f[1] : undefined; };
export const all = (h, key) => { const k = key.toLowerCase(); return h.filter(([a]) => a.toLowerCase() === k).map(x => x[1]); };
const list = v => (v || '').split(/[,;]/).map(x => x.trim()).filter(Boolean);
const tagList = v => list(v).map(x => x.toLowerCase());
const titleText = s => String(s || '').replace(/\s*\|\s*/g, '\n');   // "Words | worn" → two lines

/* ---------- helpers ---------- */
const ext = f => (f.split('.').pop() || '').toLowerCase();
const isImg = f => IMG.includes(ext(f)), isVid = f => VID.includes(ext(f));
const hashCache = new Map();
function fileHash(abs) {
  if (hashCache.has(abs)) return hashCache.get(abs);
  const h = crypto.createHash('sha1').update(fs.readFileSync(abs)).digest('hex').slice(0, 10);
  hashCache.set(abs, h); return h;
}
const url = abs => posix(path.relative(ROOT, abs)).split('/').map(encodeURIComponent).join('/') + '?v=' + fileHash(abs);   // spaces, ä, # … are safe in URLs
const slug = s => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'project';
const readTxt = abs => fs.existsSync(abs) ? parseTxt(fs.readFileSync(abs, 'utf8')) : null;
const visible = n => !n.startsWith('.') && !n.startsWith('_') && n !== 'Thumbs.db';
function numbered(name) { const m = name.match(/^(\d+)(?:[_\-. ]+(.*))?$/); return m ? { num: parseInt(m[1], 10), rest: (m[2] || '').trim() } : null; }

/* link: "Label -> target" (target optional). Bare file names point into the project folder. */
function linkKind(href) {
  if (!href || href === '#') return 'placeholder';
  const h = href.split('?')[0].toLowerCase();
  if (/^mailto:/.test(h)) return 'email';
  if (VID.some(e => h.endsWith('.' + e))) return 'video';
  if (IMG.some(e => h.endsWith('.' + e))) return 'image';
  if (h.endsWith('.pdf')) return 'pdf';
  if (/^apps\//.test(h) || (!/^https?:/.test(h) && h.endsWith('.html'))) return 'live app';
  if (/kickstarter\.com/.test(h)) return 'kickstarter';
  return 'link';
}
function parseLink(v, dirAbs, files) {
  let label = v, href = null, kind = null;
  const km = label.match(/\s*\[([^\]]+)\]\s*$/); if (km) { kind = km[1].trim(); label = label.slice(0, km.index); }
  const i = label.indexOf('->');
  if (i >= 0) { href = label.slice(i + 2).trim() || null; label = label.slice(0, i).trim(); }
  if (href && dirAbs && files && files.includes(href)) href = url(path.join(dirAbs, href));
  const o = { label: label.trim(), kind: kind || linkKind(href) };
  if (href && href !== '#') o.href = href; else if (href === '#') o.href = '#';
  if (o.href === '#' && !kind) o.kind = 'placeholder';
  return o;
}

/* ---------- one project folder ---------- */
const P_RESERVED = new Set(['name', 'title', 'id', 'tags', 'settings', 'link', 'links', 'layout', 'accent', 'kind', 'cover image', 'cover line', 'price', 'buy link', 'buy label', 'list title']);
const LAYOUT = { full: 'full', fill: 'full', fullscreen: 'full', framed: 'shot', frame: 'shot', whole: 'shot', 'framed fill': 'shot-cover', 'framed-fill': 'shot-cover', 'framed crop': 'shot-cover' };
const TEXT_LAYOUTS = { concept: 'concept', text: 'text', notes: 'notes', sites: 'links', links: 'links', tutorial: 'tutorial', steps: 'tutorial' };
function buildProject(siteFolder, dirName, siteDefaults) {
  const dirAbs = path.join(CONTENT, siteFolder, dirName);
  const where = `${siteFolder}/${dirName}`;
  const nb = numbered(dirName);
  const txt = readTxt(path.join(dirAbs, 'project.txt')) || (warn(where, 'no project.txt — using the folder name as the title'), { header: [], text: [], blocks: [] });
  const H = txt.header;
  const files = fs.readdirSync(dirAbs).filter(visible).filter(f => fs.statSync(path.join(dirAbs, f)).isFile());
  const nameFromFolder = (nb ? nb.rest : dirName).replace(/[_-]+/g, ' ').trim();
  const p = { id: slug(get(H, 'id') || (nb ? nb.rest : dirName) || dirName), key: where, folder: posix(path.relative(ROOT, dirAbs)), num: nb ? nb.num : null,
    title: get(H, 'name') || get(H, 'title') || nameFromFolder };
  const tags = tagList(all(H, 'tags').join(',')); if (tags.length) p.tags = tags;
  const settings = list(get(H, 'settings')).map(s => s.toLowerCase()).map(s => /auto/.test(s) ? 'autoplay' : /whole|crop/.test(s) ? 'whole' : s);
  if (settings.length) p.settings = settings;
  if (get(H, 'accent')) p.code = get(H, 'accent');
  if (txt.text.length) p.info = txt.text.join('\n\n');
  const facts = H.filter(([k]) => !P_RESERVED.has(k.toLowerCase())).map(([k, v]) => [k, v]);
  if (facts.length) p.facts = facts;
  const links = all(H, 'link').concat(all(H, 'links')).map(v => parseLink(v, dirAbs, files));
  if (links.length) p.links = links;
  if (get(H, 'price') || get(H, 'buy link')) { p.get = { label: get(H, 'buy label') || 'Get', price: get(H, 'price') || '' }; if (get(H, 'buy link')) p.get.href = get(H, 'buy link'); }
  const kind = (get(H, 'kind') || '').toLowerCase();
  if (kind === 'news') p.kind = 'news';
  if (get(H, 'list title')) p.listTitle = get(H, 'list title');
  const projLayout = LAYOUT[(get(H, 'layout') || '').toLowerCase()] || siteDefaults.layout || 'full';

  /* media files by number */
  const media = new Map();   // num -> {img, vid, poster}
  for (const f of files) {
    if (f.toLowerCase() === 'project.txt') continue;
    const base = f.slice(0, f.length - ext(f).length - 1);
    const n = numbered(base); if (!n) { if (!/\.(txt|md)$/i.test(f)) warn(where, `"${f}" has no number at the start — not shown as a slide (it can still be used in a Link)`); continue; }
    if (!isImg(f) && !isVid(f)) { if (!/\.(txt|md)$/i.test(f)) warn(where, `"${f}" is not a supported image or video type`); continue; }
    const m = media.get(n.num) || {}; const abs = path.join(dirAbs, f);
    if (isImg(f) && /(^|[-_ ])poster$/i.test(n.rest)) m.poster = abs;
    else if (isVid(f)) { if (m.vid) warn(where, `two videos with number ${n.num} — using ${path.basename(m.vid)}`); else m.vid = abs; }
    else { if (m.img) warn(where, `two images with number ${n.num} — using ${path.basename(m.img)}`); else m.img = abs; }
    media.set(n.num, m);
  }
  for (const m of media.values()) if (m.vid && m.img && !m.poster) { m.poster = m.img; delete m.img; }   // 02.mp4 + 02.jpg → poster

  const blocks = new Map(); const named = {};
  for (const b of txt.blocks) { if (b.num != null) { if (blocks.has(b.num)) warn(where, `slide ${b.num} is described twice in project.txt`); else blocks.set(b.num, b); } else named[b.name] = b; }
  if (named.help) p.help = named.help.text;
  const coverLines = all(H, 'cover line').concat(named.cover ? named.cover.text : []);

  if (p.kind === 'news') {
    const nums = [...new Set([...blocks.keys(), ...media.keys()])].sort((a, b) => a - b);
    p.entries = nums.filter(n => blocks.has(n)).map(n => {
      const b = blocks.get(n), K = b.keys, m = media.get(n) || {};
      const date = get(K, 'date') || '';
      const dm = date.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
      const e = { date, title: b.title || `Entry ${n}` };
      if (dm) e.iso = `${dm[3]}-${dm[2].padStart(2, '0')}-${dm[1].padStart(2, '0')}`;
      if (m.img) { e.img = url(m.img); e.alt = get(K, 'alt') || ''; }
      if (get(K, 'lede')) e.lede = get(K, 'lede');
      e.body = b.text;
      return e;
    });
    return p;
  }

  const nums = [...new Set([...blocks.keys(), ...media.keys()])].sort((a, b) => a - b);
  p.slides = nums.map(n => {
    const b = blocks.get(n) || { keys: [], text: [], title: '' }, K = b.keys, m = media.get(n) || {};
    const lay = (get(K, 'layout') || '').toLowerCase().trim();
    const s = {};
    const title = titleText(get(K, 'title') || b.title);
    if (title) s.title = title;
    if (get(K, 'kicker')) s.kicker = get(K, 'kicker');
    if (get(K, 'alt')) s.alt = get(K, 'alt');
    const app = get(K, 'app') || get(K, 'embed');
    const extVideo = get(K, 'video'), extImage = get(K, 'image');
    if (app) { s.type = 'app'; s.src = app; }
    else if (TEXT_LAYOUTS[lay]) {
      s.type = TEXT_LAYOUTS[lay];
      if (s.type === 'concept') { s.lede = b.text.join(' '); const meta = K.filter(([k]) => !SLIDE_KEYS.has(k.toLowerCase())); if (meta.length) s.meta = meta; }
      else if (s.type === 'text') s.body = b.text;
      else if (s.type === 'tutorial') s.steps = b.text.flatMap(t => t.split(/\s*(?:^|\s)[-•]\s+/).filter(Boolean));
      if (m.img || m.vid) warn(where, `slide ${n} is a ${lay} page — its file is not shown`);
    } else if (m.vid || extVideo) {
      s.type = 'video'; s.video = m.vid ? url(m.vid) : extVideo;
      if (m.poster) s.poster = url(m.poster); else if (get(K, 'poster')) s.poster = get(K, 'poster');
      if (/whole|contain|fit/.test(lay) || /whole|contain/i.test(get(K, 'fit') || '')) s.fit = 'contain';
      if (b.text.length) s.text = b.text.join(' ');
    } else if (m.img || extImage) {
      const L = LAYOUT[lay] || projLayout;
      s.type = L === 'full' ? 'full' : 'shot'; if (L === 'shot-cover') s.cover = true;
      s.img = m.img ? url(m.img) : extImage;
      if (b.text.length) s.text = b.text.join(' ');
    } else if (lay) {
      warn(where, `slide ${n}: unknown Layout "${lay}" and no file`); return null;
    } else {
      warn(where, `slide ${n} is described in project.txt but has no file (add ${String(n).padStart(2, '0')}.jpg, or "Layout: text" for a text page)`); return null;
    }
    return s;
  }).filter(Boolean);
  if (!p.slides.length) warn(where, 'no slides (add 01.jpg, 02.mp4 … or # 01 blocks in project.txt)');

  /* cover (sites that show animated titles on each project's first page, e.g. Codelab) */
  const ci = get(H, 'cover image');
  let coverImg = null;
  if (ci) { const cn = numbered(ci.replace(/\.[a-z0-9]+$/i, '')); const f = files.includes(ci) ? path.join(dirAbs, ci) : cn && media.get(cn.num) && (media.get(cn.num).img || media.get(cn.num).poster); if (f) coverImg = url(f); else warn(where, `Cover image "${ci}" not found`); }
  if (!coverImg) { const first = p.slides.find(x => x.img); if (first) coverImg = first.img; }
  if (coverImg || coverLines.length) p.cover = Object.assign(coverImg ? { img: coverImg } : {}, { subs: coverLines });
  return p;
}

/* ---------- one site folder ---------- */
const S_RESERVED = new Set(['name', 'role', 'page title', 'wordmark', 'intro', 'artist', 'artist role', 'artist bio', 'status', 'thumbnail', 'layout', 'top line', 'include tags', 'tag filter', 'tag filter all', 'campaign status', 'campaign text', 'launch', 'kickstarter', 'edge top', 'edge right', 'edge bottom', 'edge left', 'id']);
function wordmark(v) {
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lines = titleText(v);
  return { text: lines.replace(/[\[\]]/g, ''), html: esc(lines).replace(/\[([^\]]*)\]/g, '<span>$1</span>') };
}
function findFile(dirAbs, base) {
  if (!fs.existsSync(dirAbs)) return null;
  const f = fs.readdirSync(dirAbs).filter(visible).find(x => x.toLowerCase().startsWith(base + '.') && (isImg(x) || isVid(x)));
  return f ? path.join(dirAbs, f) : null;
}
function buildSite(folder) {
  const dirAbs = path.join(CONTENT, folder);
  const txt = readTxt(path.join(dirAbs, 'site.txt'));
  const H = txt.header, site = { folder };
  const put = (k, v) => { if (v != null && v !== '') site[k] = v; };
  put('name', get(H, 'name')); put('role', get(H, 'role')); put('title', get(H, 'page title'));
  if (get(H, 'wordmark')) site.logo = wordmark(get(H, 'wordmark'));
  put('status', (get(H, 'status') || '').toLowerCase());
  const intro = get(H, 'intro'); site.identity = { line: intro || '', blocks: txt.text.map(p => ({ p })) };
  if (get(H, 'artist') || get(H, 'artist bio')) {
    const por = findFile(dirAbs, 'portrait');
    site.artist = { name: get(H, 'artist') || '', role: get(H, 'artist role') || '', bio: get(H, 'artist bio') || '', portrait: por ? url(por) : null };
  }
  const top = findFile(dirAbs, 'top');
  const subs = all(H, 'top line');
  if (top || subs.length) { site.hero = {}; if (top) site.hero[isVid(top) ? 'video' : 'image'] = url(top); if (subs.length) site.hero.subs = subs; }
  const inc = tagList(get(H, 'include tags')); if (inc.length) site.includeTags = inc;
  if (get(H, 'tag filter')) site.filter = { key: 'tags', label: get(H, 'tag filter'), all: get(H, 'tag filter all') || 'All' };
  if (get(H, 'campaign status') || get(H, 'kickstarter') || get(H, 'launch')) {
    site.campaign = {}; if (get(H, 'campaign status')) site.campaign.status = get(H, 'campaign status');
    if (get(H, 'launch')) site.campaign.launch = get(H, 'launch'); if (get(H, 'campaign text')) site.campaign.what = get(H, 'campaign text');
    if (get(H, 'kickstarter')) { const l = parseLink(get(H, 'kickstarter')); site.campaign.kickstarter = { label: l.label, href: l.href || '#' }; }
  }
  const edge = {}; for (const side of ['top', 'right', 'bottom', 'left']) { const v = list(get(H, 'edge ' + side)); if (v.length) edge[side] = v; }
  if (Object.keys(edge).length) site.edgeTexts = edge;
  const labels = {}; H.forEach(([k, v]) => { const m = k.match(/^label\s+(.+)$/i); if (m) labels[m[1].trim().toLowerCase()] = v; });
  if (Object.keys(labels).length) site.labels = labels;
  const defaults = { layout: LAYOUT[(get(H, 'layout') || '').toLowerCase()] };
  H.forEach(([k]) => { const kl = k.toLowerCase(); if (!S_RESERVED.has(kl) && !/^label\s/.test(kl)) warn(folder + '/site.txt', `unknown key "${k}" (ignored)`); });

  const dirs = fs.readdirSync(dirAbs).filter(visible).filter(d => fs.statSync(path.join(dirAbs, d)).isDirectory());
  const withNum = dirs.map(d => ({ d, n: numbered(d) }));
  withNum.filter(x => !x.n).forEach(x => warn(`${folder}/${x.d}`, 'folder has no number (001_Name) — shown after the numbered ones'));
  withNum.sort((a, b) => (a.n ? a.n.num : 1e9) - (b.n ? b.n.num : 1e9) || a.d.localeCompare(b.d));
  const seen = new Map();
  withNum.forEach(x => { if (x.n) { if (seen.has(x.n.num)) warn(`${folder}/${x.d}`, `same number as ${seen.get(x.n.num)} — order between them is alphabetical`); seen.set(x.n.num, x.d); } });
  const projects = withNum.map(x => buildProject(folder, x.d, defaults));

  /* thumbnail for the Sites lists: Thumbnail: path, thumb.* file, else the first image */
  const th = get(H, 'thumbnail');
  let thumb = null;
  if (th) { const abs = path.join(dirAbs, th); if (fs.existsSync(abs)) thumb = url(abs); else warn(folder + '/site.txt', `Thumbnail "${th}" not found`); }
  if (!thumb) { const f = findFile(dirAbs, 'thumb'); if (f) thumb = url(f); }
  if (!thumb) { for (const p of projects) { const s = (p.slides || []).find(x => x.img); if (s) { thumb = s.img; break; } const e = (p.entries || []).find(x => x.img); if (e) { thumb = e.img; break; } } }
  if (!thumb && site.hero && site.hero.image) thumb = site.hero.image;
  if (thumb) site.thumb = thumb;
  return { site, projects };
}

function buildShared() {
  const txt = readTxt(path.join(CONTENT, 'shared.txt'));
  if (!txt) return {};
  const H = txt.header, out = {};
  if (get(H, 'tools label')) out.toolsLabel = get(H, 'tools label');
  out.contact = all(H, 'contact').map(v => {
    let label = v, value = '', href = null; const a = label.indexOf('->'); if (a >= 0) { href = label.slice(a + 2).trim() || null; label = label.slice(0, a); }
    const e = label.indexOf('='); if (e >= 0) { value = label.slice(e + 1).trim(); label = label.slice(0, e); }
    label = label.trim(); if (!href && /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(value)) href = 'mailto:' + value;
    if (!href && /^https?:\/\//.test(value)) href = value;
    return { label, value, href };
  });
  return out;
}

export function build({ write = true, quiet = false } = {}) {
  warnings.length = 0; hashCache.clear();
  const folders = fs.readdirSync(CONTENT).filter(visible).filter(d => fs.existsSync(path.join(CONTENT, d, 'site.txt')));
  const manifest = { format: 'pointlab-content/1', shared: buildShared(), sites: {}, projects: {} };
  for (const f of folders.sort()) {
    const { site, projects } = buildSite(f);
    site.projects = projects.map(p => p.key);
    projects.forEach(p => { manifest.projects[p.key] = p; });
    manifest.sites[f] = site;
  }
  const json = JSON.stringify(manifest, null, 1);
  manifest.hash = crypto.createHash('sha1').update(json).digest('hex').slice(0, 10);
  const out = JSON.stringify(manifest, null, 1);
  if (write) {
    const head = '/* GENERATED by tools/build-content.mjs from the content/ folders — do not edit by hand. */\n';
    fs.writeFileSync(path.join(CONTENT, 'manifest.json'), out + '\n');
    fs.writeFileSync(path.join(CONTENT, 'manifest.js'), head + 'window.PL_CONTENT=' + out + ';\n');
  }
  if (!quiet) {
    const np = Object.keys(manifest.projects).length, ns = Object.values(manifest.projects).reduce((a, p) => a + (p.slides || p.entries || []).length, 0);
    console.log(`Pointlab content: ${folders.length} sites, ${np} projects, ${ns} slides → content/manifest.js (${manifest.hash})`);
    warnings.forEach(w => console.log('  note: ' + w));
  }
  return { manifest, warnings: warnings.slice() };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args[0] === '--parse') { console.log(JSON.stringify(parseTxt(fs.readFileSync(args[1], 'utf8')), null, 1)); }
  else build();
}
