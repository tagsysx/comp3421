const demo = document.getElementById("demo");
const show = (...args) => args
  .map(a => (typeof a === "object" ? JSON.stringify(a) : String(a)))
  .join(" ");
demo.textContent += show("hi", 42, [1, 2]) + "\n";
demo.textContent += "table: " + JSON.stringify([{ a: 1 }, { a: 2 }]);

console.log("hi", 42, [1, 2]);
console.table([{ a: 1 }, { a: 2 }]);
