const blocked = (() => {
  try { return typeof document.cookie !== "string"; }
  catch (e) { return true; }
})();

function warnIfBlocked() {
  if (!blocked) return false;
  const box = document.getElementById("warn");
  box.style.display = "block";
  box.textContent =
    "This frame does not allow cookies. Open the example in " +
    "its own tab from the course site and it works normally.";
  return true;
}

// Writing: assign a string. Second call APPENDS, it does not replace.
function put(name, data, seconds) {
  if (warnIfBlocked()) return;
  document.cookie = name + "=" + encodeURIComponent(data) +
                    "; max-age=" + seconds + "; path=/; SameSite=Lax";
  show();
}

// Deleting: same assignment, with an expiry already in the past.
function drop(name) {
  if (warnIfBlocked()) return;
  document.cookie = name + "=; max-age=0; path=/";
  show();
}

function dropAll() {
  if (warnIfBlocked()) return;
  Object.keys(parse()).forEach(drop);
  show();
}

// Reading: one string in, a plain object out. You split and trim it yourself.
function parse() {
  const out = {};
  document.cookie.split(";").forEach((pair) => {
    const at = pair.indexOf("=");
    if (at < 0) return;
    out[pair.slice(0, at).trim()] = decodeURIComponent(pair.slice(at + 1).trim());
  });
  return out;
}

function show() {
  const raw = blocked ? "(cookies blocked in this frame)" : document.cookie;
  document.getElementById("raw").textContent = raw || "(empty)";

  const body = document.getElementById("parsed");
  body.replaceChildren();
  const rows = Object.entries(blocked ? {} : parse());
  if (!rows.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 2;
    td.textContent = "no cookies for this site yet";
    tr.appendChild(td);
    body.appendChild(tr);
    return;
  }
  rows.forEach(([name, data]) => {
    const tr = document.createElement("tr");
    [name, data].forEach((cellText) => {
      const td = document.createElement("td");
      td.textContent = cellText;          // textContent, not innerHTML
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}

warnIfBlocked();
show();
