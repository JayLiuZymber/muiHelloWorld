import React,{useState} from 'react';
import Amy2 from './Amy2.js';
import {FruitContext} from "./FruitContext.js";

function FruitStore2() {
    const [ apple, setApple ] = useState(0);
    return (
        <>
            <div className="FruitStore2">目前水果店有 [ {apple} ] 個蘋果!</div>
            <FruitContext.Provider value={{ appleContext:apple }} >
                <Amy2/>
            </FruitContext.Provider>
        </>
    );
}

export default FruitStore2;