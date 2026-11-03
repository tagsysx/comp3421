const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const tag = t => s => `<${t}>${s}</${t}>`;
const bold = tag("b");
const italic = tag("i");

log('bold("hi")', bold("hi"));
log('italic("hi")', italic("hi"));
log('tag("em")("x")', tag("em")("x"));
log("bold === italic", bold === italic);
log("chained", bold(italic("both")));
