const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
};

document.getElementById("demo").innerHTML = person["firstname"] + " is " + person["age"];
