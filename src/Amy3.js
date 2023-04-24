import React,{useContext} from 'react';
import {FruitContext} from "./FruitContext.js";

function Amy3() {
    const fruitInfo=useContext(FruitContext);
    return (
    <div className="Amy">
        Amy看到了 [ {fruitInfo.appleContext} ] 個蘋果!!
        <button onClick={()=>{fruitInfo.setAppleByDispatch({type:"buy",value:1})}}>買一個蘋果</button>
        <button onClick={()=>{fruitInfo.setAppleByDispatch({type:"sell",value:1})}}>退一個蘋果</button>
    </div>
  );
}

export default Amy3;