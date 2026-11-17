// Lecture 9 - slide 13 : Three Types of Modules
// Needs: npm install mysql2      (slide 13 is about the three shapes, it prints nothing)
//
// node:  no install, no package.json entry
// ./    a path, relative to this file
// bare  a package name, from node_modules

const fs = require('node:fs');      // built-in
const mysql = require('mysql2');    // npm
const math = require('./math');     // yours

console.log(typeof fs.readFile, typeof mysql.createPool, typeof math.add);
// function function function
