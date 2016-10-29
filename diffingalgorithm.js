
let reqCache = [
	{ Method: 'GET', URL: '/sample', Body: { 'a': 'apple', 'b': 'banana' }, Cookies: { 'one': 'one' }, Params: { 'two': 'two' } },
      { Method: 'GET', URL: '/sample', Body: { 'c': 'cat', 'd': 'dog' }, Cookies: { 'three': 'three' }, Params: { 'four': 'four' } }
      ]

function createReportItems(reqCache) {
let reqCacheLocal = reqCache;
let report = [];
let exampleReport = [
	{Body: {OldBody: {}, NewBody: {}}}, 
    {Cookies: {OldCookies: {}, NewCookies: {}}},
	{Params: {OldParams: {}, NewParams: {}}}
];

// Diffing algorithm for req.Body

for (let i = 0; i < reqCacheLocal.length - 1; i++) {
  if (Object.keys(reqCacheLocal[i].Body).length !== Object.keys(reqCacheLocal[i + 1].Body).length) {
    report.push({ Body: { OldBody: reqCacheLocal[i].Body, NewBody: reqCacheLocal[i + 1].Body } });
    break;
  }
  
  else {
  	for (let key in reqCacheLocal[i].Body) {
  	  if (reqCacheLocal[i + 1].Body.key === undefined) {
  	  	console.log('if statement')
  	    report.push({ Body: { OldBody: reqCacheLocal[i].Body, NewBody: reqCacheLocal[i + 1].Body } });
  	    break;
  	  }
  	  else if (reqCacheLocal[i].Body[key] === reqCacheLocal[i + 1].Body[key]) {
  		report.push({ Body: { OldBody: reqCacheLocal[i].Body, NewBody: reqCacheLocal[i + 1].Body } });
  		break;
  		}
  	}
  }
}

// Diffing algorithm for req.Cookies

for (let i = 0; i < reqCacheLocal.length - 1; i++) {
	console.log('first for loop')
  if (Object.keys(reqCacheLocal[i].Cookies).length !== Object.keys(reqCacheLocal[i + 1].Cookies).length) {
    report.push({ Cookies: { OldCookies: reqCacheLocal[i].Cookies, NewCookies: reqCacheLocal[i + 1].Cookies } });
    break;
  }
  
  else {
  	for (let key in reqCacheLocal[i].Cookies) {
  		console.log(key)
  	  if (reqCacheLocal[i + 1].Cookies.key === undefined) {
  	    report.push({ Cookies: { OldCookies: reqCacheLocal[i].Cookies, NewCookies: reqCacheLocal[i + 1].Cookies } });
  	    break;
  	  }
  	  else if (reqCacheLocal[i].Cookies[key] === reqCacheLocal[i + 1].Cookies[key]) {
  		report.push({ Cookies: { OldCookies: reqCacheLocal[i].Cookies, NewCookies: reqCacheLocal[i + 1].Cookies } });  
  		break;
  		}
  	}
  }
}

// Diffing algorithm for req.Params

for (let i = 0; i < reqCacheLocal.length - 1; i++) {
	console.log('first for loop')
  if (Object.keys(reqCacheLocal[i].Params).length !== Object.keys(reqCacheLocal[i + 1].Params).length) {
    report.push({ Params: { OldParams: reqCacheLocal[i].Params, NewParams: reqCacheLocal[i + 1].Params } });
    break;
  }
  
  else {
  	for (let key in reqCacheLocal[i].Params) {
  		console.log(key)
  	  if (reqCacheLocal[i + 1].Params.key === undefined) {
  	    report.push({ Params: { OldParams: reqCacheLocal[i].Params, NewParams: reqCacheLocal[i + 1].Params } });
  	    break;
  	  }
  	  else if (reqCacheLocal[i].Params[key] === reqCacheLocal[i + 1].Params[key]) {
  		report.push({ Params: { OldParams: reqCacheLocal[i].Params, NewParams: reqCacheLocal[i + 1].Params } });  
  		break;
  		}
  	}
  }
}

console.log(report);
}

createReportItems(reqCache);