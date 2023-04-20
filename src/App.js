import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      repoName: null
    }
    this.handleClick=this.handleClick.bind(this);
  }
  /* // 加上headers(1/2) - 設定Content-Type
  fetch( request的url, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
    .then(res => res.json())
    .then(data => {
      // 接到request data後要做的事情
    })
    .catch(e => {
      // 發生錯誤時要做的事情
    })
   */
  /* // 加上headers(2/2) - 我要傳token!!!!!!!
  const token = "Bearer "+ 我存好的token ;
  fetch( request的url, {
      method: "GET",
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token, // 把token放在這
      })
    })
    .then(res => res.json())
    .then(data => {
          // 接到request data後要做的事情
    })
    .catch(e => {
        // 發生錯誤時要做的事情
    })
   */
  /* // 加上body(1/2) - 使用JSON type傳送資料
  const data= { A:"資料A", B:"資料B" }
  fetch( request的url, {
      method: "GET",
      body: JSON.stringify(data),   // 把json資料字串化
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(data => {
      // 接到request data後要做的事情
    })
    .catch(e => {
      // 發生錯誤時要做的事情
    })
   */
  /* // 加上body(2/2) - 使用x-www-form-urlencoded type傳送資料
  const data= { A:"資料A", B:"資料B" };
  const formData = Object.keys(data).map(
      function (keyName) {
          return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
      }
  ).join('&');
  fetch( request的url, {
      method: "GET",
      body: formData,   // 使用處理後的資料
      headers: new Headers({
          "Content-type": "application/x-www-form-urlencoded"
      })
    })
    .then(res => res.json())
    .then(data => {
      // 接到request data後要做的事情
    })
    .catch(e => {
      // 發生錯誤時要做的事情
    })
   */

  handleClick(){
    fetch( 'https://api.github.com/users/jserv/repos',{method:"GET"})
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
          this.setState({repoName: data[0]['name']});
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="data-display">
          {(this.state.repoName===null)?"目前還有沒有資料":this.state.repoName}
        </div>
        <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
    	</div>
    )
  }
};
export default App;