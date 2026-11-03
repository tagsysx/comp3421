const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

log('String(7).padStart(2, "0")', String(7).padStart(2, "0"));
log("a clock", [9, 5, 12].map(n => String(n).padStart(2, "0")).join(":"));
log("padEnd for a column", JSON.stringify("id".padEnd(8, ".") + "|"));
log("already long enough", String(1234).padStart(2, "0"));
try {
  (7).padStart(2, "0");
} catch (e) {
  log("(7).padStart(...)", e.name + ": " + e.message);
}
