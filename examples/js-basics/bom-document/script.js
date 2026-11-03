// document is where the DOM lives. It is a property of window,
// which is why window.document and document are the same object.
const rows = {
  "document.title":        document.title,
  "document.URL":          document.URL,
  "document.readyState":   document.readyState,
  "document.characterSet": document.characterSet,
  "document === window.document": document === window.document
};

document.getElementById("out").textContent =
  Object.entries(rows).map(([k, v]) => k.padEnd(30) + v).join("\n");
