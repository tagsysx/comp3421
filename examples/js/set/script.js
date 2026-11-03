// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane.
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

const s = new Set([3, 1, 3]);
log('s.size', s.size);           // 2 — the second 3 never arrives
log('s.has(1)', s.has(1));       // true
s.add(1);
log('after s.add(1), size', s.size);   // still 2
s.delete(3);
log('after s.delete(3)', [...s].join(', '));   // 1

// No indexes: a Set is not an array.
s[1];
log('s[1]', s[1]);               // undefined
log('is it an array?', Array.isArray(s));   // false

// Strings are iterable, so a Set dedupes their characters.
log('[...new Set("hello")]', JSON.stringify([...new Set('hello')]));

// Equality is by reference, not by content.
log('two look-alike objects', new Set([{ a: 1 }, { a: 1 }]).size);   // 2
const same = { a: 1 };
log('the very same object', new Set([same, same]).size);             // 1

// A Set is a class: no new, no instance.
try {
  Set([1, 2]);
} catch (e) {
  log('Set() without new', e.name + ': ' + e.message);
}
