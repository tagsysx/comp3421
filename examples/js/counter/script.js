let value = 0;
const valueEl = document.getElementById('value');

function render() {
  valueEl.textContent = value;
}

document.getElementById('increment').addEventListener('click', () => {
  value++;
  render();
});

document.getElementById('decrement').addEventListener('click', () => {
  value--;
  render();
});
