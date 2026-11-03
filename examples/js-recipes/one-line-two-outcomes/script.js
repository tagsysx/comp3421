function labelFor(n) {
  return n === 1 ? "item" : "items";
}

document.getElementById("demo").innerHTML =
  "n = 1  →  " + labelFor(1) +
  "<br>n = 3  →  " + labelFor(3);
