app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// HTTP/1.1 200 OK
// Content-Type: text/html; charset=utf-8
// Hello, Express!

app.get('/raw', (req, res) => {
  res.send(Buffer.from('bytes'));
});
