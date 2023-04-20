/* 
【React.js入門 - 14】 Debug利器 : React-Developer-Tools - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10220526
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* 
React 開發者工具 • React
https://beta.zh-hant.reactjs.org/learn/react-developer-tools
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App name="我是進度條">在index.js中轉換百分比</App>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
