document.getElementById("go").onclick = () => {
  const q = document.querySelector("#q").value;
  document.getElementById("demo").textContent = 'value = "' + q + '"';
};

document.getElementById("demo").textContent = "Click the button, or edit the box first.";
