# express-rest

A complete CRUD REST API (in-memory — data resets on restart).

## Run

```bash
npm install express   # first time only
node server.js
```

## Try it (with `curl` in another terminal)

```bash
curl http://localhost:3000/items
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"Write lab"}'
curl -X PUT http://localhost:3000/items/3 -H "Content-Type: application/json" -d '{"name":"Write lab report"}'
curl -X DELETE http://localhost:3000/items/3
```
