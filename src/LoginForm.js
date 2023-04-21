import React,{useState, useEffect} from "react";

const LoginForm=()=>{
    // const [account,setAccount]=useState("");
    const [account,setAccount]=useState("快來輸入我");
    const [nowSelect,setNowSelect]=useState("789");
    const [isCheck,setIsCheck]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{setAccount("用fetch拿到的資料")},2000);
    },[])

    return (
        <div>
            <input type="text" onChange={(e)=>{ setAccount(e.target.value) }}/> <br />
            <input type="text" value="account" onChange={(e)=>{ setAccount(e.target.value) }}/> <br />
            <input type="text" defaultValue={account} onChange={(e)=>{setAccount(e.target.value)}}/> <br />
            <input type="text" defaultValue={account} value={account} onChange={(e)=>{setAccount(e.target.value)}}/> <br />
            <input type="text" disabled={true} defaultValue={account} onChange={(e)=>{setAccount(e.target.value)}}/> <br />
            <input type="text" disabled defaultValue={account} onChange={(e)=>{setAccount(e.target.value)}}/> <br />
            textarea <br />
            <textarea value={account} onChange={(e)=>{setAccount(e.target.value)}}></textarea>
            <div>
                目前account:{account}
            </div>
            <button onClick={()=>{setAccount("")}}>用按鍵取得新的account</button>
            <p></p>
            <select value={nowSelect} onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option value="456">456</option>
            </select>
            <select onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option selected={true} value="456" >456</option>
            </select>
            <select onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option selected value="456" >456</option>
            </select>
            <div>
                目前select:{nowSelect}
            </div>
            <button onClick={(e)=>{setNowSelect("789")}}>改變為789</button>
            <p></p>
            <input type="radio" value="123" checked={isCheck} onChange={(e)=>{setIsCheck(true)}} />123<br/>
            <input type="radio" value="456" checked={!isCheck} onChange={(e)=>{setIsCheck(false)}} />456
            <br />
            <input type="radio" value="123" checked={nowSelect==="123"} onChange={(e)=>{setNowSelect("123")}} />123<br/>
            <input type="radio" value="456" checked={nowSelect==="456"} onChange={(e)=>{setNowSelect("456")}}/>456
        </div>
    )
}
export default LoginForm;