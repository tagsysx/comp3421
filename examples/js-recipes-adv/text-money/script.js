const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

log("(1234.5).toFixed(2)", (1234.5).toFixed(2));
log("with a currency sign", "$" + (1234.5).toFixed(2));
log("typeof toFixed", typeof (1234.5).toFixed(2));
log("(0.1 + 0.2).toFixed(2)", (0.1 + 0.2).toFixed(2));
log("(0.1 + 0.2)", 0.1 + 0.2);
log("Intl for real money",
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(1234.5));
