// Lecture 9 - slide 53 : Setting a Cookie in Node
// FRAGMENT - the reply side. An array is what lets one response carry two
// cookies; a second setHeader with the same name would replace the first.

function setCookies(res) {
  res.setHeader('Set-Cookie', [
    'theme=dark; Path=/; HttpOnly; Max-Age=3600',
    'lang=en; Path=/; SameSite=Lax'
  ]);
}

// To delete one, send the same name with no life left:
//   res.setHeader('Set-Cookie', 'theme=; Path=/; Max-Age=0');

module.exports = setCookies;
