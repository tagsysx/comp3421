/* Section 4 only. There is no @keyframes rule for this arc: the script below
   just swaps one dash array for another, and the CSS transition on .arc
   stretches each change into a smooth sweep. */
(function () {
  var arc = document.getElementById('arc');
  if (!arc) return;
  var states = ['20 100', '70 100', '35 100', '92 100'];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % states.length;
    arc.style.strokeDasharray = states[i];
  }, 1150);
})();

