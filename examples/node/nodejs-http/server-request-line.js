// Lecture 9 - slide 40 : Request Process: The Request Line, Decoded
// node server-request-line.js
// curl -i 'localhost:3000/items?q=pen'    -> the three console lines + /items

const http = require('node:http');

http.createServer((req, res) => {
  // req.url: '/items?q=pen' - no host, no scheme
  const base = 'http://' + req.headers.host;
  const u = new URL(req.url, base);

  console.log(req.method);             // 'GET'
  console.log(u.pathname);             // '/items'
  console.log(u.searchParams.get('q'));  // 'pen'

  res.end(u.pathname);
}).listen(3000);
