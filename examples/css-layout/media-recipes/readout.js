/* The same eight questions the stylesheet asks — asked from JavaScript.

   window.matchMedia() takes the text that goes inside the parentheses of an
   @media rule (or a bare media type such as "print") and answers it: .matches
   is true when the page matches right now.

   Nothing here is a second implementation of the recipes. `readout.js` reads
   the answer; `style.css` acts on it. They cannot disagree, because it is the
   same query text in both files — which is exactly the point.

   A query the browser does not know is not an error: it simply never matches,
   so the row reads "no" and nothing breaks. */

const RECIPES = [
  ["Dark mode",       "(prefers-color-scheme: dark)",    "body { background: #10151c; }"],
  ["Print the page",  "print",                           ".nav, .ads { display: none; }"],
  ["Touch screens",   "(hover: none)",                   ".tooltip { display: none; }"],
  ["A sharp screen",  "(min-resolution: 2dppx)",         ".logo { background-image: url(logo@2x.png); }"],
  ["A short screen",  "(max-height: 500px)",             ".hero { padding: 8px; }"],
  ["More contrast",   "(prefers-contrast: more)",        "a { border-bottom: 2px solid; }"],
  ["A narrow screen", "(max-width: 600px)",              ".row { flex-direction: column; }"],
  ["A wide screen",   "(min-width: 1200px)",             ".wrap { max-width: 1140px; }"]
];

const tbody = document.getElementById("readout");

function code(text) {
  const el = document.createElement("code");
  el.textContent = text;
  return el;
}

function cell(text, cls) {
  const td = document.createElement("td");
  if (cls) td.className = cls;
  td.textContent = text;
  return td;
}

function buildRow(name, query, declaration) {
  const mq = window.matchMedia(query);
  const answer = document.createElement("td");

  function paint() {
    answer.textContent = mq.matches ? "yes" : "no";
    answer.className = mq.matches ? "yes" : "no";
  }

  const tr = document.createElement("tr");
  tr.appendChild(cell(name));

  const q = cell("", "q");
  q.appendChild(code("@media " + query));
  tr.appendChild(q);

  const decl = document.createElement("td");
  decl.appendChild(code(declaration));
  tr.appendChild(decl);

  tr.appendChild(answer);
  paint();

  /* the event fires whenever the answer flips: a drag becomes narrow, a system
     setting changes, the page goes to the printer */
  mq.addEventListener("change", paint);
  return tr;
}

RECIPES.forEach(function (recipe) {
  tbody.appendChild(buildRow(recipe[0], recipe[1], recipe[2]));
});
