// Select with querySelector / querySelectorAll
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');
console.log('items found:', items.length);

// Create an element and append it
const button = document.getElementById('add');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'item';
  li.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(li);
});

// textContent vs innerHTML
const heading = document.querySelector('h2');
console.log('heading textContent:', heading.textContent);
