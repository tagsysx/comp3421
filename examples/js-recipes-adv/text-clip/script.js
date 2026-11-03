const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const clip = (s, n) => s.length > n ? s.slice(0, n) + "…" : s;

log('clip("JavaScript", 4)', clip("JavaScript", 4));
log("its length", clip("JavaScript", 4).length);
log('clip("JS", 4)', clip("JS", 4));
log('clip("JavaScript", 4) vs 5', clip("JavaScript", 5));
log("note", "slice is safe past the end: it just stops");
