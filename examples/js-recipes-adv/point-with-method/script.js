const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

function Point(x, y) {
  this.x = x; this.y = y;
  this.len = () => Math.hypot(x, y);
}

const a = new Point(3, 4);
const b = new Point(6, 8);

log("a.x, a.y", a.x + ", " + a.y);
log("a.len()", a.len());
log("b.len()", b.len());
log("a === b", a === b);
log("a instanceof Point", a instanceof Point);
log("a.hasOwnProperty('len')", a.hasOwnProperty("len"));
log("a.len === b.len", a.len === b.len);
