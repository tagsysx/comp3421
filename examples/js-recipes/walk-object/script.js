const user = { name: "Ada", age: 36, role: "engineer" };
const demo = document.getElementById("demo");

for (const [k, v] of Object.entries(user)) {
  demo.textContent += k + ": " + v + "\n";
  console.log(k, v);
}
