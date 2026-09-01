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
console.log('counter.get() =', counter.get()); // 2
console.log('counter.count =', counter.count); // undefined — it is private
