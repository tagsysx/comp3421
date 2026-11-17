// Lecture 9 - slide 55 : Express: The Same Server, Declared
// npm install express   then:   node express-demo.js
// curl -i localhost:3000/items/42   ->   {"id":"42"}
//
// The whole point of this page: same req and res objects as server-complete.js,
// but the routing is declared instead of compared.

const express = require('express');

const app = express();

app.get('/items/:id', (req, res) => {
  res.json({ id: req.params.id });
});

app.get('/', (req, res) => {
  res.type('text/plain').send('Express is running\n');
});

app.use((req, res) => {
  res.status(404).json({ error: 'no route' });
});

app.listen(3000, () => console.log('http://localhost:3000/items/42'));
