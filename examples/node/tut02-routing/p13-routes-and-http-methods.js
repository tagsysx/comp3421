app.get('/students', (req, res) => {
  res.send('Get students');
});
app.post('/students', (req, res) => {
  res.send('Add a student');
});
app.delete('/students/:id', (req, res) => {
  res.send(`Delete student ${req.params.id}`);
});
