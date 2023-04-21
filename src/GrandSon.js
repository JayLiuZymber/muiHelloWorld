import React, { Component, useState } from 'react';
/* 
const GrandSon=(props)=>{
    const [feeling]=useState("??");
    // return(<div>我目前{feeling}</div>);
    // return(<div>我是孫子，爸拿到{props.money}，爸目前{props.feeling}</div>);
    return(<div>我是孫子，爸拿到{props.money}，爸目前{props.feeling}，我目前{feeling}</div>);
}
 */
class GrandSon extends Component{
    constructor(props) {
        super(props);
        this.state={ 
            feeling:"??"
        }
        this.argueFor5NTD=this.argueFor5NTD.bind(this);
    }

    /* Part. 4-2 - 有沒有不用綁全部props、又更簡易的方法 */
    argueFor5NTD(){
        /* 存取綁在Brother.js上的money */
        let dadMoney=this.props.handleSendData("money"); 

        /* 呼叫綁在Brother上的argue函式(allocateMoney)。
        「brother」和「5」是原本allocateMoney規定需要的參數。 */
        this.props.handleSendFunc("argue","brother",dadMoney - 5); 
    }

    render(){
        return(<div>我是孫子，爸拿到{this.props.money}，爸目前{this.props.feeling}，
            我目前{this.feeling}
            <button onClick={this.argueFor5NTD}>要求5塊</button></div>);
    }
}
export default GrandSon;