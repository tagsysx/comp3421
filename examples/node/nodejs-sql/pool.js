// Lecture 9 - slide 64 : Why Use a Connection Pool?
// node --env-file=.env pool.js
// A pool, created once. Nothing connects until the first query.

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

console.log('pool created, connectionLimit =', pool.pool.config.connectionLimit);
pool.end();
