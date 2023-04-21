import React, { Component } from 'react';
import GrandSon from './GrandSon';

class Brother extends Component{
    constructor(props) {
        super(props);
        this.state={ 
            feeling:"?",
            expectAmount: 40
        }
        this.setMyFeeling=this.setMyFeeling.bind(this);
        this.handleSendData=this.handleSendData.bind(this);
        this.handleSendFunc=this.handleSendFunc.bind(this);
        this.giveFor10NTD=this.giveFor10NTD.bind(this);
    }

    setMyFeeling(){
        if(this.props.money<this.state.expectAmount)
            this.setState({feeling:"不能接受"})
        else
            this.setState({feeling:"可以接受"})

        /* Part.2-2 - 在父元件主動取得子元素的資料 */
        /* Parent <Brother ... argue=X> -> allocateMoney(target,amount) */
        // this.props.argue("brother",this.state.expectAmount);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // this.setMyFeeling();
        
        /* Part.2-1 在父元件主動觸發子元件的函式 */
        /* Part.3-2 -同一父元件A中，子元件B主動呼叫子元件C的函式 */
        if(prevProps.money!==this.props.money){
            setTimeout(() => {
                this.setMyFeeling();
            }, 1000);
        }
    }

    handleSendData(name){
        return this.props[name];
    }

    handleSendFunc(method, ...arg){
        return this.props[method](...arg);
    }

    giveFor10NTD(){
        /* 存取綁在Brother.js上的money */
        let dadMoney=this.handleSendData("money"); 

        /* 呼叫綁在Brother上的argue函式(allocateMoney)。
        「brother」和「5」是原本allocateMoney規定需要的參數。 */
        this.handleSendFunc("argue","brother",dadMoney - 10); 
    }

    render(){
        // return(<div>我是兒子，我拿到{this.props.money}，我目前{this.state.feeling}</div>);

        /* Part. 4-1 - 有沒有辦法能把Parent給Brother所有的props一次綁給GrandSon */
        return(<div>我是兒子，我拿到{this.props.money}，我目前{this.state.feeling}
                {/* <GrandSon {...this.props}/> */}

                {/* Part. 4-2 - 有沒有不用綁全部props、又更簡易的方法 */}
                <GrandSon handleSendData={this.handleSendData} handleSendFunc={this.handleSendFunc} />
                <button onClick={this.giveFor10NTD}>給孫子10塊</button>
            </div>);
    }
}
export default Brother;