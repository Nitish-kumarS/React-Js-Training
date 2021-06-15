import { Component } from "react";

class Binds extends Component{
    constructor(props){
        super(props);
        this.state={id:23};
       this.clickHander= this.clickHander.bind(this);
    }
    clickHander(){
        this.setState({id:32});
        
    }
    render() {
        return (
             <div>
                 <h1>{this.state.id}</h1>
                 <button onClick={()=>this.clickHander()}>click me</button>
             </div>
        );
    }
}
export default Binds;