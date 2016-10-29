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
  }

  componentDidMount() {
    fetch('/getCache', { credentials: 'include' })
      .then(response => response.json())
      .then(response => {
        this.setState({
          reqCache: response
        });
      });
  }

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

const Report = ({ reqCache}) => {
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
