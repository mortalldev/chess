/* Yengil, tez shaxmat doskasi: drag & drop, bosib yurish, animatsiya, strelkalar. */
(function () {
  'use strict';
  const FILES = 'abcdefgh';
  const sqName = (f, r) => FILES[f] + (r + 1);
  const sqFR = (sq) => [sq.charCodeAt(0) - 97, +sq[1] - 1];

  function parseFen(fen) {
    const out = {};
    const rows = fen.split(' ')[0].split('/');
    for (let i = 0; i < 8; i++) {
      let f = 0;
      for (const ch of rows[i]) {
        if (/\d/.test(ch)) { f += +ch; continue; }
        const color = ch === ch.toUpperCase() ? 'w' : 'b';
        out[sqName(f, 7 - i)] = color + ch.toUpperCase();
        f++;
      }
    }
    return out;
  }

  class Board {
    constructor(root, opts = {}) {
      this.root = root;
      this.opts = opts;
      this.orient = 'w';
      this.pieces = new Map();
      this.sqEls = {};
      this.selected = null;
      this.destList = [];
      this.userArrows = [];
      this.userMarks = new Set();
      this.autoArrows = [];
      this.hl = { lm: [], chk: null };
      root.classList.add('board');
      root.innerHTML = '<div class="b-layer b-squares"></div><div class="b-layer b-coords"></div><div class="b-layer b-pieces"></div><svg class="b-arrows" viewBox="0 0 8 8" preserveAspectRatio="none"></svg><div class="b-promo hidden"></div>';
      this.sqLayer = root.querySelector('.b-squares');
      this.coordLayer = root.querySelector('.b-coords');
      this.pcLayer = root.querySelector('.b-pieces');
      this.svg = root.querySelector('.b-arrows');
      this.promo = root.querySelector('.b-promo');
      for (let r = 0; r < 8; r++) for (let f = 0; f < 8; f++) {
        const d = document.createElement('div');
        d.className = 'sq';
        const n = sqName(f, r);
        d.dataset.sq = n;
        this.sqEls[n] = d;
        this.sqLayer.appendChild(d);
      }
      this.layout();
      this.bind();
    }

    /* ---------- geometriya ---------- */
    colRow(sq) {
      const [f, r] = sqFR(sq);
      return this.orient === 'w' ? [f, 7 - r] : [7 - f, r];
    }
    layout() {
      for (const sq in this.sqEls) {
        const [c, r] = this.colRow(sq);
        const s = this.sqEls[sq].style;
        s.left = c * 12.5 + '%'; s.top = r * 12.5 + '%';
      }
      let html = '';
      for (let i = 0; i < 8; i++) {
        const fileSq = this.orient === 'w' ? sqName(i, 0) : sqName(7 - i, 7);
        const [fc, fr] = this.colRow(fileSq);
        const [ff, frr] = sqFR(fileSq);
        const lightF = (ff + frr) % 2 === 1;
        html += `<span class="coord file ${lightF ? 'on-light' : 'on-dark'}" style="left:${fc * 12.5}%;top:${fr * 12.5}%;width:12.5%;height:12.5%;text-align:right;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 4% 1% 0">${fileSq[0]}</span>`;
        const rankSq = this.orient === 'w' ? sqName(0, i) : sqName(7, i);
        const [rc, rr] = this.colRow(rankSq);
        const [rf, rrr] = sqFR(rankSq);
        const lightR = (rf + rrr) % 2 === 1;
        html += `<span class="coord rank ${lightR ? 'on-light' : 'on-dark'}" style="left:${rc * 12.5}%;top:${rr * 12.5}%;padding:1% 0 0 4%">${rankSq[1]}</span>`;
      }
      this.coordLayer.innerHTML = html;
      for (const [sq, el] of this.pieces) this.place(el, sq);
      this.drawArrows();
    }
    setOrientation(o) {
      if (o === this.orient) return;
      this.orient = o;
      this.layout();
    }
    flip() { this.setOrientation(this.orient === 'w' ? 'b' : 'w'); }
    place(el, sq) {
      const [c, r] = this.colRow(sq);
      el.style.transform = `translate(${c * 100}%, ${r * 100}%)`;
    }
    sqAt(e) {
      const rect = this.root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width, y = (e.clientY - rect.top) / rect.height;
      if (x < 0 || y < 0 || x >= 1 || y >= 1) return null;
      const c = Math.floor(x * 8), r = Math.floor(y * 8);
      return this.orient === 'w' ? sqName(c, 7 - r) : sqName(7 - c, r);
    }

    /* ---------- pozitsiya ---------- */
    setPosition(fen, o = {}) {
      this.fen = fen;
      const next = parseFen(fen);
      const animate = o.animate !== false;
      const keep = new Map();
      const leftovers = [];
      for (const [sq, el] of this.pieces) {
        if (next[sq] === el.dataset.p) { keep.set(sq, el); el.classList.remove('drag'); this.place(el, sq); }
        else leftovers.push([sq, el]);
      }
      for (const sq in next) {
        if (keep.has(sq)) continue;
        const code = next[sq];
        let best = -1, bd = 1e9;
        const [tf, tr] = sqFR(sq);
        leftovers.forEach(([osq, el], i) => {
          if (!el || el.dataset.p !== code) return;
          const [of, or] = sqFR(osq);
          const d = Math.abs(of - tf) + Math.abs(or - tr);
          if (d < bd) { bd = d; best = i; }
        });
        if (best >= 0) {
          const el = leftovers[best][1];
          leftovers[best][1] = null;
          if (!animate) el.style.transition = 'none';
          el.classList.remove('drag');
          this.place(el, sq);
          if (!animate) { void el.offsetWidth; el.style.transition = ''; }
          keep.set(sq, el);
        } else {
          const el = document.createElement('div');
          el.className = 'pc ' + code;
          el.dataset.p = code;
          el.style.transition = 'none';
          this.place(el, sq);
          this.pcLayer.appendChild(el);
          void el.offsetWidth;
          el.style.transition = '';
          if (animate) el.classList.add('appear');
          keep.set(sq, el);
        }
      }
      for (const [, el] of leftovers) {
        if (!el) continue;
        if (animate) { el.classList.add('fade'); setTimeout(() => el.remove(), 260); }
        else el.remove();
      }
      this.pieces = keep;
      this.setHighlights(o.lastMove || null, o.check || null);
      this.deselect();
      this.hideOverlay();
      this.setMated(null);
    }
    setMated(sq) {
      if (this.matedSq) this.sqEls[this.matedSq].classList.remove('mated');
      this.matedSq = sq;
      if (sq) this.sqEls[sq].classList.add('mated');
    }
    showOverlay(html, cls) {
      if (!this.ov) {
        this.ov = document.createElement('div');
        this.root.appendChild(this.ov);
        this.ov.addEventListener('pointerdown', (e) => { e.stopPropagation(); this.hideOverlay(); });
      }
      this.ov.className = 'b-over ' + (cls || '');
      this.ov.innerHTML = html;
      void this.ov.offsetWidth;
      this.ov.classList.add('show');
    }
    hideOverlay() { if (this.ov) this.ov.className = 'b-over'; }
    setHighlights(lm, chk) {
      for (const sq of this.hl.lm) this.sqEls[sq].classList.remove('lm');
      if (this.hl.chk) this.sqEls[this.hl.chk].classList.remove('chk');
      this.hl.lm = lm ? lm.slice() : [];
      this.hl.chk = chk;
      for (const sq of this.hl.lm) this.sqEls[sq].classList.add('lm');
      if (chk) this.sqEls[chk].classList.add('chk');
    }
    flash(sq, kind) {
      const el = this.sqEls[sq];
      if (!el) return;
      el.classList.remove('good', 'bad');
      void el.offsetWidth;
      el.classList.add(kind);
      setTimeout(() => el.classList.remove(kind), 750);
    }
    shake() {
      this.root.classList.remove('shake');
      void this.root.offsetWidth;
      this.root.classList.add('shake');
    }

    /* ---------- tanlash ---------- */
    select(sq) {
      this.deselect();
      this.selected = sq;
      this.sqEls[sq].classList.add('sel');
      this.destList = this.opts.dests ? this.opts.dests(sq) : [];
      if (this.opts.showDests && !this.opts.showDests()) return;
      for (const d of this.destList) {
        const el = this.sqEls[d];
        el.classList.add('dest');
        if (this.pieces.has(d) || this.isEp(sq, d)) el.classList.add('cap');
      }
    }
    isEp(from, to) {
      const p = this.pieces.get(from);
      return p && p.dataset.p[1] === 'P' && from[0] !== to[0] && !this.pieces.has(to);
    }
    deselect() {
      if (this.selected) this.sqEls[this.selected].classList.remove('sel');
      for (const d of this.destList) this.sqEls[d].classList.remove('dest', 'cap');
      this.selected = null;
      this.destList = [];
    }

    /* ---------- hodisalar ---------- */
    bind() {
      const root = this.root;
      root.addEventListener('contextmenu', (e) => e.preventDefault());
      root.addEventListener('pointerdown', (e) => this.onDown(e));
      root.addEventListener('pointermove', (e) => this.onMove(e));
      root.addEventListener('pointerup', (e) => this.onUp(e));
      root.addEventListener('pointercancel', () => this.cancelDrag());
      window.addEventListener('resize', () => { if (this.drag) this.cancelDrag(); });
    }
    onDown(e) {
      if (this.promoting) return;
      const sq = this.sqAt(e);
      if (!sq) return;
      if (e.button === 2) {
        this.rdrag = { from: sq };
        return;
      }
      if (e.button !== 0) return;
      if (this.userArrows.length || this.userMarks.size) this.clearUser();
      if (this.selected && this.destList.includes(sq)) {
        const from = this.selected;
        this.deselect();
        this.attempt(from, sq);
        return;
      }
      const el = this.pieces.get(sq);
      if (el && this.opts.canMove && this.opts.canMove(sq)) {
        const was = this.selected === sq;
        this.select(sq);
        const rect = this.root.getBoundingClientRect();
        this.drag = { sq, el, x0: e.clientX, y0: e.clientY, moved: false, rect, was, hover: null };
        try { this.root.setPointerCapture(e.pointerId); } catch (_) { }
        e.preventDefault();
      } else {
        this.deselect();
      }
    }
    onMove(e) {
      const d = this.drag;
      if (!d) return;
      if (!d.moved) {
        if (Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < 4) return;
        d.moved = true;
        d.el.classList.add('drag');
      }
      d.px = e.clientX; d.py = e.clientY;
      if (!d.raf) d.raf = requestAnimationFrame(() => {
        d.raf = 0;
        if (this.drag !== d) return;
        const size = d.rect.width / 8;
        const x = d.px - d.rect.left - size / 2, y = d.py - d.rect.top - size / 2;
        d.el.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
        const over = this.sqAt({ clientX: d.px, clientY: d.py });
        if (over !== d.hover) {
          if (d.hover) this.sqEls[d.hover].classList.remove('hover');
          d.hover = over;
          if (over && this.destList.includes(over)) this.sqEls[over].classList.add('hover');
          else d.hover = null;
        }
      });
    }
    onUp(e) {
      if (this.rdrag) {
        const to = this.sqAt(e);
        const from = this.rdrag.from;
        this.rdrag = null;
        if (!to) return;
        if (to === from) this.toggleMark(from);
        else this.toggleArrow(from, to);
        return;
      }
      const d = this.drag;
      if (!d) return;
      this.drag = null;
      if (d.raf) cancelAnimationFrame(d.raf);
      if (d.hover) this.sqEls[d.hover].classList.remove('hover');
      if (!d.moved) {
        if (d.was) this.deselect();
        return;
      }
      const to = this.sqAt(e);
      d.el.classList.remove('drag');
      if (to && to !== d.sq && this.destList.includes(to)) {
        this.deselect();
        // figura tushgan joyida qoladi, keyin pozitsiya yangilanadi
        d.el.style.transition = 'none';
        this.place(d.el, to);
        void d.el.offsetWidth;
        d.el.style.transition = '';
        this.attempt(d.sq, to, true);
      } else {
        this.place(d.el, d.sq);
        if (to === d.sq) return; // tanlov saqlanadi
        this.deselect();
      }
    }
    cancelDrag() {
      const d = this.drag;
      if (!d) return;
      this.drag = null;
      d.el.classList.remove('drag');
      this.place(d.el, d.sq);
      this.deselect();
    }
    attempt(from, to, dropped) {
      const el = this.pieces.get(from);
      const code = el && el.dataset.p;
      if (code && code[1] === 'P' && (to[1] === '8' || to[1] === '1')) {
        this.askPromotion(code[0], (p) => {
          if (!p) { this.setPosition(this.fen, { animate: true, lastMove: this.hl.lm, check: this.hl.chk }); return; }
          this.opts.onMove && this.opts.onMove(from, to, p);
        });
        return;
      }
      const ok = this.opts.onMove && this.opts.onMove(from, to);
      if (ok === false && dropped && el) this.place(el, from);
    }
    askPromotion(color, cb) {
      this.promoting = true;
      const pr = this.promo;
      pr.innerHTML = '';
      for (const p of ['q', 'n', 'r', 'b']) {
        const b = document.createElement('button');
        b.className = 'pc-btn';
        b.style.backgroundImage = `url("${(window.PIECE_URL || {})[color + p.toUpperCase()]}")`;
        b.title = { q: 'Ferz', n: 'Ot', r: 'Rok', b: 'Fil' }[p];
        b.onclick = (ev) => { ev.stopPropagation(); done(p); };
        pr.appendChild(b);
      }
      const done = (p) => { pr.classList.add('hidden'); pr.onpointerdown = null; this.promoting = false; cb(p); };
      pr.onpointerdown = (ev) => { if (ev.target === pr) { ev.stopPropagation(); done(null); } };
      pr.classList.remove('hidden');
    }

    /* ---------- strelkalar va belgilar ---------- */
    clearUser() {
      this.userArrows = [];
      for (const s of this.userMarks) this.sqEls[s].classList.remove('mark');
      this.userMarks.clear();
      this.drawArrows();
    }
    toggleMark(sq) {
      if (this.userMarks.has(sq)) { this.userMarks.delete(sq); this.sqEls[sq].classList.remove('mark'); }
      else { this.userMarks.add(sq); this.sqEls[sq].classList.add('mark'); }
    }
    toggleArrow(from, to) {
      const i = this.userArrows.findIndex((a) => a.from === from && a.to === to);
      if (i >= 0) this.userArrows.splice(i, 1);
      else this.userArrows.push({ from, to, color: 'rgba(21,120,27,.85)', w: 0.17 });
      this.drawArrows();
    }
    setAutoArrows(list) {
      this.autoArrows = list || [];
      this.drawArrows();
    }
    center(sq) {
      const [c, r] = this.colRow(sq);
      return [c + 0.5, r + 0.5];
    }
    arrowSvg(a) {
      const [x1, y1] = this.center(a.from), [x2, y2] = this.center(a.to);
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
      if (!len) return '';
      const ux = dx / len, uy = dy / len, px = -uy, py = ux;
      const w = a.w || 0.16, hw = w * 2.3, hl = w * 2.6;
      const sx = x1 + ux * 0.28, sy = y1 + uy * 0.28;
      const ex = x2 - ux * 0.1, ey = y2 - uy * 0.1;
      const bx = ex - ux * hl, by = ey - uy * hl;
      const p = [
        [sx + px * w / 2, sy + py * w / 2], [bx + px * w / 2, by + py * w / 2], [bx + px * hw / 2, by + py * hw / 2],
        [ex, ey], [bx - px * hw / 2, by - py * hw / 2], [bx - px * w / 2, by - py * w / 2], [sx - px * w / 2, sy - py * w / 2]
      ].map((q) => q[0].toFixed(3) + ',' + q[1].toFixed(3)).join(' ');
      return `<polygon points="${p}" fill="${a.color}" opacity="${a.op == null ? 1 : a.op}"/>`;
    }
    drawArrows() {
      let s = '';
      for (const a of this.autoArrows) s += this.arrowSvg(a);
      for (const a of this.userArrows) s += this.arrowSvg(a);
      this.svg.innerHTML = s;
    }
  }

  window.Board = Board;
  window.parseFen = parseFen;
})();
