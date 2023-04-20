/* 
【React.js入門 - 16】 React生命週期(1/4): Mount(上)- 在渲染以前 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10221346
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Baby from './Baby';
import reportWebVitals from './reportWebVitals';

/*
How to Check React Version? [React Latest Version]
https://monovm.com/blog/how-to-check-react-version/#How-to-Check-React-Version?-[React-JS-Version]

確認React版本
$ npm view react version
18.2.0
$ npm list
$ npm ls
...
├── react-dom@18.2.0
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Baby dad="Chang"/>
    <Baby dad="Wang"/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
