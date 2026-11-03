const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const join = Array.prototype.join;

log('join.call("abc", "-")', join.call("abc", "-"));
log("join.call([1, 2, 3], '+')", join.call([1, 2, 3], "+"));
log("array-like object", join.call({ 0: "a", 1: "b", length: 2 }, ""));
log("the string has no join", typeof "abc".join);
log("[...str] then join", [..."abc"].join("-"));
