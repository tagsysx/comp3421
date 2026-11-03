const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const days = (a, b) => Math.round((b - a) / 86400000);
const jan = new Date(Date.UTC(2026, 0, 1));
const mar = new Date(Date.UTC(2026, 2, 1));

log("1 Jan -> 1 Mar 2026", days(jan, mar));
log("the other way", days(mar, jan));
log("raw milliseconds", mar - jan);
log("Date.UTC is stable", jan.toISOString());
log("a local Date is not", new Date(2026, 0, 1).getTimezoneOffset() + " min offset");
