const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const cat = Object.create({ speak() { return this.name + " speaks"; } });
cat.name = "Tom";

const copy = Object.assign({}, cat);
log("Object.keys(cat)", JSON.stringify(Object.keys(cat)));
log("Object.keys(copy)", JSON.stringify(Object.keys(copy)));
log("typeof copy.speak", typeof copy.speak);
try {
  copy.speak();
} catch (e) {
  log("copy.speak()", e.name + ": " + e.message);
}

const mix = (o, m) => Object.assign(o, m);
mix(cat, { purr() { return "purr"; } });
log("after the mixin, cat.purr()", cat.purr());
log("copy still has no purr", typeof copy.purr);
