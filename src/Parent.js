import React, { Component } from 'react';
import Brother from "./Brother";
import Sister from "./Sister";
import GrandSon from './GrandSon';

class Parent extends Component{
    constructor(props) {
        super(props);
        this.state={ 
            moneyForBrother:60,
            moneyForSister:40
        }
        this.allocateMoney=this.allocateMoney.bind(this);
    }

    allocateMoney(target,amount){
        if(target==="brother")
            // this.setState({moneyForBrother:amount})
            this.setState({moneyForBrother:amount, moneyForSister:100-amount});
        else
            // this.setState({moneyForSister:amount});
            this.setState({moneyForSister:amount, moneyForBrother:100-amount});
    }

    render(){
        return(
        <div>
            <Brother money={this.state.moneyForBrother} argue={this.allocateMoney} />
            {/* Part.1-1 - 在子元件主動使用父元素的資料/函式 */}
            <Sister money={this.state.moneyForSister} argue={this.allocateMoney}/>
            {/* Part.3-3 - 同一父元件A中，子元件B主動取得子元件C的資料 */}
            <Sister money={this.state.moneyForSister} moneyBrother={this.state.moneyForBrother} argue={this.allocateMoney}/>
            {/* <GrandSon {...this.props}/> */}
            {/* <GrandSon handleSendData={this.handleSendData} handleSendFunc={this.handleSendFunc} /> */}
            
        </div>
        );
    }
}
export default Parent;