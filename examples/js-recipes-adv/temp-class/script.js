const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

class Temp {
  constructor(c) { this.c = c; }
  get f() { return this.c * 9 / 5 + 32; }
  static fromF(f) { return new Temp((f - 32) * 5 / 9); }
}

const t = new Temp(100);
log("new Temp(100).f", t.f);
log("typeof t.f", typeof t.f);
log("t.hasOwnProperty('f')", t.hasOwnProperty("f"));
log("Temp.fromF(212).c", Temp.fromF(212).c.toFixed(1));
try {
  t.fromF(212);
} catch (e) {
  log("t.fromF(212)", e.name + ": " + e.message);
}
