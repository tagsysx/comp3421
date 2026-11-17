// Lecture 9 - slide 30 : Writing and Reading a File
// node write-and-read.js   ->   Hello!     (and it leaves msg.txt behind)

const fs = require('node:fs/promises');

fs.writeFile('msg.txt', 'Hello!\n')
  .then(() => fs.readFile('msg.txt'))
  .then((buf) => console.log(buf.toString()))
  .catch((err) => {
    console.error('File failed:', err.code);
  });
