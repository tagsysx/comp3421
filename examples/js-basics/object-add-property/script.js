const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
};

person.nationality = "English";

document.getElementById("demo").innerHTML = person.firstname + " is " + person.nationality;
