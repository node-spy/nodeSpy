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
      <RouteView reqCache = {this.state.reqCache} resCache = {this.state.resCache} />
      <ReqView reqCache = {this.state.reqCache} resCache = {this.state.resCache} />
      <ResView reqCache = {this.state.reqCache} resCache = {this.state.resCache} />
    </div>
  )
}

}

RouteView = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'RouteView' />
    </div>
  )
};

RouteView.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};

ReqView = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'ReqView' />
    </div>
  );
};

ReqView.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};

ResView = ({ reqCache, resCache }) => {
  return (
    <div>
      <div className = 'ResView' />
    </div>
  );
};

ResView.propTypes = {
  'reqCache': React.PropTypes.array.isRequired,
  'resCache': React.PropTypes.array.isRequired
};


render(<NodeSpy/>, document.getElementById('content'));