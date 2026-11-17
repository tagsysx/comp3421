const http = require('node:http');

http.createServer((req, res) => {
  const p = req.url;
  if (req.method === 'GET' && p === '/about') {
    res.end('About page');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(3000);
