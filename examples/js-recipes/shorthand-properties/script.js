const name = "Ada", age = 36;
const user = { name, age };

document.getElementById("demo").innerHTML =
  "user = " + JSON.stringify(user) +
  "<br>(same as { name: name, age: age })";
