/* 
【React.js入門 - 06】 JSX (下) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10216468
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const getValue=(event)=>{
  console.log(event.target.value)
}
const getValue2=(value)=>{
  console.log(value)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <button value={true} > 是 </button>
    <button value > 是 </button>

    <button value="true" onclick="myFunction(參數)">是</button>
    <button value={true}  onClick={ null }>是</button>
    <input type="text" onChange={ null }/>

    <button value="true" onclick="myFunction(參數)">是</button>
    <button value={true} onClick={getValue}>按下以取得數值 </button>
    <button value={true} onClick={(event)=>{getValue2(event.target.value)}}>
            按下以取得數值 
    </button>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
