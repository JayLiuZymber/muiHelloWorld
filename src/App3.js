import React, { Component } from 'react';

class App3 extends Component{
  constructor(props) {
    super(props);
    this.state={
      styleData:{
        width: "30%",
        height: "50%"
      }
    }
    this.changePercent4=this.changePercent4.bind(this);
    this.changePercent5=this.changePercent5.bind(this);
    this.showPercent=this.showPercent.bind(this);
  }
  changePercent4(){
    this.setState({ styleData:{width:"70%"} });
  }
  changePercent5(){
    this.setState({ 
        styleData:{
            width: "70%",
            height: this.state.styleData.height
        } 
    });
  }
  showPercent(){
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <button onClick={this.changePercent4}>set4</button>
        <button onClick={this.changePercent5}>set5</button>
        <button onClick={this.showPercent}>log</button>
      </div>
    );
  }
}
export default App3;