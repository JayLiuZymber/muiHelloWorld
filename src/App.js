import React from 'react';
/*
【React.js入門 - 28】 我要更多更多的分頁 - react-router-dom (下) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10226370

安裝react-router-dom v5
$ npm i react-router-dom@5.3.4
 */
import {HashRouter,Route,Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout"; //記得要引入

const App=()=>{
    return(
        <HashRouter>
            <Switch>
                <Layout>
                    {/* http://localhost:3000/#/ */}
                    {/* http://localhost:3000/#/second */}
                    <Route exact path="/" component={FirstPage}/>
                    <Route path="/second" component={SecondPage}/>
                </Layout>
            </Switch>
        </HashRouter>
    );
}
export default App;