const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const user = {
  name: "Ada",
  greet() { return "Hi, " + this.name; }
};

const loose = user.greet;
const greetAda = user.greet.bind(user);

log("user.greet()", user.greet());
log("loose()", loose());
log("greetAda()", greetAda());
log("greetAda.call({name:'Bob'})", greetAda.call({ name: "Bob" }));

setTimeout(() => {
  log("after 10 ms, bound", greetAda());
  log("after 10 ms, unbound", loose());
}, 10);
