app.get('/', (req, res) => {
  res.send('Home page');
});

// last: catches whatever nothing else did
app.use((req, res) => {
  res.status(404).send('Page not found');
});
