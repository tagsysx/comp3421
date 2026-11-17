// Lecture 9 - slide 21 : A Simple Timing Example
// node timing.js   ->   1. Start ... 3. End ... 2. Timer callback

console.log('1. Start');

setTimeout(() => {
  console.log('2. Timer callback');
}, 1000);

console.log('3. End');

// 1. Start  ->  3. End  ->  2. Timer
