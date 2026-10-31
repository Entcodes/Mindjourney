/* ============ 心灵方块书屋 · 主逻辑 ============ */
(function () {
  'use strict';

  var KEY = 'mindcraft-library-v1';
  var INTERVALS = [1, 2, 4, 7, 15, 30];
  var DAILY_ASK_LIMIT = 10;
  var EXAM_SIZE = 10;

  var THEME = {
    hat: '#c76c8c', hatDark: '#a4526f', hatBrim: '#8c3f5c', ribbon: '#f7d9e3',
    hair: '#6b4b3a', skin: '#ffe0c8', eye: '#3a2438', mouth: '#d97b8b',
    outline: '#3a2438', dress: '#7cbf6a', apron: '#fff6ec', pocketDark: '#c48f60', hand: '#ffe0c8',
    letterEdge: '#8a5a3c', letterPaper: '#fff7e6', letterShade: '#e6d2b3', letterText: '#b79a72', letterWax: '#e0567a'
  };

  var st = load();
  var el = {};
  var examSession = null;   // {ids, i, picks, practice}
  var memFilter = 'due';

  /* ---------------- 存储 ---------------- */
  function defaults() {
    return {
      lang: 'zh', firstTime: true, read: {}, memory: [], quota: { date: '', used: 0 },
      exams: [], examToday: null, moods: [], letters: [], nextLetter: 0, chats: [], defaultIdx: 0
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var d = JSON.parse(raw);
      var base = defaults();
      for (var k in base) if (d[k] === undefined) d[k] = base[k];
      return d;
    } catch (e) { return defaults(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }

  /* ---------------- 小工具 ---------------- */
  function t(k) { return (window.I18N[st.lang] && window.I18N[st.lang][k]) || k; }
  function L(o) { if (!o) return ''; return o[st.lang] !== undefined ? o[st.lang] : (o.zh || o.en || ''); }
  function today() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function shiftDate(days, base) {
    var s = base || today(); var p = s.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + days);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function shuffled(arr, n) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a.slice(0, n);
  }
  function mk(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }
  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hide');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.toast.classList.add('hide'); }, 2200);
  }
  function bookById(id) {
    for (var i = 0; i < window.BOOKS.length; i++) if (window.BOOKS[i].id === id) return window.BOOKS[i];
    return null;
  }
  function fmtDate(s) { return s; }

  /* ---------------- 顶栏 / 静态文案 ---------------- */
  function applyStatic() {
    document.documentElement.lang = st.lang === 'zh' ? 'zh' : 'en';
    document.title = t('appTitle') + ' · MindCraft Library';
    el.appTitle.textContent = t('appTitle');
    el.appSub.textContent = st.lang === 'zh'
      ? 'MindCraft Library · 心理学家与十五本书'
      : '心灵方块书屋 · a psychologist and fifteen books';
    el.shelfTitle.textContent = t('shelfName');
    el.shelfHint.textContent = t('shelfHint');
    el.label1.textContent = t('bookShelf1');
    el.label2.textContent = t('bookShelf2');
    el.label3.textContent = t('bookShelf3');
    el.hatHint.textContent = t('hatHint');
    el.tBook.textContent = t('tabBook');
    el.tMemory.textContent = t('tabMemory');
    el.tExam.textContent = t('tabExam');
    el.tAsk.textContent = t('tabAsk');
    el.tLetters.textContent = t('tabLetters');
    el.kDate.textContent = t('today');
    el.kAsk.textContent = t('asksLeft');
    el.kExam.textContent = t('examState');
    el.kMood.textContent = t('moodToday');
    el.vLang.textContent = t('langName');
    el.safetyBox.textContent = t('safetyTitle') + '：' + t('safety');
    el.footNote.textContent = t('footerNote');
    el.resetBtn.textContent = t('resetTitle');
    el.modalClose.textContent = st.lang === 'zh' ? '合上' : 'Close';
    el.vDate.textContent = fmtDate(today());
    updateChips();
  }

  function updateChips() {
    var used = (st.quota.date === today()) ? st.quota.used : 0;
    el.vAsk.textContent = (DAILY_ASK_LIMIT - used);
    var done = null;
    for (var i = 0; i < st.exams.length; i++) if (st.exams[i].date === today()) done = st.exams[i];
    el.vExam.textContent = done ? (t('examDone') + ' ' + done.score + '/' + done.total) : t('examTodo');
    var m = null;
    for (var j = 0; j < st.moods.length; j++) if (st.moods[j].date === today()) m = st.moods[j];
    el.vMood.textContent = m ? groupName(m.group) : t('moodNone');
  }

  function groupName(key) {
    var g = bookById('moodmap');
    if (!g) return key;
    for (var i = 0; i < g.groups.length; i++) if (g.groups[i].key === key) return L(g.groups[i].name);
    return key;
  }

  /* ---------------- 人物精灵 ---------------- */
  function buildPerson() {
    var scale = 6;
    var parts = window.Pixel.person(scale, THEME);
    clear(el.profStack);
    parts.hat.className = 'px-sprite hat';
    parts.hat.title = t('hatHint');
    parts.body.style.marginTop = (-2 * scale) + 'px';
    el.profStack.appendChild(parts.hat);
    el.profStack.appendChild(parts.body);
    parts.hat.addEventListener('click', onHat);
  }

  function onHat() {
    st.lang = st.lang === 'zh' ? 'en' : 'zh';
    var idx = st.nextLetter % window.LETTERS.length;
    st.nextLetter++;
    if (st.letters.indexOf(idx) === -1) st.letters.push(idx);
    save();
    dropLetter(function () { showLetter(idx, true); });
    applyStatic();
    buildPerson();
    renderAll();
  }

  function dropLetter(done) {
    clear(el.letterDrop);
    el.letterDrop.appendChild(window.Pixel.letter(4, THEME));
    el.letterDrop.classList.remove('go');
    void el.letterDrop.offsetWidth;
    el.letterDrop.classList.add('go');
    setTimeout(function () { el.letterDrop.classList.remove('go'); clear(el.letterDrop); if (done) done(); }, 1050);
  }

  function showLetter(idx, isNew) {
    var lt = window.LETTERS[idx];
    openModal((isNew ? t('letterNew') + ' · ' : '') + L(lt.title), L(lt.body));
  }

  function openModal(title, textOrNode) {
    el.modalTitle.textContent = title;
    clear(el.modalBody);
    if (typeof textOrNode === 'string') el.modalBody.textContent = textOrNode;
    else el.modalBody.appendChild(textOrNode);
    el.modal.classList.remove('hide');
  }
  function closeModal() { el.modal.classList.add('hide'); }

  /* ---------------- 书架 ---------------- */
  var selectedBook = null;

  function buildShelf() {
    [1, 2, 3].forEach(function (rowNo) {
      var host = el['row' + rowNo];
      clear(host);
      window.BOOKS.filter(function (b) { return b.shelf === rowNo; })
        .sort(function (a, b) { return a.slot - b.slot; })
        .forEach(function (b) {
          var btn = mk('button', 'book-btn');
          btn.type = 'button';
          btn.setAttribute('aria-label', L(b.title));
          btn.appendChild(window.Pixel.book(5, b.skin, !!st.read[b.id]));
          if (st.read[b.id]) {
            var badge = mk('span', 'read-badge');
            badge.appendChild(window.Pixel.icon('check', 2, '#2e7d32'));
            btn.appendChild(badge);
          }
          var tip = mk('span', 'tip', L(b.colorName) + ' · ' + L(b.title));
          btn.appendChild(tip);
          if (selectedBook && selectedBook.id === b.id) btn.classList.add('sel');
          btn.addEventListener('click', function () { selectBook(b.id); });
          host.appendChild(btn);
        });
    });
  }

  function selectBook(id) {
    selectedBook = bookById(id);
    switchTab('book');
    buildShelf();
    renderBook();
    el.panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- Tab 切换 ---------------- */
  var currentTab = 'book';
  function switchTab(name) {
    currentTab = name;
    Array.prototype.forEach.call(el.tabs.querySelectorAll('.tab'), function (b) {
      b.classList.toggle('active', b.dataset.tab === name);
    });
    ['book', 'memory', 'exam', 'ask', 'letters'].forEach(function (k) {
      el['tab' + cap(k)].classList.toggle('hide', k !== name);
    });
    renderTab(name);
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function renderTab(name) {
    if (name === 'book') renderBook();
    if (name === 'memory') renderMemory();
    if (name === 'exam') renderExam();
    if (name === 'ask') renderAsk();
    if (name === 'letters') renderLetters();
  }
  function renderAll() {
    buildShelf();
    ['book', 'memory', 'exam', 'ask', 'letters'].forEach(renderTab);
    updateChips();
  }

  /* ---------------- 书本内容渲染 ---------------- */
  function renderBook() {
    var host = el.tabBook;
    clear(host);
    if (!selectedBook) {
      var e = mk('div', 'empty', t('shelfHint'));
      host.appendChild(e);
      var go = mk('button', 'ghost', t('navIntro'));
      go.addEventListener('click', showIntro);
      host.appendChild(go);
      return;
    }
    var b = selectedBook;

    var head = mk('div', 'book-head');
    var sw = mk('div', 'swatch'); sw.style.background = b.skin.cover; head.appendChild(sw);
    var meta = mk('div');
    var h3 = mk('h3', null, L(b.colorName) + ' · ' + L(b.title));
    var sub = mk('p', 'sub', L(b.subtitle));
    var tag = mk('span', 'tagline', L(b.mood));
    meta.appendChild(h3); meta.appendChild(sub); meta.appendChild(tag);
    head.appendChild(meta);
    var mark = mk('button', 'btn mini read-toggle' + (st.read[b.id] ? ' gold' : ''));
    mark.textContent = st.read[b.id] ? ('✓ ' + t('readTag')) : t('markRead');
    mark.addEventListener('click', function () {
      if (st.read[b.id]) delete st.read[b.id]; else st.read[b.id] = true;
      save(); buildShelf(); renderBook();
    });
    head.appendChild(mark);
    host.appendChild(head);

    host.appendChild(mk('p', 'narr', L(b.intro)));

    if (b.moodMapIntro) {
      var blk0 = mk('div', 'blk');
      blk0.appendChild(mk('h4', null, 'POMS · PANAS · Circumplex · Gross'));
      blk0.appendChild(mk('div', 'why', L(b.moodMapIntro)));
      host.appendChild(blk0);
    }

    if (b.relief && b.relief.length) addSentBlock(host, t('sectionRelief'), b.relief, b);
    if (b.literature && b.literature.length) addQuoteBlock(host, t('sectionLiterature'), b.literature, b);
    if (b.cases && b.cases.length) addCaseBlock(host, t('sectionCases'), b.cases, b);
    if (b.groups && b.groups.length) addMoodBlocks(host, b);
    if (b.methods && b.methods.length) addMethodBlock(host, t('sectionMethods'), b.methods, b);
    if (b.memory && b.memory.length) addSeedBlock(host, t('sectionMemory'), b.memory, b);
  }

  function addSentBlock(host, title, items, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, title));
    items.forEach(function (s) {
      var card = mk('div', 'sent');
      card.appendChild(mk('div', 'line', L(s)));
      card.appendChild(mk('div', 'note', L(s.note)));
      var row = mk('div', 'row');
      row.appendChild(mk('span'));
      row.appendChild(addBtn({ zh: s.zh, en: s.en }, b));
      card.appendChild(row);
      blk.appendChild(card);
    });
    host.appendChild(blk);
  }

  function addQuoteBlock(host, title, items, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, title));
    items.forEach(function (q) {
      var card = mk('div', 'quote');
      card.style.borderLeftColor = b.skin.cover;
      card.appendChild(mk('div', 'q', '“' + L(q.quote) + '”'));
      card.appendChild(mk('div', 'w', L(q.work) + ' · ' + L(q.kind)));
      card.appendChild(mk('div', 'show', L(q.show)));
      var row = mk('div', 'row');
      row.style.cssText = 'display:flex;justify-content:flex-end;margin-top:6px';
      row.appendChild(addBtn({ zh: L(q.quote), en: L(q.quote) }, b));
      card.appendChild(row);
      blk.appendChild(card);
    });
    host.appendChild(blk);
  }

  function addCaseBlock(host, title, items, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, title));
    items.forEach(function (c) {
      var card = mk('div', 'quote');
      card.style.borderLeftColor = b.skin.cover;
      card.appendChild(mk('div', 'q', L(c.who) + ' — ' + L(c.feel)));
      card.appendChild(mk('div', 'show', L(c.read)));
      blk.appendChild(card);
    });
    host.appendChild(blk);
  }

  function addMethodBlock(host, title, items, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, title));
    items.forEach(function (m) {
      var card = mk('div', 'method');
      card.appendChild(mk('div', 'm-name', L(m.name)));
      card.appendChild(mk('div', 'm-src', '◈ ' + L(m.source)));
      card.appendChild(mk('div', 'm-when', (st.lang === 'zh' ? '适用场景：' : 'Fits: ') + L(m.when)));
      var ol = document.createElement('ol');
      m.steps.forEach(function (s) { ol.appendChild(mk('li', null, L(s))); });
      card.appendChild(ol);
      var row = mk('div', 'row');
      row.style.cssText = 'display:flex;justify-content:flex-end;margin-top:6px';
      row.appendChild(addBtn({ zh: L(m.name), en: L(m.name) }, b));
      card.appendChild(row);
      blk.appendChild(card);
    });
    host.appendChild(blk);
  }

  function addSeedBlock(host, title, items, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, title));
    items.forEach(function (s) { blk.appendChild(seedRow(s, b)); });
    host.appendChild(blk);
  }

  function seedRow(s, b) {
    var row = mk('div', 'seed');
    row.appendChild(mk('span', null, (st.lang === 'zh' && s.en !== s.zh) ? (L(s) + '  /  ' + s.en) : L(s)));
    row.appendChild(addBtn({ zh: s.zh, en: s.en }, b));
    return row;
  }

  function inList(text) {
    return st.memory.some(function (m) { return m.text.zh === text.zh || m.text.en === text.en; });
  }

  function addBtn(text, b) {
    var btn = mk('button', 'btn mini');
    var has = inList(text);
    btn.textContent = has ? ('✓ ' + t('addedMemory')) : t('addMemory');
    if (has) btn.classList.add('gold');
    btn.addEventListener('click', function () {
      if (inList(text)) { toast(st.lang === 'zh' ? '已经在清单里了' : 'Already in the list'); return; }
      st.memory.push({ id: 'm' + Date.now() + Math.floor(Math.random() * 999), text: text, book: b.id, box: 0, due: today(), okCount: 0, missCount: 0 });
      save();
      toast(t('memoryTitle') + ' +1');
      renderAll();
    });
    return btn;
  }

  /* ---------------- 心情地图 + 签到 ---------------- */
  function addMoodBlocks(host, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, t('sectionMoodMap')));
    b.groups.forEach(function (g) {
      var card = mk('div', 'mood-card');
      var mh = mk('div', 'mh');
      mh.appendChild(mk('span', 'poms', g.poms));
      mh.appendChild(mk('span', null, L(g.name)));
      var link = mk('button', 'ghost', '▸ ' + L(bookById(g.book).title));
      link.addEventListener('click', function () { selectBook(g.book); });
      mh.appendChild(link);
      card.appendChild(mh);
      card.appendChild(mk('div', 'fit', t('classifyResult') + ': ' + L(g.quadrant)));
      card.appendChild(mk('div', 'sign', (st.lang === 'zh' ? '表现：' : 'Looks like: ') + L(g.sign)));
      var ul = document.createElement('ul');
      g.method.forEach(function (m) { ul.appendChild(mk('li', null, L(m))); });
      card.appendChild(ul);
      card.appendChild(mk('div', 'scene', (st.lang === 'zh' ? '适用场景：' : 'Fits: ') + L(g.scene)));
      card.appendChild(mk('div', 'fit', (st.lang === 'zh' ? '调节时机：' : 'Timing: ') + L(g.fitStage)));
      var row = mk('div', 'row');
      row.style.cssText = 'display:flex;justify-content:flex-end;margin-top:6px';
      row.appendChild(addBtn({ zh: L(g.name) + ' → ' + L(g.scene), en: L(g.name) + ' → ' + L(g.scene) }, b));
      card.appendChild(row);
      blk.appendChild(card);
    });
    host.appendChild(blk);
    buildCheckin(host, b);
  }

  function buildCheckin(host, b) {
    var blk = mk('div', 'blk');
    blk.appendChild(mk('h4', null, t('sectionCheckin')));
    var box = mk('div', 'checkin');
    var grid = mk('div', 'grid');

    var lm = mk('div');
    var l1 = mk('label', null, t('valence')); l1.htmlFor = 'val';
    var r1 = document.createElement('input'); r1.type = 'range'; r1.min = '1'; r1.max = '5'; r1.value = '3'; r1.id = 'val';
    lm.appendChild(l1); lm.appendChild(r1);
    lm.appendChild(mk('div', 'note', t('valLow') + ' ← → ' + t('valHigh')));
    grid.appendChild(lm);

    var rm = mk('div');
    var l2 = mk('label', null, t('arousal')); l2.htmlFor = 'aro';
    var r2 = document.createElement('input'); r2.type = 'range'; r2.min = '1'; r2.max = '5'; r2.value = '3'; r2.id = 'aro';
    rm.appendChild(l2); rm.appendChild(r2);
    rm.appendChild(mk('div', 'note', t('aroLow') + ' ← → ' + t('aroHigh')));
    grid.appendChild(rm);
    box.appendChild(grid);

    var picks = mk('div', 'picks');
    var chosen = { group: null };
    b.groups.forEach(function (g) {
      var p = mk('button', 'pick', L(g.name));
      p.type = 'button';
      p.addEventListener('click', function () {
        chosen.group = g.key;
        Array.prototype.forEach.call(picks.children, function (c) { c.classList.remove('on'); });
        p.classList.add('on');
      });
      picks.appendChild(p);
    });
    box.appendChild(picks);

    var btn = mk('button', 'btn ok', t('classify'));
    var out = mk('div', 'result hide');
    btn.addEventListener('click', function () {
      if (!chosen.group) { toast(st.lang === 'zh' ? '先在六个维度里选一个' : 'Pick one of the six factors first'); return; }
      var v = +r1.value, a = +r2.value;
      var quad = quadrantText(v, a);
      var g = null;
      for (var i = 0; i < b.groups.length; i++) if (b.groups[i].key === chosen.group) g = b.groups[i];
      clear(out);
      out.appendChild(mk('b', null, t('classifyResult') + '：' + L(g.name) + '（' + g.poms + '）'));
      out.appendChild(mk('div', null, t('valence') + '×' + t('arousal') + ' = ' + v + '×' + a + ' → ' + quad));
      out.appendChild(mk('div', null, (st.lang === 'zh' ? '适用场景：' : 'Fits: ') + L(g.scene)));
      out.appendChild(mk('div', null, (st.lang === 'zh' ? '调节时机：' : 'Timing: ') + L(g.fitStage)));
      out.appendChild(mk('div', null, t('relatedBook') + '：' + L(bookById(g.book).title)));
      var rule = a >= 4
        ? (st.lang === 'zh' ? '高唤醒 → 先降温：呼吸/冷水/走动，再谈事情。' : 'High arousal → cool down first: breathing, cold, walking.')
        : (a <= 2 ? (st.lang === 'zh' ? '低唤醒 → 先行动：一件五分钟能完成的小事。' : 'Low arousal → act first: one five-minute completable thing.')
          : (st.lang === 'zh' ? '中等唤醒 → 先命名：写一行事实、一行感受、一行要求。' : 'Mid arousal → name it first: one line of fact, feeling, request.'));
      out.appendChild(mk('div', null, '★ ' + rule));
      st.moods = st.moods.filter(function (m) { return m.date !== today(); });
      st.moods.push({ date: today(), val: v, aro: a, group: chosen.group });
      save(); updateChips();
      out.classList.remove('hide');
      toast(t('moodLogged'));
    });
    box.appendChild(btn);
    box.appendChild(out);

    var last = st.moods[st.moods.length - 1];
    if (last) {
      var hist = mk('div', 'note');
      hist.textContent = (st.lang === 'zh' ? '最近记录：' : 'Recent: ') + st.moods.slice(-7).map(function (m) {
        return m.date.slice(5) + ' ' + groupName(m.group);
      }).join(' ｜ ');
      box.appendChild(hist);
    }
    blk.appendChild(box);
    host.appendChild(blk);
  }

  function quadrantText(v, a) {
    var vp = v >= 4 ? (st.lang === 'zh' ? '愉快' : 'pleasant') : (v <= 2 ? (st.lang === 'zh' ? '不愉快' : 'unpleasant') : (st.lang === 'zh' ? '偏中性' : 'neutral'));
    var ap = a >= 4 ? (st.lang === 'zh' ? '高唤醒' : 'high arousal') : (a <= 2 ? (st.lang === 'zh' ? '低唤醒' : 'low arousal') : (st.lang === 'zh' ? '中唤醒' : 'mid arousal'));
    return vp + ' × ' + ap;
  }

  /* ---------------- 记忆清单 ---------------- */
  function renderMemory() {
    var host = el.tabMemory;
    clear(host);
    var head = mk('div', 'list-head');
    head.appendChild(mk('h3', null, t('memoryTitle')));
    var dueList = st.memory.filter(function (m) { return m.due <= today(); });
    var c1 = mk('span', 'count', t('memoryDue') + ' ' + dueList.length);
    var c2 = mk('span', 'count', t('memoryAll') + ' ' + st.memory.length);
    head.appendChild(c1); head.appendChild(c2);
    var f = mk('button', 'ghost', (memFilter === 'due' ? '★ ' : '') + t('memoryDue') + ' / ' + (memFilter === 'all' ? '★ ' : '') + t('memoryAll'));
    f.addEventListener('click', function () { memFilter = memFilter === 'due' ? 'all' : 'due'; renderMemory(); });
    head.appendChild(f);
    host.appendChild(head);
    host.appendChild(mk('p', 'sec-hint', t('memorySub')));

    var row = mk('div', 'add-row');
    var inp = document.createElement('input');
    inp.type = 'text'; inp.placeholder = t('memoryPh');
    var btn = mk('button', 'btn', t('memoryBtn'));
    function push() {
      var v = inp.value.trim();
      if (!v) { toast(t('askEmpty')); return; }
      st.memory.push({ id: 'm' + Date.now(), text: { zh: v, en: v }, book: selectedBook ? selectedBook.id : 'learning', box: 0, due: today(), okCount: 0, missCount: 0 });
      inp.value = ''; save(); renderAll(); toast('+1');
    }
    btn.addEventListener('click', push);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') push(); });
    row.appendChild(inp); row.appendChild(btn);
    host.appendChild(row);

    var list = (memFilter === 'due') ? dueList : st.memory;
    if (!list.length) { host.appendChild(mk('div', 'empty', t('memoryEmpty'))); return; }
    list.forEach(function (m) {
      var card = mk('div', 'mem-item' + (m.due <= today() ? ' due' : ''));
      card.appendChild(mk('div', 'txt', L(m.text)));
      var meta = mk('div', 'meta');
      var bk = bookById(m.book);
      meta.appendChild(mk('span', null, '▤ ' + (bk ? L(bk.title) : m.book)));
      meta.appendChild(mk('span', null, t('nextReview') + ': ' + (m.due <= today() ? t('todayReview') : m.due)));
      meta.appendChild(mk('span', null, (st.lang === 'zh' ? '第 ' : 'box ') + (m.box + 1) + (st.lang === 'zh' ? ' 格' : '')));
      meta.appendChild(mk('span', null, '✓ ' + m.okCount + ' ✗ ' + m.missCount));
      card.appendChild(meta);
      var acts = mk('div', 'acts');
      var ok = mk('button', 'btn mini ok', t('remember'));
      ok.addEventListener('click', function () {
        m.box = Math.min(m.box + 1, INTERVALS.length - 1);
        m.due = shiftDate(INTERVALS[m.box]);
        m.okCount++; save(); renderAll();
      });
      var no = mk('button', 'btn mini bad', t('forgot'));
      no.addEventListener('click', function () {
        m.box = Math.max(0, m.box - 1);
        m.due = today();
        m.missCount++; save(); renderAll();
      });
      var del = mk('button', 'ghost', t('deleteItem'));
      del.addEventListener('click', function () {
        st.memory = st.memory.filter(function (x) { return x.id !== m.id; });
        save(); renderAll();
      });
      acts.appendChild(ok); acts.appendChild(no); acts.appendChild(del);
      if (bk) {
        var jump = mk('button', 'ghost', '▸ ' + L(bk.title));
        jump.addEventListener('click', function () { selectBook(bk.id); });
        acts.appendChild(jump);
      }
      card.appendChild(acts);
      host.appendChild(card);
    });
  }

  /* ---------------- 每日考试 ---------------- */
  function todayExamRecord() {
    for (var i = 0; i < st.exams.length; i++) if (st.exams[i].date === today()) return st.exams[i];
    return null;
  }

  function renderExam() {
    var host = el.tabExam;
    clear(host);
    host.appendChild(mk('h3', null, t('examTitle')));
    host.appendChild(mk('p', 'sec-hint', t('examSub')));

    if (examSession) { renderExamFlow(host); return; }
    var rec = todayExamRecord();
    if (rec) {
      var box = mk('div', 'exam-card');
      box.appendChild(mk('div', 'score', t('examScore') + ' ' + rec.score + ' / ' + rec.total));
      box.appendChild(mk('div', 'why', (st.lang === 'zh' ? '今日成绩已记录。错题的那一句，记得加进记忆清单。' : 'Today’s score is saved. Put the wrong-answer lines into the memory list.')));
      box.appendChild(mk('p', 'sec-hint', t('examAgain')));
      var again = mk('button', 'btn', t('examAgain'));
      again.addEventListener('click', function () { startExam(true); });
      box.appendChild(again);
      host.appendChild(box);
    } else {
      var b2 = mk('div', 'exam-card');
      b2.appendChild(mk('div', 'why', (st.lang === 'zh' ? '今天的 10 题还没开始。跨全部书目随机抽取：它同时是提取练习与交错练习。' : 'Today’s ten are waiting, drawn across every book — retrieval practice and interleaving at once.')));
      var go = mk('button', 'btn gold', t('examStart'));
      go.addEventListener('click', function () { startExam(false); });
      b2.appendChild(go);
      host.appendChild(b2);
    }
    renderHistory(host);
  }

  function renderHistory(host) {
    var last = st.exams.slice(-7);
    host.appendChild(mk('p', 'sec-hint', t('examRecord')));
    if (!last.length) { host.appendChild(mk('div', 'empty', t('examNoRecord'))); return; }
    var h = mk('div', 'hist');
    last.forEach(function (r) {
      var day = mk('div', 'bar', r.date.slice(5));
      day.style.background = '#fff';
      var b = mk('div', 'bar', r.score + '/' + r.total);
      b.title = r.date;
      b.style.background = r.score >= 8 ? '#d6f5d6' : (r.score >= 6 ? '#fff3cd' : '#ffdada');
      h.appendChild(day);
      h.appendChild(b);
    });
    host.appendChild(h);
  }

  function startExam(practice) {
    examSession = { ids: shuffled(window.EXAM_BANK, EXAM_SIZE).map(function (q) { return q.id; }), i: 0, picks: [], practice: !!practice, result: null };
    renderExam();
  }

  function qById(id) {
    for (var i = 0; i < window.EXAM_BANK.length; i++) if (window.EXAM_BANK[i].id === id) return window.EXAM_BANK[i];
    return null;
  }

  function renderExamFlow(host) {
    var s = examSession;
    if (s.result) { renderResult(host); return; }
    var q = qById(s.ids[s.i]);
    var card = mk('div', 'exam-card');
    var prog = mk('div', 'progress');
    var bar = mk('i'); bar.style.width = ((s.i) / s.ids.length * 100) + '%';
    prog.appendChild(bar); card.appendChild(prog);
    card.appendChild(mk('div', 'sec-hint', t('examQ').replace('{a}', s.i + 1).replace('{b}', s.ids.length)));
    card.appendChild(mk('div', 'exam-q', L(q.q)));
    var bk = bookById(q.book);
    card.appendChild(mk('div', 'sec-hint', '▤ ' + (bk ? L(bk.title) : '')));
    var opts = mk('div', 'opts');
    var KEYS = ['A', 'B', 'C', 'D'];
    q.opts.forEach(function (o, idx) {
      var b = mk('button', 'opt' + (s.picks[s.i] === idx ? ' on' : ''));
      b.type = 'button';
      b.appendChild(mk('span', 'key', KEYS[idx]));
      b.appendChild(mk('span', null, L(o)));
      b.addEventListener('click', function () { s.picks[s.i] = idx; renderExam(); });
      opts.appendChild(b);
    });
    card.appendChild(opts);
    var row = mk('div', 'acts');
    row.style.cssText = 'display:flex;gap:8px;margin-top:12px;flex-wrap:wrap';
    if (s.i > 0) {
      var prev = mk('button', 'ghost', '←');
      prev.addEventListener('click', function () { s.i--; renderExam(); });
      row.appendChild(prev);
    }
    if (s.picks[s.i] === undefined) {
      var skip = mk('button', 'ghost', (st.lang === 'zh' ? '跳过' : 'Skip'));
      skip.addEventListener('click', function () { s.picks[s.i] = -1; nextQ(); });
      row.appendChild(skip);
    }
    var nxt = mk('button', 'btn', s.i === s.ids.length - 1 ? t('examSubmit') : t('examNext'));
    nxt.addEventListener('click', nextQ);
    row.appendChild(nxt);
    card.appendChild(row);
    host.appendChild(card);
  }

  function nextQ() {
    var s = examSession;
    if (s.i < s.ids.length - 1) { s.i++; renderExam(); return; }
    var right = 0, wrongLines = [];
    s.ids.forEach(function (id, k) {
      var q = qById(id);
      if (s.picks[k] === q.a) right++;
      else wrongLines.push(q);
    });
    s.result = { right: right, wrongLines: wrongLines };
    if (!s.practice) {
      st.exams = st.exams.filter(function (r) { return r.date !== today(); });
      st.exams.push({ date: today(), score: right, total: s.ids.length, ts: Date.now() });
      save(); updateChips();
    }
    renderExam();
  }

  function renderResult(host) {
    var s = examSession, r = s.result;
    var card = mk('div', 'exam-card');
    card.appendChild(mk('div', 'score', t('examScore') + ' ' + r.right + ' / ' + s.ids.length));
    if (s.practice) card.appendChild(mk('div', 'sec-hint', '· ' + t('examAgain')));
    card.appendChild(mk('h4', null, t('examReviewTitle')));
    s.ids.forEach(function (id, k) {
      var q = qById(id);
      var pick = s.picks[k];
      var one = mk('div', 'quote');
      one.style.borderLeftColor = q.a === pick ? '#2e7d32' : '#b3261e';
      one.appendChild(mk('div', 'q', (k + 1) + '. ' + L(q.q)));
      var ul = mk('div', 'show');
      q.opts.forEach(function (o, oi) {
        var line = mk('div', null, (oi === q.a ? '✓ ' : '   ') + L(o) + (oi === pick && oi !== q.a ? '  ✗' : ''));
        line.style.fontFamily = 'var(--mono)';
        line.style.whiteSpace = 'pre-wrap';
        ul.appendChild(line);
      });
      one.appendChild(ul);
      one.appendChild(mk('div', 'why', (pick === q.a ? t('correct') + ' — ' : t('wrong') + ' · ' + t('answerIs') + ' ' + 'ABCD'.charAt(q.a) + ' — ') + L(q.why)));
      var row = mk('div', 'row');
      row.style.cssText = 'display:flex;justify-content:flex-end;margin-top:6px';
      var bk = bookById(q.book);
      if (bk && pick !== q.a) {
        var jump = mk('button', 'ghost', '▸ ' + L(bk.title));
        jump.addEventListener('click', function () { selectBook(bk.id); });
        row.appendChild(jump);
      }
      if (pick !== q.a) row.appendChild(addBtn({ zh: L(q.q) + ' → ' + L(q.why), en: L(q.q) + ' → ' + L(q.why) }, bk || bookById('learning')));
      one.appendChild(row);
      card.appendChild(one);
    });
    var again = mk('button', 'btn', t('examAgain'));
    again.addEventListener('click', function () { startExam(true); });
    var close = mk('button', 'ghost', '×');
    close.addEventListener('click', function () { examSession = null; renderExam(); });
    card.appendChild(again); card.appendChild(close);
    host.appendChild(card);
    renderHistory(host);
  }

  /* ---------------- 问教授 ---------------- */
  function askUsed() { return (st.quota.date === today()) ? st.quota.used : 0; }

  function renderAsk() {
    var host = el.tabAsk;
    clear(host);
    host.appendChild(mk('h3', null, t('askTitle')));
    host.appendChild(mk('p', 'sec-hint', t('askSub')));
    var left = DAILY_ASK_LIMIT - askUsed();
    var q = mk('div', 'quota', left > 0 ? t('askQuota').replace('{n}', left) : t('askQuotaZero'));
    host.appendChild(q);

    var area = document.createElement('textarea');
    area.placeholder = t('askPh');
    var send = mk('button', 'btn gold', t('askBtn'));
    send.disabled = left <= 0;
    area.disabled = left <= 0;
    function sendIt() {
      var text = area.value.trim();
      if (!text) { toast(t('askEmpty')); return; }
      if (askUsed() >= DAILY_ASK_LIMIT) { toast(t('askQuotaZero')); return; }
      if (st.quota.date !== today()) st.quota = { date: today(), used: 0 };
      st.quota.used++;
      var ans = matchAnswer(text);
      var stamp = Date.now();
      st.chats.push({ q: text, a: ans.pair, book: ans.book, date: today(), ts: stamp });
      st.chats = st.chats.slice(-40);
      area.value = '';
      save(); renderAll();
    }
    send.addEventListener('click', sendIt);
    host.appendChild(area);
    host.appendChild(send);

    var log = mk('div', 'chat-log');
    var mine = st.chats.slice().reverse();
    if (!mine.length) host.appendChild(mk('div', 'empty', (st.lang === 'zh' ? '还没有问过。把今天的处境写成一句话。' : 'Nothing asked yet. Write today’s situation as one sentence.')));
    mine.forEach(function (c) {
      log.appendChild(mk('div', 'msg-stu', (st.lang === 'zh' ? '学生：' : 'Student: ') + c.q + '（' + c.date + '）'));
      var p = mk('div', 'msg-pro');
      p.appendChild(mk('div', 'from', t('askFrom')));
      p.appendChild(mk('div', null, typeof c.a === 'string' ? c.a : L(c.a)));
      var bk = bookById(c.book);
      if (bk) {
        var ref = mk('div', 'ref');
        var jump = mk('button', 'ghost', '▸ ' + L(bk.title));
        jump.addEventListener('click', function () { selectBook(bk.id); });
        ref.appendChild(jump);
        p.appendChild(ref);
      }
      log.appendChild(p);
    });
    host.appendChild(log);
  }

  function matchAnswer(text) {
    var s = text.toLowerCase();
    var best = null, bestHits = 0;
    window.PROFESSOR.forEach(function (item) {
      var hits = 0;
      item.tags.forEach(function (tag) { if (tag && s.indexOf(String(tag).toLowerCase()) >= 0) hits++; });
      if (hits > bestHits) { bestHits = hits; best = item; }
    });
    if (best) return { pair: { zh: best.a.zh, en: best.a.en }, book: best.ref };
    var d = window.PROFESSOR_DEFAULT[st.defaultIdx % window.PROFESSOR_DEFAULT.length];
    st.defaultIdx = (st.defaultIdx + 1) % window.PROFESSOR_DEFAULT.length;
    var books = window.BOOKS.map(function (b) { return b.id; });
    return { pair: { zh: d.a.zh, en: d.a.en }, book: books[Math.floor(Math.random() * books.length)] };
  }

  /* ---------------- 信件柜 ---------------- */
  function renderLetters() {
    var host = el.tabLetters;
    clear(host);
    host.appendChild(mk('h3', null, t('lettersTitle')));
    host.appendChild(mk('p', 'sec-hint', t('lettersSub')));
    host.appendChild(mk('div', 'quota', t('lettersCount').replace('{n}', st.letters.length)));
    if (!st.letters.length) { host.appendChild(mk('div', 'letter-empty-box', t('lettersEmpty'))); return; }
    var grid = mk('div', 'letters');
    st.letters.slice().reverse().forEach(function (idx) {
      var lt = window.LETTERS[idx];
      var card = mk('div', 'letter-card');
      card.appendChild(window.Pixel.letter(2, THEME));
      card.appendChild(mk('div', 'lt', L(lt.title)));
      card.addEventListener('click', function () { showLetter(idx, false); });
      grid.appendChild(card);
    });
    host.appendChild(grid);
    if (st.letters.length < window.LETTERS.length) {
      host.appendChild(mk('p', 'sec-hint', (st.lang === 'zh' ? '还差 ' + (window.LETTERS.length - st.letters.length) + ' 封；每点一次帽子掉一封，顺序推进。' : (window.LETTERS.length - st.letters.length) + ' to go — each tap advances the queue.')));
    }
  }

  /* ---------------- 开场 ---------------- */
  function showIntro() {
    var box = mk('div');
    box.appendChild(mk('p', 'letter-body', L({ zh: window.I18N.zh.introBody, en: window.I18N.en.introBody })));
    var flow = mk('p', 'why', L({
      zh: '每日流程：① 绿书签心情 → ② 读一本书的一节，加一句进清单 → ③ 做十题并读完解释 → ④ 有问题用掉一次提问（每天十次）。点帽子换中英文，同时掉一封信。',
      en: 'Daily flow: ① log your mood in the green book → ② read one section, add one line to the list → ③ take the ten questions and read every explanation → ④ spend one question on the professor (ten a day). Tapping the hat switches language and drops a letter.'
    }));
    box.appendChild(flow);
    box.appendChild(mk('p', 'why', window.I18N[st.lang].safety));
    openModal(t('introTitle'), box);
  }

  /* ---------------- 初始化 ---------------- */
  function init() {
    ['appTitle', 'appSub', 'shelfTitle', 'shelfHint', 'label1', 'label2', 'label3', 'hatHint', 'tBook', 'tMemory', 'tExam', 'tAsk', 'tLetters',
      'kDate', 'vDate', 'kAsk', 'vAsk', 'kExam', 'vExam', 'kMood', 'vMood', 'vLang', 'safetyBox', 'footNote', 'resetBtn',
      'row1', 'row2', 'row3', 'tabs', 'tabBook', 'tabMemory', 'tabExam', 'tabAsk', 'tabLetters', 'profStack', 'letterDrop',
      'modal', 'modalTitle', 'modalBody', 'modalClose', 'toast', 'petals'].forEach(function (id) {
      el[id] = document.getElementById(id);
    });
    el.panel = document.querySelector('.panel');

    Array.prototype.forEach.call(el.tabs.querySelectorAll('.ico'), function (sp) {
      var n = sp.dataset.ico;
      if (n === 'letter') sp.appendChild(window.Pixel.letter(1, THEME));
      else if (n) sp.appendChild(window.Pixel.icon(n, 1, '#3a2438'));
    });

    buildPerson();
    bindEvents();
    makePetals();
    applyStatic();
    var deep = (location.hash.match(/book=([a-z]+)/) || [])[1];
    if (deep && bookById(deep)) selectedBook = bookById(deep);
    buildShelf();
    switchTab('book');

    if (st.firstTime) {
      st.firstTime = false; save();
      showIntro();
    }
  }

  function bindEvents() {
    el.tabs.addEventListener('click', function (e) {
      var b = e.target.closest('.tab');
      if (b) switchTab(b.dataset.tab);
    });
    el.modalClose.addEventListener('click', closeModal);
    el.modal.addEventListener('click', function (e) { if (e.target === el.modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    el.vMood.addEventListener('click', function () { selectBook('moodmap'); });
    el.resetBtn.addEventListener('click', function () {
      if (!confirm(t('confirmReset'))) return;
      try { localStorage.removeItem(KEY); } catch (err) {}
      st = defaults();
      examSession = null; selectedBook = null;
      buildPerson(); applyStatic(); renderAll(); switchTab('book');
    });
  }

  function makePetals() {
    if (!el.petals) return;
    for (var i = 0; i < 10; i++) {
      var p = mk('div', 'petal');
      p.style.left = (i * 9.5 + Math.random() * 6) + '%';
      p.style.animationDuration = (14 + Math.random() * 12) + 's';
      p.style.animationDelay = (-Math.random() * 14) + 's';
      el.petals.appendChild(p);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
