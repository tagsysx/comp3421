const ul = document.getElementById("list");
let n = 0;

document.getElementById("add").onclick = () => {
  const li = document.createElement("li");
  li.textContent = "new item " + (++n);
  ul.appendChild(li);

  document.getElementById("demo").textContent =
    "The list now has " + ul.children.length + " items.";
};
