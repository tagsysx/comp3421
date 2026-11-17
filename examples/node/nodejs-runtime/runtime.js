// Lecture 9 - slide 10 : A First Look at the Runtime
// node runtime.js Alice 20

console.log('Node:', process.version);
console.log('CWD:', process.cwd());
console.log('Args:', process.argv.slice(2));

// Node: v22.11.0            (the version you have)
// CWD:  .../code/lecture09  (where you ran node)
// Args: [ 'Alice', '20' ]   (strings, always)
