import React,{ Component } from "react";

class Refhandling extends Component{
    constructor(props){
        super(props);
        this.inputref=React.createRef();
    }
    componentDidMount(){
        console.log(this.inputref);
        this.inputref.current.focus();
    }
    render() {
        return (
             <div>
                 <input type='text' ref={this.inputref}></input>
             </div>
        );
    }
}

export default Refhandling;
