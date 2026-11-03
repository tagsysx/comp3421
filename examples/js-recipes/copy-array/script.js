const items = ["a", "b"];
const copy = [...items];
copy.push("new");

// items unchanged
document.getElementById("demo").innerHTML =
  "items: " + items.join(", ") + "<br>" +
  "copy:  " + copy.join(", ");
