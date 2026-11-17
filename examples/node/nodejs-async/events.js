// Lecture 9 - slide 27 : Event Mechanism
// node events.js   ->   Received: Hello!

const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on('message', (text) => {
  console.log('Received:', text);
});

emitter.emit('message', 'Hello!');
// Received: Hello!
