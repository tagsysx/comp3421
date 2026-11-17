// Lecture 9 - slide 44 : Response Process: JSON
// The slide shows the four lines inline; this is the same four lines wrapped
// once, and every later page calls it.

function json(res, status, data) {
  const body = JSON.stringify(data);
  const type = 'application/json; charset=utf-8';
  res.writeHead(status, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': type
  });
  res.end(body);
}

// one call, and the order lives inside the helper
// json(res, 200, { items: rows });

module.exports = json;
