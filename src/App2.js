import React, { Component } from 'react'; // 引入React定義好的React Component

class App2 extends Component{ //繼承Component類別
  constructor(props) { // 加入建構子以及props參數
    super(props);
  }
  
  render(){
    return(
      <div>
        <button onClick={this.props.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
export default App2;