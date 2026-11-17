// Lecture 9 - slide 33 : Relative and Absolute Paths
// node cwd-dirname.js        from this folder  -> the two agree
// cd /tmp && node .../cwd-dirname.js           -> cwd is /tmp, __dirname is stable

console.log(process.cwd());
console.log(__dirname);

// run from /srv/app:   the two agree
// run from /tmp:       cwd is /tmp,
//                      __dirname is stable
