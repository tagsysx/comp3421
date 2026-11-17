// Lecture 9 - slide 54 : Reading a Cookie in Node
// node cookie-demo.js   ->   http://localhost:3000/
// End-to-end: the first request sets the cookie, the second one reads it back.

const http = require('node:http');

http.createServer((req, res) => {
  const raw = req.headers.cookie;                 // 'theme=dark' on visit two
  const cookies = Object.fromEntries(
    (raw || '').split('; ').map((p) => p.split('=')));
  const theme = cookies.theme || '(none yet)';

  if (!cookies.theme) {
    res.setHeader('Set-Cookie', 'theme=dark; Path=/; HttpOnly; Max-Age=3600');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('theme = ' + theme + '\n');
}).listen(3000, () => console.log('http://localhost:3000/'));
