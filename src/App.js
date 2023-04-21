import React from 'react';
/*
終究都要學 React 何不現在學呢？ - React Router - 基礎與介紹 - (24) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10303610?sc=rss.iron

安裝react-router-dom v5
$ npm i react-router-dom@5.3.4
 */
import {HashRouter,Route,Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirthPage from './ThirthPage';

const App=()=>{
    return(
        <HashRouter>
            <Switch>
                {/* <Route path="路徑" component={ 用來當頁面的元件名稱(不是標籤) } /> */}
                {/* <Route path="/" component={FirstPage}/> */}
                {/* <Route path="/second" component={SecondPage}/> */}

                {/* http://localhost:3000/#/ */}
                <Route exact path="/" component={FirstPage}/>
                {/* http://localhost:3000/#/second */}
                <Route exact path="/second" component={SecondPage}/>
                {/* http://localhost:3000/#/3th123 */}
                {/* http://localhost:3000/#/3th */}
                <Route exact path="/3th:id" component={SecondPage}/>
                <Route exact path="/3th:id?" component={ThirthPage}/>
            </Switch>
        </HashRouter>
    );
}
export default App;