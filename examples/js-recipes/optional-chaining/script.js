const user = { name: "Ada" };   // no address property

const city = user?.address?.city ?? "unknown";

document.getElementById("demo").innerHTML =
  'user?.address?.city ?? "unknown"  →  "' + city + '"' +
  "<br>(without ?. this would throw a TypeError)";
