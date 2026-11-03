const list = ["HTML", "CSS", "JavaScript"];
const demo = document.getElementById("demo");

for (const [i, v] of list.entries()) {
  demo.textContent += i + "  " + v + "\n";
  console.log(i, v);
}
