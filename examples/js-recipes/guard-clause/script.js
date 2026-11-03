function greet(user) {
  if (!user) return "no user — stopped at the guard";
  return "Hello, " + user.name;
}

document.getElementById("demo").innerHTML =
  "greet(null)  →  " + greet(null) +
  '<br>greet({ name: "Ada" })  →  ' + greet({ name: "Ada" });
