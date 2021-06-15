import React, { Component } from "react";
import FRinput from "./FRinput";

class FRparent extends Component{
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
    } 
    render() {
        return (
             <div>
                 <FRinput ref={this.inputRef}/>
                <button onClick={()=>{
                    this.inputRef.current.focus();
                }}>FRparent</button>
             </div>
        );
    }
}
export default FRparent;