const price = (3.14159).toFixed(2);

document.getElementById("demo").innerHTML =
  "toFixed(2) = " + price + "  (" + typeof price + ")" +
  "<br>Number(price) = " + Number(price) + "  (" + typeof Number(price) + ")";
