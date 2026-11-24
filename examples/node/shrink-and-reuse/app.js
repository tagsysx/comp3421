// shrink-and-reuse — the five moves from Lecture 10, in one runnable file.
//
// Moves 1-5 are exactly what the lecture shows. Everything under the line
// marked "only so the file runs" is not teaching material: it just gives the
// server something to serve, so you can watch each move with curl or the
// Network tab.

const express = require('express');
const compression = require('compression');
const minify = require('express-minify');
const zlib = require('zlib');

const brQ = zlib.constants.BROTLI_PARAM_QUALITY;
const app = express();

// 1. compress text; the client picks gzip or brotli
app.use(compression({
  threshold: 1024,                    // bytes — smaller replies skip it
  brotli: { params: { [brQ]: 6 } },   // default quality is 4
}));

// 2. shrink what we wrote, not the libraries
app.use(minify());

// 3. the vendor build, served as it ships
app.use('/vendor', express.static(__dirname + '/node_modules/jquery/dist'));
//    jquery.min.js, not jquery.js — `npm i jquery` is what puts it there

// --- only so the file runs ---
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/app.js', (req, res) => res.sendFile(__dirname + '/demo.js'));

app.get('/api/items', (req, res) => {
  const items = Array.from({ length: 60 }, (_, i) => ({ id: i, name: `item ${i}` }));
  res.json({ items });
});

// 4. connection reuse — outlast the proxy in front
const server = app.listen(3000);
server.keepAliveTimeout = 65_000;
server.headersTimeout = 70_000;

// 5. HTTP/2 ends at the proxy: no line here changes
console.log('shrink-and-reuse on http://localhost:3000');
