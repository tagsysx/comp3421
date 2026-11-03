document.addEventListener("keydown", e => {
  if (e.key === "/") {
    e.preventDefault();
    document.getElementById("search").focus();
    document.getElementById("demo").textContent = "search box focused";
  }
});
