const arr = ["rock", "paper", "scissors"];
const pick = arr[Math.floor(Math.random() * arr.length)];

document.getElementById("demo").textContent = "The computer picks " + pick;
