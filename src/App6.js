import React from 'react';
/*
【React.js入門 - 28】 我要更多更多的分頁 - react-router-dom (下) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10226370

安裝react-router-dom v6
$ npm i react-router-dom
或
$ npm i react-router-dom@6.10.0
 */
import {HashRouter,Route,Routes} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirthPage from './ThirthPage';
import Layout from './Layout';

const App6=()=>{
    return(
        <HashRouter>
            <Layout></Layout>
            <Routes>
                {/* http://localhost:3000/ */}
                {/* http://localhost:3000/#/ */}
                <Route path="/" element={ <FirstPage /> } />
                {/* http://localhost:3000/#/second */}
                <Route path="/second" element={ <SecondPage /> } />
                {/* http://localhost:3000/#/3th:id */}
                {/* http://localhost:3000/#/3th:id?5 */}
                <Route path="/3th:id" element={ <ThirthPage /> } />
                <Route path="/3th:id?" element={ <SecondPage /> } />
            </Routes>
        </HashRouter>
    );
}
export default App6;