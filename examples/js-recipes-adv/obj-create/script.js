const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const animal = {
  speak() { return this.name + " makes a sound"; }
};
const cat = Object.create(animal);
cat.name = "Tom";

log("cat.speak()", cat.speak());
log("cat.hasOwnProperty('name')", cat.hasOwnProperty("name"));
log("cat.hasOwnProperty('speak')", cat.hasOwnProperty("speak"));
log("Object.keys(cat)", JSON.stringify(Object.keys(cat)));
log("up(cat) === animal", Object.getPrototypeOf(cat) === animal);
log("animal.name", String(animal.name));
