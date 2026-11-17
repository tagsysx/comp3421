// Lecture 9 - slide 42 : Request Process: Reading the Body
// FRAGMENT - the slide shows these lines inside a request handler, where `req`
// and `res` already exist. Wrapped in one function here so the file parses, and
// turned into a promise so the caller can chain on it.
// It is not a program: run server-complete.js instead.

function readBody(req, res) {
  return new Promise((resolve) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > 1_000_000) {       // 1 MB
        res.statusCode = 413;
        res.end();
        req.destroy();              // stop reading
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });
  });
}

module.exports = readBody;
