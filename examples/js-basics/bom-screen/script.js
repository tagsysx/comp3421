// screen describes the monitor, not the page. Resizing the window
// does not change screen.width; changing monitors does.
const rows = {
  "screen.width":       screen.width,
  "screen.height":      screen.height,
  "screen.availWidth":  screen.availWidth,
  "screen.availHeight": screen.availHeight,
  "screen.colorDepth":  screen.colorDepth
};

document.getElementById("out").textContent =
  Object.entries(rows).map(([k, v]) => k.padEnd(20) + v).join("\n");
