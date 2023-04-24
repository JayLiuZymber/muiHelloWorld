// import React from 'react';
import React,{Fragment} from 'react';

const testFunction =()=> {
    return( 
        <React.Fragment>
            <button> 大家好 </button>
            <h1> 我不好 </h1>
        </React.Fragment>
    );
}
//這個函式雖然傳了很多元素，但因為包在Fragment內，會被compiler視為正確語法

const testFunction2 =()=> {
    return( 
        <Fragment>
            <button> 大家好 </button>
            <h1> 我不好!! </h1>
        </Fragment>
    );
}

const testFunction3 =()=> {
    return( 
        <>
            <button> 大家好 </button>
            <h1> 我不好!!! </h1>
        </>
    );
}

const App=()=>{
    return(
        // testFunction()
        // testFunction2()
        testFunction3()
    );
}
export default App;