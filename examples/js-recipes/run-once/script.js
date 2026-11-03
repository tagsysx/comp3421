let done = false;
const once = f => (...a) =>
  done ? undefined : (done = true, f(...a));

const pay = () => "charged once";

document.getElementById("demo").innerHTML =
  "first call:   " + once(pay)() +
  "<br>second call: " + once(pay)();
