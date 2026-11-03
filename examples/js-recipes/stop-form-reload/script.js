const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("demo").textContent =
    "sent: " + document.getElementById("name").value;
});
