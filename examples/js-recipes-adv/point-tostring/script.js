const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

class Point {
  constructor(x, y) { this.x = x; this.y = y; }
  toString() { return `(${this.x}, ${this.y})`; }
}

const p = new Point(3, 4);
log("String(p)", String(p));
log("`p = ${p}`", `p = ${p}`);
log("p + ''", p + "");
log("'[' + [p] + ']'", "[" + [p] + "]");
log("JSON.stringify(p)", JSON.stringify(p));
