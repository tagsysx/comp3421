# shrink-and-reuse

The five moves from Lecture 10 — minification, compression, vendor builds,
keep-alive, HTTP/2 — in one file you can run and poke at.

`app.js` is the file that is on the slide. Everything above the line marked
"only so the file runs" is teaching material; below it is just enough server
to have something to serve.

## Run

```bash
npm install          # first time only
node app.js
```

Then open <http://localhost:3000> with the Network tab open.

## Try it

```bash
# 1. compression: what the client asks for is what it gets
curl -sI -H "Accept-Encoding: gzip" http://localhost:3000/api/items | grep -i encoding
curl -sI -H "Accept-Encoding: gzip, br" http://localhost:3000/api/items | grep -i encoding

# 2. minification: served smaller than it is on disk
curl -s http://localhost:3000/app.js | wc -c
wc -c < public/app.js

# 3. vendor files: whatever you drop in vendor/ is served as it is
ls vendor

# 4. keep-alive: two requests, one connection (look at "Re-using" in -v)
curl -sv http://localhost:3000/api/items -o /dev/null 2>&1 | grep -i "re-us\|connected"
```

## What is not here

`long max-age`, `immutable` and hashed filenames are in the next section of the
lecture: they are a browser-caching strategy, not something you add in one line.
Those live on the slides for Section 3.

## Watch out

`minify()` re-minifies on every request. It is here so you can see the effect;
in a real project you minify once, in a build step, and ship the result.
