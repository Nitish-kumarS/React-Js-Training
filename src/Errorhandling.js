import { Component } from "react";

class Errorhandling extends Component{
    constructor (props){
        super(props)
        this.state={Iserror:false}
    }
    static getDerivedStateFromError(error){
        return {
            Iserror:true     
        }
    }
    render() {
        if(this.state.Iserror){
            console.log("df");
            return (<h1>Something gone wrong</h1>);
        }
        return (
             this.props.children
        );
    }
}
export default Errorhandling;