app.get('/students/:id', (req, res) => {
  const id = req.params.id;      // '101'
  res.send(`Student ID: ${id}`);
});

// /students/101  ->  params.id = '101'
// /students/202  ->  params.id = '202'
