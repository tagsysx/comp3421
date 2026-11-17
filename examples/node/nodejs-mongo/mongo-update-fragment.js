// Lecture 9 - slide 69 : Querying and Updating Documents
// FRAGMENT - `col` is the collection from mongo.js. Wrapped so the file parses.

function change(col) {
  return col.updateOne(
    { name: 'Alice' },
    { $set: { programme: 'Data Science' } }
  )
    .then((r) => console.log(r.modifiedCount))
    .then(() => col.find({ age: { $gt: 20 } })
      .toArray())
    .then((older) => console.log(older))
    .then(() => col.deleteOne({ name: 'Bob' }));
}

module.exports = change;
