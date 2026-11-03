const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

function Point(x, y) { this.x = x; this.y = y; }
const makePoint = (x, y) => ({ x, y });

const made = makePoint(3, 4);
const built = new Point(3, 4);

log("makePoint(3, 4)", JSON.stringify(made));
log("made instanceof Object", made instanceof Object);
log("made instanceof Point", made instanceof Point);
log("made.constructor === Object", made.constructor === Object);
log("typeof made.len", String(typeof made.len));
log("built instanceof Point", built instanceof Point);
