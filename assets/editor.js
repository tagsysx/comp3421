/* COMP3421 — live code editor logic (CodeMirror 6 + iframe preview) */
(function () {
  'use strict';

  const CM = window.CM;
  if (!CM) {
    document.body.innerHTML = '<p style="padding:20px">Error: CodeMirror bundle (vendor/codemirror.bundle.js) not loaded.</p>';
    return;
  }

  const params = new URLSearchParams(location.search);
  const exParam = params.get('example') || '';
  const [catId, exId] = exParam.split('/');

  const state = {
    catId, exId,
    files: {},          // filename -> content
    activeFile: null,
    view: null,
    auto: true,
    timer: null,
    ext: { html: CM.html(), css: CM.css(), js: CM.javascript() }
  };

  const $ = (sel) => document.querySelector(sel);

  function langFor(filename) {
    if (/\.css$/i.test(filename)) return state.ext.css;
    if (/\.js$/i.test(filename)) return state.ext.js;
    if (/\.html?$/i.test(filename)) return state.ext.html;
    return null;
  }

  function makeEditor(filename, content) {
    const lang = langFor(filename) || [];
    state.view = new CM.EditorView({
      parent: $('#editor-host'),
      state: CM.EditorState.create({
        doc: content,
        extensions: [CM.basicSetup, CM.oneDark, CM.EditorView.lineWrapping, lang, CM.EditorView.updateListener.of(onUpdate)]
      })
    });
  }

  function onUpdate(update) {
    if (update.docChanged) {
      state.files[state.activeFile] = update.state.doc.toString();
      if (state.auto) scheduleRender();
    }
  }

  function scheduleRender() {
    clearTimeout(state.timer);
    state.timer = setTimeout(renderPreview, 350);
  }

  function buildSrcdoc() {
    const files = state.files;
    let html = files['index.html'] || files['index.htm'] || '';
    const cssFiles = Object.keys(files).filter((f) => /\.css$/i.test(f));
    const jsFiles = Object.keys(files).filter((f) => /\.js$/i.test(f));

    // Drop local <link rel="stylesheet"> and <script src="..."> — they are inlined below.
    html = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '');
    html = html.replace(/<script[^>]*src=["'][^"']+["'][^>]*>\s*<\/script>/gi, '');

    const cssTag = cssFiles.map((f) => '<style>' + files[f] + '</style>').join('\n');
    const jsTag = jsFiles.map((f) => {
      const safe = files[f].replace(/<\/script>/gi, '<\\/script>');
      return '<script>' + safe + '<\/script>';
    }).join('\n');

    let doc = html;
    if (cssTag) {
      if (/<\/head>/i.test(doc)) doc = doc.replace(/<\/head>/i, cssTag + '</head>');
      else doc = cssTag + doc;
    }
    if (jsTag) {
      if (/<\/body>/i.test(doc)) doc = doc.replace(/<\/body>/i, jsTag + '</body>');
      else doc = doc + jsTag;
    }
    return doc;
  }

  function renderPreview() {
    $('#preview-frame').srcdoc = buildSrcdoc();
  }

  function renderTabs() {
    const wrap = $('#tabs');
    wrap.innerHTML = '';
    const names = Object.keys(state.files);
    names.forEach((name) => {
      const el = document.createElement('div');
      el.className = 'tab' + (name === state.activeFile ? ' active' : '');
      el.textContent = name;
      el.onclick = () => switchTo(name);
      wrap.appendChild(el);
    });
  }

  function switchTo(filename) {
    if (filename === state.activeFile) return;
    // save current doc
    if (state.view) state.files[state.activeFile] = state.view.state.doc.toString();
    state.activeFile = filename;
    // replace editor state (keep host element)
    const content = state.files[filename];
    state.view.setState(CM.EditorState.create({
      doc: content,
      extensions: [CM.basicSetup, CM.oneDark, CM.EditorView.lineWrapping, langFor(filename) || [], CM.EditorView.updateListener.of(onUpdate)]
    }));
    renderTabs();
    renderPreview();
  }

  async function load() {
    // load manifest
    const mres = await fetch('examples/manifest.json');
    const manifest = await mres.json();
    const cat = manifest.categories.find((c) => c.id === state.catId);
    if (!cat) throw new Error('Unknown category: ' + state.catId);
    const ex = cat.examples.find((e) => e.id === state.exId);
    if (!ex) throw new Error('Unknown example: ' + state.exId);

    $('#crumb-cat').textContent = cat.name;
    $('#crumb-ex').textContent = ex.name;
    document.title = ex.name + ' · ' + cat.name + ' · COMP3421';

    // load files
    const files = ex.files;
    for (const f of files) {
      const res = await fetch('examples/' + state.catId + '/' + state.exId + '/' + f);
      state.files[f] = await res.text();
    }
    state.activeFile = files[0];
    makeEditor(state.activeFile, state.files[state.activeFile]);
    renderTabs();
    renderPreview();
  }

  // wire controls
  $('#run').onclick = () => renderPreview();
  $('#back').onclick = () => { location.href = 'index.html'; };
  const autoToggle = $('#auto');
  autoToggle.checked = state.auto;
  autoToggle.onchange = () => { state.auto = autoToggle.checked; };

  // resizable preview pane — drag the divider to show relative width (%, vw, …)
  (function () {
    const split = document.querySelector('.split');
    const divider = $('#divider');
    const preview = document.querySelector('.pane.preview');
    const sizeEl = $('#preview-size');

    const MIN_PREVIEW = 120;
    const MIN_EDITOR = 200;
    let splitRect = null;
    let raf = null;
    let dragging = false;

    function clamp(w) {
      const max = splitRect.width - divider.clientWidth - MIN_EDITOR;
      return Math.max(MIN_PREVIEW, Math.min(max, w));
    }
    function apply(w) {
      const px = clamp(w);
      preview.style.width = px + 'px';
      if (sizeEl) sizeEl.textContent = Math.round(px) + 'px';
    }
    function init() {
      splitRect = split.getBoundingClientRect();
      apply((splitRect.width - divider.clientWidth) / 2);
    }

    divider.addEventListener('mousedown', (e) => {
      dragging = true;
      splitRect = split.getBoundingClientRect(); // cache once per drag
      document.body.classList.add('dragging');
      e.preventDefault();
    });
    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      if (raf) return; // one update per frame
      raf = requestAnimationFrame(() => {
        raf = null;
        apply(splitRect.right - e.clientX);
      });
    });
    window.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      document.body.classList.remove('dragging');
    });

    init();
    window.addEventListener('resize', () => {
      if (!dragging) init();
    });
  })();

  load().catch((err) => {
    document.body.innerHTML = '<p style="padding:20px">Error loading example: ' + err.message +
      '<br><a href="index.html">← back to index</a></p>';
  });
})();
