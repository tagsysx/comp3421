const q = new URLSearchParams(location.search);

document.getElementById("demo").innerHTML =
  'q.get("q")  →  ' + JSON.stringify(q.get("q")) +
  "<br>location.search  →  " + JSON.stringify(location.search);
