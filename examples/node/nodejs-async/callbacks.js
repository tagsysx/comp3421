// Lecture 9 - slide 23 : Callbacks
// node callbacks.js   ->   Read requested ... File: ...

const fs = require('node:fs');

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Read failed:', err.message);
    return;
  }
  console.log('File:', data);
});

console.log('Read requested');
