// Lecture 9 - slide 45 : Routing by Method and Path
// FRAGMENT - the body of the request handler. Wrapped in one function so the
// file parses; req and res come from the server in server-complete.js.

function handle(req, res) {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;
  const TEXT = 'text/plain';

  if (req.method === 'GET' && p === '/') {
    return res.end('Home page');
  }
  if (req.method === 'GET' && p === '/about') {
    return res.end('About page');
  }
  res.writeHead(404, { 'Content-Type': TEXT });
  res.end('Not found');
}

module.exports = handle;
