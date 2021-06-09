import { Component } from "react";

class LiftingupChild extends Component{
    constructor(props){
        super(props);
        this.ChangeFoodname=this.ChangeFoodname.bind(this);
    }
    ChangeFoodname(e){
      //  console.log(e.target.value);
        this.props.ChangeFoodname(e.target.value)
    }
    render() {
        return (
             <div>
                 <input type="text" value={this.props.Foodname} placeholder="food name" onChange={this.ChangeFoodname}></input>
             </div>
        );
    }
}

export default LiftingupChild;