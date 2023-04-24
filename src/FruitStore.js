import React,{useState} from 'react';
import Amy from './Amy.js';

function FruitStore() {
    const [ apple, setApple ] = useState(0);
    return (
        <>
            <div className="FruitStore">目前水果店有 [ {apple} ] 個蘋果</div>
            <Amy apple={apple}/>
        </>
    );
}

export default FruitStore;