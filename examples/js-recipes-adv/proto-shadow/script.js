// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane.
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(line);
}
const pad = (s, n) => String(s).padEnd(n);

function Person(name) { this.name = name; }
Person.prototype.kind = 'human';

const dad = new Person('John');
const mom = new Person('Sally');

log('— neither object has its own kind —');
log(pad('dad.kind', 16), '→', dad.kind, '  read up the chain');
log(pad('mom.kind', 16), '→', mom.kind, '  the very same value');

log('');
log('— assign on one object —');
dad.kind = 'martian';
log(pad('dad.kind', 16), '→', dad.kind, '  own property now');
log(pad('mom.kind', 16), '→', mom.kind, '  still inherited');
log(pad('Person.prototype.kind', 16), '→', Person.prototype.kind, '  untouched');

log('');
log('— who owns it? —');
log(pad('dad.hasOwnProperty', 16), '→', dad.hasOwnProperty('kind'));
log(pad('mom.hasOwnProperty', 16), '→', mom.hasOwnProperty('kind'));

log('');
log('— delete the own copy —');
delete dad.kind;
log(pad('dad.kind', 16), '→', dad.kind, '  inherited again');
