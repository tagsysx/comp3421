// npm-demo — an npm project using a local module + npm scripts
const http = require('http');
const greet = require('./greet');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(greet('World'));
});

server.listen(8080, () => {
  console.log('npm start → server at http://localhost:8080/');
});
