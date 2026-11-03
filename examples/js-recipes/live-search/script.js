let t;
const input = document.getElementById("input");

input.addEventListener("input", e => {
  clearTimeout(t);
  document.getElementById("demo").textContent = "typing… waiting for a pause";
  t = setTimeout(() => find(e.target.value), 300);
});

function find(value) {
  document.getElementById("demo").textContent =
    'searched for "' + value + '" after a 300 ms pause';
}
