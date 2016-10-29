const express = require('express');

const app = express();

// set routes for Node Spy to serve client's express route data'
app.get('/nodeSpy', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/gulpBundle.js', (req, res, next) => {
  res.sendFile(__dirname + '/build/gulpBundle.js');
});
app.get('/getCache', (req, res, next) => {
  res.end(JSON.stringify(cache));
});

// set port during initial server call, for use in redirect
let PORT;
const cache = [];

const nodeSpy = {
  // cache for pushing spy data to
  server: (port) => {
    PORT = port;
    app.listen(port, () => {
      console.log('nodeSpy connected to port ' + port);
    });
  },
  // log request and response data from user determined middleware point
  spy: (req, res, next) => {
    let method = req.method, url = req.url, body = req.body, cookies = req.cookies, params = req.params;
    cache.push({ Method: method, URL: url, Body: body, Cookies: cookies, Params: params });
    console.log(cache);
    next();
  },
  // redirect and serve data
  report: (req, res, next) => {
    res.redirect(`http://localhost:${PORT}/nodeSpy`);
  }
}

module.exports = nodeSpy;
