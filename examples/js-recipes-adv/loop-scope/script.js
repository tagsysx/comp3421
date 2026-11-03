const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const withLet = [];
const withVar = [];

for (let i = 0; i < 3; i++) {
  setTimeout(() => withLet.push(i), 0);
}
for (var j = 0; j < 3; j++) {
  setTimeout(() => withVar.push(j), 0);
}

log("scheduled", "six timers, all with delay 0");
setTimeout(() => {
  log("let, after the loop", withLet.join(" "));
  log("var, after the loop", withVar.join(" "));
  log("why", "var is one binding, let is one per turn");
}, 20);
