const express = require('express');

const app = express();

// set routes for Node Spy to serve client's express route data'
app.get('/nodeSpy', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/style.css', (req, res, next) => {
  res.sendFile(__dirname + '/style.css');
})
app.get('/gulpBundle.js', (req, res, next) => {
  res.sendFile(__dirname + '/build/gulpBundle.js');
});
app.get('/getCache', (req, res, next) => {
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
    // HINT: Try stringifying the currentLog before pushing to the cache to avoid object reference issues

    const currentLog = { Method: req.method, URL: req.url, Body: req.body, Cookies: req.cookies, Params: req.params };
    const cloneLog = {};
    Object.assign(cloneLog, currentLog);
    console.log(cloneLog)
    nodeSpy.cache.push(cloneLog);
    console.log(nodeSpy.cache);
    next();
  },
  // redirect and serve data
  report: (req, res, next) => {
    res.redirect(`http://localhost:${PORT}/nodeSpy`);
  }
}

module.exports = nodeSpy;
