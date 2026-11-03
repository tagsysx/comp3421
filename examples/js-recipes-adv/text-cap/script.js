const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const cap = s => s[0].toUpperCase() + s.slice(1);
const safe = s => (s ? s[0].toUpperCase() + s.slice(1) : s);

log('cap("hello")', cap("hello"));
log('cap("HELLO")', cap("HELLO"));
try {
  cap("");
} catch (e) {
  log('cap("")', e.name + ": " + e.message);
}
log('safe("")', JSON.stringify(safe("")));
log('cap("hello world")', cap("hello world"));
