{
  let x = 2;
  var y = 2;
  document.getElementById("demo").innerHTML = "inside the block: x = " + x + ", y = " + y;
}

const demo = document.getElementById("demo");

try {
  demo.innerHTML += "<br>outside: x = " + x;
} catch (e) {
  demo.innerHTML += "<br>outside: x → " + e.name + " (let is block-scoped)";
}

demo.innerHTML += "<br>outside: y = " + y + " (var ignores the block)";
