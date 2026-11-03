// 1. querySelector returns ONE element - the first match in the document.
const first = document.querySelector(".box");
first.style.fontSize = "24px";

// 2. querySelectorAll returns EVERY match, inside a NodeList.
const all = document.querySelectorAll(".box");

// The list is not an element: it has no .style of its own.
const report = [
  "first.id         : " + first.id,
  "all.length       : " + all.length,
  "typeof all.style : " + typeof all.style,
  "inline sizes     : " + [...all].map(
      (el) => el.id + "=" + (el.style.fontSize || "default")).join("  ")
];
document.getElementById("out").textContent = report.join("\n");

// 3. To reach all of them, loop over the list.
all.forEach((el) => el.classList.add("hot"));
