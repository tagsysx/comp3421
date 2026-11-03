// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane.
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(line);
}

// Keep every row inside the editor's narrow preview pane (~636px ≈ 78 chars).
const pad = (s, n) => String(s).padEnd(n);
function row(re, subject, note) {
  const found = subject.match(re);
  log(pad(String(re), 20), pad(JSON.stringify(subject), 16), '→',
      pad(found === null ? 'null' : JSON.stringify(found), 14), note);
}
function section(title) {
  log('');
  log('— ' + title);
}

// ---------------------------------------------------------------- one character
section('one character');
row(/\d/,      'order 42',    'a digit');
row(/\d+/,     'order 42',    'one or more digits');
row(/\w+/,     'ada, bo',     'word characters');
row(/\s/,      'a b',         'a space');
row(/./,       'x',           'any char but newline');
row(/[abc]/,   'cab',         'one of a, b, c');
row(/[^abc]/,  'cab!',        'anything but a,b,c');

// ---------------------------------------------------------------- quantifiers
section('how many times');
row(/colou?r/, 'color',       '? makes it optional');
row(/a+/,      'baaa',        '+ is one or more');
row(/ab*/,     'ax',          '* allows zero b');
row(/\d{4}/,   '2026',        '{4} is exactly four');
row(/\d{2,4}/, '12345',       '{2,4} is two to four');

// ---------------------------------------------------------------- anchors and groups
section('anchors and groups');
row(/^\d+$/,   '42',          'whole string is digits');
row(/^\d+$/,   '42a',         '...but not here');
row(/(cat|dog)s?/g, 'cats and dogs', 'a group / either side');

// ---------------------------------------------------------------- flags
section('flags');
row(/o/,    'Hello World',    'first match only');
row(/o/g,   'Hello World',    'g: every match');
row(/o/gi,  'Hello World',    'gi: match, any case');

// ---------------------------------------------------------------- the four methods
section('the four methods, one subject');
const date = '2026-10-06';
const shown = pad('"' + date + '"', 16);
log(pad('/\\d{4}/.test(date)', 20), shown, '→', /\d{4}/.test(date));
log(pad('date.match(/\\d+/g)', 20), shown, '→', JSON.stringify(date.match(/\d+/g)));
log(pad('date.split(/-/)', 20), shown, '→', JSON.stringify(date.split(/-/)));
log(pad('date.replace(/-/g,"/")', 20), shown, '→', date.replace(/-/g, '/'));
