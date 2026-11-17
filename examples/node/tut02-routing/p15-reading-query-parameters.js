app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

// /greet?name=Alice  ->  Hello, Alice!
// /greet             ->  Hello, Guest!
