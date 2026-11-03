function show(text) {
  document.getElementById("demo").textContent += text + "\n";
}

// two parameters, but only one argument is passed
function greet(first, last) {
  return first + " " + last;
}
show('greet("Ada")  →  ' + greet("Ada"));                    // last is undefined
show('greet("Ada", "Lovelace")  →  ' + greet("Ada", "Lovelace"));

// the default is used only when nothing is passed (or undefined)
function hello(who = "guest") {
  return "Hi, " + who;
}
show("hello()  →  " + hello());                               // the default is used
show('hello("Ada")  →  ' + hello("Ada"));                     // the argument wins
