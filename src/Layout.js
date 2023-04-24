import React from 'react';
import {Link, useLocation } from 'react-router-dom';

const Layout=()=>{
    const location = useLocation();
    const StyleSheet={
        width:"100vw",
        // height:"100vh",
        // backgroundColor:"#FF2E63",
        backgroundColor:(location.pathname==="/")?"#FF2E63":"#08D9D6",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <nav>
                <Link to="/">點我連到第一頁</Link>
                <Link to="/second" style={{marginLeft:"20px"}}>點我連到第二頁</Link>
                <Link to="/3th:id" style={{marginLeft:"20px"}}>點我連到第三頁</Link>
            </nav>
        </div>
    )
}
export default Layout;