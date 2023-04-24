import React from 'react';
/*
【React.js入門 - 29】 使用圖片、使用css檔、新手容易遇到的問題 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10226711

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