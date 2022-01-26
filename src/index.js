// 필수 리액트 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom';
// 초기 화면을 구성하는 사용자 코드
import App from './App';
//리액트 엔진이 화면을 출력하는 코드
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
