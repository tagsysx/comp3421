const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + " makes a sound"; }
}
class Dog extends Animal {
  constructor(name, breed) { super(name); this.breed = breed; }
  speak() { return super.speak() + " — woof"; }
}

const rex = new Dog("Rex", "corgi");
log("rex.speak()", rex.speak());
log("rex instanceof Dog", rex instanceof Dog);
log("rex instanceof Animal", rex instanceof Animal);
log("up(Dog) === Animal", Object.getPrototypeOf(Dog) === Animal);
log("up(Dog.prototype) === Animal.prototype",
    Object.getPrototypeOf(Dog.prototype) === Animal.prototype);

try {
  new (class Bad extends Animal {
    constructor() { this.x = 1; super("bad"); }
  })();
} catch (e) {
  log("this before super()", e.name + ": " + e.message);
}
