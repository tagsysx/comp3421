const sum = (...nums) =>
  nums.reduce((a, b) => a + b, 0);

document.getElementById("demo").innerHTML =
  "sum(1, 2, 3)  →  " + sum(1, 2, 3) +
  "<br>sum(4, 5)  →  " + sum(4, 5);
