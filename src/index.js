/* 
【React.js入門 - 11】 開始進入class component - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10219057
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';

const changeName=(newName)=>{ 
  name=newName;
  console.log("hey")//加入此行
}

var name="舊的名字";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <App2 name={name} handleClick={changeName}/>
    <App3 name={name} handleClick={changeName}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
