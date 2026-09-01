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
console.log(rex.speak());
console.log('instance of Dog:', rex instanceof Dog);
console.log('instance of Animal:', rex instanceof Animal);
console.log('static:', Dog.kingdom());
