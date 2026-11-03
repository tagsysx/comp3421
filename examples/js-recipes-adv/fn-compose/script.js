const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const compose = (f, g) => x => f(g(x));
const inc = n => n + 1;
const dbl = n => n * 2;

log("compose(dbl, inc)(5)", compose(dbl, inc)(5));
log("inc(dbl(5))", inc(dbl(5)));
log("compose(inc, dbl)(5)", compose(inc, dbl)(5));
log("dbl(inc(5))", dbl(inc(5)));
log("order matters", "same two functions, different answer");
