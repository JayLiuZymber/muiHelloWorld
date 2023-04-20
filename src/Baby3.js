import React, { Component } from 'react';

class Baby3 extends Component{
    constructor(props) {
        super(props);
        this.state={
            isRightDad: true,
            isGetData: false,
            Mom: ""
        }
        this.ajaxSimulator=this.ajaxSimulator.bind(this)
        this.scrollTo=this.scrollTo.bind(this);
    }

    ajaxSimulator(){
        setTimeout(()=>{this.setState({isGetData:true, Mom:"小美"})},3000)
    }

    static getDerivedStateFromProps(props,state){
        if(props.dad!=="Chang")
            return {isRightDad:false}
    }

    scrollTo(){
        /* 讀取 container元素的scrollLeft */
        let scrollLeft=document.getElementById('container').scrollLeft; 
        if(scrollLeft<300){
            /* 修改 container元素的scrollLeft */
            document.getElementById('container').scrollLeft=scrollLeft+5;
            setTimeout(this.scrollTo,20);
        }
    }

    componentDidMount(){
        this.ajaxSimulator();
        this.scrollTo();
    }

    render(){
        return(
            <div>
                <div id="msg">
                    {(this.state.isGetData===false)?"讀取中":"他的媽媽是"+this.state.Mom}
                </div>
                <div id="container" style={{width:"400px",overflowX:"scroll"}}>
                    <div id="left"  style={{width:"700px",fontSize:"30px",textAlign:"center"}}>
                        {"我是頭 O->---------------< 我是腳，我滑出來囉~ "}
                    </div>       
                </div>
            </div>
        )
    }
}
export default Baby3;