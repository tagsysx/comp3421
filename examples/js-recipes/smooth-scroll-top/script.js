document.getElementById("top").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("demo").textContent = "scrolling back to top…";
};
