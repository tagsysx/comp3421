const logEl = document.getElementById('log');

function log(line) {
  logEl.textContent += line + '\n';
}

async function loadPost() {
  logEl.textContent = '';
  log('fetching...');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    log('status: ' + response.status);
    log('ok: ' + response.ok);

    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }

    const data = await response.json();
    log('---');
    log('title: ' + data.title);
    log('body:  ' + data.body.slice(0, 80) + '...');
  } catch (err) {
    log('error: ' + err.message);
  }
}

document.getElementById('load').addEventListener('click', loadPost);
