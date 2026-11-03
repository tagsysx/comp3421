const add = a => b => a + b;

const add2 = add(2);

document.getElementById("demo").innerHTML =
  "add(2)(3)  →  " + add(2)(3) +
  "<br>add2 = add(2); add2(10)  →  " + add2(10);
