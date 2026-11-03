let a = 1, b = 2;
const before = "before: a = " + a + ", b = " + b;

[a, b] = [b, a];

document.getElementById("demo").innerHTML =
  before + "<br>after:  a = " + a + ", b = " + b;
