const kept = [1, 2, 3, 4]
  .map(n => n * 2)
  .filter(n => n > 4);

// [6, 8]
document.getElementById("demo").textContent = JSON.stringify(kept);
