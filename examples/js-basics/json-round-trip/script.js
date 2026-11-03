// Date.UTC keeps the time zone out of the picture, so the string below
// is the same on every machine. A plain new Date(2024, 0, 15) would be
// shifted by your local offset — that is a real trap, not this lesson.
const user = { name: "Ada", age: 36, joined: new Date(Date.UTC(2024, 0, 15)) };

// Out: a plain object becomes a string.
const text = JSON.stringify(user);

// Back: a string becomes a NEW object — not the one you started with.
const back = JSON.parse(text);

const rows = [
  "typeof text               " + typeof text,
  "JSON.stringify(user)      " + text,
  "",
  "back.name                 " + back.name,
  "back === user             " + (back === user),
  "back.joined instanceof Date  " + (back.joined instanceof Date),
  "",
  "// what does not survive",
  "JSON.stringify({ f() {}, u: undefined })",
  "  ->  " + JSON.stringify({ f() {}, u: undefined }),
  "",
  "// the third argument indents, for reading",
  JSON.stringify({ name: "Ada", age: 36 }, null, 2)
];

document.getElementById("out").textContent = rows.join("\n");
