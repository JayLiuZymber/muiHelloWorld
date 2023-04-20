/* 
【React.js入門 - 17】 React生命週期(2/4): Mount(下) - 應該多用的componentDidMount - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10221975
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Baby from './Baby';
import Baby2 from './Baby2';
import Baby3 from './Baby3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Baby dad="Chang"/>
    <Baby dad="Wang"/>
    <Baby2 dad="Chang"/>
    <Baby2 dad="Wang"/>
    <Baby3 dad="Chang"/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
