// Lecture 9 - slide 41 : Request Process: URL and URLSearchParams
// node url-object.js
//
// The slide shows bare expressions. Each one is wrapped in console.log here so
// the values actually appear in the terminal.

const u = new URL('https://a.hk/items/42?tag=new');
console.log(u.origin);          // 'https://a.hk'
console.log(u.pathname);        // '/items/42'
console.log(u.search);          // '?tag=new'
console.log(u.hash);            // '' - never sent to the server

const q = new URLSearchParams('tag=new&tag=sale');
console.log(q.get('tag'));      // 'new' - the first only
console.log(q.getAll('tag'));   // ['new', 'sale']
q.set('tag', 'sold');           // replaces every value
console.log(q.toString());      // 'tag=sold'
