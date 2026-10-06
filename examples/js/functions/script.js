// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane (the pages used to be console-only).
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

// Assign a function to a variable
const add = (a, b) => a + b;
log('add(2, 3) =', add(2, 3));

// Pass a function as an argument (callback)
function greet(name, format) {
  return format(name);
}
log(greet('Ada', n => `Hello, ${n}!`));

// Return a function from a function (factory)
function makeMultiplier(factor) {
  return n => n * factor;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
log('double(5) =', double(5));
log('triple(5) =', triple(5));

// Higher-order function: map takes a function
const nums = [1, 2, 3, 4];
const squares = nums.map(n => n * n);
log('squares:', squares);
