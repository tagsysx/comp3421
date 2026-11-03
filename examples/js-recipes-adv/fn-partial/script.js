const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const mul = a => b => a * b;
const triple = mul(3);

log("mul(3)(7)", mul(3)(7));
log("triple(7)", triple(7));
log("typeof triple", typeof triple);
log("triple.toString()", String(triple).replace(/\s+/g, " ").slice(0, 34));
log("map with a prepared function", [1, 2, 3].map(triple).join(" "));
log("add(10)(5)", ((a) => (b) => a + b)(10)(5));
