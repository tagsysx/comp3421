const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(26) + "  " + value);
  render();
}

const xs = [[1], [2, [3]], [4]];

log("xs", JSON.stringify(xs));
log("xs.flat()", JSON.stringify(xs.flat()));
log("xs.flat(2)", JSON.stringify(xs.flat(2)));
log("xs.flat(Infinity)", JSON.stringify(xs.flat(Infinity)));
log("the original", JSON.stringify(xs));
log("empty slots removed", JSON.stringify([1, , 2].flat()));
