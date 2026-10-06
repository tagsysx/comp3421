// Print to the page AND to the console, so the result is visible in the live
// editor's preview pane (the pages used to be console-only).
const out = document.getElementById('out');
function log(...parts) {
  const line = parts.map(String).join(' ');
  out.textContent += (out.textContent ? '\n' : '') + line;
  console.log(...parts);
}

// A closure keeps the inner function + its outer variables alive
function makeCounter() {
  let count = 0;          // private state, only reachable via the closure
  return {
    increment() { count += 1; return count; },
    decrement() { count -= 1; return count; },
    get() { return count; }
  };
}

const counter = makeCounter();
counter.increment();
counter.increment();
log('counter.get() =', counter.get()); // 2
log('counter.count =', counter.count); // undefined — it is private
