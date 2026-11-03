const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

function Point(x, y) { this.x = x; this.y = y; }

delete globalThis.x;
const noNew = Point(1, 2);
log("return value of Point(1, 2)", String(noNew));
log("globalThis.x after that call", String(globalThis.x));
log("so the instance was never built", "nothing was returned");

const p = new Point(1, 2);
log("new Point(1, 2)", "{ x: " + p.x + ", y: " + p.y + " }");

const strictPoint = (() => {
  "use strict";
  return function Point(x, y) { this.x = x; this.y = y; };
})();
try {
  strictPoint(1, 2);
} catch (e) {
  log("same call in strict mode", e.name + ": " + e.message);
}
