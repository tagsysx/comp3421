app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// one line per request, before any route
