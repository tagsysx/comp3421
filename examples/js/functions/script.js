// Assign a function to a variable
const add = (a, b) => a + b;
console.log('add(2, 3) =', add(2, 3));

// Pass a function as an argument (callback)
function greet(name, format) {
  return format(name);
}
console.log(greet('Ada', n => `Hello, ${n}!`));

// Return a function from a function (factory)
function makeMultiplier(factor) {
  return n => n * factor;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log('double(5) =', double(5));
console.log('triple(5) =', triple(5));

// Higher-order function: map takes a function
const nums = [1, 2, 3, 4];
const squares = nums.map(n => n * n);
console.log('squares:', squares);
