const list = document.getElementById("list");

list.addEventListener("click", e => {
  if (e.target.tagName === "LI") pick(e.target);
});

function pick(el) {
  document.getElementById("demo").textContent = "picked: " + el.textContent;
}
