let likes = 0;
const button = document.getElementById('like');
const count = document.getElementById('count');

button.addEventListener('click', () => {
  likes++;
  count.textContent = likes;
});
