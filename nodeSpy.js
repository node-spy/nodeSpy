const express = require('express');

const app = express();

app.get('/nodeSpy', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

let PORT;

const nodeSpy = {
  cache: [],
  server: (port) => {
    PORT = port;
    app.listen(port, () => {
      console.log('nodeSpy connected to port ' + port);
    });
  },
  spy: (req, res, next) => {
    nodeSpy.cache.push({ Method: req.method, URL: req.url });
    next();
  },
  report: (req, res, next) => {
    console.log(nodeSpy.cache);
    res.redirect(`http://localhost:${PORT}/nodeSpy`);
  }
}

module.exports = nodeSpy;