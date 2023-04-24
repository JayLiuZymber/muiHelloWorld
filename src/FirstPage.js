import React from 'react';
import Rice from "./rice.jpg";

const FirstPage=()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#FF2E63",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第一頁</h1>
            <img src={Rice} alt="Rice"/>
        </div>
    )
}

export default FirstPage;