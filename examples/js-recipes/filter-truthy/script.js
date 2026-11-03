const values = [0, 1, "", "x"];
const truthy = values.filter(Boolean);

// 2
document.getElementById("demo").innerHTML =
  "kept:  " + JSON.stringify(truthy) + "<br>" +
  "count: " + truthy.length;
