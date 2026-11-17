// Lecture 9 - slide 43 : Response Process: Dynamic Resource
// FRAGMENT - the body is one string your code builds; nothing is read from
// disk. Wrapped so the file parses: sendHTML() is the part that writes it.

function sendHTML(res, html) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': Buffer.byteLength(html)
  });
  res.end(html);
}

// sendHTML(res, '<h1>Hello, world!</h1>');
module.exports = sendHTML;
