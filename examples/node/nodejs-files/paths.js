// Lecture 9 - slide 34 : Building Paths with path
// node paths.js

const path = require('node:path');

const dir = path.join(__dirname, 'data');
const file = path.join(dir, 'students.json');

console.log("file:",file);
console.log("basename:",path.basename(file));  // students.json
console.log("extname:",path.extname(file));   // .json

console.log("data:",path.join('data'));        // data
console.log("resolve:",path.resolve('data'));   // /cwd/data
