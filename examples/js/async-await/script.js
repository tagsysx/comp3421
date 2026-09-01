const logEl = document.getElementById('log');

function log(line) {
  logEl.textContent += line + '\n';
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

// Sequential: each await blocks the next line.
async function runSequential() {
  logEl.textContent = '';
  log('sequential start');
  const a = await wait(600);
  log('first finished: ' + a + 'ms');
  const b = await wait(600);
  log('second finished: ' + b + 'ms');
  log('total: ~1200ms');
}

// Parallel: start both, then await both at once.
async function runParallel() {
  logEl.textContent = '';
  log('parallel start');
  const [a, b] = await Promise.all([wait(600), wait(600)]);
  log('both finished: ' + a + 'ms, ' + b + 'ms');
  log('total: ~600ms');
}

document.getElementById('sequential').addEventListener('click', runSequential);
document.getElementById('parallel').addEventListener('click', runParallel);
