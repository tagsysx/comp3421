// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane.
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

// 1. A function DECLARATION is fully available before its line.
log('sayHi() before its line:', sayHi());
function sayHi() {
  return 'Hi!';
}

// 2. A function EXPRESSION is not. The variable is hoisted without a value,
//    so calling it early is a TypeError, not a ReferenceError.
log('typeof sayBye before its line:', typeof sayBye);
try {
  sayBye();
} catch (e) {
  log('sayBye() before its line:', e.name + ': ' + e.message);
}
var sayBye = function () {
  return 'Bye!';
};
log('sayBye() after its line:', sayBye());

// 3. let and const are hoisted too, but left uninitialised: the temporal
//    dead zone. Reading one early is a ReferenceError.
try {
  sayHello();
} catch (e) {
  log('sayHello() before its line:', e.name + ': ' + e.message);
}
const sayHello = function () {
  return 'Hello!';
};

// 4. typeof is the usual escape hatch — not inside the dead zone.
try {
  log('typeof sayLater:', typeof sayLater);
} catch (e) {
  log('typeof sayLater:', e.name + ': ' + e.message);
}
let sayLater = 1;

// 5. var is the only one that reads as undefined instead of throwing.
log('name before its line:', name);
var name = 'Ada';
log('name after its line:', name);
