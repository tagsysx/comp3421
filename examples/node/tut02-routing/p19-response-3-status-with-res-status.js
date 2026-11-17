app.post('/students', (req, res) => {
  res.status(201).json({ ok: true });
});

app.delete('/students/:id', (req, res) => {
  res.status(204).end();       // no body
});

app.get('/boom', (req, res) => {
  res.status(500).json({ error: 'Server' });
});
