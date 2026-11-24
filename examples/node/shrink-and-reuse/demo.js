// This file is served through express-minify, so comments and most of the
// whitespace below never reach the browser. Compare "view source" on
// http://localhost:3000/app.js with this file on disk.

function describePage() {
  const heading = document.querySelector('h1');

  if (heading) {
    const text = heading.textContent.trim();
    console.log('Page heading: ' + text);
    return text.length;
  }

  return 0;
}

// A comment that costs bytes on every single request until it is minified away.
const summary = {
  heading: describePage(),
  viewedAt: new Date().toISOString(),
};

console.log(summary);
