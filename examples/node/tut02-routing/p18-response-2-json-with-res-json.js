app.get('/api/student', (req, res) => {
  res.json({ id: 101, name: 'Alice' });
});

// Content-Type: application/json; charset=utf-8
// {"id":101,"name":"Alice"}

app.get('/api/students', (req, res) => {
  res.status(200).json([{ id: 101 }, { id: 102 }]);
});
