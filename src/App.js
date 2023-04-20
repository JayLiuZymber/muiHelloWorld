import React from 'react';

function App(props){ // 在函式參數中加入props
  return(
    <button> {props.name} </button>
    /*修改button標籤中間的內容，注意這裡要使用JSX的{}才能使用js資料*/
  );
}
export default App; //輸出App函式