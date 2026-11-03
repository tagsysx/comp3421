const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;

const rolls = Array.from({ length: 10 }, () => rnd(1, 6));
log("ten rolls of a die", rolls.join(" "));
log("a single value", rnd(5, 5));
log("min / max seen", Math.min(...rolls) + " / " + Math.max(...rolls));
log("never out of range", rolls.every(n => n >= 1 && n <= 6));
log("why + 1", "hi - lo + 1 makes both ends reachable");
