const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const counter = (() => {
  let n = 0;
  return () => ++n;
})();
const other = (() => {
  let n = 0;
  return () => ++n;
})();

log("counter()", counter());
log("counter()", counter());
log("counter()", counter());
log("a second counter", other());
log("they are independent", counter() + " vs " + other());
log("counter.n", String(counter.n));
