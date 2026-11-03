const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const api = (() => {
  const secret = 42;
  let reads = 0;
  return {
    get() { reads++; return secret; },
    howManyReads() { return reads; }
  };
})();

log("api.get()", api.get());
log("api.get()", api.get());
log("api.howManyReads()", api.howManyReads());
log("api.secret", String(api.secret));
log("typeof secret outside", typeof globalThis.secret);
log("Object.keys(api)", JSON.stringify(Object.keys(api)));
