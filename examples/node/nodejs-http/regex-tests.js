// Lecture 9 - slide 47 : The Regex, Piece by Piece
// node regex-tests.js
//   [ '/items/42', '42', index: 0, input: '/items/42', groups: undefined ]
//   null
//   null
//   id = 42

const ROUTE = /^\/items\/([^/]+)$/;

console.log('/items/42'.match(ROUTE));
console.log('/items/42/x'.match(ROUTE));
console.log('/items/'.match(ROUTE));

const m = '/items/42'.match(ROUTE);
console.log('whole match =', m[0]);
console.log('first group =', m[1]);

// character classes
console.log('42'.match(/[0-9]+/));
console.log('42'.match(/[^0-9]+/));

// the g flag drops the groups: this prints ['/items/42'], not an m[1]
console.log('/items/42'.match(/^\/items\/([^/]+)$/g));
