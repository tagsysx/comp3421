// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane.
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

const m = new Map();
m.set('ada', 36);
m.set(true, 'flag');
const key = { id: 7 };
m.set(key, 'object key');

log('m.size', m.size);                 // 3
log('m.get("ada")', m.get('ada'));     // 36
log('m.get(true)', m.get(true));       // flag
log('m.get(key)', m.get(key));         // object key
log('m.get({ id: 7 })', m.get({ id: 7 }));   // undefined — another object
log('m.has("ada")', m.has('ada'));     // true

// The same three keys in a plain object: every one becomes a string.
const plain = {};
plain[key] = 1;
plain[true] = 2;
log('plain object keys', Object.keys(plain).join(' , '));

// A Map is a class: no new, no instance.
try {
  Map();
} catch (e) {
  log('Map() without new', e.name + ': ' + e.message);
}

// Iteration follows insertion order, and the keys come back as typed.
log('entries', JSON.stringify([...m.entries()].map(([k, v]) => [typeof k, v])));
