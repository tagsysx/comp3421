const pipe = (f, g) => x => g(f(x));

const incThenTimes10 = pipe(n => n + 1, n => n * 10);

document.getElementById("demo").innerHTML =
  "pipe(n => n + 1, n => n * 10)(4)  →  " + pipe(n => n + 1, n => n * 10)(4) +
  "<br>step by step: 4 → " + (4 + 1) + " → " + (4 + 1) * 10;
