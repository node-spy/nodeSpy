const express = require('express');

const app = express();

// set routes for Node Spy to serve client's express route data'
app.get('/nodeSpy', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/getCache', (req, res, next) => {
  res.end(JSON.stringify(nodeSpy.cache));
});

// set port during initial server call, for use in redirect
let PORT;

const nodeSpy = {
  // cache for pushing spy data to
  cache: [],
  server: (port) => {
    PORT = port;
    app.listen(port, () => {
      console.log('nodeSpy connected to port ' + port);
    });
  },
  // log request and response data from user determined middleware point
  spy: (req, res, next) => {
    nodeSpy.cache.push({ Method: req.method, URL: req.url, Body: req.body, Cookies: req.cookies, Params: req.params });
    next();
  },
  // redirect and serve data
  report: (req, res, next) => {
    console.log(nodeSpy.cache);
    res.redirect(`http://localhost:${PORT}/nodeSpy`);
  }
}

module.exports = nodeSpy;
