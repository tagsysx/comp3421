const box = document.getElementById("box");

document.getElementById("btn").onclick = () => {
  box.classList.toggle("dark");
  document.getElementById("demo").textContent = "class = " + box.className;
};
