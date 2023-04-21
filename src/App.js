/* 
Ver.16.3 生命週期
static getDerivedStateFromProps(props, state)
shouldComponentUpdate(nextProps, nextState)
render()
getSnapshotBeforeUpdate()
渲染畫面
componentDidUpdate(prevProps, prevState)
 */
import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        console.log('>constructor');
        super(props);
        this.state={
            A: false,
            B: "A假的"
        }
        this.ajaxSimulator=this.ajaxSimulator.bind(this)
    }

    ajaxSimulator(){
        // console.log('>ajaxSimulator');
        setTimeout(()=>{this.setState({A:true})},3000)
    }

    componentDidMount(){
        console.log('>componentDidMount');
        this.ajaxSimulator();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('>componentDidUpdate');
        // console.log(`this.props.A=${this.props.A}`);
        // console.log(`prevProps.A=${prevProps.A}`);
        /* 
        if(this.props.A===true)
            this.setState({B: "A是真的!"})
        if(this.props.A===true && prevProps.A != this.props.A)
            this.setState({B: "A是真的!!"})
         */
        // if(this.state.A===true )
        //     this.setState({B: "A是真的!3"})
        if(this.state.A===true && prevState.A != this.state.A)
            this.setState({B: "A是真的!4"})
    }

    render(){
        return(
            <div>
                <div>props.A={this.props.A}</div>
                <div>state.A={this.state.A}</div>
                <div>state.B={this.state.B}</div>
            </div>
        );
    }
}
export default App;