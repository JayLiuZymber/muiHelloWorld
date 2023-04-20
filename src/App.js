import React from 'react';

function App(props){ // 在函式參數中加入props
  return(
    <button> {props.children} </button> 
  );
}
export default App; //輸出App函式