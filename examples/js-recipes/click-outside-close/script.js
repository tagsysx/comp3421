const menu = document.getElementById("menu");

document.getElementById("open").onclick = () => { menu.hidden = false; };

document.addEventListener("click", e => {
  if (!menu.contains(e.target)) {
    menu.hidden = true;
    document.getElementById("demo").textContent = "closed by a click outside";
  }
});
