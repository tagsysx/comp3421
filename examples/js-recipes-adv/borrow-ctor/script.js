const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

function Point(x, y) { this.x = x; this.y = y; }
const a = new Point(3, 4);

log("before", "x=" + a.x + ", y=" + a.y);
Point.call(a, 9, 12);
log("after Point.call(a, 9, 12)", "x=" + a.x + ", y=" + a.y);
log("a is still a Point", a instanceof Point);

class ClassPoint { constructor(x, y) { this.x = x; this.y = y; } }
try {
  ClassPoint.call(a, 1, 2);
  log("class + call", "no error");
} catch (e) {
  log("class + call", e.name + ": " + e.message);
}
