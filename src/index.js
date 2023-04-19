/* 
【React.js入門 - 05】 JSX (上) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10215841
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const showOne = true;
const showOne = false;
const styleArgument = { fontSize: '100px', color: 'red' };
const multiButton=()=>{
  var output=[];
  for(let i=0;i<4;++i)
      output.push(<button>我是第{i}個按鍵</button>)
  return output;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h1> { (showOne==true) ? 1 : 0 } </h1>
  
  // <h1 style = { styleArgument } > Hello, world! </h1>

  // <h1 style = {{ fontSize: '100px', color: 'red' }} > Hello, world! </h1>

  //這是錯誤的寫法
  // <h1 class = "title" > Hello, world! </h1>
  //這是正確的寫法
  // <h1 className = "title" > Hello, world! </h1>

  <div>
    { multiButton() }
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
