// Lecture 9 - slide 32 : Appending to a File
// node append.js   (run it three times, then: wc -l visits.log)

const fs = require('node:fs/promises');

fs.appendFile('visits.log', 'visit\n')
  .then(() => console.log('Entry saved.'))
  .catch((err) => console.error(err.message));
