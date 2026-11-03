const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

function Point(x, y) { this.x = x; this.y = y; }
const a = new Point(3, 4);

log("a instanceof Point", a instanceof Point);
log("a instanceof Object", a instanceof Object);
log("({}) instanceof Point", ({}) instanceof Point);
log("typeof a", typeof a);
log("isPrototypeOf(a)", Point.prototype.isPrototypeOf(a));
log("up(a) === Point.prototype",
    Object.getPrototypeOf(a) === Point.prototype);
