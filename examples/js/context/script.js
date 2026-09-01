// this inside a method = the owning object
const user = {
  name: 'Ada',
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
console.log(user.greet());

// call / apply: borrow a method with a different this
const other = { name: 'Grace' };
console.log(user.greet.call(other));
console.log(user.greet.apply(other));

// bind: lock this permanently
const greetGrace = user.greet.bind(other);
console.log(greetGrace());

// Arrow functions do NOT have their own this
const runner = {
  name: 'Arrow',
  run() {
    // arrow captures this from run() (the runner object)
    setTimeout(() => {
      console.log(`${this.name} finished`);
    }, 100);
  }
};
runner.run();
