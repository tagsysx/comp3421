const user = { name: "Ada" };   // no age property

const { name = "guest", age = 0 } = user;

document.getElementById("demo").innerHTML =
  "name = " + name + "<br>age = " + age + " (default used)";
