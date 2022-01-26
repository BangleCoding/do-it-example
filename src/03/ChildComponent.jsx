import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span> boolean : {boolValue} </span>
        <span> numValue : {numValue} </span>
        <span> arrayValue : {arrayValue} </span>
        <span> objValue : {String(objValue)} </span>
        <span> nodeValue : {nodeValue} </span>
        <span> funcValue : {String(funcValue)} </span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
