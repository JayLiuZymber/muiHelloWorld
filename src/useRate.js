import { useState,useEffect,useRef} from 'react';

const useRate=(value)=>{
    const [rate,setPercent]=useState(10);

    const mounted=useRef();
    const tm=useRef();
    const tmTwo=useRef();
    
    useEffect(()=>{
        if(!mounted.current){ //componentDidMount
            setPercent(value);
            mounted.current=true;
        }
        else{  //componentDidUpdate
            if(rate>value){
                if(tm.current)
                    clearTimeout(tm.current)
                tmTwo.current=setTimeout(()=>{setPercent(rate-1)},20);
            }
            else if(rate<value){
                if(tmTwo.current)
                    clearTimeout(tmTwo.current)
                tm.current=setTimeout(()=>{setPercent(rate+1)},20);
            }
        }
    },[value,rate]);

    return rate;
}

export default useRate;