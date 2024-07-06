const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define your Express routes here
  server.get('/listings', (req, res) => {
    res.send('Listings route');
  });

  server.get('/videos', (req, res) => {
    res.send('Videos route');
  });

  server.get('/about', (req, res) => {
    res.send('About route');
  });

  server.get('/contact', (req, res) => {
    res.send('Contact route');
  });

  // Handle Next.js pages
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {t
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
