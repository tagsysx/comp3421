// Lecture 9 - slide 62 : Connect and Query
// node --env-file=.env db-connect.js
// Needs: npm install mysql2, and a MySQL server with setup.sql loaded.
// The connection is kept in `db` so the .finally() below can close it.

const mysql = require('mysql2/promise');

const SQL = 'SELECT * FROM students';
let db;

mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
  .then((c) => { db = c; return db.execute(SQL); })
  .then(([rows]) => { console.log(rows); })
  .catch((err) => console.error(err.message))
  .finally(() => db.end());
