// express-db — a REST API with JSON-file persistence
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const DB = path.join(__dirname, 'db.json');

function readDb() {
  return JSON.parse(fs.readFileSync(DB, 'utf8'));
}

function writeDb(data) {
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

// GET /todos — list all
app.get('/todos', (req, res) => {
  res.json(readDb());
});

// POST /todos — create
app.post('/todos', (req, res) => {
  const todos = readDb();
  const todo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(todo);
  writeDb(todos);
  res.status(201).json(todo);
});

// PUT /todos/:id — toggle done
app.put('/todos/:id', (req, res) => {
  const todos = readDb();
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Not found' });
  todo.done = req.body.done;
  writeDb(todos);
  res.json(todo);
});

// DELETE /todos/:id — remove
app.delete('/todos/:id', (req, res) => {
  let todos = readDb();
  todos = todos.filter((t) => t.id !== Number(req.params.id));
  writeDb(todos);
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('DB API at http://localhost:3000/todos');
});
