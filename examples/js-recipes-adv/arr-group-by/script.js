const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const rows = [
  { city: "HK", n: 1 },
  { city: "SZ", n: 2 },
  { city: "HK", n: 3 }
];
const by = (xs, k) => xs.reduce((m, x) => ((m[x[k]] ||= []).push(x), m), {});

const g = by(rows, "city");
log("the buckets", Object.keys(g).join(", "));
log("count per city", Object.keys(g).map(k => k + "=" + g[k].length).join("  "));
log("HK rows", g.HK.map(r => r.n).join(" + "));
log("this is not lodash", "no sorting, no empty bucket");
