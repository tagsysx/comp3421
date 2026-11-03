const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const trim = s => slug(s).replace(/^-+|-+$/g, "");

log('slug("Hello, World!")', slug("Hello, World!"));
log('slug("  A  B  ")', JSON.stringify(slug("  A  B  ")));
log('trim("  A  B  ")', JSON.stringify(trim("  A  B  ")));
log('slug("Café Olé")', slug("Café Olé"));
log("note", "accented letters are dropped, not transliterated");
