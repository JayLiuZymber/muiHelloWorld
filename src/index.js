/* 
【React.js入門 - 08】 用props綁定資料 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10217533
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function App2(props){
  return(
    <button> {props.number +' '+ props.getData} </button>
  );
}
function App3(props){
  return(
    <button> {`${props.number} ${props.getData}`} </button>
  );
}
// props不能被元件自己更改(read-only)
function App4(props){
  return(
    <button> {this.props.number=88} </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //在App標籤中加入name屬性
  <div>
    <App name="我的名字"/>
    <App2 number="87" getData="true"/>
    <App3 number={87} getData={true}/>
    {/* <App4 number={87} getData={true}/> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
