/* 
【React.js入門 - 05】 JSX (上) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10215841
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const testFunction =()=> {
  return( <button>大家好</button> );
}
/*
const testFunction2 =()=> {
  return( 
    <button> 大家好 </button>
    <h1> 我不好 </h1>
  );
}
//這個函式因為傳遞的有2個元素，會被compiler視為錯誤語法
*/
const testFunction3 =()=> {
  return( 
      <div>
          <button> 大家好 </button>
          <h1> 我不好 </h1>
      </div>
  );
}
//這個函式因為把很多元素包在1個元素內，等於傳遞時是傳1個元素，會被compiler視為正確語法
const testFunction4 =()=> {
  return( 
      <React.Fragment>
          <button> 大家好! </button>
          <h1> 我不好! </h1>
      </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // testFunction()
  // testFunction3()
  testFunction4()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
