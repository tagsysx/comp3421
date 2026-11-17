// Lecture 9 - slide 48 : A Route Table
// FRAGMENT - routes as data, then one loop. `u`, `req` and `res` come from
// the handler; json() is required so the file is complete enough to read.

const json = require('./json-helper');

const items = [{ id: '1', name: 'Pen' }];

const routes = [
  { m: 'GET', p: /^\/items$/, h: () => items },
  { m: 'GET', p: /^\/items\/(\w+)$/, h: (id) => items.find((x) => x.id === id) },
  { m: 'POST', p: /^\/items$/, h: (body) => ({ added: body }) },
];

function handle(req, res, u) {
  for (const r of routes) {
    const hit = u.pathname.match(r.p);
    if (req.method !== r.m || !hit) continue;
    return json(res, 200, r.h(...hit.slice(1)));
  }
  res.writeHead(404).end();
}

module.exports = handle;
