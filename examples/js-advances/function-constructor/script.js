const myFunction = new Function("a", "b", "return a * b");

document.getElementById("demo").innerHTML = "The product is " + myFunction(4, 3);
