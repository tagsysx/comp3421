// Lecture 9 - slide 25 : One catch Covers the Whole Chain
// node promise-chain.js   ->   caught: no database on 3000   (step 3 never runs)

const fs = require('node:fs/promises');

// Step 2 is the one that fails here: pretend nothing is listening yet.
const start = (cfg) => Promise.reject(new Error('no database on ' + cfg.port));

fs.readFile('config.json', 'utf8')
  .then((text) => JSON.parse(text))                   // 1 read + parse
  .then((cfg) => start(cfg))                          // 2 start -> rejects
  .then((port) => console.log('listening on', port))  // 3 skipped
  .catch((err) => console.error('caught:', err.message));

// Swap start() for `(cfg) => Promise.resolve(cfg.port)` to see step 3 run.
// The catch stays one line either way: it is not attached per step.
