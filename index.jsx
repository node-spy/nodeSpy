import React from 'react';
import ReactDOM from 'react-dom';

class NodeSpy extends React.Component {
  constructor() {
    super();
    this.state = {
      reqCache = [],
      resCache = []
    }
  }
  

render() {
   return (
    <div>
      <div className = 'NodeSpy' />
      <Report reqCache = {this.state.reqCache} resCache = {this.state.resCache} />
      <History reqCache = {this.state.reqCache} resCache = {this.state.resCache} />
    </div>
  )
}

}

Report = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'Report' />
    </div>
  )
};

Report.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};

ReportItem = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'ReportItem' />
    </div>
  );
};

ReportItem.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};

History = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'History' />
    </div>
  );
};

History.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};

HistoryItem = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'HistoryItem' />
    </div>
  );
};

HistoryItem.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};


render(<NodeSpy />, document.getElementById('content'));