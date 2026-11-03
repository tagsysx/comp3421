function show(text) {
  document.getElementById("demo").textContent += text + "\n";
}

// a normal, named function
function shout(text) {
  return text.toUpperCase();
}

// another one: it takes a function as its parameter
function apply(fn, arg) {
  return fn(arg);
}

show('apply(shout, "hi")  →  ' + apply(shout, "hi"));   // HI

// the same idea with a built-in receiver
function double(n) {
  return n * 2;
}
show("[1, 2, 3].map(double)  →  " + JSON.stringify([1, 2, 3].map(double)));

// a named handler, not an arrow, passed to addEventListener
const btn = document.getElementById("go");

function onClick() {
  show('clicked → apply(shout, "clicked") = ' + apply(shout, "clicked"));
}
btn.addEventListener("click", onClick);
