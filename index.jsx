import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Well } from 'react-bootstrap';
const ES6 = require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

class NodeSpy extends React.Component {
  constructor() {
    super();
    this.state = {
      reqCache: [],
      diffCache: []
    }
  // this.diffAlgorithm = this.diffAlgorithm.bind(this);
  }

// This Diffing Algorithm checks for differences between adjacent reqLogs in the reqCache in sequential order
// The output should be rendered inside of the Report component's ReportItems to showcase only the changes between reqLogs

// diffAlgorithm(reqCache) {
//   let reqCacheLocal = reqCache;
//   let report = [];
//   // let exampleReport = [
//   // 	{Body: {OldBody: {}, NewBody: {}}}, 
//   //     {Cookies: {OldCookies: {}, NewCookies: {}}},
//   // 	{Params: {OldParams: {}, NewParams: {}}}
//   // ];

//   // Diffing algorithm for req.Body

//   for (let i = 0; i < reqCacheLocal.length - 1; i++) {
//     if (Object.keys(reqCacheLocal[i].Body).length !== Object.keys(reqCacheLocal[i + 1].Body).length) {
//       report.push({ Body: { OldBody: reqCacheLocal[i].Body, NewBody: reqCacheLocal[i + 1].Body } });
//       break;
//     }
    
//     else {
//       for (let key in reqCacheLocal[i].Body) {
//         if (reqCacheLocal[i + 1].Body.key === undefined) {
//           console.log('if statement')
//           report.push({ Body: { OldBody: reqCacheLocal[i].Body, NewBody: reqCacheLocal[i + 1].Body } });
//           break;
//         }
//         else if (reqCacheLocal[i].Body[key] === reqCacheLocal[i + 1].Body[key]) {
//         report.push({ Body: { OldBody: reqCacheLocal[i].Body, NewBody: reqCacheLocal[i + 1].Body } });
//         break;
//         }
//       }
//     }
//   }

//   // Diffing algorithm for req.Cookies

//   for (let i = 0; i < reqCacheLocal.length - 1; i++) {
//     console.log('first for loop')
//     if (Object.keys(reqCacheLocal[i].Cookies).length !== Object.keys(reqCacheLocal[i + 1].Cookies).length) {
//       report.push({ Cookies: { OldCookies: reqCacheLocal[i].Cookies, NewCookies: reqCacheLocal[i + 1].Cookies } });
//       break;
//     }
    
//     else {
//       for (let key in reqCacheLocal[i].Cookies) {
//         console.log(key)
//         if (reqCacheLocal[i + 1].Cookies.key === undefined) {
//           report.push({ Cookies: { OldCookies: reqCacheLocal[i].Cookies, NewCookies: reqCacheLocal[i + 1].Cookies } });
//           break;
//         }
//         else if (reqCacheLocal[i].Cookies[key] === reqCacheLocal[i + 1].Cookies[key]) {
//         report.push({ Cookies: { OldCookies: reqCacheLocal[i].Cookies, NewCookies: reqCacheLocal[i + 1].Cookies } });  
//         break;
//         }
//       }
//     }
//   }

//   // Diffing algorithm for req.Params

//   for (let i = 0; i < reqCacheLocal.length - 1; i++) {
//     console.log('first for loop')
//     if (Object.keys(reqCacheLocal[i].Params).length !== Object.keys(reqCacheLocal[i + 1].Params).length) {
//       report.push({ Params: { OldParams: reqCacheLocal[i].Params, NewParams: reqCacheLocal[i + 1].Params } });
//       break;
//     }
    
//     else {
//       for (let key in reqCacheLocal[i].Params) {
//         console.log(key)
//         if (reqCacheLocal[i + 1].Params.key === undefined) {
//           report.push({ Params: { OldParams: reqCacheLocal[i].Params, NewParams: reqCacheLocal[i + 1].Params } });
//           break;
//         }
//         else if (reqCacheLocal[i].Params[key] === reqCacheLocal[i + 1].Params[key]) {
//         report.push({ Params: { OldParams: reqCacheLocal[i].Params, NewParams: reqCacheLocal[i + 1].Params } });  
//         break;
//         }
//       }
//     }
//   }
// }

  componentDidMount() {
    fetch('/getCache', { credentials: 'include' })
      .then(response => response.json())
      .then(response => {
        this.setState({
          reqCache: response
        });
      });
  }

  //diffAlgo={this.diffAlgorithm(this.state.reqCache)}
  
  render() {
    return (
      <div>
        <div className='NodeSpy' />
        <Report reqCache={this.state.reqCache} />
        <History reqCache={this.state.reqCache} />
      </div>
    )
  }
}

// The Report should showcase only the changes between adjacted reqLogs. HINT: Use minion.png to represent a nodeSpy.

const Report = ({ reqCache, diffAlgo }) => {

// let reportArr = [];

// diffAlgo.forEach(diff => {
//   reportArr.push(<ReportItem diffAlgo = {diff} />);
// });

  return (
    <div>
      <div className='Report' />
    </div>
  )
};

Report.propTypes = {
  'reqCache': React.PropTypes.array.isRequired
};

const ReportItem = ({ reqCache }) => {
  return (
    <div>
      <div className='ReportItem' />
    </div>
  );
};

ReportItem.propTypes = {
  'reqCache': React.PropTypes.array.isRequired
};

// The History should be a div containing HistoryItem rows, which each display content from an object within the reqCache array.

const History = ({ reqCache }) => {

  let historyArr = [];

  reqCache.forEach(req => {
    historyArr.push(<HistoryItem reqCache={req} />);
  });

  return (
    <div id='history'>
      {historyArr}
    </div>
  );
};

History.propTypes = {
  'reqCache': React.PropTypes.array.isRequired
};

const HistoryItem = ({ reqCache }) => {
  return (
    <div>

      <Jumbotron>
        <h1>Node Spy</h1>
        <h2>Reveal the mystery of the request object</h2>
      </Jumbotron>
      <Well>
        <span className='HistoryItem' />
        <h4>Method: {reqCache.Method}</h4>
        <h4>URL: {reqCache.URL}</h4>
        <div>Body: {JSON.stringify(reqCache.Body)}</div>
        <div>Cookies: {JSON.stringify(reqCache.Cookies)}</div>
        <div>Params: {JSON.stringify(reqCache.Params)}</div>
      </Well>
    </div>
  );
};

HistoryItem.propTypes = {
  'reqCache': React.PropTypes.object.isRequired
};


ReactDOM.render(<NodeSpy />, document.getElementById('content'));
