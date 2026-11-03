const nums = [4, 8, 15, 16, 23, 42];
const total = nums.reduce((a, b) => a + b, 0);

document.getElementById("demo").textContent =
  nums.join(" + ") + " = " + total;
