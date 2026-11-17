app.use(express.urlencoded({ extended: false }));

app.get('/form', (req, res) => res.render('form'));

app.post('/greet', (req, res) => {
  const name = req.body.name || 'Guest';
  res.render('greet', { name });
});
