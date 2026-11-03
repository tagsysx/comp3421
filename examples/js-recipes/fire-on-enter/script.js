const input = document.getElementById("input");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") submit();
});

function submit() {
  document.getElementById("demo").textContent =
    'submitted "' + input.value + '" (no form needed)';
}
