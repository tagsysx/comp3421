// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane (the pages used to be console-only).
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
  static kingdom() {
    return 'Animalia';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);       // call the parent constructor
    this.breed = breed;
  }
  speak() {
    return `${this.name} (a ${this.breed}) barks.`;
  }
}

const rex = new Dog('Rex', 'Labrador');
log(rex.speak());
log('instance of Dog:', rex instanceof Dog);
log('instance of Animal:', rex instanceof Animal);
log('static:', Dog.kingdom());
