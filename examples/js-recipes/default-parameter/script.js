function greet(name = "guest") {
  return `Hi, ${name}`;
}

document.getElementById("demo").innerHTML =
  "greet()  →  " + greet() +
  '<br>greet("Ada")  →  ' + greet("Ada");
