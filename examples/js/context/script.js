// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane (the pages used to be console-only).
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

// this inside a method = the owning object
const user = {
  name: 'Ada',
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
log(user.greet());

// call / apply: borrow a method with a different this
const other = { name: 'Grace' };
log(user.greet.call(other));
log(user.greet.apply(other));

// bind: lock this permanently
const greetGrace = user.greet.bind(other);
log(greetGrace());

// Arrow functions do NOT have their own this
const runner = {
  name: 'Arrow',
  run() {
    // arrow captures this from run() (the runner object)
    setTimeout(() => {
      log(`${this.name} finished`);
    }, 100);
  }
};
runner.run();
