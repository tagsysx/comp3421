const text = '{ not json';

try {
  JSON.parse(text);
  document.getElementById("demo").textContent = "parsed";
} catch (e) {
  document.getElementById("demo").textContent = "Could not parse: " + e.message;
  console.warn(e.message);
}
