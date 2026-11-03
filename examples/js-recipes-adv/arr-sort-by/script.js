const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const people = [
  { name: "Ada", age: 36 },
  { name: "Bob", age: 19 },
  { name: "Cy", age: 28 }
];
const show = xs => xs.map(p => p.name + ":" + p.age).join("  ");

log("before", show(people));
people.sort((a, b) => a.age - b.age);
log("ascending", show(people));
people.sort((a, b) => b.age - a.age);
log("descending", show(people));
log("sort mutated the same array", "true — copy first with [...people]");
log("strings, not numbers", JSON.stringify([10, 9, 100].sort()));
