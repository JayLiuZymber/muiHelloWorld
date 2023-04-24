import React,{useReducer} from 'react';
import Amy3 from './Amy3.js';
import {FruitContext} from "./FruitContext.js";

function FruitStore3() {
    function reducer(state, action) {
        switch (action.type) {
            case 'buy':
                return state-action.value;
            case 'sell':
                return state+action.value;
            default:
                throw new Error();
        }
    }

    const [appleState, appleDispatch] = useReducer(reducer, 3);

    return (
        <>
            <div className="FruitStore">目前水果店有 [ {appleState} ] 個蘋果!!</div>
            <FruitContext.Provider value={{ 
                appleContext: appleState, 
                setAppleByDispatch: appleDispatch
            }} >
                <Amy3/>
            </FruitContext.Provider>
        </>
    );
}

export default FruitStore3;