// Lecture 9 - slide 14 : Creating a Module
// A module is definitions and one export. Run it and nothing happens.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };
