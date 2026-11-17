// Lecture 9 - slide 46 : Path Patterns
// FRAGMENT - needs `u` (the parsed URL), json() and the two data helpers.
// The regex is the whole point: one segment, captured.

const json = require('./json-helper');

function matchItems(u, res, get) {
  // '/items/:id'  ->  /^\/items\/([^/]+)$/
  const ROUTE = /^\/items\/([^/]+)$/;

  const m = u.pathname.match(ROUTE);
  if (m) {
    const id = decodeURIComponent(m[1]);   // '42'
    return json(res, 200, get(id));
  }

  // a prefix route needs its slash
  if (u.pathname.startsWith('/files/')) {
    return 'file: ' + u.pathname.slice(7);   // sendFile(res, ...) on slide 53
  }
}

module.exports = matchItems;
