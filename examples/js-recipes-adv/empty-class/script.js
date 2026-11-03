const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

class Empty {}
const e = new Empty();

log("new Empty()", JSON.stringify(e));
log("typeof Empty", typeof Empty);
log("e.constructor.name", e.constructor.name);
log("e instanceof Empty", e instanceof Empty);
log("Empty.length", Empty.length);
log("Object.keys(e).length", Object.keys(e).length);
