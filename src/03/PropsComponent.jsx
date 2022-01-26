/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
  render() {
    return (
      <div className="message-container">
        {this.props.name}
        //app.js 에서 name 프로퍼티로 받는 문자열을 출력
      </div>
    );
  }
}

//자료형을 선언하는 예제
PropsComponent.protoTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
