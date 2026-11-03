// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane (the pages used to be console-only).
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

// ---------- class, constructor, methods, get / set, static ---------------
class Person {
  constructor(first, last) {          // runs on new
    this.first = first;
    this.last = last;
  }

  fullName() {                        // a method: no `function` keyword
    return `${this.first} ${this.last}`;
  }

  get initials() {                    // a getter: read it like a field
    return this.first[0] + this.last[0];
  }

  get nickname() {
    return this._nick || this.first;
  }

  set nickname(value) {               // a setter: assign it like a field
    this._nick = value;
  }

  static fromJSON(json) {             // a static helper: lives on the class
    const data = JSON.parse(json);
    return new Person(data.first, data.last);
  }
}

const ada = new Person('Ada', 'Lovelace');

log('typeof Person:', typeof Person);                 // function
log('ada.fullName():', ada.fullName());               // Ada Lovelace
log('ada.initials:', ada.initials);                   // AL  (no parentheses)
log('own properties:', Object.keys(ada).join(', '));  // first, last

// One copy of each method, shared through the prototype — not one per object
log('methods live on the prototype:',
    Object.getPrototypeOf(ada) === Person.prototype);

ada.nickname = 'The Countess';                        // calls the setter
log('ada.nickname:', ada.nickname);                   // The Countess

const parsed = Person.fromJSON('{"first":"Grace","last":"Hopper"}');
log('Person.fromJSON:', parsed.fullName());           // Grace Hopper

// ---------- extends and super, overriding a method -----------------------
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
