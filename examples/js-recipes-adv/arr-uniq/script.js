const out = [];
function render() { document.getElementById("out").textContent = out.join("\n"); }
function log(label, value) {
  out.push(String(label).padEnd(30) + "  " + value);
  render();
}

const list = [1, 2, 2, 3, 1];
const uniq = [...new Set(list)];

log("list", JSON.stringify(list));
log("[...new Set(list)]", JSON.stringify(uniq));
log("order kept", JSON.stringify([...new Set([3, 1, 3, 2])]));
log("the original", JSON.stringify(list));
log("two equal objects", [...new Set([{ a: 1 }, { a: 1 }])].length);
