/* Debyut Ustasi — asosiy ilova */
(function () {
  'use strict';

  /* ======================= YORDAMCHILAR ======================= */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const START = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  const store = {
    get(k, d) { try { const v = localStorage.getItem('du_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('du_' + k, JSON.stringify(v)); } catch (e) { } }
  };
  const fmtN = (n) => n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + 'k' : String(n);
  const pctFmt = (p) => (p < 1 ? '<1' : p < 10 && p % 1 ? p.toFixed(1) : Math.round(p)) + '%';

  /* ======================= IKONKALAR ======================= */
  const IC = {
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    puzzle: '<path d="M19.44 7.85c-.47.47-1.04.7-1.71.7-.24 0-.48-.07-.71-.15l-1.44 1.44a2.5 2.5 0 1 1-3.42 3.42l-1.44 1.44c.08.23.15.47.15.71 0 .67-.23 1.24-.7 1.71l-2.03 2.03a1 1 0 0 1-1.41 0L2.65 15.07a1 1 0 0 1 0-1.41l2.03-2.03c.47-.47 1.04-.7 1.71-.7.24 0 .48.07.71.15l1.44-1.44a2.5 2.5 0 1 1 3.42-3.42l1.44-1.44c-.08-.23-.15-.47-.15-.71 0-.67.23-1.24.7-1.71l2.03-2.03a1 1 0 0 1 1.41 0l4.08 4.08a1 1 0 0 1 0 1.41z"/>',
    guide: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    first: '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',
    prev: '<path d="m15 18-6-6 6-6"/>',
    next: '<path d="m9 18 6-6-6-6"/>',
    last: '<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',
    flip: '<path d="M7 16V4M7 4 3 8M7 4l4 4"/><path d="M17 8v12m0 0 4-4m-4 4-4-4"/>',
    reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    crown: '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>',
    trap: '<path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><circle cx="12" cy="12" r="4"/><path d="M18 12h4"/><path d="m16.24 7.76 2.83-2.83"/>',
    map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    sword: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    shuffle: '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>'
  };
  const icon = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[n] || ''}</svg>`;

  /* ======================= SOZLAMALAR ======================= */
  const BOARD_THEMES = {
    green: { name: "Yashil", light: '#ebecd0', dark: '#739552' },
    brown: { name: "Klassik", light: '#f0d9b5', dark: '#b58863' },
    blue: { name: "Ko'k", light: '#dee3e6', dark: '#8ca2ad' },
    wood: { name: "Yog'och", light: '#e9c89a', dark: '#a66d3c', texture: 'repeating-linear-gradient(91deg, rgba(90,50,20,.08) 0 2px, rgba(255,255,255,.04) 2px 4px, transparent 4px 9px)' },
    purple: { name: "Binafsha", light: '#ece4f7', dark: '#9078bf' },
    ice: { name: "Muz", light: '#eaf3fb', dark: '#7ea6cf' },
    coral: { name: "Marjon", light: '#f6e5d8', dark: '#d0866b' },
    emerald: { name: "Zumrad", light: '#dcefe4', dark: '#3f8f6b' },
    rose: { name: "Atirgul", light: '#f7e3e8', dark: '#c56f86' },
    sand: { name: "Qum", light: '#f3e8cc', dark: '#c4a46b' },
    night: { name: "Tun", light: '#a9b2c0', dark: '#4f5b6d' },
    graphite: { name: "Grafit", light: '#d8d8d8', dark: '#8a8a8a' }
  };
  const UI_THEMES = {
    dark: { name: "Tungi", c: ['#0d0f14', '#171b23', '#7c8cff'] },
    light: { name: "Kunduzgi", c: ['#f3f4f8', '#ffffff', '#4f5ff0'] },
    ocean: { name: "Okean", c: ['#0a1220', '#122036', '#38bdf8'] },
    sepia: { name: "Kofe", c: ['#1b1712', '#29231b', '#e0a458'] }
  };
  const PIECE_NAMES = { cburnett: 'Klassik', merida: 'Merida', alpha: 'Alfa', california: 'Kaliforniya', maestro: 'Maestro' };
  const DEFAULTS = { board: 'green', pieces: 'cburnett', ui: 'dark', sound: true, coords: true, dots: true, arrows: true, anim: 200, volume: 70, soundSet: 'standard', token: '', live: false, liveDb: 'lichess' };
  const S = Object.assign({}, DEFAULTS, store.get('settings', {}));
  if (!BOARD_THEMES[S.board]) S.board = DEFAULTS.board;
  if (!PIECE_SETS[S.pieces]) S.pieces = DEFAULTS.pieces;
  const saveSettings = () => store.set('settings', S);

  function applySettings() {
    const root = document.documentElement;
    root.dataset.ui = S.ui;
    const t = BOARD_THEMES[S.board];
    root.style.setProperty('--light', t.light);
    root.style.setProperty('--dark', t.dark);
    root.style.setProperty('--texture', t.texture || 'none');
    root.style.setProperty('--anim', S.anim + 'ms');
    const u = pieceUrls(S.pieces);
    window.PIECE_URL = u;
    let css = '';
    for (const k in u) css += `.pc.${k},.mini .${k}{background-image:url("${u[k]}")}`;
    $('#piece-css').textContent = css;
    $('#brand-img').src = u.wN;
    if (board) board.root.classList.toggle('no-coords', !S.coords);
    paintMinis(true);
  }
  const pieceUrlCache = {};
  function pieceUrls(set) {
    if (pieceUrlCache[set]) return pieceUrlCache[set];
    const o = {};
    for (const k in PIECE_SETS[set]) {
      const d = PIECE_SETS[set][k];
      try {
        const bin = atob(d.split(',')[1]);
        const a = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
        o[k] = URL.createObjectURL(new Blob([a], { type: 'image/svg+xml' }));
      } catch (e) { o[k] = d; }
    }
    return (pieceUrlCache[set] = o);
  }
  const figForce = (color, p) => `<img class="fig" src="${pieceUrls(S.pieces)[color + p]}" alt="${p}" decoding="async">`;
  const fig = (color, p) => figForce(S.ui === 'light' ? 'b' : 'w', p);
  function sanHtml(san, color) {
    const m = /^([KQRBN])(.*)$/.exec(san);
    if (m) return fig(color, m[1]) + esc(m[2]);
    const pr = /^(.*=)([QRBN])(.*)$/.exec(san);
    if (pr) return esc(pr[1]) + fig(color, pr[2]) + esc(pr[3]);
    return esc(san);
  }

  /* ======================= OVOZ ======================= */
  // Yumshoq "yog'och taqillashi" — sintez qilingan, fayl kerak emas
  let actx = null, master = null, synthBus = null;
  function audio() {
    if (!actx) {
      actx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' });
      master = actx.createGain();
      master.connect(actx.destination);
      const comp = actx.createDynamicsCompressor();
      comp.threshold.value = -18; comp.ratio.value = 4;
      const lp = actx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 4200;
      synthBus = actx.createGain();
      synthBus.connect(lp).connect(comp).connect(master);
    }
    if (actx.state === 'suspended') actx.resume();
    master.gain.value = (S.volume == null ? 70 : S.volume) / 100;
    return actx;
  }
  function env(g, t, a, peak, d) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  function thock(t, o = {}) {
    const ctx = actx, f = o.f || 170, v = o.v || 1;
    const os = ctx.createOscillator(), g = ctx.createGain();
    os.type = 'sine';
    os.frequency.setValueAtTime(f * 2.2, t);
    os.frequency.exponentialRampToValueAtTime(f, t + 0.025);
    env(g, t, 0.003, 0.55 * v, 0.11);
    os.connect(g).connect(synthBus); os.start(t); os.stop(t + 0.16);
    const os2 = ctx.createOscillator(), g2 = ctx.createGain(), bp = ctx.createBiquadFilter();
    os2.type = 'triangle'; os2.frequency.value = f * 4.1;
    bp.type = 'bandpass'; bp.frequency.value = f * 4.1; bp.Q.value = 6;
    env(g2, t, 0.002, 0.18 * v, 0.05);
    os2.connect(bp).connect(g2).connect(synthBus); os2.start(t); os2.stop(t + 0.08);
    const len = Math.floor(ctx.sampleRate * 0.012), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    const n = ctx.createBufferSource(), hp = ctx.createBiquadFilter(), g3 = ctx.createGain();
    n.buffer = buf; hp.type = 'bandpass'; hp.frequency.value = 2400; hp.Q.value = 0.8; g3.gain.value = 0.12 * v;
    n.connect(hp).connect(g3).connect(synthBus); n.start(t);
  }
  function bell(t, f, v = 0.12, d = 0.5) {
    const ctx = actx;
    [[1, 1], [2.76, 0.25], [5.4, 0.08]].forEach(([m, a]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f * m;
      env(g, t, 0.004, v * a, d / m);
      o.connect(g).connect(synthBus); o.start(t); o.stop(t + d + 0.05);
    });
  }
  function synth(kind) {
    try {
      const ctx = audio(), t = ctx.currentTime + 0.005;
      if (kind === 'move') thock(t, { f: 175 });
      else if (kind === 'capture') { thock(t, { f: 150, v: 1.15 }); thock(t + 0.045, { f: 205, v: 0.8 }); }
      else if (kind === 'castle') { thock(t, { f: 175 }); thock(t + 0.11, { f: 160, v: 0.9 }); }
      else if (kind === 'check') { thock(t, { f: 175 }); bell(t + 0.03, 988, 0.07, 0.45); }
      else if (kind === 'good') { bell(t, 784, 0.1, 0.4); bell(t + 0.09, 1175, 0.09, 0.55); }
      else if (kind === 'bad') {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(300, t); o.frequency.exponentialRampToValueAtTime(190, t + 0.18);
        env(g, t, 0.01, 0.16, 0.22); o.connect(g).connect(synthBus); o.start(t); o.stop(t + 0.3);
      }
      else if (kind === 'mate') [523, 659, 784, 1047].forEach((f, i) => bell(t + 0.12 + i * 0.11, f, 0.11, 0.9));
      else if (kind === 'draw') { bell(t + 0.1, 587, 0.09, 0.6); bell(t + 0.25, 523, 0.09, 0.8); }
      else if (kind === 'win') [659, 784, 1047].forEach((f, i) => bell(t + i * 0.1, f, 0.1, 0.7));
    } catch (e) { }
  }
  const SOUND_NAMES = { standard: "Klassik yog'och", piano: 'Pianino', woodland: "O'rmon", lisp: 'Yumshoq', nes: 'Retro 8-bit', sfx: 'Effektlar', robot: 'Robot', futuristic: 'Futuristik', synth: 'Sintez' };
  const SOUND_MAP = { move: 'move', capture: 'capture', castle: 'move', check: 'check', good: 'confirm', bad: 'error', mate: 'victory', win: 'victory', draw: 'draw' };
  const sndBufs = {};
  function loadSet(set) {
    if (set === 'synth' || sndBufs[set] || !window.SOUND_SETS || !SOUND_SETS[set]) return;
    const ctx = audio();
    sndBufs[set] = {};
    for (const ev in SOUND_SETS[set]) {
      const bin = atob(SOUND_SETS[set][ev]);
      const arr = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      ctx.decodeAudioData(arr.buffer).then((buf) => { sndBufs[set][ev] = buf; }, () => { });
    }
  }
  function playBuf(ev, gain = 1) {
    const bufs = sndBufs[S.soundSet];
    const b = bufs && bufs[ev];
    if (!b) return false;
    const src = actx.createBufferSource();
    src.buffer = b;
    if (gain !== 1) { const g = actx.createGain(); g.gain.value = gain; src.connect(g).connect(master); }
    else src.connect(master);
    src.start();
    return true;
  }
  function sound(kind) {
    if (!S.sound) return;
    try {
      audio();
      if (S.soundSet !== 'synth') {
        loadSet(S.soundSet);
        if (playBuf(SOUND_MAP[kind])) return;
        if (kind === 'check' && playBuf('move')) return;
        if ((kind === 'mate' || kind === 'win' || kind === 'draw') && playBuf('confirm')) return;
        if (['move', 'capture', 'castle', 'check'].includes(kind) && sndBufs[S.soundSet]) return;
      }
      synth(kind);
    } catch (e) { }
  }
  function moveSound(mv, g) {
    if (g.in_checkmate()) sound(mv && mv.captured ? 'capture' : 'move');
    else if (g.in_check()) sound('check');
    else if (mv && (mv.captured || /x/.test(mv.san))) sound('capture');
    else if (mv && /^O-O/.test(mv.san)) sound('castle');
    else sound('move');
  }

  /* ======================= O'YIN YAKUNI ======================= */
  function gameEnd(g) {
    if (g.in_checkmate()) return { type: 'mate', winner: g.turn() === 'w' ? 'b' : 'w' };
    if (g.in_stalemate()) return { type: 'stalemate' };
    if (g.insufficient_material()) return { type: 'draw', reason: "Mat qilish uchun yetarli figura yo'q" };
    if (g.in_draw()) return { type: 'draw', reason: '50 yurish qoidasi' };
    return null;
  }
  function showEnd(bd, g, fresh) {
    const e = gameEnd(g);
    if (!e) return null;
    let html;
    if (e.type === 'mate') {
      bd.setMated(kingSq(g));
      html = `<div class="ov-card"><div class="ov-ico">${figForce(e.winner, 'K')}</div><div class="ov-t">Mat!</div><div class="ov-d">${e.winner === 'w' ? 'Oq' : 'Qora'} g'alaba qozondi</div><div class="ov-h">Yopish uchun bosing</div></div>`;
    } else {
      html = `<div class="ov-card"><div class="ov-ico half">½</div><div class="ov-t">${e.type === 'stalemate' ? 'Pat' : 'Durang'}</div><div class="ov-d">${e.type === 'stalemate' ? "Navbatdagi tomonda qonuniy yurish yo'q, shax ham yo'q." : esc(e.reason)}</div><div class="ov-h">Yopish uchun bosing</div></div>`;
    }
    bd.showOverlay(html, e.type);
    if (fresh) setTimeout(() => sound(e.type === 'mate' ? 'mate' : 'draw'), 120);
    return e;
  }
  function endText(e) {
    if (!e) return '';
    return e.type === 'mate' ? `Mat! ${e.winner === 'w' ? 'Oq' : 'Qora'} g'alaba qozondi.` : e.type === 'stalemate' ? 'Pat — durang.' : 'Durang: ' + e.reason;
  }

  /* ======================= INDEKSLAR ======================= */
  function hkey(fen) { return fen.split(' ').slice(0, 4).join(' '); }
  function hash(s) {
    let a = 0x811c9dc5, b = 5381;
    for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); a ^= c; a = Math.imul(a, 16777619) >>> 0; b = ((b << 5) + b + c) >>> 0; }
    return a.toString(36) + '.' + b.toString(36);
  }
  const posHash = (fen) => hash(hkey(fen));
  const BOOKIDX = new Map();
  (function buildBook() {
    const fenOf = { '': START };
    const g = new Chess();
    const getFen = (path) => {
      if (fenOf[path] !== undefined) return fenOf[path];
      const parts = path.split(' ');
      const parent = parts.slice(0, -1).join(' ');
      const pf = getFen(parent);
      if (!pf) return (fenOf[path] = null);
      g.load(pf);
      const mv = g.move(parts[parts.length - 1]);
      return (fenOf[path] = mv ? g.fen() : null);
    };
    for (const path in BOOK) {
      const f = getFen(path);
      if (f) BOOKIDX.set(posHash(f), BOOK[path]);
    }
  })();
  const bookAt = (fen) => BOOKIDX.get(posHash(fen)) || null;
  const ecoAt = (fen) => { const e = ECO_POS[posHash(fen)]; return e || null; };
  const ecoName = (idx) => ECO_LIST[idx];

  function courseForName(name) {
    if (!name) return null;
    let best = null, bl = 0;
    for (const c of COURSES) for (const m of c.match) {
      if (name.startsWith(m) && m.length > bl) { best = c; bl = m.length; }
    }
    return best;
  }
  const courseById = (id) => COURSES.find((c) => c.id === id);
  function playLine(sans, from = START) {
    const g = new Chess(from);
    const fens = [g.fen()], moves = [];
    for (const s of sans) {
      const m = g.move(s);
      if (!m) break;
      moves.push(m); fens.push(g.fen());
    }
    return { g, fens, moves };
  }
  const splitMoves = (s) => (s ? s.trim().split(/\s+/) : []);
  function movesText(sans, startPly = 0) {
    let out = '';
    sans.forEach((s, i) => {
      const ply = startPly + i;
      if (ply % 2 === 0) out += (ply / 2 + 1) + '. ';
      else if (i === 0) out += Math.floor(ply / 2) + 1 + '... ';
      out += s + ' ';
    });
    return out.trim();
  }
  function kingSq(g) {
    if (!g.in_check()) return null;
    const t = g.turn();
    const b = g.board();
    for (let r = 0; r < 8; r++) for (let f = 0; f < 8; f++) {
      const p = b[r][f];
      if (p && p.type === 'k' && p.color === t) return 'abcdefgh'[f] + (8 - r);
    }
    return null;
  }

  /* ======================= UI QOBIG'I ======================= */
  function toast(msg, ms = 2400) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    $('#toast').appendChild(t);
    setTimeout(() => { t.style.transition = 'opacity .3s'; t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, ms);
  }
  const NAV = [
    { id: 'home', label: 'Bosh sahifa', icon: 'home' },
    { id: 'library', label: 'Darslar', icon: 'book' },
    { id: 'explore', label: 'Kashfiyot', icon: 'compass' },
    { id: 'practice', label: 'Mashq', icon: 'target' },
    { id: 'puzzles', label: 'Masalalar', icon: 'puzzle' },
    { id: 'sandbox', label: 'Erkin doska', icon: 'grid' },
    { id: 'guide', label: "Qo'llanma", icon: 'guide' }
  ];
  const TABS = ['home', 'library', 'explore', 'puzzles'];
  function buildNav() {
    $('#nav-items').innerHTML = NAV.map((n) => `<button class="nav-btn" data-nav="${n.id}">${icon(n.icon)}<span>${n.label}</span></button>`).join('');
    $('#tabbar').innerHTML = NAV.filter((n) => TABS.includes(n.id)).map((n) => `<button data-nav="${n.id}">${icon(n.icon)}${n.label}</button>`).join('') + `<button id="tab-more">${icon('menu')}Ko'proq</button>`;
    $('#btn-settings').innerHTML = icon('gear') + '<span>Sozlamalar</span>';
    $$('[data-nav]').forEach((b) => b.addEventListener('click', () => go(b.dataset.nav)));
    $('#btn-settings').onclick = openSettings;
    $('#tab-more').onclick = openMore;
  }
  function openMore() {
    const mr = $('#modal-root');
    const items = NAV.filter((n) => !TABS.includes(n.id)).map((n) => [n.id, n.label, n.icon]).concat([['settings', 'Sozlamalar', 'gear']]);
    mr.innerHTML = `<div class="sheet-bg" id="sh-bg"><div class="sheet">${items.map(([id, l, ic]) => `<button class="sheet-item" data-go="${id}">${icon(ic)}<span>${l}</span>${icon('next')}</button>`).join('')}</div></div>`;
    $('#sh-bg').onclick = (e) => { if (e.target.id === 'sh-bg') mr.innerHTML = ''; };
    $$('.sheet-item', mr).forEach((b) => (b.onclick = () => { mr.innerHTML = ''; if (b.dataset.go === 'settings') openSettings(); else go(b.dataset.go); }));
  }

  /* ======================= DOSKA ======================= */
  let board = null;
  let mode = 'explore';
  const ctrl = { canMove: () => false, onMove: () => false, game: null };
  function initBoard() {
    board = new Board($('#board'), {
      canMove: (sq) => ctrl.canMove(sq),
      dests: (sq) => ctrl.game ? ctrl.game.moves({ square: sq, verbose: true }).map((m) => m.to) : [],
      showDests: () => S.dots,
      onMove: (from, to, promo) => ctrl.onMove(from, to, promo)
    });
    board.root.classList.toggle('no-coords', !S.coords);
  }
  function canMoveGame(g, sq, side) {
    const p = g.get(sq);
    return !!p && p.color === g.turn() && (!side || side === g.turn());
  }

  /* ======================= ROUTER ======================= */
  function go(route) { if (location.hash !== '#' + route) location.hash = route; else handleRoute(); }
  function handleRoute() {
    const h = decodeURIComponent(location.hash.slice(1)) || 'home';
    const [view, arg] = h.split('/');
    $$('[data-nav]').forEach((b) => b.classList.toggle('active', b.dataset.nav === view || (view === 'course' && b.dataset.nav === 'library')));
    $$('.view').forEach((v) => v.classList.remove('active'));
    if (view !== 'home') stopHero();
    if (view !== 'course') lsStopAuto();
    if (view === 'home') { $('#view-home').classList.add('active'); renderHome(); }
    else if (view === 'library') { $('#view-library').classList.add('active'); renderLibrary(); }
    else if (view === 'course') { $('#view-lesson').classList.add('active'); enterLesson(arg); }
    else if (view === 'guide') { $('#view-guide').classList.add('active'); renderGuide(arg); }
    else {
      $('#view-play').classList.add('active');
      if (view === 'practice') enterPractice();
      else if (view === 'puzzles') enterPuzzles(arg);
      else if (view === 'sandbox') enterSandbox();
      else enterExplore();
    }
    const v = $('.view.active'); if (v && view !== 'course') v.scrollTop = 0;
  }

  /* =====================================================================
     KASHFIYOT
     ===================================================================== */
  const EX = { sans: [], fens: [START], moves: [], cursor: 0, orient: 'w' };
  const liveCache = new Map();
  let liveSeq = 0;

  function exLoad(sans, cursor, orient) {
    const r = playLine(sans);
    EX.sans = r.moves.map((m) => m.san);
    EX.moves = r.moves; EX.fens = r.fens;
    EX.cursor = cursor == null ? EX.sans.length : Math.min(cursor, EX.sans.length);
    if (orient) EX.orient = orient;
  }
  function exGame() { return new Chess(EX.fens[EX.cursor]); }

  function enterExplore() {
    mode = 'explore';
    board.setOrientation(EX.orient);
    ctrl.canMove = (sq) => canMoveGame(ctrl.game, sq);
    ctrl.onMove = exOnMove;
    renderControls([
      ['first', 'Boshi', () => exGo(0)], ['prev', 'Orqaga', () => exGo(EX.cursor - 1)],
      ['next', 'Oldinga', () => exGo(EX.cursor + 1)], ['last', 'Oxiri', () => exGo(EX.sans.length)],
      ['flip', 'Aylantirish', () => { board.flip(); EX.orient = board.orient; exRenderArrows(); }],
      ['reset', 'Yangi', () => { exLoad([], 0); exRefresh(true); }],
      ['copy', 'PGN', exCopy]
    ]);
    exRefresh(false);
  }
  function exOnMove(from, to, promo) {
    const g = exGame();
    const mv = g.move({ from, to, promotion: promo || 'q' });
    if (!mv) return false;
    const next = EX.sans[EX.cursor];
    if (next === mv.san) { EX.cursor++; }
    else {
      EX.sans = EX.sans.slice(0, EX.cursor).concat(mv.san);
      EX.moves = EX.moves.slice(0, EX.cursor).concat(mv);
      EX.fens = EX.fens.slice(0, EX.cursor + 1).concat(g.fen());
      EX.cursor++;
    }
    moveSound(mv, g);
    exRefresh(true);
    return true;
  }
  function exGo(i) {
    i = Math.max(0, Math.min(EX.sans.length, i));
    if (i === EX.cursor) return;
    const fwd = i === EX.cursor + 1;
    EX.cursor = i;
    if (fwd) { const g = exGame(); moveSound(EX.moves[i - 1], g); }
    exRefresh(true);
  }
  function exPlaySan(san) {
    const g = exGame();
    const mv = g.move(san);
    if (!mv) return;
    exOnMove(mv.from, mv.to, mv.promotion);
  }
  function exCopy() {
    const pgn = movesText(EX.sans.slice(0, EX.cursor));
    const fen = EX.fens[EX.cursor];
    const txt = (pgn ? pgn + '\n' : '') + fen;
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('PGN va FEN nusxalandi'), () => toast(fen, 5000));
  }
  function currentOpening() {
    for (let i = EX.cursor; i >= 1; i--) {
      const e = ecoAt(EX.fens[i]);
      if (e && e[0] >= 0) return { idx: e[0], ply: i, exact: i === EX.cursor };
    }
    return null;
  }
  function exRefresh(animate) {
    const g = exGame();
    ctrl.game = g;
    const lm = EX.cursor > 0 ? EX.moves[EX.cursor - 1] : null;
    board.setPosition(EX.fens[EX.cursor], { animate, lastMove: lm ? [lm.from, lm.to] : null, check: kingSq(g) });
    showEnd(board, g, animate);
    const op = currentOpening();
    setBoardTitle(op ? ECO_LIST[op.idx][0] : '', op ? ECO_LIST[op.idx][1] : (EX.cursor === 0 ? "Boshlang'ich pozitsiya" : 'Nomlanmagan pozitsiya'));
    renderExplorePanel(g, op);
    updateCtrlState();
  }
  function setBoardTitle(eco, name) {
    $('#board-title').innerHTML = (eco ? `<span class="eco-badge">${esc(eco)}</span>` : '') + `<span class="op-name" title="${esc(name)}">${esc(name)}</span>`;
  }
  function updateCtrlState() {
    if (mode !== 'explore') return;
    const b = $$('#board-controls .icon-btn');
    if (!b.length) return;
    b[0].disabled = b[1].disabled = EX.cursor === 0;
    b[2].disabled = b[3].disabled = EX.cursor >= EX.sans.length;
  }
  function renderControls(list) {
    $('#board-controls').innerHTML = list.map(([ic, lbl], i) => `<button class="icon-btn" data-i="${i}" title="${lbl}">${icon(ic)}${['flip', 'reset', 'copy', 'bulb', 'eye', 'shuffle', 'gear'].includes(ic) ? `<span class="lbl-txt">${lbl}</span>` : ''}</button>`).join('');
    $$('#board-controls .icon-btn').forEach((b) => (b.onclick = () => list[+b.dataset.i][2]()));
  }

  function wdlBar(w, d, b, labels = true) {
    const lab = (v) => (labels && v >= 12 ? Math.round(v) + '%' : '');
    return `<div class="wdl" title="Oq ${Math.round(w)}% · Durang ${Math.round(d)}% · Qora ${Math.round(b)}%"><i class="w" style="width:${w}%">${lab(w)}</i><i class="d" style="width:${d}%">${lab(d)}</i><i class="b" style="width:${b}%">${lab(b)}</i></div>`;
  }
  function tagFor(note, w, d, b, turn) {
    const n = (note || '').toUpperCase();
    if (n.startsWith("QO'POL XATO") || n.startsWith('XATO') || n.startsWith('HALOKAT')) return '<span class="chip bad">Xato</span>';
    if (n.startsWith('TUZOQ')) return '<span class="chip warn">Tuzoq</span>';
    if (n.startsWith("TO'G'RI") || n.startsWith('ENG YAXSHI')) return '<span class="chip good">Eng yaxshi</span>';
    const score = turn === 'w' ? w + d / 2 : b + d / 2;
    if (score >= 58) return '<span class="chip good">Yaxshi natija</span>';
    return '';
  }

  function renderExplorePanel(g, op) {
    const fen = EX.fens[EX.cursor];
    const turn = g.turn();
    const book = bookAt(fen);
    const eco = ecoAt(fen);
    let html = '';

    // Oxirgi yurish izohi
    if (EX.cursor > 0) {
      const pb = bookAt(EX.fens[EX.cursor - 1]);
      const san = EX.sans[EX.cursor - 1];
      const ent = pb && pb.find((m) => m[0] === san);
      const mvColor = EX.cursor % 2 === 1 ? 'w' : 'b';
      if (ent && ent[4]) {
        const up = ent[4].toUpperCase();
        const cls = /^(QO'POL XATO|XATO|HALOKAT)/.test(up) ? 'bad' : /^TUZOQ/.test(up) ? 'warn' : /^(TO'G'RI|ENG YAXSHI)/.test(up) ? 'good' : '';
        html += `<div class="comment-box ${cls}">${icon(cls === 'bad' ? 'x' : cls === 'good' ? 'check' : 'chat', 'cm-ico')}<div><span class="cm-move">${Math.ceil(EX.cursor / 2)}${mvColor === 'w' ? '.' : '...'} ${sanHtml(san, mvColor)}</span> — ${esc(ent[4])}<div class="sub" style="margin-top:4px">Bu yurishni o'yinchilarning ${pctFmt(ent[1])}i tanlaydi.</div></div></div>`;
      } else if (ent) {
        html += `<div class="comment-box">${icon('chart', 'cm-ico')}<div><span class="cm-move">${sanHtml(san, mvColor)}</span> — o'yinchilarning ${pctFmt(ent[1])}i shu yurishni tanlaydi.</div></div>`;
      } else if (pb) {
        html += `<div class="comment-box warn">${icon('info', 'cm-ico')}<div><span class="cm-move">${sanHtml(san, mvColor)}</span> — kitobdan tashqari (kamdan-kam o'ynaladi). Debyut tamoyillarini tekshiring: markaz, rivojlanish, qirol xavfsizligi.</div></div>`;
      }
    }

    // Nomzod yurishlar
    const liveOn = S.live;
    html += `<div class="card" id="cands-card"><div class="card-h"><div class="card-t">${icon('chart')}Ko'pchilik bu yerda nima o'ynaydi</div>
      <span class="toggle-live ${liveOn ? 'on' : ''}" id="live-toggle" title="Lichess jonli statistikasi"><span class="dot"></span>${liveOn ? 'Jonli' : 'Taxminiy'}</span></div>
      <div class="sub" style="margin:-6px 0 10px"><span class="turn-ind"><span class="disc ${turn}"></span>${turn === 'w' ? 'Oq' : 'Qora'} yuradi</span></div>
      <div id="cands-body">${liveOn ? '<div class="empty-state">Yuklanmoqda…</div>' : candsHtml(book, eco, g)}</div></div>`;

    // Kurs kartasi
    const course = op ? courseForName(ECO_LIST[op.idx][1]) : null;
    if (course) {
      html += `<div class="card"><div class="course-mini" data-course="${course.id}">${miniBoard(playLine(splitMoves(course.moves)).g.fen(), course.side, 84)}
        <div style="min-width:0"><div class="sub">Qo'llanma · ${esc(course.eco)}</div><div class="cm-name">${esc(course.name)}</div><p>${esc(course.summary)}</p></div></div>
        <div class="btn-row" style="margin-top:12px"><button class="btn sm" data-course="${course.id}">${icon('book')}Qo'llanmani ochish</button><button class="btn sm" data-practice="${course.id}">${icon('target')}Mashq qilish</button></div></div>`;
    }

    // Notatsiya
    html += `<div class="card"><div class="card-h"><div class="card-t">${icon('list')}Yurishlar</div><span class="sub"><span class="kbd">←</span> <span class="kbd">→</span> bilan</span></div><div class="notation" id="notation">${notationHtml()}</div></div>`;
    if (EX.cursor === 0) html += `<div class="card"><div class="card-t" style="margin-bottom:6px">${icon('info')}Qanday ishlatiladi</div><div class="sub" style="font-size:13px;line-height:1.6">Figuralarni <b>sudrab</b> yoki <b>bosib</b> yuring. Har bir pozitsiyada o'yinchilarning qancha foizi qaysi yurishni tanlashi, natijalar va izohlar ko'rsatiladi. Ro'yxatdagi yurishni bosing — u doskada o'ynaladi. O'ng tugma bilan strelka va belgilar chizing.</div></div>`;

    const panel = $('#panel');
    panel.innerHTML = html;
    const nt = $('#notation'), cur = $('#notation .m.cur');
    if (nt && cur) nt.scrollTop = Math.max(0, cur.offsetTop - nt.clientHeight / 2);
    bindExplorePanel(book, eco, g);
    if (liveOn) loadLive(fen, g);
  }

  function candsHtml(book, eco, g) {
    const turn = g.turn();
    if (book && book.length) {
      return `<div class="cands">${book.map((m, i) => {
        const [san, p, w, d, note] = m;
        const b = Math.max(0, 100 - w - d);
        return `<div class="cand ${i === 0 ? 'top' : ''}" data-san="${esc(san)}">
          <div class="mv">${sanHtml(san, turn)}</div>
          <div class="pct"><div class="pbar"><i style="width:${Math.min(100, p)}%"></i></div><span class="pnum">${pctFmt(p)}</span></div>
          ${wdlBar(w, d, b)}
          ${note || tagFor(note, w, d, b, turn) ? `<div class="note">${tagFor(note, w, d, b, turn)}<span>${esc(note || '')}</span></div>` : ''}
        </div>`;
      }).join('')}</div>`;
    }
    const nexts = eco && eco[1] ? eco[1].split(' ') : [];
    if (nexts.length) {
      const c = new Chess(g.fen());
      const rows = nexts.slice(0, 40).map((san) => {
        const mv = c.move(san);
        let nm = '';
        if (mv) { const e = ecoAt(c.fen()); if (e && e[0] >= 0) nm = ECO_LIST[e[0]][1]; c.undo(); }
        return `<div class="cont" data-san="${esc(san)}"><div class="mv">${sanHtml(san, turn)}</div><div class="nm">${esc(nm || 'Nazariy davom')}</div></div>`;
      }).join('');
      return `<div class="sub" style="margin-bottom:8px">Bu pozitsiya uchun statistika yo'q, lekin nomlangan debyutlar bazasida quyidagi davomlar bor:</div><div class="cont-list">${rows}</div>`;
    }
    return `<div class="empty-state">${icon('trophy')}<div><b>Debyut kitobi tugadi.</b></div><div>Endi o'rta o'yin rejalariga o'ting: figuralarni faollashtiring, zaif nuqtalarni toping, piyoda tuzilmasiga mos reja tuzing.</div><div style="margin-top:8px">Jonli statistikani yoqsangiz, Lichess bazasidan ko'proq ma'lumot olasiz.</div></div>`;
  }

  function bindExplorePanel(book, eco, g) {
    const panel = $('#panel');
    $$('.cand, .cont', panel).forEach((el) => {
      el.onclick = () => exPlaySan(el.dataset.san);
      el.onmouseenter = () => showHoverArrow(el.dataset.san, g);
      el.onmouseleave = () => exRenderArrows();
    });
    $$('#notation .m', panel).forEach((el) => (el.onclick = () => exGo(+el.dataset.ply)));
    $$('[data-course]', panel).forEach((el) => (el.onclick = (e) => { e.stopPropagation(); go('course/' + el.dataset.course); }));
    $$('[data-practice]', panel).forEach((el) => (el.onclick = () => startPracticeFor(el.dataset.practice)));
    const lt = $('#live-toggle');
    if (lt) lt.onclick = () => {
      if (!S.live && !S.token) {
        toast("Jonli statistika uchun Sozlamalarda Lichess tokenini kiriting", 3500);
        openSettings();
        return;
      }
      S.live = !S.live; saveSettings(); exRefresh(false);
    };
    exRenderArrows();
  }
  let curArrowData = [];
  function exRenderArrows(list) {
    if (list) curArrowData = list;
    else {
      const book = bookAt(EX.fens[EX.cursor]);
      curArrowData = book ? book.map((m) => ({ san: m[0], p: m[1] })) : [];
      if (S.live) { const L = liveCache.get(EX.fens[EX.cursor]); if (L) curArrowData = L.arr; }
    }
    if (!S.arrows || mode !== 'explore') { board.setAutoArrows([]); return; }
    const g = exGame();
    const top = curArrowData.slice(0, 4).filter((a) => a.p >= 4);
    const arr = [];
    top.forEach((a, i) => {
      const mv = g.move(a.san);
      if (!mv) return;
      g.undo();
      arr.push({ from: mv.from, to: mv.to, color: i === 0 ? 'rgba(124,140,255,.9)' : 'rgba(124,140,255,.75)', op: Math.max(0.35, Math.min(0.9, a.p / 60 + 0.3)), w: 0.08 + Math.min(0.14, a.p / 400) });
    });
    board.setAutoArrows(arr);
  }
  function showHoverArrow(san, g) {
    const c = new Chess(g.fen());
    const mv = c.move(san);
    if (!mv) return;
    board.setAutoArrows([{ from: mv.from, to: mv.to, color: 'rgba(255,170,0,.9)', w: 0.18 }]);
  }
  function notationHtml() {
    if (!EX.sans.length) return '<span class="empty">Hali yurish yo\'q — doskada birinchi yurishni qiling.</span>';
    let h = '';
    EX.sans.forEach((s, i) => {
      if (i % 2 === 0) h += `<span class="num">${i / 2 + 1}.</span>`;
      h += `<span class="m ${i + 1 === EX.cursor ? 'cur' : ''}" data-ply="${i + 1}">${sanHtml(s, i % 2 ? 'b' : 'w')}</span>`;
    });
    return h;
  }

  async function loadLive(fen, g) {
    const seq = ++liveSeq;
    const body = () => $('#cands-body');
    const render = (data) => {
      if (seq !== liveSeq || mode !== 'explore' || EX.fens[EX.cursor] !== fen || !body()) return;
      const tot = data.white + data.draws + data.black;
      if (!tot) { body().innerHTML = '<div class="sub" style="margin-bottom:8px">Lichess bazasida bu pozitsiya topilmadi.</div>' + candsHtml(bookAt(fen), ecoAt(fen), g); return; }
      const turn = g.turn();
      const rows = data.moves.slice(0, 12).map((m, i) => {
        const t = m.white + m.draws + m.black;
        const p = (t / tot) * 100;
        const w = (m.white / t) * 100, d = (m.draws / t) * 100, b = (m.black / t) * 100;
        const bk = bookAt(fen);
        const ent = bk && bk.find((x) => x[0] === m.san);
        return `<div class="cand ${i === 0 ? 'top' : ''}" data-san="${esc(m.san)}"><div class="mv">${sanHtml(m.san, turn)}</div>
          <div class="pct"><div class="pbar"><i style="width:${p}%"></i></div><span class="pnum">${pctFmt(p)}</span></div>${wdlBar(w, d, b)}
          <div class="note"><span class="sub">${fmtN(t)} o'yin${m.averageRating ? ' · o\'rtacha ' + m.averageRating : ''}</span>${ent && ent[4] ? '<span>— ' + esc(ent[4]) + '</span>' : ''}</div></div>`;
      }).join('');
      body().innerHTML = `<div class="totals"><span>${fmtN(tot)} o'yin</span>${wdlBar(data.white / tot * 100, data.draws / tot * 100, data.black / tot * 100)}</div><div class="cands">${rows}</div>`;
      $$('#cands-body .cand').forEach((el) => {
        el.onclick = () => exPlaySan(el.dataset.san);
        el.onmouseenter = () => showHoverArrow(el.dataset.san, g);
        el.onmouseleave = () => exRenderArrows();
      });
      exRenderArrows();
    };
    const cached = liveCache.get(fen);
    if (cached) return render(cached.data);
    try {
      const base = S.liveDb === 'masters' ? 'https://explorer.lichess.ovh/masters?' : 'https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz,rapid,classical&ratings=1600,1800,2000,2200,2500&';
      const res = await fetch(base + 'moves=12&topGames=0&recentGames=0&fen=' + encodeURIComponent(fen), { headers: S.token ? { Authorization: 'Bearer ' + S.token } : {} });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      const tot = data.white + data.draws + data.black || 1;
      liveCache.set(fen, { data, arr: data.moves.map((m) => ({ san: m.san, p: ((m.white + m.draws + m.black) / tot) * 100 })) });
      render(data);
    } catch (e) {
      if (seq !== liveSeq || !body()) return;
      body().innerHTML = `<div class="comment-box warn" style="margin-bottom:10px">${icon('info', 'cm-ico')}<div>Lichess'ga ulanib bo'lmadi (${esc(e.message || 'tarmoq')}). Token to'g'riligini tekshiring. Taxminiy statistika ko'rsatilmoqda.</div></div>` + candsHtml(bookAt(fen), ecoAt(fen), g);
      $$('#cands-body .cand, #cands-body .cont').forEach((el) => {
        el.onclick = () => exPlaySan(el.dataset.san);
        el.onmouseenter = () => showHoverArrow(el.dataset.san, g);
        el.onmouseleave = () => exRenderArrows();
      });
    }
  }

  /* =====================================================================
     MINI DOSKA
     ===================================================================== */
  /* Kichik doskalar canvas'ga bir marta chiziladi — yuzlab SVG o'rniga bitta rasm (skroll silliq bo'ladi) */
  function miniBoard(fen, orient = 'w', size = 120) {
    return `<canvas class="mini" width="1" height="1" data-fen="${esc(fen)}" data-o="${orient}" data-s="${size}" style="width:${size}px"></canvas>`;
  }
  const miniSprites = {};
  function spritesFor(set) {
    if (miniSprites[set]) return miniSprites[set];
    const urls = pieceUrls(set), RES = 120;
    const sp = { ready: false, bmp: {}, wait: [] };
    miniSprites[set] = sp;
    const keys = Object.keys(urls);
    let left = keys.length;
    keys.forEach((k) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        try {
          const c = document.createElement('canvas');
          c.width = c.height = RES;
          c.getContext('2d').drawImage(img, 0, 0, RES, RES);
          sp.bmp[k] = c;
        } catch (e) { }
        if (--left === 0) { sp.ready = true; sp.wait.splice(0).forEach((f) => f()); }
      };
      img.src = urls[k];
    });
    return sp;
  }
  function drawMini(cv) {
    const sp = spritesFor(S.pieces);
    if (!sp.ready) { sp.wait.push(() => drawMini(cv)); return; }
    const t = BOARD_THEMES[S.board];
    const want = S.board + '|' + S.pieces;
    if (cv.dataset.done === want) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const size = Math.max(8, Math.round(Math.min(+cv.dataset.s || 120, 400) * dpr / 8) * 8);
    cv.width = cv.height = size;
    const ctx = cv.getContext('2d');
    const q = size / 8;
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
      ctx.fillStyle = (r + c) % 2 === 0 ? t.light : t.dark;
      ctx.fillRect(c * q, r * q, q, q);
    }
    const pos = parseFen(cv.dataset.fen);
    const o = cv.dataset.o;
    ctx.imageSmoothingQuality = 'high';
    for (const sq in pos) {
      const f = sq.charCodeAt(0) - 97, rk = +sq[1] - 1;
      const c = o === 'w' ? f : 7 - f, row = o === 'w' ? 7 - rk : rk;
      const bmp = sp.bmp[pos[sq]];
      if (bmp) ctx.drawImage(bmp, c * q, row * q, q, q);
    }
    cv.dataset.done = want;
  }
  function paintMinis(force) {
    $$('canvas.mini').forEach((cv) => { if (force) delete cv.dataset.done; drawMini(cv); });
  }
  let miniRaf = 0;
  new MutationObserver(() => {
    if (miniRaf) return;
    miniRaf = requestAnimationFrame(() => { miniRaf = 0; paintMinis(false); });
  }).observe(document.body, { childList: true, subtree: true });


  /* =====================================================================
     KUTUBXONA
     ===================================================================== */
  const LIB = { filter: 'all', q: '', tab: 'courses', ecoQ: '', ecoLetter: '', ecoShown: 80 };
  function renderLibrary(courseId) {
    const root = $('#view-library');
    if (courseId) { renderCourse(root, courseById(courseId)); root.scrollTop = 0; return; }
    root.innerHTML = `<div class="page">
      <div class="page-h"><div><h1>Darslar</h1><p>Har bir debyut — doskada yurishma-yurish tushuntiriladigan interaktiv dars. Tugatilgan: <b>${PROG.lessons.size}/${COURSES.length}</b></p></div></div>
      <div class="tabs"><button data-tab="courses" class="${LIB.tab === 'courses' ? 'on' : ''}">Interaktiv darslar <span class="chip">${COURSES.length}</span></button><button data-tab="eco" class="${LIB.tab === 'eco' ? 'on' : ''}">Barcha debyutlar <span class="chip">${ECO_LIST.length}</span></button></div>
      <div id="lib-body"></div></div>`;
    $$('.tabs button', root).forEach((b) => (b.onclick = () => { LIB.tab = b.dataset.tab; renderLibrary(); }));
    if (LIB.tab === 'courses') renderCourseGrid(); else renderEcoList();
  }
  function renderCourseGrid() {
    const body = $('#lib-body');
    body.innerHTML = `<div class="toolbar">
      <div class="search">${icon('search')}<input type="search" id="lib-q" placeholder="Qidirish: Sitsiliya, London, e4 c5…" value="${esc(LIB.q)}"></div>
      <div class="seg" style="width:auto">${[['all', 'Hammasi'], ['w', 'Oq uchun'], ['b', 'Qora uchun']].map(([k, l]) => `<button data-f="${k}" class="${LIB.filter === k ? 'on' : ''}" style="padding:0 14px">${l}</button>`).join('')}</div>
    </div><div id="cg"></div>`;
    const draw = () => {
      const q = LIB.q.trim().toLowerCase();
      const list = COURSES.filter((c) => (LIB.filter === 'all' || c.side === LIB.filter) &&
        (!q || (c.name + ' ' + c.en + ' ' + c.moves + ' ' + c.eco).toLowerCase().includes(q)));
      let h = '';
      for (const gr of COURSE_GROUPS) {
        const items = list.filter((c) => c.group === gr.id);
        if (!items.length) continue;
        h += `<div class="group-h">${esc(gr.name)}</div><div class="cgrid">${items.map(courseCard).join('')}</div>`;
      }
      $('#cg').innerHTML = h || '<div class="empty-state">Hech narsa topilmadi.</div>';
      $$('#cg .ccard').forEach((el) => (el.onclick = () => go('course/' + el.dataset.id)));
    };
    $('#lib-q').oninput = (e) => { LIB.q = e.target.value; draw(); };
    $$('[data-f]', body).forEach((b) => (b.onclick = () => { LIB.filter = b.dataset.f; $$('[data-f]', body).forEach((x) => x.classList.toggle('on', x === b)); draw(); }));
    draw();
  }
  function courseCard(c) {
    const sans = splitMoves(c.moves);
    const fen = playLine(sans).g.fen();
    return `<div class="ccard" data-id="${c.id}"><div class="thumb">${miniBoard(fen, c.side, 92)}<div style="min-width:0;display:flex;flex-direction:column;gap:6px">
      <span class="chip ${c.side === 'w' ? '' : 'accent'}" style="align-self:flex-start">${c.side === 'w' ? '♔ Oq uchun' : '♚ Qora uchun'}</span>
      <span class="chip" style="align-self:flex-start">${esc(c.eco)}</span>
      ${PROG.lessons.has(c.id) ? '<span class="chip good" style="align-self:flex-start">✓ O\'tilgan</span>' : ''}
      <span class="lvl" title="Murakkablik">${[1, 2, 3].map((i) => `<i class="${i <= c.level ? 'on' : ''}"></i>`).join('')}<span class="sub" style="margin-left:4px">${['', "Boshlang'ich", "O'rta", 'Murakkab'][c.level]}</span></span>
      </div></div><div class="body"><h3>${esc(c.name)}</h3><div class="en">${esc(c.en)}</div><div class="mvs">${esc(movesText(sans))}</div><div class="cta-line">${icon('play')}${PROG.lessons.has(c.id) ? 'Takrorlash' : 'Darsni boshlash'}</div></div></div>`;
  }
  function renderCourse(root, c) {
    if (!c) { root.innerHTML = '<div class="page"><div class="empty-state">Topilmadi</div></div>'; return; }
    const sans = splitMoves(c.moves);
    const fen = playLine(sans).g.fen();
    const book = bookAt(fen);
    root.innerHTML = `<div class="page">
      <button class="back" id="back-lib">${icon('back')}Kutubxona</button>
      <div class="detail">
        <div class="side">
          <div class="card" style="padding:12px">${miniBoard(fen, c.side, 316).replace('width:316px', 'width:100%;height:auto')}</div>
          <button class="btn primary block" id="c-explore">${icon('compass')}Kashfiyotda ochish</button>
          <button class="btn block" id="c-practice">${icon('target')}Mashq qilish</button>
          ${book ? `<div class="card"><div class="card-t" style="margin-bottom:8px">${icon('chart')}Bu pozitsiyada keyin</div>${book.slice(0, 4).map((m) => `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px"><b>${sanHtml(m[0], playLine(sans).g.turn())}</b><span class="sub">${pctFmt(m[1])}</span></div>`).join('')}</div>` : ''}
        </div>
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"><span class="chip ${c.side === 'w' ? '' : 'accent'}">${c.side === 'w' ? '♔ Oq uchun' : '♚ Qora uchun'}</span><span class="chip">${esc(c.eco)}</span><span class="chip">${['', "Boshlang'ich", "O'rta", 'Murakkab'][c.level]}</span></div>
          <h1>${esc(c.name)}</h1><div class="sub" style="font-size:14px">${esc(c.en)} · <span style="font-family:ui-monospace,monospace">${esc(movesText(sans))}</span></div>
          <p class="lead">${esc(c.summary)}</p>
          <div class="cols2" style="margin-top:22px">
            <div class="card"><div class="card-t" style="margin-bottom:12px">${figForce('w', 'K')} Oq uchun g'oyalar</div><ul class="ideas w">${c.white.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
            <div class="card"><div class="card-t" style="margin-bottom:12px">${figForce('b', 'K')} Qora uchun g'oyalar</div><ul class="ideas b">${c.black.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
          </div>
          <div class="card" style="margin-top:16px"><div class="card-t" style="margin-bottom:12px;color:var(--bad)">${icon('x')}Tipik xatolar va tuzoqlar</div><ul class="ideas x">${c.mistakes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
          <div class="card" style="margin-top:16px"><div class="card-t" style="margin-bottom:14px">${icon('list')}Asosiy variantlar</div>
            ${c.lines.map((l, i) => `<div class="line-item"><div class="li-main"><div class="li-name">${esc(l.name)}</div><div class="li-moves">${esc(movesText(splitMoves(l.moves)))}</div><div class="li-note">${esc(l.note)}</div></div>
            <div class="btn-row" style="flex-direction:column"><button class="btn sm" data-line="${i}">${icon('eye')}Ko'rish</button><button class="btn sm" data-pline="${i}">${icon('target')}Mashq</button></div></div>`).join('')}
          </div>
        </div>
      </div></div>`;
    $('#back-lib').onclick = () => go('library');
    $('#c-explore').onclick = () => { exLoad(sans, null, c.side); go('explore'); };
    $('#c-practice').onclick = () => startPracticeFor(c.id);
    $$('[data-line]', root).forEach((b) => (b.onclick = () => { exLoad(splitMoves(c.lines[+b.dataset.line].moves), sans.length, c.side); go('explore'); }));
    $$('[data-pline]', root).forEach((b) => (b.onclick = () => startPracticeFor(c.id, +b.dataset.pline)));
  }
  function renderEcoList() {
    const body = $('#lib-body');
    body.innerHTML = `<div class="toolbar">
      <div class="search">${icon('search')}<input type="search" id="eco-q" placeholder="Nom, ECO kod yoki yurishlar (masalan: Najdorf, B90, e4 c5)" value="${esc(LIB.ecoQ)}"></div>
      <div class="pz-tabs">${['', 'A', 'B', 'C', 'D', 'E'].map((l) => `<span class="chip btn ${LIB.ecoLetter === l ? 'on' : ''}" data-l="${l}">${l || 'Hammasi'}</span>`).join('')}</div>
    </div><div class="sub" id="eco-count" style="margin-bottom:10px"></div><div class="eco-list" id="eco-list"></div><div class="more-wrap" id="eco-more"></div>`;
    const ECO_DESC = { A: 'Qanot debyutlari', B: 'Yarim ochiq (1.e4, e5 dan boshqa)', C: '1.e4 e5 va Fransuz', D: 'Yopiq o\'yinlar (1.d4 d5)', E: 'Hind himoyalari' };
    const draw = (reset) => {
      if (reset) LIB.ecoShown = 80;
      const q = LIB.ecoQ.trim().toLowerCase();
      const list = [];
      for (let i = 0; i < ECO_LIST.length; i++) {
        const e = ECO_LIST[i];
        if (LIB.ecoLetter && e[0][0] !== LIB.ecoLetter) continue;
        if (q && !(e[1].toLowerCase().includes(q) || e[0].toLowerCase() === q || e[2].toLowerCase().startsWith(q) || e[0].toLowerCase().startsWith(q))) continue;
        list.push(i);
      }
      $('#eco-count').textContent = `${list.length} ta debyut topildi` + (LIB.ecoLetter ? ` · ${LIB.ecoLetter}: ${ECO_DESC[LIB.ecoLetter]}` : '');
      $('#eco-list').innerHTML = list.slice(0, LIB.ecoShown).map((i) => {
        const [eco, name, mv] = ECO_LIST[i];
        const [fam, ...rest] = name.split(': ');
        return `<div class="eco-row" data-i="${i}"><span class="eco-badge" style="justify-self:start">${eco}</span><div class="nm">${esc(fam)}${rest.length ? `<small>: ${esc(rest.join(': '))}</small>` : ''}</div><div class="mv">${esc(movesText(mv.split(' ')))}</div></div>`;
      }).join('') || '<div class="empty-state">Hech narsa topilmadi.</div>';
      $('#eco-more').innerHTML = list.length > LIB.ecoShown ? `<button class="btn">Yana ko'rsatish (${list.length - LIB.ecoShown})</button>` : '';
      const mb = $('#eco-more button');
      if (mb) mb.onclick = () => { LIB.ecoShown += 120; draw(); };
      $$('#eco-list .eco-row').forEach((r) => (r.onclick = () => {
        const sans = ECO_LIST[+r.dataset.i][2].split(' ');
        exLoad(sans, null, 'w'); go('explore');
      }));
    };
    let t;
    $('#eco-q').oninput = (e) => { LIB.ecoQ = e.target.value; clearTimeout(t); t = setTimeout(() => draw(true), 120); };
    $$('[data-l]', body).forEach((c) => (c.onclick = () => { LIB.ecoLetter = c.dataset.l; $$('[data-l]', body).forEach((x) => x.classList.toggle('on', x === c)); draw(true); }));
    draw();
  }

  /* =====================================================================
     MASHQ
     ===================================================================== */
  const PR = {
    phase: 'setup', courseId: store.get('pr_course', 'italian'), color: null, kind: 'stats', lineIdx: 0,
    g: null, fens: [], moves: [], prefix: [], line: null, ok: 0, bad: 0, streak: 0, best: store.get('pr_best', 0), msg: null, busy: false, hintArrow: null
  };
  function startPracticeFor(id, lineIdx) {
    PR.courseId = id;
    const c = courseById(id);
    PR.color = c ? c.side : 'w';
    PR.kind = lineIdx != null ? 'line' : 'stats';
    PR.lineIdx = lineIdx || 0;
    store.set('pr_course', id);
    PR.phase = 'run';
    prStart();
    go('practice');
  }
  function enterPractice() {
    mode = 'practice';
    board.setAutoArrows([]);
    ctrl.onMove = prOnMove;
    ctrl.canMove = (sq) => PR.phase === 'run' && !PR.busy && !PR.done && PR.g && PR.g.turn() === PR.color && canMoveGame(PR.g, sq);
    if (PR.phase === 'setup' || !PR.g) { PR.phase = 'setup'; prSetupView(); }
    else { prRenderBoard(false); prPanel(); }
  }
  function prCourse() { return PR.courseId === 'free' ? null : courseById(PR.courseId); }
  function prSetupView() {
    ctrl.game = null;
    const c = prCourse();
    if (PR.color == null) PR.color = c ? c.side : 'w';
    const fen = c ? playLine(splitMoves(c.moves)).g.fen() : START;
    board.setOrientation(PR.color);
    board.setPosition(fen, { animate: true });
    setBoardTitle(c ? c.eco : '', c ? c.name : 'Erkin mashq');
    renderControls([['flip', 'Aylantirish', () => board.flip()]]);
    const opts = COURSE_GROUPS.map((gr) => `<optgroup label="${esc(gr.name)}">${COURSES.filter((x) => x.group === gr.id).map((x) => `<option value="${x.id}" ${x.id === PR.courseId ? 'selected' : ''}>${esc(x.name)} (${x.side === 'w' ? 'oq' : 'qora'})</option>`).join('')}</optgroup>`).join('');
    $('#panel').innerHTML = `<div class="card">
      <div class="card-t" style="font-size:17px;margin-bottom:4px">${icon('target')}Debyut mashqi</div>
      <div class="sub" style="margin-bottom:16px">Kompyuter raqib haqiqiy statistikaga ko'ra yuradi — siz to'g'ri nazariy javobni topasiz.</div>
      <div class="field"><label>Debyut</label><select id="pr-course"><option value="free" ${PR.courseId === 'free' ? 'selected' : ''}>Erkin — butun debyut kitobi</option>${opts}</select></div>
      <div class="field"><label>Siz o'ynaysiz</label><div class="seg" id="pr-color"><button data-c="w" class="${PR.color === 'w' ? 'on' : ''}">${figForce('w', 'K')}Oq</button><button data-c="b" class="${PR.color === 'b' ? 'on' : ''}">${figForce('b', 'K')}Qora</button></div></div>
      <div class="field"><label>Rejim</label><div class="seg" id="pr-kind"><button data-k="stats" class="${PR.kind === 'stats' ? 'on' : ''}">${icon('shuffle')}Statistika</button><button data-k="line" class="${PR.kind === 'line' ? 'on' : ''}" ${c ? '' : 'disabled style="opacity:.4"'}>${icon('list')}Asosiy liniya</button></div>
        <div class="sub" id="pr-kind-d">${PR.kind === 'stats' ? "Raqib har safar turli (mashhur) yurishlarni tanlaydi — har xil variantlarni o'rganasiz." : "Tanlangan variantni yurishma-yurish yodlaysiz."}</div></div>
      ${c && PR.kind === 'line' ? `<div class="field"><label>Variant</label><select id="pr-line">${c.lines.map((l, i) => `<option value="${i}" ${i === PR.lineIdx ? 'selected' : ''}>${esc(l.name)}</option>`).join('')}</select></div>` : ''}
      <button class="btn primary block" id="pr-go" style="height:46px;font-size:15px">${icon('play')}Boshlash</button>
    </div>
    <div class="card"><div class="card-t" style="margin-bottom:8px">${icon('trophy')}Rekord</div><div class="sub">Eng uzun to'g'ri yurishlar seriyasi: <b style="color:var(--text)">${PR.best}</b></div></div>`;
    $('#pr-course').onchange = (e) => { PR.courseId = e.target.value; const cc = prCourse(); PR.color = cc ? cc.side : PR.color; if (!cc) PR.kind = 'stats'; PR.lineIdx = 0; store.set('pr_course', PR.courseId); prSetupView(); };
    $$('#pr-color button').forEach((b) => (b.onclick = () => { PR.color = b.dataset.c; prSetupView(); }));
    $$('#pr-kind button').forEach((b) => (b.onclick = () => { if (b.disabled) return; PR.kind = b.dataset.k; prSetupView(); }));
    const ls = $('#pr-line'); if (ls) ls.onchange = (e) => { PR.lineIdx = +e.target.value; };
    $('#pr-go').onclick = () => { PR.phase = 'run'; prStart(); enterPractice(); };
  }
  function prStart() {
    const c = prCourse();
    PR.g = new Chess();
    PR.fens = [START]; PR.moves = [];
    PR.prefix = c ? splitMoves(c.moves) : [];
    PR.line = c && PR.kind === 'line' ? splitMoves((c.lines[PR.lineIdx] || c.lines[0]).moves) : null;
    PR.ok = 0; PR.bad = 0; PR.streak = 0; PR.done = false; PR.busy = false; PR.hintArrow = null;
    PR.gen = (PR.gen || 0) + 1;
    PR.msg = { cls: '', ic: 'info', t: 'Boshladik!', d: PR.color === 'w' ? 'Siz oq bilan o\'ynaysiz. Birinchi yurish sizdan.' : 'Siz qora bilan o\'ynaysiz. Raqib yurishini kuting.' };
    if (mode === 'practice' || location.hash === '#practice') { prRenderBoard(false); prPanel(); }
    setTimeout(prMaybeOpponent, 500);
  }
  function prExpected() {
    const ply = PR.moves.length;
    if (PR.line) return ply < PR.line.length ? { only: [PR.line[ply]] } : { end: true };
    if (ply < PR.prefix.length) return { only: [PR.prefix[ply]] };
    const fen = PR.g.fen();
    const book = bookAt(fen);
    if (book && book.length) return { book };
    const eco = ecoAt(fen);
    if (eco && eco[1]) return { eco: eco[1].split(' ') };
    return { end: true };
  }
  function prRenderBoard(animate) {
    ctrl.game = PR.g;
    board.setOrientation(PR.color);
    const lm = PR.moves[PR.moves.length - 1];
    board.setPosition(PR.g.fen(), { animate, lastMove: lm ? [lm.from, lm.to] : null, check: kingSq(PR.g) });
    showEnd(board, PR.g, animate);
    if (PR.hintArrow) board.setAutoArrows([PR.hintArrow]); else board.setAutoArrows([]);
    const e = (() => { for (let i = PR.fens.length - 1; i >= 1; i--) { const x = ecoAt(PR.fens[i]); if (x && x[0] >= 0) return ECO_LIST[x[0]]; } return null; })();
    const c = prCourse();
    setBoardTitle(e ? e[0] : (c ? c.eco : ''), e ? e[1] : (c ? c.name : 'Erkin mashq'));
  }
  function prPush(mv) {
    PR.moves.push(mv);
    PR.fens.push(PR.g.fen());
  }
  function prFinish(extra) {
    PR.done = true;
    if (PR.courseId !== 'free' && PR.ok >= PR.bad) { PROG.practice.add(PR.courseId); PROG.save(); }
    sound('win');
    const tot = PR.ok + PR.bad;
    PR.msg = { cls: 'win', ic: 'trophy', t: 'Debyut yakunlandi!', d: (extra ? extra + ' ' : '') + `Natija: ${PR.ok} to'g'ri, ${PR.bad} xato${tot ? ` (${Math.round(PR.ok / tot * 100)}%)` : ''}.` };
    prPanel();
  }
  function prMaybeOpponent() {
    if (mode !== 'practice' || PR.phase !== 'run' || PR.done || PR.busy || PR.g.turn() === PR.color) return;
    const gen = PR.gen;
    const ex = prExpected();
    if (ex.end) return prFinish(PR.line ? 'Variant oxiriga yetdingiz.' : 'Kitob tugadi.');
    let san;
    if (ex.only) san = ex.only[0];
    else if (ex.book) {
      const tot = ex.book.reduce((s, m) => s + m[1], 0);
      let r = Math.random() * tot;
      for (const m of ex.book) { r -= m[1]; if (r <= 0) { san = m[0]; break; } }
      san = san || ex.book[0][0];
    } else san = ex.eco[Math.floor(Math.random() * ex.eco.length)];
    PR.busy = true;
    setTimeout(() => {
      if (gen !== PR.gen) return;
      PR.busy = false;
      if (mode !== 'practice' || PR.done) return;
      const fenBefore = PR.g.fen();
      const mv = PR.g.move(san);
      if (!mv) return prFinish();
      prPush(mv);
      moveSound(mv, PR.g);
      const ent = (bookAt(fenBefore) || []).find((m) => m[0] === san);
      PR.msg = { cls: '', ic: 'chat', t: `Raqib: ${san}`, d: ent ? `O'yinchilarning ${pctFmt(ent[1])}i shu yurishni tanlaydi.${ent[4] ? ' ' + ent[4] : ''}` : 'Endi sizning navbatingiz.' };
      PR.hintArrow = null;
      prRenderBoard(true);
      const nx = prExpected();
      if (nx.end) return prFinish(PR.line ? 'Variant oxiriga yetdingiz.' : 'Kitob tugadi.');
      prPanel();
    }, 420);
  }
  function prOnMove(from, to, promo) {
    if (PR.done) return false;
    const test = new Chess(PR.g.fen());
    const mv = test.move({ from, to, promotion: promo || 'q' });
    if (!mv) return false;
    const ex = prExpected();
    if (ex.end) { prFinish(); return false; }
    const fenBefore = PR.g.fen();
    let accepted = false, info = '', cls = 'good', mistakeNote = null;
    if (ex.only) {
      accepted = ex.only.includes(mv.san);
      if (!accepted) info = PR.line ? `Bu variantda ${ex.only[0]} o'ynaladi.` : `Bu debyut uchun ${ex.only[0]} yurishi kerak.`;
    } else if (ex.book) {
      const ent = ex.book.find((m) => m[0] === mv.san);
      if (ent) {
        accepted = true;
        const up = (ent[4] || '').toUpperCase();
        if (/^(QO'POL XATO|XATO|HALOKAT)/.test(up)) { cls = 'bad'; mistakeNote = ent[4]; }
        info = `O'yinchilarning ${pctFmt(ent[1])}i shu yurishni tanlaydi.` + (ent[4] ? ' ' + ent[4] : '');
        if (ent === ex.book[0]) info = 'Eng mashhur yurish! ' + info;
      } else {
        info = `Kitobda yo'q. Mashhur yurishlar: ${ex.book.slice(0, 3).map((m) => m[0] + ' (' + pctFmt(m[1]) + ')').join(', ')}.`;
      }
    } else if (ex.eco) {
      accepted = ex.eco.includes(mv.san);
      info = accepted ? 'Nazariy davom.' : `Nazariy davomlar: ${ex.eco.slice(0, 4).join(', ')}.`;
    }
    if (!accepted || mistakeNote) {
      PR.bad++; PR.streak = 0;
      sound('bad');
      board.shake();
      board.flash(to, 'bad');
      PR.msg = { cls: 'bad', ic: 'x', t: mistakeNote ? 'Bu yurish xato!' : 'Boshqa yurishni sinab ko\'ring', d: mistakeNote || info };
      setTimeout(() => prRenderBoard(true), 60);
      prPanel();
      return false;
    }
    PR.g.move(mv.san);
    prPush(mv);
    PR.ok++; PR.streak++;
    if (PR.streak > PR.best) { PR.best = PR.streak; store.set('pr_best', PR.best); }
    PR.hintArrow = null;
    moveSound(mv, PR.g);
    board.flash(to, 'good');
    PR.msg = { cls, ic: 'check', t: "To'g'ri! " + mv.san, d: info };
    prRenderBoard(true);
    prPanel();
    setTimeout(prMaybeOpponent, 250);
    return true;
  }
  function prHint() {
    if (PR.done || PR.g.turn() !== PR.color) return;
    const ex = prExpected();
    const san = ex.only ? ex.only[0] : ex.book ? ex.book[0][0] : ex.eco ? ex.eco[0] : null;
    if (!san) return;
    const c = new Chess(PR.g.fen()); const mv = c.move(san);
    if (!mv) return;
    PR.hintArrow = { from: mv.from, to: mv.to, color: 'rgba(63,185,128,.9)', w: 0.17 };
    board.setAutoArrows([PR.hintArrow]);
    PR.streak = 0;
    PR.msg = { cls: 'warn', ic: 'bulb', t: 'Maslahat', d: `Tavsiya etilgan yurish: ${san}` + (ex.book ? ` (${pctFmt(ex.book[0][1])})` : '') };
    prPanel();
  }
  function prUndo() {
    if (PR.busy || PR.moves.length === 0) return;
    // o'zimizning oxirgi yurishimizgacha qaytamiz
    do { PR.g.undo(); PR.moves.pop(); PR.fens.pop(); } while (PR.moves.length && PR.g.turn() !== PR.color);
    PR.done = false; PR.hintArrow = null;
    PR.msg = { cls: '', ic: 'info', t: 'Qaytarildi', d: 'Davom eting.' };
    prRenderBoard(true); prPanel();
    setTimeout(prMaybeOpponent, 300);
  }
  function prPanel() {
    if (mode !== 'practice') return;
    const c = prCourse();
    renderControls([
      ['bulb', 'Maslahat', prHint], ['prev', 'Qaytarish', prUndo],
      ['reset', 'Qayta', () => { prStart(); }], ['flip', 'Aylantirish', () => board.flip()],
      ['gear', 'Sozlash', () => { PR.phase = 'setup'; prSetupView(); }]
    ]);
    const m = PR.msg || { cls: '', ic: 'info', t: '', d: '' };
    const yourTurn = !PR.done && PR.g.turn() === PR.color;
    const sans = PR.moves.map((x) => x.san);
    $('#panel').innerHTML = `
      <div class="card"><div class="pz-head"><div><div class="sub">${PR.kind === 'line' ? 'Asosiy liniya' : 'Statistika rejimi'}</div><div class="pz-title">${esc(c ? c.name : 'Erkin mashq')}</div>${PR.line ? `<div class="sub">${esc((c.lines[PR.lineIdx] || c.lines[0]).name)}</div>` : ''}</div>
      <span class="turn-ind" style="font-size:13px"><span class="disc ${PR.color}"></span>${PR.color === 'w' ? 'Oq' : 'Qora'}</span></div>
      ${PR.line ? `<div class="progress" style="margin-top:12px"><i style="width:${Math.min(100, PR.moves.length / PR.line.length * 100)}%"></i></div>` : ''}</div>
      <div class="status ${m.cls}"><div class="st-ico">${icon(m.ic)}</div><div><div class="st-t">${esc(m.t)}</div><div class="st-d">${esc(m.d)}</div>${yourTurn && !PR.busy ? `<div class="sub" style="margin-top:6px;font-weight:600;color:var(--accent)">Sizning navbatingiz</div>` : ''}</div></div>
      <div class="scorebar"><div class="score g"><b>${PR.ok}</b><span>To'g'ri</span></div><div class="score r"><b>${PR.bad}</b><span>Xato</span></div><div class="score a"><b>${PR.streak}</b><span>Seriya</span></div></div>
      ${PR.done ? `<div class="btn-row"><button class="btn primary" id="pr-again">${icon('reset')}Yana bir bor</button><button class="btn" id="pr-explore">${icon('compass')}Kashfiyotda davom</button></div>` : ''}
      <div class="card"><div class="card-t" style="margin-bottom:8px">${icon('list')}Yurishlar</div><div class="notation">${sans.length ? sans.map((s, i) => (i % 2 === 0 ? `<span class="num">${i / 2 + 1}.</span>` : '') + `<span class="m ${i === sans.length - 1 ? 'cur' : ''}">${sanHtml(s, i % 2 ? 'b' : 'w')}</span>`).join('') : '<span class="empty">—</span>'}</div></div>`;
    const ag = $('#pr-again'); if (ag) ag.onclick = () => prStart();
    const pe = $('#pr-explore'); if (pe) pe.onclick = () => { exLoad(sans, null, PR.color); go('explore'); };
  }

  /* =====================================================================
     MASALALAR
     ===================================================================== */
  const PZ = { cat: store.get('pz_cat', 'trap'), id: null, solved: new Set(store.get('pz_solved', [])), step: 0, g: null, setupSans: [], lastMv: null, state: 'play', mistakes: 0, hintLvl: 0, auto: false };
  function pzList() { return PUZZLES.filter((p) => p.cat === PZ.cat); }
  function enterPuzzles(arg) {
    mode = 'puzzles';
    board.setAutoArrows([]);
    ctrl.onMove = pzOnMove;
    ctrl.canMove = (sq) => PZ.state === 'play' && !PZ.auto && PZ.g && canMoveGame(PZ.g, sq);
    if (arg && PUZZLES.find((p) => p.id === arg)) { const p = PUZZLES.find((x) => x.id === arg); PZ.cat = p.cat; pzLoad(p.id); return; }
    if (!PZ.id || !PZ.g) { const l = pzList(); const first = l.find((p) => !PZ.solved.has(p.id)) || l[0]; pzLoad(first.id); return; }
    pzRenderBoard(false); pzPanel();
  }
  function pzCur() { return PUZZLES.find((p) => p.id === PZ.id); }
  function pzLoad(id) {
    const p = PUZZLES.find((x) => x.id === id);
    PZ.id = id; PZ.step = 0; PZ.mistakes = 0; PZ.hintLvl = 0; PZ.state = 'play'; PZ.auto = false; PZ.msg = null;
    board.setAutoArrows([]);
    if (p.fen) { PZ.g = new Chess(p.fen); PZ.setupSans = []; PZ.lastMv = null; board.setOrientation(PZ.g.turn()); ctrl.game = PZ.g; board.setPosition(p.fen, { animate: true, check: kingSq(PZ.g) }); }
    else {
      const sans = splitMoves(p.start);
      const r = playLine(sans.slice(0, -1));
      PZ.setupSans = sans;
      const side = sans.length % 2 === 0 ? 'w' : 'b';
      board.setOrientation(side);
      board.setPosition(r.g.fen(), { animate: true, lastMove: r.moves.length ? [r.moves[r.moves.length - 1].from, r.moves[r.moves.length - 1].to] : null });
      const mv = r.g.move(sans[sans.length - 1]);
      PZ.g = r.g; PZ.lastMv = mv; ctrl.game = PZ.g; PZ.auto = true;
      const tok = PZ.loadTok = (PZ.loadTok || 0) + 1;
      setTimeout(() => { if (PZ.id === id && PZ.loadTok === tok) { PZ.auto = false; pzRenderBoard(true); moveSound(mv, PZ.g); } }, 450);
    }
    pzPanel();
    setBoardTitle('', p.title);
  }
  function pzRenderBoard(animate) {
    const lm = PZ.lastMv;
    ctrl.game = PZ.g;
    board.setPosition(PZ.g.fen(), { animate, lastMove: lm ? [lm.from, lm.to] : null, check: kingSq(PZ.g) });
    showEnd(board, PZ.g, animate);
    const p = pzCur();
    setBoardTitle('', p ? p.title : '');
  }
  const stripSan = (s) => s.replace(/[+#]/g, '');
  function pzOnMove(from, to, promo) {
    const p = pzCur();
    const test = new Chess(PZ.g.fen());
    const mv = test.move({ from, to, promotion: promo || 'q' });
    if (!mv) return false;
    const exp = p.sol[PZ.step];
    const isLast = PZ.step === p.sol.length - 1;
    const ok = stripSan(mv.san) === stripSan(exp) || (isLast && exp.endsWith('#') && test.in_checkmate());
    if (!ok) {
      PZ.mistakes++;
      sound('bad'); board.shake(); board.flash(to, 'bad');
      PZ.msg = { cls: 'bad', ic: 'x', t: "Bu emas", d: 'Boshqa yurishni sinab ko\'ring. Shaxlar, olishlar va tahdidlarni tekshiring.' };
      setTimeout(() => pzRenderBoard(true), 60);
      pzPanel();
      return false;
    }
    PZ.g.move(mv.san); PZ.lastMv = mv; PZ.step++;
    board.flash(to, 'good');
    moveSound(mv, PZ.g);
    pzRenderBoard(true);
    if (PZ.step >= p.sol.length) return pzSolved(), true;
    PZ.msg = { cls: 'good', ic: 'check', t: "To'g'ri!", d: 'Davom eting…' };
    PZ.auto = true;
    pzPanel();
    setTimeout(() => pzReply(p), 520);
    return true;
  }
  function pzReply(p) {
    if (PZ.id !== p.id) return;
    const mv = PZ.g.move(p.sol[PZ.step]);
    PZ.auto = false;
    if (!mv) return;
    PZ.lastMv = mv; PZ.step++;
    moveSound(mv, PZ.g);
    pzRenderBoard(true);
    PZ.msg = { cls: '', ic: 'chat', t: `Raqib: ${mv.san}`, d: 'Davom ettiring — eng kuchli yurishni toping.' };
    pzPanel();
  }
  function pzSolved() {
    const p = pzCur();
    PZ.state = 'done';
    const first = !PZ.solved.has(p.id);
    if (PZ.mistakes === 0 && PZ.hintLvl === 0) { PZ.solved.add(p.id); store.set('pz_solved', [...PZ.solved]); }
    sound('win');
    PZ.msg = { cls: 'win', ic: 'trophy', t: PZ.mistakes || PZ.hintLvl ? 'Yechildi!' : (first ? 'Ajoyib! Birinchi urinishda!' : 'Mukammal!'), d: PZ.mistakes || PZ.hintLvl ? 'Xato yoki maslahatsiz yechsangiz, masala "yechilgan" deb belgilanadi.' : '' };
    pzPanel();
  }
  function pzHint() {
    const p = pzCur();
    if (PZ.state !== 'play' || PZ.auto) return;
    PZ.hintLvl++;
    const c = new Chess(PZ.g.fen()); const mv = c.move(p.sol[PZ.step]);
    if (!mv) return;
    if (PZ.hintLvl === 1) {
      PZ.msg = { cls: 'warn', ic: 'bulb', t: 'Maslahat', d: p.hint };
      board.flash(mv.from, 'good');
    } else {
      board.setAutoArrows([{ from: mv.from, to: mv.to, color: 'rgba(63,185,128,.9)', w: 0.17 }]);
      PZ.msg = { cls: 'warn', ic: 'bulb', t: 'Yurish ko\'rsatildi', d: `Kerakli yurish: ${p.sol[PZ.step]}` };
    }
    pzPanel();
  }
  function pzShow() {
    const p = pzCur();
    if (PZ.state !== 'play' || PZ.auto) return;
    PZ.state = 'showing'; PZ.hintLvl = 9;
    const stepFn = () => {
      if (PZ.id !== p.id) return;
      if (PZ.step >= p.sol.length) { PZ.state = 'done'; PZ.msg = { cls: 'warn', ic: 'eye', t: 'Yechim ko\'rsatildi', d: 'Masalani keyinroq qayta yechib ko\'ring.' }; pzPanel(); return; }
      const mv = PZ.g.move(p.sol[PZ.step]); PZ.step++;
      if (!mv) return;
      PZ.lastMv = mv; moveSound(mv, PZ.g); pzRenderBoard(true);
      setTimeout(stepFn, 750);
    };
    pzPanel();
    stepFn();
  }
  function pzNext(dir = 1) {
    const l = pzList();
    let i = l.findIndex((p) => p.id === PZ.id);
    i = (i + dir + l.length) % l.length;
    pzLoad(l[i].id);
  }
  function pzPanel() {
    if (mode !== 'puzzles') return;
    const p = pzCur();
    renderControls([
      ['prev', 'Oldingi', () => pzNext(-1)], ['bulb', 'Maslahat', pzHint], ['eye', 'Yechim', pzShow],
      ['reset', 'Qayta', () => pzLoad(PZ.id)], ['next', 'Keyingi', () => pzNext(1)]
    ]);
    const l = pzList();
    const solvedCnt = PUZZLES.filter((x) => PZ.solved.has(x.id)).length;
    const side = PZ.g.turn();
    const userSide = p.fen ? new Chess(p.fen).turn() : (splitMoves(p.start).length % 2 === 0 ? 'w' : 'b');
    const userMoves = Math.ceil(p.sol.length / 2);
    const m = PZ.msg && PZ.msg.pid === undefined ? PZ.msg : null;
    const msg = PZ.state === 'play' && PZ.step === 0 && PZ.mistakes === 0 && PZ.hintLvl === 0
      ? { cls: '', ic: 'target', t: `${userSide === 'w' ? 'Oq' : 'Qora'} yuradi`, d: userMoves > 1 ? `${userMoves} yurishli kombinatsiyani toping.` : (p.sol[0].endsWith('#') ? 'Bir yurishda mat qiling.' : 'Eng kuchli yurishni toping.') }
      : (m || { cls: '', ic: 'info', t: '', d: '' });
    $('#panel').innerHTML = `
      <div class="card"><div class="pz-tabs" style="margin-bottom:12px">${PUZZLE_CATS.map((c) => `<span class="chip btn ${PZ.cat === c.id ? 'on' : ''}" data-cat="${c.id}">${esc(c.name)} · ${PUZZLES.filter((x) => x.cat === c.id).length}</span>`).join('')}</div>
        <div class="pz-grid">${l.map((x, i) => `<button class="pz-cell ${x.id === PZ.id ? 'cur' : ''} ${PZ.solved.has(x.id) ? 'done' : ''}" data-pz="${x.id}" title="${esc(x.title)}">${PZ.solved.has(x.id) ? '✓' : i + 1}</button>`).join('')}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:12px"><div class="progress" style="flex:1"><i style="width:${solvedCnt / PUZZLES.length * 100}%"></i></div><span class="sub">${solvedCnt}/${PUZZLES.length}</span></div>
      </div>
      <div class="card">
        <div class="pz-head"><div><div class="pz-title">${esc(p.title)}</div><div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap"><span class="chip accent">${esc(p.motif)}</span><span class="chip"><span class="stars">${'★'.repeat(p.level)}${'☆'.repeat(3 - p.level)}</span></span></div></div>
        <span class="turn-ind" style="font-size:13px"><span class="disc ${side}"></span>${side === 'w' ? 'Oq' : 'Qora'}</span></div>
        ${p.sol.length > 1 ? `<div class="progress" style="margin-top:14px"><i style="width:${PZ.step / p.sol.length * 100}%"></i></div>` : ''}
        ${PZ.setupSans.length ? `<details class="setup" style="margin-top:12px"><summary>Pozitsiya qanday paydo bo'ldi</summary><div class="moves-text">${esc(movesText(PZ.setupSans))}</div></details>` : ''}
      </div>
      <div class="status ${msg.cls}"><div class="st-ico">${icon(msg.ic)}</div><div><div class="st-t">${esc(msg.t)}</div>${msg.d ? `<div class="st-d">${esc(msg.d)}</div>` : ''}</div></div>
      ${PZ.state !== 'play' ? `<div class="card"><div class="card-t" style="margin-bottom:8px">${icon('info')}Tushuntirish</div><div class="explain">${esc(p.explain)}</div><div class="sub" style="margin-top:8px">Yechim: ${esc(movesText(p.sol, p.fen ? (new Chess(p.fen).turn() === 'w' ? 0 : 1) : PZ.setupSans.length))}</div>
        <div class="btn-row" style="margin-top:14px"><button class="btn primary" id="pz-next">${icon('next')}Keyingi masala</button><button class="btn" id="pz-retry">${icon('reset')}Qayta yechish</button></div></div>` : ''}`;
    $$('[data-cat]').forEach((c) => (c.onclick = () => { PZ.cat = c.dataset.cat; store.set('pz_cat', PZ.cat); const f = pzList().find((x) => !PZ.solved.has(x.id)) || pzList()[0]; pzLoad(f.id); }));
    $$('[data-pz]').forEach((c) => (c.onclick = () => pzLoad(c.dataset.pz)));
    const nb = $('#pz-next'); if (nb) nb.onclick = () => pzNext(1);
    const rb = $('#pz-retry'); if (rb) rb.onclick = () => pzLoad(PZ.id);
    PZ.msg = PZ.msg || null;
  }

  /* =====================================================================
     QO'LLANMA
     ===================================================================== */
  function renderGuide(id) {
    const root = $('#view-guide');
    const gd = id && GUIDES.find((g) => g.id === id);
    if (gd) {
      if (!PROG.guides.has(gd.id)) { PROG.guides.add(gd.id); PROG.save(); }
      root.innerHTML = `<div class="page"><button class="back" id="g-back">${icon('back')}Qo'llanmalar</button><div class="article"><h1>${esc(gd.title)}</h1>${gd.body}</div></div>`;
      $('#g-back').onclick = () => go('guide');
      $$('[data-puzzle]', root).forEach((a) => (a.onclick = () => go('puzzles/' + a.dataset.puzzle)));
      root.scrollTop = 0;
      return;
    }
    const desc = {
      principles: "Markaz, rivojlanish, rokirovka — har bir o'yinchi bilishi shart.",
      howtostudy: "Repertuar tanlash va samarali o'rganish rejasi.",
      solving: "Shaxlar, olishlar, tahdidlar — masalalarni tizimli yechish.",
      motifs: "Vilka, bog'lash, sanchish va boshqa usullar — masalalar bilan.",
      structures: "Debyutdan o'rta o'yinga: tuzilmaga mos rejalar.",
      stats: "Foizlar, natija chizig'i va jonli statistika haqida."
    };
    root.innerHTML = `<div class="page"><div class="page-h"><div><h1>Qo'llanma</h1><p>Debyut tamoyillari, o'rganish usullari va masala yechish texnikasi.</p></div></div>
      <div class="ggrid">${GUIDES.map((g) => `<div class="gcard" data-g="${g.id}"><div class="gi">${icon(g.icon)}</div><h3>${esc(g.title)}</h3><p>${esc(desc[g.id] || '')}</p></div>`).join('')}</div>
      <div class="group-h">Tezkor o'tish</div>
      <div class="cgrid">
        <div class="gcard" data-go="explore"><div class="gi">${icon('compass')}</div><h3>Kashfiyot</h3><p>Har bir pozitsiyada ko'pchilik nima o'ynashini ko'ring.</p></div>
        <div class="gcard" data-go="practice"><div class="gi">${icon('target')}</div><h3>Mashq</h3><p>Raqibga qarshi debyutni takrorlang.</p></div>
        <div class="gcard" data-go="puzzles"><div class="gi">${icon('puzzle')}</div><h3>Masalalar</h3><p>${PUZZLES.length} ta tuzoq, mat va taktika masalasi.</p></div>
      </div></div>`;
    $$('[data-g]', root).forEach((c) => (c.onclick = () => go('guide/' + c.dataset.g)));
    $$('[data-go]', root).forEach((c) => (c.onclick = () => go(c.dataset.go)));
  }

  /* =====================================================================
     PROGRESS
     ===================================================================== */
  const PROG = {
    lessons: new Set(store.get('lessons_done', [])),
    guides: new Set(store.get('guides_read', [])),
    practice: new Set(store.get('pr_done', [])),
    save() { store.set('lessons_done', [...this.lessons]); store.set('guides_read', [...this.guides]); store.set('pr_done', [...this.practice]); }
  };
  function puzzleFen(p) { return p.fen || playLine(splitMoves(p.start)).g.fen(); }
  function puzzleSide(p) { return p.fen ? new Chess(p.fen).turn() : (splitMoves(p.start).length % 2 === 0 ? 'w' : 'b'); }
  function relatedPuzzles(c) { return PUZZLES.filter((p) => p.start && (p.start + ' ').startsWith(c.moves + ' ')); }
  function routeGo(g) { if (g.startsWith('practice:')) startPracticeFor(g.split(':')[1]); else go(g); }
  function genericExplain(mv) {
    if (/^O-O/.test(mv.san)) return "Rokirovka: qirol xavfsiz joyga o'tadi, rok esa o'yinga kiradi.";
    if (mv.captured) return "Olish: material muvozanatini tiklash yoki markazni ochish.";
    if (mv.piece === 'n') return "Otni rivojlantirish — markazga yaqin, faol katakka chiqarish.";
    if (mv.piece === 'b') return "Filni faol diagonalga chiqarish.";
    if (mv.piece === 'q') return "Ferz yurishi. Ferzni juda erta chiqarish vaqt yo'qotishga olib kelishi mumkin, bu yerda esa u aniq maqsadga xizmat qiladi.";
    if (mv.piece === 'r') return "Rokni ochiq yoki yarim ochiq chiziqqa olib chiqish.";
    if (mv.piece === 'k') return 'Qirol yurishi.';
    if ('cdef'.includes(mv.to[0])) return "Markaziy piyoda yurishi: markaz uchun kurash.";
    return "Piyoda yurishi: joy olish yoki keyingi rejani tayyorlash.";
  }
  function notationOf(sans, cursor, attr) {
    if (!sans.length) return '<span class="empty">Hali yurish yo\'q</span>';
    let h = '';
    sans.forEach((s, i) => {
      if (i % 2 === 0) h += `<span class="num">${i / 2 + 1}.</span>`;
      h += `<span class="m ${i + 1 === cursor ? 'cur' : ''}" ${attr}="${i + 1}">${sanHtml(s, i % 2 ? 'b' : 'w')}</span>`;
    });
    return h;
  }

  /* =====================================================================
     BOSH SAHIFA
     ===================================================================== */
  let heroBoard = null, heroTimer = 0;
  const HERO_LINES = ['italian', 'ruy', 'najdorf', 'french', 'carokann', 'qgd', 'kid', 'london', 'scandi'];
  function stopHero() { clearTimeout(heroTimer); heroTimer = 0; }
  function renderHome() {
    stopHero();
    const root = $('#view-home');
    const puzz = PUZZLES.filter((p) => PZ.solved.has(p.id)).length;
    const path = [
      { t: 'Debyut tamoyillari', d: 'Markaz, rivojlanish, rokirovka — 10 oltin qoida', go: 'guide/principles', done: PROG.guides.has('principles') },
      { t: 'Birinchi dars: Italyan partiyasi', d: 'Oq uchun eng tushunarli debyut', go: 'course/italian', done: PROG.lessons.has('italian') },
      { t: 'Qora uchun: Karo-Kann himoyasi', d: '1.e4 ga mustahkam javob', go: 'course/carokann', done: PROG.lessons.has('carokann') },
      { t: 'Debyut tuzoqlari', d: '5 ta tuzoq masalasini yeching', go: 'puzzles', done: PUZZLES.filter((p) => p.cat === 'trap' && PZ.solved.has(p.id)).length >= 5 },
      { t: 'Mashq: Italyan partiyasi', d: 'Raqibga qarshi debyutni mustahkamlang', go: 'practice:italian', done: PROG.practice.has('italian') },
      { t: '1.d4 uchun: London tizimi', d: 'Har qanday javobga qarshi bitta tizim', go: 'course/london', done: PROG.lessons.has('london') },
      { t: 'Qora uchun 1.d4 ga: Ferz gambiti', d: 'Klassik va ishonchli javob', go: 'course/qgd', done: PROG.lessons.has('qgd') }
    ];
    const nextIdx = path.findIndex((x) => !x.done);
    const doneCnt = path.filter((x) => x.done).length;
    const daily = PUZZLES[Math.floor(Date.now() / 864e5) % PUZZLES.length];
    const popular = ['italian', 'ruy', 'najdorf', 'carokann', 'london', 'qgd', 'french', 'kid'].map(courseById);
    root.innerHTML = `<div class="page home">
      <section class="hero">
        <div class="hero-text">
          <span class="hero-pill">${icon('zap')}${COURSES.length} interaktiv dars · ${PUZZLES.length} masala · ${ECO_LIST.length} debyut</span>
          <h1>Debyutlarni <span class="grad">o'ynab</span> o'rganing</h1>
          <p>Har bir yurish nima uchun o'ynalishini doskada ko'ring, o'yinchilarning necha foizi qaysi yurishni tanlashini biling va o'zingizni sinab ko'ring.</p>
          <div class="hero-cta">
            <button class="btn primary lg" id="h-start">${icon('play')}${nextIdx < 0 ? 'Darslarni ko\'rish' : nextIdx === 0 ? 'O\'rganishni boshlash' : 'Davom ettirish'}</button>
            <button class="btn lg" data-go="sandbox">${icon('grid')}Erkin doska</button>
          </div>
          <div class="hero-stats">
            <div><b>${PROG.lessons.size}</b><span>dars tugatildi</span></div>
            <div><b>${puzz}</b><span>masala yechildi</span></div>
            <div><b>${PR.best}</b><span>mashq rekordi</span></div>
          </div>
        </div>
        <div class="hero-board"><div id="hero-board"></div><div class="hb-cap" id="hero-cap"></div></div>
      </section>
      <div class="home-grid">
        <section class="card path-card"><div class="card-h"><div class="card-t">${icon('map')}O'quv yo'li</div><span class="sub">${doneCnt}/${path.length} bajarildi</span></div>
          <div class="progress" style="margin:-2px 0 14px"><i style="width:${doneCnt / path.length * 100}%"></i></div>
          <div class="path">${path.map((x, i) => `<div class="path-step ${x.done ? 'done' : ''} ${i === nextIdx ? 'next' : ''}" data-go="${x.go}"><div class="ps-dot">${x.done ? icon('check') : i + 1}</div><div class="ps-body"><div class="ps-t">${esc(x.t)}</div><div class="ps-d">${esc(x.d)}</div></div>${i === nextIdx ? '<span class="chip accent">Keyingi</span>' : ''}${icon('next', 'ps-arr')}</div>`).join('')}</div></section>
        <section class="card daily"><div class="card-h"><div class="card-t">${icon('zap')}Kunning masalasi</div><span class="stars">${'★'.repeat(daily.level)}${'☆'.repeat(3 - daily.level)}</span></div>
          <div class="daily-body" data-go="puzzles/${daily.id}">${miniBoard(puzzleFen(daily), puzzleSide(daily), 220).replace('width:220px', 'width:100%;height:auto')}
          <div class="daily-info"><div><div class="ps-t">${esc(daily.title)}</div><div class="sub">${esc(daily.motif)} · ${puzzleSide(daily) === 'w' ? 'Oq' : 'Qora'} yuradi</div></div><button class="btn primary sm">${icon('play')}Yechish</button></div></div></section>
      </div>
      <div class="group-h">Mashhur debyutlar — interaktiv darslar</div>
      <div class="cgrid">${popular.map(courseCard).join('')}</div>
      <div class="more-wrap"><button class="btn" data-go="library">Barcha ${COURSES.length} darsni ko'rish ${icon('next')}</button></div>
      <div class="group-h">Boshqa imkoniyatlar</div>
      <div class="feat-grid">
        ${[['compass', 'Kashfiyot', "Har pozitsiyada ko'pchilik nima o'ynashi va natijalari", 'explore'], ['target', 'Mashq', "Kompyuter statistikaga ko'ra yuradi — siz to'g'ri javobni topasiz", 'practice'], ['puzzle', 'Masalalar', 'Debyut tuzoqlari, mat motivlari va taktika', 'puzzles'], ['guide', "Qo'llanma", 'Tamoyillar, masala yechish usuli, tuzilmalar', 'guide']].map(([ic, t, d, g]) => `<div class="feat" data-go="${g}"><div class="gi">${icon(ic)}</div><div><b>${t}</b><p>${d}</p></div></div>`).join('')}
      </div></div>`;
    $$('[data-go]', root).forEach((el) => (el.onclick = () => routeGo(el.dataset.go)));
    $$('.ccard', root).forEach((el) => (el.onclick = () => go('course/' + el.dataset.id)));
    $('#h-start').onclick = () => routeGo(nextIdx >= 0 ? path[nextIdx].go : 'library');
    startHero();
  }
  function startHero() {
    const el = $('#hero-board');
    if (!el) return;
    heroBoard = new Board(el, { canMove: () => false });
    heroBoard.root.classList.add('no-coords');
    let li = Math.floor(Math.random() * HERO_LINES.length), ply = 0, c = null, line = null;
    const g = new Chess();
    const renderCap = () => {
      const cap = $('#hero-cap');
      if (!cap || !c) return;
      cap.innerHTML = `<div style="min-width:0"><div class="sub">${line && ply ? esc(movesText(line.slice(0, ply))) : 'Boshlanmoqda…'}</div><b>${esc(c.name)}</b></div><button class="btn sm" id="hc-go">Darsni ochish${icon('next')}</button>`;
      $('#hc-go').onclick = () => go('course/' + c.id);
    };
    const step = () => {
      if (!$('#view-home').classList.contains('active') || !document.body.contains(heroBoard.root)) return;
      if (!line || ply >= line.length) {
        c = courseById(HERO_LINES[li++ % HERO_LINES.length]);
        line = splitMoves(c.moves); ply = 0; g.reset();
        heroBoard.setOrientation(c.side);
        heroBoard.setPosition(START, { animate: true });
        renderCap();
        heroTimer = setTimeout(step, 900);
        return;
      }
      const mv = g.move(line[ply++]);
      heroBoard.setPosition(g.fen(), { animate: true, lastMove: [mv.from, mv.to] });
      renderCap();
      heroTimer = setTimeout(step, ply >= line.length ? 2800 : 900);
    };
    step();
  }

  /* =====================================================================
     INTERAKTIV DARS
     ===================================================================== */
  let lb = null;
  const LS = { id: null, c: null, seq: [], base: 0, lineIdx: null, steps: [], i: 0, fens: [], moves: [], ask: false, hint: false, quiz: store.get('ls_quiz', true), auto: 0, fb: null, score: { ok: 0, miss: 0 } };
  function lsStopAuto() { if (LS.auto) { clearTimeout(LS.auto); LS.auto = 0; } }
  function initLessonBoard() {
    if (lb) return;
    lb = new Board($('#lboard'), {
      canMove: (sq) => LS.ask && LS.askG && canMoveGame(LS.askG, sq),
      dests: (sq) => (LS.ask && LS.askG ? LS.askG.moves({ square: sq, verbose: true }).map((m) => m.to) : []),
      showDests: () => S.dots,
      onMove: lsOnMove
    });
  }
  function enterLesson(id) {
    initLessonBoard();
    lb.root.classList.toggle('no-coords', !S.coords);
    const c = courseById(id);
    if (!c) { go('library'); return; }
    if (LS.id !== id) { LS.id = id; LS.c = c; lsSetup(null); }
    lsRender(false);
  }
  function lsSetup(lineIdx) {
    const c = LS.c;
    LS.lineIdx = lineIdx;
    lsStopAuto();
    const main = splitMoves(c.moves);
    if (lineIdx == null) {
      LS.seq = main; LS.base = 0;
      LS.steps = [{ t: 'intro' }].concat(main.map((_, i) => ({ t: 'move', ply: i })), [{ t: 'ideas' }, { t: 'mistakes' }, { t: 'lines' }, { t: 'finish' }]);
    } else {
      LS.seq = splitMoves(c.lines[lineIdx].moves);
      let k = 0;
      while (k < main.length && k < LS.seq.length && main[k] === LS.seq[k]) k++;
      LS.base = k;
      LS.steps = [{ t: 'lineintro' }].concat(LS.seq.slice(k).map((_, i) => ({ t: 'move', ply: k + i })), [{ t: 'lineend' }]);
    }
    const r = playLine(LS.seq);
    LS.fens = r.fens; LS.moves = r.moves;
    LS.i = 0; LS.ask = false; LS.fb = null; LS.hint = false; LS.score = { ok: 0, miss: 0 };
    lb.setOrientation(c.side);
  }
  const lsStep = () => LS.steps[LS.i];
  const lsMover = (ply) => (ply % 2 === 0 ? 'w' : 'b');
  function lsGoto(i, fromNext) {
    i = Math.max(0, Math.min(LS.steps.length - 1, i));
    LS.i = i; LS.fb = null; LS.hint = false;
    const st = lsStep();
    LS.ask = !!(fromNext && LS.quiz && !LS.auto && st.t === 'move' && lsMover(st.ply) === LS.c.side);
    if (st.t === 'finish' && !PROG.lessons.has(LS.c.id)) { PROG.lessons.add(LS.c.id); PROG.save(); }
    if ((st.t === 'finish' || st.t === 'lineend') && fromNext) setTimeout(() => sound('win'), 150);
    lsRender(true, fromNext);
  }
  function lsFenIdx() {
    const st = lsStep();
    if (st.t === 'move') return LS.ask ? st.ply : st.ply + 1;
    if (st.t === 'intro') return 0;
    if (st.t === 'lineintro') return LS.base;
    return LS.fens.length - 1;
  }
  function lsRender(animate, fromNext) {
    const st = lsStep(), fi = lsFenIdx();
    const g = new Chess(LS.fens[fi]);
    LS.askG = LS.ask ? g : null;
    const lm = fi > 0 ? LS.moves[fi - 1] : null;
    lb.setPosition(LS.fens[fi], { animate, lastMove: lm ? [lm.from, lm.to] : null, check: kingSq(g) });
    if (st.t === 'move' && !LS.ask) {
      const mv = LS.moves[st.ply];
      lb.setAutoArrows([{ from: mv.from, to: mv.to, color: 'rgba(63,185,128,.85)', w: 0.15 }]);
      if (animate && fromNext) moveSound(mv, g);
    } else lb.setAutoArrows([]);
    if (!LS.ask) showEnd(lb, g, false);
    $('#ls-title').innerHTML = `<span class="eco-badge">${esc(LS.c.eco)}</span><span class="op-name">${esc(LS.c.name)}</span>`;
    lsControls();
    lsPanel();
  }
  function lsControls() {
    const ctl = [
      ['prev', 'Orqaga', () => lsGoto(LS.i - 1, false)],
      ['next', 'Keyingi', () => { if (!LS.ask) lsGoto(LS.i + 1, true); }],
      ['flip', 'Aylantirish', () => lb.flip()],
      ['grid', 'Erkin doskada', () => { sbLoad(LS.seq.slice(0, lsFenIdx()), LS.c.side); go('sandbox'); }]
    ];
    $('#ls-controls').innerHTML = ctl.map(([ic, l], i) => `<button class="icon-btn" data-i="${i}" title="${l}">${icon(ic)}${i > 1 ? `<span class="lbl-txt">${l}</span>` : ''}</button>`).join('');
    $$('#ls-controls .icon-btn').forEach((b) => (b.onclick = () => ctl[+b.dataset.i][2]()));
  }
  function lsMoveBody(st) {
    const p = st.ply, san = LS.seq[p], mover = lsMover(p), num = Math.floor(p / 2) + 1;
    const side = mover === 'w' ? 'Oq' : 'Qora';
    const book = bookAt(LS.fens[p]);
    const ent = book && book.find((m) => m[0] === san);
    if (LS.ask) {
      const mv = LS.moves[p];
      const names = { p: 'piyoda', n: 'ot', b: 'fil', r: 'rok', q: 'ferz', k: 'qirol' };
      return `<div class="ls-kicker">${num}-yurish · ${side}</div><h2 class="ls-h">${side} bu yerda qanday yuradi?</h2>
        <p class="ls-p">${LS.hint ? `<b>Maslahat:</b> ${names[mv.piece]} bilan yuring${mv.captured ? ' (olish bor)' : ''}. Doskada yashil chaqnagan figuraga qarang.` : "Pozitsiyaga qarang: markaz, rivojlanish va raqibning oxirgi yurishi nimaga tahdid qilayotgani haqida o'ylang. Figurani sudrab yoki bosib yuring."}</p>`;
    }
    const why = ent && ent[4] ? ent[4] : genericExplain(LS.moves[p]);
    const alts = book ? book.filter((m) => m[0] !== san).slice(0, 3) : [];
    return `<div class="ls-kicker">${num}-yurish · ${side}</div>
      <div class="ls-move"><span class="ls-num">${num}${mover === 'w' ? '.' : '...'}</span>${sanHtml(san, mover)}</div>
      <p class="ls-p">${esc(why)}</p>
      ${ent ? `<div class="ls-stat"><div class="pbar"><i style="width:${Math.min(100, ent[1])}%"></i></div><span><b>${pctFmt(ent[1])}</b> o'yinchi shu yurishni tanlaydi</span></div>` : ''}
      ${alts.length ? `<div class="ls-sub">Boshqa mashhur javoblar</div><div class="alts">${alts.map((a) => `<span class="chip">${sanHtml(a[0], mover)}<span class="sub">${pctFmt(a[1])}</span></span>`).join('')}</div>` : ''}`;
  }
  function lsPanel() {
    const c = LS.c, st = lsStep(), n = LS.steps.length;
    const line = LS.lineIdx != null ? c.lines[LS.lineIdx] : null;
    let body = '';
    if (st.t === 'intro') {
      body = `<div class="ls-kicker">${c.side === 'w' ? 'Oq uchun' : 'Qora uchun'} · ${['', "Boshlang'ich", "O'rta", 'Murakkab'][c.level]} · ${esc(c.eco)}</div>
        <h2 class="ls-h">${esc(c.name)}</h2><div class="sub">${esc(c.en)}</div><p class="ls-p">${esc(c.summary)}</p>
        <div class="ls-note">${icon('info')}<div>Bu darsda <b>${LS.seq.length} ta asosiy yurish</b>ni birma-bir ko'rib chiqamiz${LS.quiz ? `. <b>${c.side === 'w' ? 'Oq' : 'Qora'}</b> yurishlarini avval o'zingiz topishga harakat qilasiz` : ''}. Keyin rejalar, tuzoqlar va variantlar.</div></div>
        ${PROG.lessons.has(c.id) ? `<div class="chip good" style="margin-top:12px">${icon('check')}Bu dars tugatilgan</div>` : ''}`;
    } else if (st.t === 'lineintro') {
      body = `<div class="ls-kicker">Variant</div><h2 class="ls-h">${esc(line.name)}</h2><p class="ls-p">${esc(line.note)}</p>
        <div class="ls-note">${icon('info')}<div>Asosiy pozitsiyadan keyingi <b>${LS.seq.length - LS.base} ta yurish</b>ni ko'rib chiqamiz.</div></div>`;
    } else if (st.t === 'move') body = lsMoveBody(st);
    else if (st.t === 'ideas') {
      body = `<div class="ls-kicker">Reja</div><h2 class="ls-h">Debyutdan keyin nima qilish kerak?</h2><p class="ls-p">Yurishlarni yodlash yetarli emas — har bir tomonning <b>rejasini</b> bilish muhim.</p>
        <div class="ls-plan"><div class="ls-plan-h">${figForce('w', 'K')}Oq uchun</div><ul class="ideas w">${c.white.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div class="ls-plan"><div class="ls-plan-h">${figForce('b', 'K')}Qora uchun</div><ul class="ideas b">${c.black.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`;
    } else if (st.t === 'mistakes') {
      const rel = relatedPuzzles(c);
      body = `<div class="ls-kicker">Ehtiyot bo'ling</div><h2 class="ls-h">Tipik xatolar va tuzoqlar</h2><ul class="ideas x">${c.mistakes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        ${rel.length ? `<div class="ls-sub">Shu debyutdagi tuzoq masalalari</div><div class="rel">${rel.map((p) => `<button class="rel-item" data-pz="${p.id}">${icon('puzzle')}<span>${esc(p.title)}</span>${PZ.solved.has(p.id) ? icon('check', 'ok') : icon('next')}</button>`).join('')}</div>` : ''}`;
    } else if (st.t === 'lines') {
      body = `<div class="ls-kicker">Variantlar</div><h2 class="ls-h">Asosiy variantlar</h2><p class="ls-p">Har bir variantni alohida kichik dars sifatida doskada ko'rib chiqing:</p>
        <div class="ls-lines">${c.lines.map((l, i) => `<button class="ls-line" data-line="${i}"><div><b>${esc(l.name)}</b><div class="sub">${esc(l.note)}</div></div>${icon('play')}</button>`).join('')}</div>`;
    } else {
      const fin = st.t === 'finish';
      const tot = LS.score.ok + LS.score.miss;
      body = `<div class="ls-done">${icon('trophy')}</div><h2 class="ls-h" style="text-align:center">${fin ? 'Dars tugadi!' : 'Variant tugadi!'}</h2>
        ${tot ? `<p class="ls-p" style="text-align:center">Siz <b>${LS.score.ok}</b> ta yurishni o'zingiz topdingiz${LS.score.miss ? `, <b>${LS.score.miss}</b> tasida yordam kerak bo'ldi` : ' — ajoyib!'}.</p>` : ''}
        ${line ? `<p class="ls-p" style="text-align:center">${esc(line.note)}</p>` : ''}
        <div class="ls-cta"><button class="btn primary" id="ls-pr">${icon('target')}Mashq qilish</button>
        ${fin ? `<button class="btn" id="ls-lines">${icon('list')}Variantlarni ko'rish</button>` : `<button class="btn" id="ls-main">${icon('back')}Asosiy darsga qaytish</button>`}
        <button class="btn" id="ls-ex">${icon('compass')}Kashfiyotda davom</button>
        <button class="btn" id="ls-sb">${icon('grid')}Erkin doskada sinash</button></div>`;
    }
    const askBar = LS.ask && !LS.fb ? `<div class="status pulse"><div class="st-ico">${icon('target')}</div><div><div class="st-t">Navbat sizda!</div><div class="st-d">${c.side === 'w' ? 'Oq' : 'Qora'} uchun to'g'ri yurishni doskada qiling.</div></div></div>` : '';
    const fb = LS.fb ? `<div class="status ${LS.fb.cls}"><div class="st-ico">${icon(LS.fb.ic)}</div><div><div class="st-t">${esc(LS.fb.t)}</div>${LS.fb.d ? `<div class="st-d">${esc(LS.fb.d)}</div>` : ''}</div></div>` : '';
    const notCur = lsFenIdx();
    $('#ls-panel').innerHTML = `
      <div class="card ls-top"><div class="ls-top-row"><button class="back" id="ls-back">${icon('back')}Darslar</button>
        <label class="ls-quiz" title="Yurishlarni avval o'zingiz topasiz"><span>Sinov rejimi</span><button class="switch ${LS.quiz ? 'on' : ''}" id="ls-quiz" aria-label="Sinov rejimi"></button></label></div>
        <div class="ls-prog"><div class="progress"><i style="width:${(LS.i / (n - 1)) * 100}%"></i></div><span class="sub">${LS.i + 1} / ${n}</span></div></div>
      <div class="card ls-body" key="${LS.i}">${body}</div>
      ${askBar}${fb}
      <div class="ls-nav">
        <button class="btn" id="ls-prev" ${LS.i === 0 ? 'disabled' : ''}>${icon('prev')}<span>Orqaga</span></button>
        ${LS.ask ? `<button class="btn" id="ls-hint">${icon('bulb')}<span>Maslahat</span></button><button class="btn" id="ls-reveal">${icon('eye')}<span>Ko'rsatish</span></button>`
        : `<button class="btn" id="ls-auto" ${LS.i >= n - 1 ? 'disabled' : ''}>${icon(LS.auto ? 'pause' : 'play')}<span>${LS.auto ? "To'xtatish" : 'Avto'}</span></button>`}
        <button class="btn primary ${LS.ask ? 'hidden' : ''}" id="ls-next" ${LS.i >= n - 1 || LS.ask ? 'disabled' : ''}><span>${st.t === 'intro' || st.t === 'lineintro' ? 'Boshlash' : 'Keyingi'}</span>${icon('next')}</button>
      </div>
      <div class="card"><div class="card-h"><div class="card-t">${icon('list')}Yurishlar</div><span class="sub"><span class="kbd">←</span> <span class="kbd">→</span></span></div><div class="notation">${notationOf(LS.seq.slice(0, notCur), LS.ask ? -1 : notCur, 'data-lply')}</div></div>`;
    const P = $('#ls-panel');
    $('#ls-back').onclick = () => go('library');
    $('#ls-quiz').onclick = (e) => { e.preventDefault(); LS.quiz = !LS.quiz; store.set('ls_quiz', LS.quiz); if (!LS.quiz && LS.ask) { LS.ask = false; lsRender(true, true); } else lsPanel(); };
    $('#ls-prev').onclick = () => { lsStopAuto(); lsGoto(LS.i - 1, false); };
    $('#ls-next').onclick = () => { lsStopAuto(); lsGoto(LS.i + 1, true); };
    const h = $('#ls-hint'); if (h) h.onclick = () => { LS.hint = true; const mv = LS.moves[st.ply]; lb.flash(mv.from, 'good'); lsPanel(); };
    const rv = $('#ls-reveal'); if (rv) rv.onclick = () => { LS.ask = false; LS.score.miss++; LS.fb = { cls: 'warn', ic: 'eye', t: `To'g'ri yurish: ${LS.seq[st.ply]}`, d: '' }; lsRender(true, true); };
    const au = $('#ls-auto'); if (au) au.onclick = () => {
      if (LS.auto) { lsStopAuto(); lsPanel(); return; }
      const tick = () => {
        if (LS.i >= LS.steps.length - 1 || !$('#view-lesson').classList.contains('active')) { lsStopAuto(); lsPanel(); return; }
        LS.auto = setTimeout(tick, 2400);
        lsGoto(LS.i + 1, true);
      };
      LS.auto = setTimeout(tick, 10);
      lsPanel();
    };
    $$('[data-pz]', P).forEach((b) => (b.onclick = () => go('puzzles/' + b.dataset.pz)));
    $$('[data-line]', P).forEach((b) => (b.onclick = () => { lsSetup(+b.dataset.line); lsRender(true); }));
    $$('[data-lply]', P).forEach((b) => (b.onclick = () => {
      const ply = +b.dataset.lply - 1;
      const idx = LS.steps.findIndex((s) => s.t === 'move' && s.ply === ply);
      lsStopAuto();
      lsGoto(idx >= 0 ? idx : 0, false);
    }));
    const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };
    on('#ls-pr', () => startPracticeFor(c.id, LS.lineIdx == null ? undefined : LS.lineIdx));
    on('#ls-ex', () => { exLoad(LS.seq, null, c.side); go('explore'); });
    on('#ls-sb', () => { sbLoad(LS.seq, c.side); go('sandbox'); });
    on('#ls-main', () => { lsSetup(null); LS.i = LS.steps.findIndex((s) => s.t === 'lines'); lsRender(true); });
    on('#ls-lines', () => { LS.i = LS.steps.findIndex((s) => s.t === 'lines'); lsRender(false); });
  }
  function lsOnMove(from, to, promo) {
    if (!LS.ask) return false;
    const st = lsStep(), p = st.ply;
    const g = new Chess(LS.fens[p]);
    const mv = g.move({ from, to, promotion: promo || 'q' });
    if (!mv) return false;
    if (mv.san === LS.seq[p]) {
      LS.ask = false;
      if (LS.hint) LS.score.miss++; else LS.score.ok++;
      LS.fb = { cls: 'good', ic: 'check', t: LS.hint ? "To'g'ri!" : ["Ajoyib, to'g'ri!", "Zo'r! Aynan shu yurish.", "To'g'ri topdingiz!"][Math.floor(Math.random() * 3)], d: '' };
      lb.flash(to, 'good');
      lsRender(true, true);
      setTimeout(() => sound('good'), 140);
      return true;
    }
    const book = bookAt(LS.fens[p]);
    const ent = book && book.find((m) => m[0] === mv.san);
    LS.fb = ent
      ? { cls: 'warn', ic: 'info', t: `${mv.san} ham o'ynaladi (${pctFmt(ent[1])})`, d: (ent[4] ? ent[4] + ' ' : '') + "Lekin bu darsda boshqa yurishni o'rganamiz — yana urinib ko'ring." }
      : { cls: 'bad', ic: 'x', t: `${mv.san} — bu yurish emas`, d: "Yana urinib ko'ring yoki «Maslahat» tugmasini bosing." };
    sound('bad');
    lb.shake();
    lb.flash(to, 'bad');
    setTimeout(() => lsRender(true, false), 60);
    return false;
  }

  /* =====================================================================
     ERKIN DOSKA
     ===================================================================== */
  const SB = { start: START, sans: [], fens: [START], moves: [], cursor: 0, orient: 'w', autoFlip: store.get('sb_autoflip', false) };
  function sbLoad(sans, orient, start) {
    SB.start = start || START;
    const r = playLine(sans, SB.start);
    SB.sans = r.moves.map((m) => m.san); SB.moves = r.moves; SB.fens = r.fens;
    SB.cursor = SB.sans.length;
    if (orient) SB.orient = orient;
  }
  const sbGame = () => new Chess(SB.fens[SB.cursor]);
  function enterSandbox() {
    mode = 'sandbox';
    board.setOrientation(SB.orient);
    ctrl.canMove = (sq) => canMoveGame(ctrl.game, sq);
    ctrl.onMove = sbOnMove;
    renderControls([
      ['first', 'Boshi', () => sbGo(0)], ['prev', 'Orqaga', () => sbGo(SB.cursor - 1)],
      ['next', 'Oldinga', () => sbGo(SB.cursor + 1)], ['last', 'Oxiri', () => sbGo(SB.sans.length)],
      ['flip', 'Aylantirish', () => { board.flip(); SB.orient = board.orient; }],
      ['reset', 'Yangi', () => { sbLoad([], null, START); sbRefresh(true); }]
    ]);
    sbRefresh(false);
  }
  function sbOnMove(from, to, promo) {
    const g = sbGame();
    const mv = g.move({ from, to, promotion: promo || 'q' });
    if (!mv) return false;
    if (SB.sans[SB.cursor] === mv.san) SB.cursor++;
    else {
      SB.sans = SB.sans.slice(0, SB.cursor).concat(mv.san);
      SB.moves = SB.moves.slice(0, SB.cursor).concat(mv);
      SB.fens = SB.fens.slice(0, SB.cursor + 1).concat(g.fen());
      SB.cursor++;
    }
    moveSound(mv, g);
    sbRefresh(true, true);
    if (SB.autoFlip && !g.game_over()) setTimeout(() => { board.flip(); SB.orient = board.orient; }, 380);
    return true;
  }
  function sbGo(i) {
    i = Math.max(0, Math.min(SB.sans.length, i));
    if (i === SB.cursor) return;
    const fwd = i === SB.cursor + 1;
    SB.cursor = i;
    if (fwd) moveSound(SB.moves[i - 1], sbGame());
    sbRefresh(true, fwd);
  }
  function sbRefresh(animate, fresh) {
    if (mode !== 'sandbox') return;
    const g = sbGame();
    ctrl.game = g;
    const lm = SB.cursor > 0 ? SB.moves[SB.cursor - 1] : null;
    board.setAutoArrows([]);
    board.setPosition(SB.fens[SB.cursor], { animate, lastMove: lm ? [lm.from, lm.to] : null, check: kingSq(g) });
    const end = showEnd(board, g, !!fresh);
    setBoardTitle('', 'Erkin doska');
    const turn = g.turn();
    const tName = turn === 'w' ? 'Oq' : 'Qora';
    const status = end ? endText(end) : g.in_check() ? `${tName} qiroliga shax!` : `${tName} yuradi`;
    const cls = end ? (end.type === 'mate' ? 'win' : 'warn') : g.in_check() ? 'bad' : '';
    $('#panel').innerHTML = `
      <div class="card"><div class="card-t" style="font-size:17px">${icon('grid')}Erkin doska</div><div class="sub" style="margin-top:4px;font-size:13px">Statistika ham, dars ham yo'q — ikkala tomon uchun erkin yuring va g'oyalaringizni sinab ko'ring.</div></div>
      <div class="status ${cls}"><div class="st-ico">${end ? icon(end.type === 'mate' ? 'trophy' : 'info') : `<span class="disc big ${turn}"></span>`}</div><div><div class="st-t">${esc(status)}</div><div class="st-d">${SB.cursor ? SB.cursor + ' ta yurish' : 'Birinchi yurishni qiling'}</div></div></div>
      <div class="card"><div class="card-h"><div class="card-t">${icon('list')}Yurishlar</div><span class="sub"><span class="kbd">←</span> <span class="kbd">→</span></span></div><div class="notation" id="sb-not">${notationOf(SB.sans, SB.cursor, 'data-sply')}</div>
        <div class="btn-row" style="margin-top:14px"><button class="btn sm" id="sb-undo" ${SB.cursor ? '' : 'disabled'}>${icon('prev')}Qaytarish</button><button class="btn sm" id="sb-ex" ${SB.start === START ? '' : 'disabled'}>${icon('compass')}Statistikasi</button><button class="btn sm" id="sb-copy">${icon('copy')}PGN / FEN</button></div></div>
      <div class="card"><div class="toggles"><div class="trow"><div class="tl"><b>Har yurishdan keyin aylantirish</b><span>Ikki kishi bitta qurilmada o'ynashi uchun</span></div><button class="switch ${SB.autoFlip ? 'on' : ''}" id="sb-af" aria-label="Aylantirish"></button></div></div>
        <div class="field" style="margin:12px 0 0"><label>Pozitsiyani FEN orqali yuklash</label><div style="display:flex;gap:8px"><input type="text" id="sb-fen" placeholder="rnbqkbnr/pppppppp/8/8/…"><button class="btn" id="sb-fen-go">Yuklash</button></div></div></div>`;
    const nt = $('#sb-not'), cur = $('#sb-not .m.cur');
    if (nt && cur) nt.scrollTop = Math.max(0, cur.offsetTop - nt.clientHeight / 2);
    $$('[data-sply]').forEach((el) => (el.onclick = () => sbGo(+el.dataset.sply)));
    $('#sb-undo').onclick = () => {
      if (!SB.cursor) return;
      SB.cursor--; SB.sans.length = SB.cursor; SB.moves.length = SB.cursor; SB.fens.length = SB.cursor + 1;
      sound('move'); sbRefresh(true);
    };
    $('#sb-ex').onclick = () => { exLoad(SB.sans.slice(0, SB.cursor), null, SB.orient); go('explore'); };
    $('#sb-copy').onclick = () => {
      const txt = (SB.cursor ? movesText(SB.sans.slice(0, SB.cursor)) + '\n' : '') + SB.fens[SB.cursor];
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('Nusxalandi'), () => toast(txt, 5000));
    };
    $('#sb-af').onclick = () => { SB.autoFlip = !SB.autoFlip; store.set('sb_autoflip', SB.autoFlip); sbRefresh(false); };
    $('#sb-fen-go').onclick = () => {
      const f = $('#sb-fen').value.trim();
      const v = new Chess().validate_fen(f);
      if (!v.valid) { toast("FEN noto'g'ri: " + v.error, 3500); return; }
      sbLoad([], new Chess(f).turn(), f); board.setOrientation(SB.orient); sbRefresh(true); toast('Pozitsiya yuklandi');
    };
  }

  /* =====================================================================
     SOZLAMALAR
     ===================================================================== */
  function openSettings() {
    const mr = $('#modal-root');
    const draw = () => {
      const set = PIECE_SETS;
      mr.innerHTML = `<div class="modal-bg" id="m-bg"><div class="modal" role="dialog" aria-label="Sozlamalar">
        <div class="modal-h"><h2>Sozlamalar</h2><button class="icon-btn" id="m-close">${icon('x')}</button></div>
        <div class="modal-b">
          <div class="set-sec"><h3>Interfeys mavzusi</h3><div class="uithemes">${Object.entries(UI_THEMES).map(([k, t]) => `<div class="uitheme ${S.ui === k ? 'on' : ''}" data-ui="${k}"><div class="prev" style="background:${t.c[0]}"><i style="background:${t.c[1]}"></i><i style="background:${t.c[2]};flex:.4"></i></div>${t.name}</div>`).join('')}</div></div>
          <div class="set-sec"><h3>Doska</h3><div class="swatches">${Object.entries(BOARD_THEMES).map(([k, t]) => `<div class="swatch ${S.board === k ? 'on' : ''}" data-board="${k}"><div class="sw-b" style="background-image:${t.texture ? t.texture + ',' : ''}conic-gradient(${t.dark} 0 25%, ${t.light} 0 50%, ${t.dark} 0 75%, ${t.light} 0);background-size:100% 100%,50% 50%"></div>${t.name}</div>`).join('')}</div></div>
          <div class="set-sec"><h3>Figuralar</h3><div class="swatches">${Object.keys(set).map((k) => `<div class="swatch ${S.pieces === k ? 'on' : ''}" data-pieces="${k}"><div class="sw-p"><img src="${set[k].wN}" alt=""><img src="${set[k].bQ}" alt=""></div>${PIECE_NAMES[k] || k}</div>`).join('')}</div></div>
          <div class="set-sec"><h3>Ovoz to'plami</h3><div class="snd-grid">${Object.entries(SOUND_NAMES).filter(([k]) => k === 'synth' || (window.SOUND_SETS && SOUND_SETS[k])).map(([k, n]) => `<button class="snd ${S.soundSet === k ? 'on' : ''}" data-snd="${k}">${icon('play')}<span>${n}</span></button>`).join('')}</div>
            <div class="sub" style="margin-top:8px;font-size:11.5px">Bosing — ovoz eshittiriladi. Ovozlar: lichess.org (Enigmahack, EdinburghCollective).</div></div>
          <div class="set-sec"><h3>Doska sozlamalari</h3><div class="toggles">
            ${[['sound', 'Ovoz', 'Yurish, olish va shax ovozlari'], ['coords', 'Koordinatalar', 'Doska chetidagi harflar va raqamlar'], ['dots', 'Mumkin yurishlar', 'Figurani tanlaganda nuqtalar'], ['arrows', 'Statistika strelkalari', 'Kashfiyotda eng mashhur yurishlar strelkasi']].map(([k, t, d]) => `<div class="trow"><div class="tl"><b>${t}</b><span>${d}</span></div><button class="switch ${S[k] ? 'on' : ''}" data-tg="${k}" aria-label="${t}"></button></div>`).join('')}
            <div class="trow"><div class="tl"><b>Ovoz balandligi</b><span id="vol-l">${S.volume}%</span></div><input type="range" min="0" max="100" step="5" value="${S.volume}" id="vol-r"></div>
            <div class="trow"><div class="tl"><b>Animatsiya tezligi</b><span>${S.anim === 0 ? "O'chirilgan" : S.anim + ' ms'}</span></div><input type="range" min="0" max="400" step="20" value="${S.anim}" id="anim-r"></div>
          </div></div>
          <div class="set-sec"><h3>Jonli statistika (Lichess)</h3>
            <div class="sub" style="margin-bottom:10px">Lichess ochiq bazasidan haqiqiy foizlar va o'yinlar sonini olish uchun shaxsiy token kerak. Uni <a href="https://lichess.org/account/oauth/token" target="_blank" rel="noopener">lichess.org/account/oauth/token</a> sahifasida (hech qanday ruxsatsiz) yarating. Token faqat shu brauzerda saqlanadi.</div>
            <div style="display:flex;gap:8px"><input type="password" id="tok" placeholder="lip_xxxxxxxxxxxxxxxx" value="${esc(S.token)}"><button class="btn" id="tok-save">Saqlash</button></div>
            <div class="seg" style="margin-top:10px"><button data-db="lichess" class="${S.liveDb === 'lichess' ? 'on' : ''}">Havaskorlar (1600–2500)</button><button data-db="masters" class="${S.liveDb === 'masters' ? 'on' : ''}">Ustalar</button></div>
          </div>
          <div class="set-sec"><h3>Ma'lumotlar</h3><button class="btn" id="reset-prog">${icon('reset')}Masalalar va mashq natijalarini tozalash</button></div>
        </div></div></div>`;
      $('#m-close').onclick = close;
      $('#m-bg').onclick = (e) => { if (e.target.id === 'm-bg') close(); };
      $$('[data-ui]', mr).forEach((el) => (el.onclick = () => { S.ui = el.dataset.ui; upd(); }));
      $$('[data-board]', mr).forEach((el) => (el.onclick = () => { S.board = el.dataset.board; upd(); }));
      $$('[data-pieces]', mr).forEach((el) => (el.onclick = () => { S.pieces = el.dataset.pieces; upd(true); }));
      $$('[data-tg]', mr).forEach((el) => (el.onclick = () => { S[el.dataset.tg] = !S[el.dataset.tg]; upd(true); }));
      $$('[data-db]', mr).forEach((el) => (el.onclick = () => { S.liveDb = el.dataset.db; liveCache.clear(); upd(true); }));
      $$('[data-snd]', mr).forEach((el) => (el.onclick = () => {
        S.soundSet = el.dataset.snd; S.sound = true; saveSettings(); loadSet(S.soundSet);
        $$('[data-snd]', mr).forEach((x) => x.classList.toggle('on', x === el));
        const sw = $('[data-tg="sound"]', mr); if (sw) sw.classList.add('on');
        setTimeout(() => sound('move'), 60); setTimeout(() => sound('capture'), 420); setTimeout(() => sound('check'), 800);
      }));
      $('#vol-r').oninput = (e) => { S.volume = +e.target.value; saveSettings(); $('#vol-l').textContent = S.volume + '%'; };
      $('#vol-r').onchange = () => sound('move');
      $('#anim-r').oninput = (e) => { S.anim = +e.target.value; saveSettings(); applySettings(); e.target.closest('.trow').querySelector('.tl span').textContent = S.anim === 0 ? "O'chirilgan" : S.anim + ' ms'; };
      $('#tok-save').onclick = () => { S.token = $('#tok').value.trim(); if (S.token) S.live = true; liveCache.clear(); saveSettings(); toast(S.token ? 'Token saqlandi — jonli statistika yoqildi' : "Token o'chirildi"); rerender(); };
      $('#reset-prog').onclick = () => { if (!confirm('Barcha natijalar o\'chirilsinmi?')) return; PZ.solved.clear(); store.set('pz_solved', []); PR.best = 0; store.set('pr_best', 0); toast('Natijalar tozalandi'); rerender(); };
    };
    const upd = (full) => { saveSettings(); applySettings(); draw(); if (full) rerender(); };
    const close = () => { mr.innerHTML = ''; document.removeEventListener('keydown', esck); };
    const esck = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', esck);
    draw();
  }
  function rerender() {
    const h = location.hash.slice(1).split('/')[0] || 'home';
    if (lb) lb.root.classList.toggle('no-coords', !S.coords);
    if (h === 'course') { lsRender(false); return; }
    if (h === 'sandbox') { sbRefresh(false); return; }
    if (h === 'explore') exRefresh(false);
    else if (h === 'practice') { if (PR.phase === 'setup') prSetupView(); else { prRenderBoard(false); prPanel(); } }
    else if (h === 'puzzles') { pzRenderBoard(false); pzPanel(); }
    else handleRoute();
  }

  /* ======================= KLAVIATURA ======================= */
  document.addEventListener('keydown', (e) => {
    if ((e.target && e.target.matches && e.target.matches('input, select, textarea')) || $('#modal-root').children.length) return;
    if ($('#view-lesson').classList.contains('active')) {
      if (e.key === 'ArrowRight' && !LS.ask && LS.i < LS.steps.length - 1) { lsStopAuto(); lsGoto(LS.i + 1, true); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { lsStopAuto(); lsGoto(LS.i - 1, false); e.preventDefault(); }
      else if (e.key === 'f') lb.flip();
      return;
    }
    if (mode === 'sandbox' && $('#view-play').classList.contains('active')) {
      if (e.key === 'ArrowLeft') { sbGo(SB.cursor - 1); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { sbGo(SB.cursor + 1); e.preventDefault(); }
    }
    if (mode === 'explore' && $('#view-play').classList.contains('active')) {
      if (e.key === 'ArrowLeft') { exGo(EX.cursor - 1); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { exGo(EX.cursor + 1); e.preventDefault(); }
      else if (e.key === 'Home') exGo(0);
      else if (e.key === 'End') exGo(EX.sans.length);
    }
    if (e.key === 'f' && $('#view-play').classList.contains('active')) { board.flip(); if (mode === 'explore') { EX.orient = board.orient; exRenderArrows(); } }
  });

  /* ======================= ISHGA TUSHIRISH ======================= */
  function init() {
    const saved = store.get('ex_moves', null);
    if (saved && Array.isArray(saved.sans)) exLoad(saved.sans, saved.cursor, saved.orient);
    buildNav();
    $('.nav-foot').textContent = `${ECO_LIST.length} nomlangan debyut · ${COURSES.length} qo'llanma · ${PUZZLES.length} masala`;
    initBoard();
    applySettings();
    try { loadSet(S.soundSet); } catch (e) { }
    document.addEventListener('pointerdown', () => { try { audio(); } catch (e) { } }, { once: true, capture: true });
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('beforeunload', () => store.set('ex_moves', { sans: EX.sans, cursor: EX.cursor, orient: EX.orient }));
    handleRoute();
  }
  init();
})();
