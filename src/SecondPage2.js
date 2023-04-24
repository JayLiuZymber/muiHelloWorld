import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const SecondPage2=(props)=>{
    const { id } = useParams();
    const { state } = useLocation();
    return(
        <div>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁 {props.value}</h1>
            <button value={"789"} onClick={props.clickHandle}>button</button>
            <div>
                id: {id?id:""}
            </div>
            <div>
                state: {state?state.title:""}
            </div>
        </div>
    )
}

export default SecondPage2;