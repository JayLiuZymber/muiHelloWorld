import React from 'react';

function App(props){ // 在函式參數中加入props
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  );
}
export default App; //輸出App函式