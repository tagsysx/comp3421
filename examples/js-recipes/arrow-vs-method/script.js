const o = { n: 1, f() { return this.n; } };

const asMethod = o.f();

const g = o.f;
const asFunction = g();

document.getElementById("demo").innerHTML =
  "o.f()  →  " + asMethod +
  "<br>const g = o.f; g()  →  " + asFunction;
