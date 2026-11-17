app.use(express.json());        // before the route

app.post('/students', (req, res) => {
  const student = req.body;
  res.status(201).json({ ok: true, student });
});
