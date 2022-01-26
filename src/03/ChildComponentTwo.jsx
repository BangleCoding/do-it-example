import React from 'react';
import PropTypes from 'prop-types';

class ChildComponentTwo extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값 : {String(Object.entries(objValue))}</div>
        <div>필수값 : {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponentTwo.apply.propTypes = {
  //객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  //필수 프로퍼티
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponentTwo;
