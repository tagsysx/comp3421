// Lecture 9 - slide 24 : Promises
// node promises.js   ->   File: ...

const fs = require('node:fs/promises');

fs.readFile('message.txt', 'utf8')
  .then((data) => {
    console.log('File:', data);
  })
  .catch((err) => {
    console.error('Read failed:', err.message);
  });
