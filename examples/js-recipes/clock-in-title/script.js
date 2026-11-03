setInterval(() => {
  document.title = new Date().toLocaleTimeString();
  document.getElementById("demo").textContent = "title = " + document.title;
}, 1000);
