/* 
生命週期 Version 17
constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> ......(渲染後的生命週期)
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

    render(){
        if(this.state.isRightDad===true)
            return(
                <div>
                    他的媽媽，是小美
                </div>
            );
        else
            return(
                <div>
                    他的媽媽，是誰，幹你X事
                </div>
            );
    }
}
export default Baby;