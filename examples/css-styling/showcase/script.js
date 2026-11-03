// Tiny self-contained demo — every change happens through the inline style attribute.
(function () {
  const card = document.getElementById('card');
  const bar = document.getElementById('bar');
  const colors = ['#1e4fa8', '#3d7bd9', '#d9534f', '#ffc107', '#0e3f8c', '#7b5cd6'];
  let ci = 0, w = 25, dir = 1;
  setInterval(() => {
    card.style.background = colors[ci = (ci + 1) % colors.length];  // colour
    w += dir * 5; if (w >= 95 || w <= 10) dir *= -1;                 // width
    bar.style.width = w + '%';
  }, 450);
})();

