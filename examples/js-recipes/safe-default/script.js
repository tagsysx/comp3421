const input = "";     // empty string: falsy
const saved = 0;     // 0 is falsy, but NOT null or undefined

const name = input || "guest";
const who = saved ?? "guest";

document.getElementById("demo").innerHTML =
  'input || "guest"  →  "' + name + '"' +
  '<br>saved ?? "guest"  →  ' + who;
