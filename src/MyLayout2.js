import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const MyLayout2=(props)=>{
    const {pathname} = useLocation();
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:(pathname==="/")?"#FF2E63":"#08D9D6",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <nav>
                <Link to="/">點我連到第一頁</Link>
                <Link to={{
                    pathname:'/second/helloworld',
                }} state={{
                    title: 'foo2',
                }} style={{marginLeft:"20px"}}>點我連到第二頁</Link>
                <div></div>
            </nav> 
            {props.children}
        </div>
    );
}
export default MyLayout2;