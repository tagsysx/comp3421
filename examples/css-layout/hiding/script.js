let n = 0;
document.querySelector(".clickable").addEventListener("click", () => {
  document.getElementById("n").textContent = ++n;
});

