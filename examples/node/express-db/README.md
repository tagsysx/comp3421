# express-db

A REST API with JSON-file persistence — data survives restarts, saved to `db.json`.

## Run

```bash
npm install express   # first time only
node server.js
```

## Try it (with `curl` in another terminal)

```bash
curl http://localhost:3000/todos
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"text":"Finish lab"}'
curl -X PUT http://localhost:3000/todos/<id> -H "Content-Type: application/json" -d '{"done":true}'
curl -X DELETE http://localhost:3000/todos/<id>
```

Restart the server and `GET /todos` — the data is still there.
