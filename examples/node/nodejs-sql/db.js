// Lecture 9 - slide 65 : Connect the Server to MySQL
// db.js - one file, one export. Everything else requires it.
// Needs: npm install mysql2

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
