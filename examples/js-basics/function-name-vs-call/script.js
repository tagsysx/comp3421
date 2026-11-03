function toCelsius(farenheit) {
  return (5/9) * (farenheit-32);
}

let value = toCelsius;

document.getElementById("demo").innerHTML = value;
