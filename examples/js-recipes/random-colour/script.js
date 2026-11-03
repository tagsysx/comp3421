const hue = Math.floor(Math.random() * 360);
document.body.style.background = `hsl(${hue} 80% 60%)`;
document.getElementById("demo").textContent = "hsl(" + hue + " 80% 60%)";
