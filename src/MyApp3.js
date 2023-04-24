import { BrowserRouter,Route,Routes,Switch } from "react-router-dom";
import FirstPage2 from './FirstPage2';
import SecondPage2 from './SecondPage2';
import NotFound from './NotFound';
import MyLayout2 from './MyLayout2';
import { useState } from "react";

const MyApp3 = () => {
    const [value,setValue]=useState("111");
    const [value2,setValue2]=useState("112");

    return (
        <BrowserRouter>
            <Routes>    
                <Route exact path="/" element={
                    <MyLayout2 >
                        <FirstPage2 value={value} clickHandle={(e)=>{setValue2(e.target.value)}}/>
                    </MyLayout2> 
                }/>
                <Route exact path="/second/:id?" element={
                    <MyLayout2>
                        <SecondPage2 value={value2} clickHandle={(e)=>{setValue(e.target.value)}}/>
                    </MyLayout2> 
                }/>
                <Route path="*" element={
                    <MyLayout2>
                        <NotFound />
                    </MyLayout2> 
                }/>
            </Routes>
        </BrowserRouter>
    );
}
export default MyApp3;