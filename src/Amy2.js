import React,{useContext} from 'react';
import {FruitContext} from "./FruitContext.js";

function Amy2(props) {
    const fruitInfo=useContext(FruitContext);
    return (
    <div className="Amy2">
        Amy看到了 [ {fruitInfo.appleContext} ] 個蘋果!
    </div>
  );
}

export default Amy2;