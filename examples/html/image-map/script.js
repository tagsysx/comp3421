(function () {
  var cv = document.getElementById('shape-overlay');
  var ctx = cv.getContext('2d');
  var areas = Array.prototype.slice.call(document.querySelectorAll('area'));
  var showAll = false;
  var hovered = null;

  function drawArea(area, fill, stroke, lw, withLabel) {
    var shape = (area.getAttribute('shape') || 'rect').toLowerCase();
    var c = area.getAttribute('coords').split(',').map(Number);
    ctx.beginPath();
    if (shape === 'circle') {
      ctx.arc(c[0], c[1], c[2], 0, Math.PI * 2);
    } else if (shape === 'poly') {
      ctx.moveTo(c[0], c[1]);
      for (var i = 2; i + 1 < c.length; i += 2) ctx.lineTo(c[i], c[i + 1]);
      ctx.closePath();
    } else {                       // rect
      ctx.rect(c[0], c[1], c[2] - c[0], c[3] - c[1]);
    }
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = lw;
    ctx.strokeStyle = stroke;
    ctx.stroke();
    if (withLabel) {
      var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (var j = 0; j + 1 < c.length; j += 2) {
        x0 = Math.min(x0, c[j]); x1 = Math.max(x1, c[j]);
        y0 = Math.min(y0, c[j + 1]); y1 = Math.max(y1, c[j + 1]);
      }
      var tx = (x0 + x1) / 2, ty = (y0 + y1) / 2;
      var label = shape + ' ' + area.getAttribute('coords');
      ctx.font = '600 11px Menlo, Consolas, monospace';
      var tw = ctx.measureText(label).width;
      var bx = Math.max(2, Math.min(tx - tw / 2 - 4, cv.width - tw - 10));
      var by = Math.max(2, ty - 8);
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillRect(bx - 3, by - 11, tw + 6, 15);
      ctx.fillStyle = '#0e3f8c';
      ctx.fillText(label, bx, by);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    areas.forEach(function (a) {
      var active = a === hovered;
      if (showAll) {
        drawArea(a, 'rgba(30,79,168,0.16)', '#1e4fa8', 1.5, true);
        if (active) drawArea(a, 'rgba(217,83,79,0.30)', '#d9534f', 3, false);
      } else if (active) {
        drawArea(a, 'rgba(217,83,79,0.30)', '#d9534f', 3, true);
      }
    });
  }

  areas.forEach(function (a) {
    a.addEventListener('mouseenter', function () { hovered = a; draw(); });
    a.addEventListener('mouseleave', function () { hovered = null; draw(); });
  });

  var btn = document.getElementById('toggle-shapes');
  btn.addEventListener('click', function () {
    showAll = !showAll;
    btn.textContent = showAll ? 'Hide shapes' : 'Show all shapes';
    btn.classList.toggle('on', showAll);
    draw();
  });
})();

