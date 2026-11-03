const demo = document.getElementById("demo");

// The setting is only words until you apply it. Here the stored theme
// becomes an attribute on <body>, and the CSS decides what dark looks like.
function apply() {
  let theme = null;
  try { theme = localStorage.getItem("theme"); } catch (e) { theme = null; }
  document.body.dataset.theme = theme || "light";
  demo.textContent = theme === null
    ? "no theme saved — the page is light"
    : 'theme = "' + theme + '"  (reload: it is still there)';
}

apply();                      // read it back on every load

document.getElementById("save").onclick = () => {
  try { localStorage.setItem("theme", "dark"); } catch (e) { /* blocked */ }
  apply();
};

document.getElementById("clear").onclick = () => {
  try { localStorage.removeItem("theme"); } catch (e) { /* blocked */ }
  apply();
};
