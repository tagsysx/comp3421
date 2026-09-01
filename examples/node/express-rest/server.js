// express-rest — a full CRUD REST API (in-memory)
const express = require('express');
const app = express();

app.use(express.json());

let items = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'Learn Node' },
];
let nextId = 3;

// GET /items — list all
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id — read one
app.get('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

// POST /items — create
app.post('/items', (req, res) => {
  const item = { id: nextId++, name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

// PUT /items/:id — update
app.put('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  item.name = req.body.name;
  res.json(item);
});

// DELETE /items/:id — remove
app.delete('/items/:id', (req, res) => {
  items = items.filter((i) => i.id !== Number(req.params.id));
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('REST API at http://localhost:3000/items');
});
