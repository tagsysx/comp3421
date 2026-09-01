// ES6+ features: arrow functions, destructuring, spread, templates, map/filter

const out = document.getElementById('out');
const log = (label, value) => {
  const li = document.createElement('li');
  li.textContent = `${label}: ${value}`;
  out.appendChild(li);
  console.log(label, value);
};

// Template literals
const name = 'Ada';
log('template literal', `Hello, ${name}!`);

// Arrow function (implicit return)
const square = x => x * x;
log('arrow function', `square(5) = ${square(5)}`);

// Destructuring
const point = { x: 3, y: 7 };
const { x, y } = point;
log('destructuring', `x = ${x}, y = ${y}`);

// Spread (copy + merge)
const a = [1, 2, 3];
const b = [...a, 4, 5];
log('spread', b.join(', '));

// Rest parameter
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
log('rest', `sum(1,2,3,4) = ${sum(1, 2, 3, 4)}`);

// Default parameter
const greet = (who = 'world') => `Hi, ${who}`;
log('default param', greet());

// map / filter / forEach
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
log('map', doubled.join(', '));
log('filter', evens.join(', '));
nums.forEach(n => console.log('forEach', n));
