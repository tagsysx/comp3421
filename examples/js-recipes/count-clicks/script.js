let n = 0;
const demo = document.getElementById("demo");
const btn = document.querySelector("#go");
btn.onclick = () => demo.textContent = ++n;
