// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane.
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(line);
}

const pad = (s, n) => String(s).padEnd(n);
function row(re, subject, note) {
  const found = subject.match(re);
  log(pad(String(re), 22), pad(JSON.stringify(subject), 20), '→',
      pad(found === null ? 'null' : JSON.stringify(found), 18), note);
}
function section(title) {
  log('');
  log('— ' + title);
}

// ---------------------------------------------------------------- one character
section('one character');
row(/\d/,      'order 42',    'a digit');
row(/\d+/,     'order 42',    'one or more digits');
row(/\w+/,     'ada, bo',     'word characters only');
row(/\s/,      'a b',         'a space');
row(/./,       'x',           'any character but a newline');
row(/[abc]/,   'cab',         'one of a, b, c');
row(/[^abc]/,  'cab!',        'anything but a, b, c');

// ---------------------------------------------------------------- quantifiers
section('how many times');
row(/colou?r/, 'color',       '? means optional');
row(/a+/,      'baaa',        '+ means one or more');
row(/ab*/,     'ax',          '* allows zero b — still a match');
row(/\d{4}/,   '2026',        '{4} means exactly four');
row(/\d{2,4}/, '12345',       '{2,4} means two to four');

// ---------------------------------------------------------------- anchors and groups
section('anchors and groups');
row(/^\d+$/,   '42',          'the whole string is digits');
row(/^\d+$/,   '42a',         '...but not here');
row(/(cat|dog)s?/g, 'cats and dogs', 'a group, or either side of |');

// ---------------------------------------------------------------- flags
section('flags');
row(/o/,    'Hello World',    'first match only');
row(/o/g,   'Hello World',    'g: every match');
row(/o/gi,  'Hello World',    'gi: every match, any case');

// ---------------------------------------------------------------- the four methods
section('the four methods, one subject');
const date = '2026-10-06';
log(pad('/\\d{4}/.test(date)', 22), pad('"' + date + '"', 20), '→', /\d{4}/.test(date));
log(pad('date.match(/\\d+/g)', 22), pad('"' + date + '"', 20), '→', JSON.stringify(date.match(/\d+/g)));
log(pad('date.split(/-/)', 22), pad('"' + date + '"', 20), '→', JSON.stringify(date.split(/-/)));
log(pad('date.replace(/-/g, "/")', 22), pad('"' + date + '"', 20), '→', date.replace(/-/g, '/'));
