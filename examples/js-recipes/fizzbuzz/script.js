const demo = document.getElementById("demo");
const out = [];

for (let i = 1; i <= 20; i++) {
  let s = (i%3?"":"Fizz") + (i%5?"":"Buzz");
  out.push(s || i);
}

demo.textContent = out.join("  ");
console.log(out.join("  "));
