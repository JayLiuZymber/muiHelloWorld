// import './FirstPage.css';

const FirstPage2=(props)=>{
    return (
        <div >
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第一頁 {props.value}</h1>
            <button value={"456"} onClick={props.clickHandle}>button</button>
        </div>
    )
}

export default FirstPage2;