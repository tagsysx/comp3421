// navigator answers "what am I running in", not "where am I".
// userAgent is long and easy to fake: feature-detect, never sniff.
const rows = {
  "navigator.language":          navigator.language,
  "navigator.languages":         navigator.languages.join(", "),
  "navigator.onLine":            navigator.onLine,
  "navigator.cookieEnabled":     navigator.cookieEnabled,
  "navigator.hardwareConcurrency": navigator.hardwareConcurrency,
  "navigator.userAgent":         navigator.userAgent
};

document.getElementById("out").textContent =
  Object.entries(rows).map(([k, v]) => k.padEnd(30) + v).join("\n");
