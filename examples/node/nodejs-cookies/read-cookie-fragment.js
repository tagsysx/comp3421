// Lecture 9 - slide 54 : Reading a Cookie in Node
// FRAGMENT - the request side. Node hands you the raw header and stops there;
// this is the whole parser. cookie-demo.js runs it inside a real server.

function cookies(req) {
  const raw = req.headers.cookie;          // 'a=1; b=2', or undefined
  if (!raw) return {};                     // undefined, not ''
  return Object.fromEntries(
    raw.split('; ').map((p) => p.split('=')));
}

module.exports = cookies;
