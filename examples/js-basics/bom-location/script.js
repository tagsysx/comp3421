// Every part of the URL is already parsed for you.
// Reading is free; location.assign(url) would navigate away,
// so this example only reads.
const parts = {
  "location.href":     location.href,
  "location.protocol": location.protocol,
  "location.hostname": location.hostname,
  "location.pathname": location.pathname,
  "location.search":   location.search || "(empty)",
  "location.hash":     location.hash || "(empty)"
};

document.getElementById("out").textContent =
  Object.entries(parts).map(([k, v]) => k.padEnd(19) + v).join("\n");
