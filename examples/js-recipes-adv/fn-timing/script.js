const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const t0 = performance.now();
let sum = 0;
for (let i = 0; i < 1000000; i++) sum += i;
const t1 = performance.now();

log("1e6 additions (ms)", (t1 - t0).toFixed(2));
log("the result", sum);
log("typeof performance.now()", typeof performance.now());
log("Date.now resolution", 1 + " ms at best");
log("run it twice", (() => {
  const a = performance.now();
  let s = 0;
  for (let i = 0; i < 1000000; i++) s += i;
  return (performance.now() - a).toFixed(2) + " ms";
})());
