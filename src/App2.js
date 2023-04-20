import React, { Component } from 'react';

class App2 extends Component{
  constructor(props) {
    super(props);
    this.state={
      percent: 20,
      mounted: false
    }
    this.changePercent=this.changePercent.bind(this);
    this.changePercent2=this.changePercent2.bind(this);
    this.changePercent3=this.changePercent3.bind(this);
    this.changePercent6=this.changePercent6.bind(this);
    this.showPercent=this.showPercent.bind(this);
  }
  changePercent(){
    this.setState({percent:40,counter:0});
  }
  changePercent2(){
    this.setState({mounted: undefined});
  }
  changePercent3(){
    let counter=5;
    this.setState({counter});
    /* 如果目前的state有counter,把它指定為5。如果沒有，則創造一個叫counter的state */  
  }
  changePercent6(){
    console.log(this.state.percent+'>')
    this.setState({percent: 70},()=>{
      console.log(this.state.percent);// 這樣會印出70
    });
    console.log(this.state.percent+'>>')
  }
  /* 
  this.setState((state, props) => {
      // 第一個參數函式
      return {新的state};
    },()=>{
      // 第二個參數函式，state改變後執行
  });
  */
  showPercent(){
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <button onClick={this.changePercent}>set</button>
        <button onClick={this.changePercent2}>set2</button>
        <button onClick={this.changePercent3}>set3</button>
        <button onClick={this.changePercent6}>set6</button>
        <button onClick={this.showPercent}>log</button>
      </div>
    );
  }
}
export default App2;