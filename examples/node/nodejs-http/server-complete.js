// Lecture 9 - slide 50 : A Complete HTTP Server
// node server-complete.js
//   curl -i localhost:3000/           -> 200 text/plain
//   curl -i localhost:3000/student    -> 200 application/json
//   curl -i localhost:3000/nope       -> 404
//
// json() is the helper from slide 44 - required from its own file, so this is
// also the "one module, one job" idea in practice (slides 12-14).

const http = require('node:http');
const json = require('./json-helper');

const ONE = { id: 1, name: 'Alice' };

http.createServer((req, res) => {
  const p = new URL(req.url, 'http://x').pathname;
  if (req.method === 'GET' && p === '/') {
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Student server');
  }
  if (req.method === 'GET' && p === '/student') {
    return json(res, 200, ONE);
  }
  res.writeHead(404).end();
}).listen(3000, () => console.log('Listening on :3000'));
