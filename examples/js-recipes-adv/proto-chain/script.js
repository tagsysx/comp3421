const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const up = o => Object.getPrototypeOf(o);
const depth = o => { let n = 0; while ((o = up(o))) n++; return n; };

log("up(Object.prototype)", String(up(Object.prototype)));
log("up({}) === Object.prototype", up({}) === Object.prototype);
log("up([]) === Array.prototype", up([]) === Array.prototype);
log("up(Array.prototype)", up(Array.prototype) === Object.prototype ? "Object.prototype" : "not Object.prototype");
log("links from {}", depth({}));
log("links from []", depth([]));
log("links from a function", depth(function () {}));
