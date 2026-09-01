const logEl = document.getElementById('log');

function log(line) {
  logEl.textContent += line + '\n';
}

// A promise that resolves after a delay, or rejects if we ask it to.
function wait(ms, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error('Something went wrong'));
      } else {
        resolve('done after ' + ms + 'ms');
      }
    }, ms);
  });
}

document.getElementById('run').addEventListener('click', () => {
  logEl.textContent = '';
  log('starting...');

  wait(500)
    .then((message) => {
      log('then #1 -> ' + message);
      return wait(300);            // chain another promise
    })
    .then((message) => {
      log('then #2 -> ' + message);
      throw new Error('boom');     // force a rejection
    })
    .catch((err) => {
      log('catch   -> ' + err.message);
    })
    .finally(() => {
      log('finally -> always runs');
    });
});
