/* 
【React.js入門 - 09】 用props綁定函式 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10218096
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //在App標籤中加入name屬性
  <div>
    <App name="我的名字" handleClick={printMessage}/> {/* 綁定函式 */}
    <div id="show-area"></div>    {/* 這裡是等等用來改變的地方 */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
