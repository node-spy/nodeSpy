# nodeSpy
Logging with visualization middleware for use with node.js

## API
```js
const nodeSpy = require('nodeSpy');
```

In addition to requiring the nodeSpy module, install Express globally to enable the use of two servers.

### nodeSpy.server(port#)
Start up the nodeSpy server that serves spy data when called on to report. Specify port as a parameter.
```js
// listening on port 3030
nodeSpy.server(3030);
```

### nodeSpy.spy
Place spy middleware between other middleware to log changes between response and request.

### nodeSpy.report
Place report middleware after all spy instances to summarize report on separate app.

### Examples
```js
const express = require('express');
const nodeSpy = require('nodeSpy');

const app = express();
nodeSpy.server(3030);
app.get('/getUsers', nodeSpy.log, other.middleware, nodeSpy.report);
```