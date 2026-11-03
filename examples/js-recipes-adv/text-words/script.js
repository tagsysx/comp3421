const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const words = "a b  c".split(/\s+/);
log('"a b  c".split(/\\s+/)', JSON.stringify(words));
log("length", words.length);

const messy = "  a b  c ".split(/\s+/);
log("with a leading space", JSON.stringify(messy));
log("after filter(Boolean)", messy.filter(Boolean).length);
log('"".split(/\\s+/)', JSON.stringify("".split(/\s+/)));
