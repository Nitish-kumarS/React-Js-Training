import React, { Component } from "react";
import LiftingupChild from "./LiftingupChild";
import LiftingupChild2 from "./LiftingupChild2";

export default class LiftingupParent extends Component{
    constructor(props){
        super(props);
        this.state={foodname:" "};
        this.ChangeFoodname=this.ChangeFoodname.bind(this);
    }
    ChangeFoodname(txt){
        this.setState({foodname:txt});
    }
    render(){
        return(
                <React.Fragment>
                     <h1>Welcome</h1>
                <LiftingupChild Foodname={this.state.foodname}
                    ChangeFoodname={this.ChangeFoodname}
                ></LiftingupChild>
                <LiftingupChild2 foodname={this.state.foodname}></LiftingupChild2>
                </React.Fragment>
        )
    }
}