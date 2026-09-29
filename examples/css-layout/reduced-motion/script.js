const box = document.getElementById("sim");
box.addEventListener("change", () => {
  document.documentElement.classList.toggle("simulate", box.checked);
});
