const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

String.prototype.shout = function () {
  return this.toUpperCase() + "!";
};

log('"hi".shout()', "hi".shout());
log('"ok".shout()', "ok".shout());
log("it is shared", "every string in the page has it");

let seen = [];
for (const k in "ab") seen.push(k);
log("for...in on a string", seen.join(", "));
log("enumerable?", "yes — this is the risk");

Object.defineProperty(String.prototype, "loud", {
  value: function () { return this.toUpperCase(); },
  enumerable: false
});
let seen2 = [];
for (const k in "ab") seen2.push(k);
log("after defineProperty", seen2.join(", "));
log("loud is hidden", !seen2.includes("loud"));
