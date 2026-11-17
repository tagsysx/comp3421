// Lecture 9 - slide 37 : Your First HTTP Server
// node server-hello.js   then   curl -i localhost:3000/

const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('Hello, HTTP!');
});

server.listen(3000, () => {
  console.log('Listening on :3000');
});
