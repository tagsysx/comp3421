const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

let cache;
let computed = 0;
const slow = n => {
  if (cache === undefined) { computed++; cache = n * n; }
  return cache;
};

log("slow(9)", slow(9));
log("slow(7)", slow(7));
log("computations so far", computed);
log("slow(100)", slow(100));
log("computations so far", computed);
log("cache now holds", cache);
