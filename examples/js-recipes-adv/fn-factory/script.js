const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const times = n => x => x * n;
const triple = times(3);
const ten = times(10);

log("times(3)(5)", times(3)(5));
log("triple(5)", triple(5));
log("ten(5)", ten(5));
log("[1, 2, 3].map(triple)", [1, 2, 3].map(triple).join(" "));
log("[1, 2, 3].map(times(10))", [1, 2, 3].map(times(10)).join(" "));
log("each call keeps its own n", times(2)(9) + " and " + times(4)(9));
