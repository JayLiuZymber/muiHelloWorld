/* 
【React.js入門 - 28】 我要更多更多的分頁 - react-router-dom (下) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10226370
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App6 from './App6';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    {/* <App6 /> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
