// Lecture 9 - slide 63 : Insert, Update, and Delete
// FRAGMENT - `db` again, from db-connect.js. Wrapped so the file parses.
// The three statements run in order because each .then waits for the last.

function addThenChangeThenRemove(db) {
  let id;
  return db.execute(
    'INSERT INTO students (name, programme) ' +
    'VALUES (?, ?)', ['Dana', 'Computing'])
    .then(([r]) => { id = r.insertId; })
    .then(() => console.log('new id', id))
    .then(() => db.execute(
      'UPDATE students SET programme=? WHERE id=?',
      ['Data Science', id]))
    .then(() => db.execute(
      'DELETE FROM students WHERE id=?', [id]))
    .then(() => console.log('row deleted'));
}

module.exports = addThenChangeThenRemove;
