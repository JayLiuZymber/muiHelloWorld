/* 
【React.js入門 - 07】 function component - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10217021
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 加入下面這一段 */
function App2(){
  return(
    <button>大家好</button>
  );
}
/* 加入上面這一段 */
// 元素名稱第一個字母必須要是大寫、和函式(或class)名稱相同
function app3(){
  return(
    <button>大家好3</button>
  );
}

function Progress(){
  const barWidth="50%";
  return(
    <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>
  );
}
/* 加入上面這一段 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 修改div中的東西，改為<App/> */
  <div>
    <App2/>
    <app3/>
    <Progress/>

    <App2/>
    <App2/>
    <App2/>

    <App/>
    <App/>
    <App/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
