// Lecture 9 - slide 15 : Importing Our Module
// node app.js   ->   5 / 6 / 9

const math = require('./math');

console.log(math.add(2, 3));       // 5
console.log(math.multiply(2, 3));  // 6

// or take one name
const { add } = require('./math');
console.log(add(4, 5));            // 9
