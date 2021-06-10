import { Component } from "react";

 
const withCounter = (OriginalComponent)=>{
    class NewComponent extends Component{
        constructor(props){
            super(props);
            this.state={count:0};
            this.Incrementcount=this.Incrementcount.bind(this);
        }
        Incrementcount=()=>{
            this.setState(prevState =>{
            return {count: prevState.count+1};
            })
        }
        render() {
            return (
                <OriginalComponent count={this.state.count}
                    Incrementcount={this.Incrementcount}
                />
            );
        }
    }   
    return NewComponent;
}
export default withCounter;