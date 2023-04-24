import React from 'react';
import FruitStore from './FruitStore';
import FruitStore2 from './FruitStore2';
import FruitStore3 from './FruitStore3';

const App=()=>{
    return(
        // Global state
        // <FruitStore/>
        // Context的讀取
        // <FruitStore2/>
        // Context的修改 - 搭配useReducer實現Redux
        <FruitStore3/>
    );
}
export default App;