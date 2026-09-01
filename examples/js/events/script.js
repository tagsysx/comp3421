// The event object
const status = document.getElementById('status');

// Event delegation: one listener handles every <li>
document.getElementById('list').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    status.textContent = `You clicked: ${event.target.textContent}`;
  }
});

// Add a new <li> — the delegated listener picks it up too
document.getElementById('add').addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Kiwi';
  document.getElementById('list').appendChild(li);
});
