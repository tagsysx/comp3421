const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
};

delete person.age;

document.getElementById("demo").innerHTML = person.firstname + " is " + person.age;
