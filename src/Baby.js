/* 
生命週期 Version 17
constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> componentDidMount()
 */
import React, { Component } from 'react';

class Baby extends Component{
    constructor(props) {
        super(props);
        this.state={
            isRightDad: true
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.dad!=="Chang")
            return {isRightDad:false}
    }

    componentDidMount(){
        if(this.state.isRightDad===true)
            document.getElementById('msg').innerHTML="他的媽媽是小美";
        else
            document.getElementById('msg').innerHTML="他的媽媽，是誰，幹你X事";
    }

    render(){
        // if(this.state.isRightDad===true)
        //     document.getElementById('msg').innerHTML="他的媽媽是小美";
        // else
        //     document.getElementById('msg').innerHTML="他的媽媽，是誰，幹你X事";
        return(
            <div id="msg">
                讀取中
            </div>
        );
    }
}
export default Baby;