const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const base = [1, 2, 3, 4, 5];

log("original", JSON.stringify(base));
log("shuffled copy", JSON.stringify(shuffle(base)));
log("original intact", JSON.stringify(base));
log("second run", JSON.stringify(shuffle(base)));
log("a fair shuffle?", "no — sort expects consistent answers");
