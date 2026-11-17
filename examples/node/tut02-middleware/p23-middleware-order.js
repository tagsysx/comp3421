app.use((req, res, next) => {
  console.log('1. middleware');
  next();
});

app.get('/', (req, res) => {
  console.log('2. route handler');
  res.send('Hello!');
});
