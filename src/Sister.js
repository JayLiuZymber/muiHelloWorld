/* Sister.js */

import React, { Component } from 'react';
import Parent from './Parent';

class Sister extends Component{
    constructor(props) {
        super(props);
        this.state={ // 宣告state物件，內包含一個變數percent
            feeling:"bad" 
        }
        this.argueFor70NTD=this.argueFor70NTD.bind(this);
    }

    componentDidMount(){
    }

    argueFor70NTD(){
        /* Part.1-2 - 在子元件主動修改綁定在自己身上的props */
        /* Part.3-1 - 同一父元件A中，子元件B主動修改子元件C的props */
        /* Parent <Sister ... argue=X> -> allocateMoney(target,amount) */
        this.props.argue("sister",70);
    }

    render(){
        /* Part.1-1 - 在子元件主動使用父元素的資料/函式 */
        /* Parent <Sister money=X> */
        // return(<div>我是女兒，我拿到{this.props.money}<button onClick={this.argueFor70NTD}>要求提升到70塊</button></div>);
        
        /* Part.3-3 - 同一父元件A中，子元件B主動取得子元件C的資料 */
        return(<div>我是女兒，我拿到{this.props.money}<button onClick={this.argueFor70NTD}>要求提升到70塊</button>
            兒子拿到{this.props.moneyBrother}
        </div>);
    }
}
export default Sister;