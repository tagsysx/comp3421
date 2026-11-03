const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const users = [
  { name: "Bo", age: 17 },
  { name: "Ada", age: 36 },
  { name: "Cy", age: 41 },
];

log("users.find(u => u.age >= 18)", JSON.stringify(users.find(u => u.age >= 18)));
log("users.filter(u => u.age >= 18)", users.filter(u => u.age >= 18).length + " items");
log("users.findIndex(u => u.age >= 18)", users.findIndex(u => u.age >= 18));
log("nobody over 60", users.find(u => u.age > 60));
log("the original length", users.length);
