import { Component } from "react";
import ConditionalRendering from "./ConditionalRendering";

class Lifecycle extends Component{
    //intialization construstor 
    constructor(props){
      super(props); //base class props is called
      this.state={id:1,name:"",hotel:"hotel"};
    }
    componentWillMount(){
      console.log("Componentmountwill");
      this.setState({name:"Leo"});
    }
    
    //mostly used to call API funcion to update property values
    componentDidMount(){
      console.log("ComponentdidMount"); 
    }
    changeState=()=>{
      this.setState({name:"Nitish"});
    }
    render(){
      return (
        <div>
          <h1>hello {this.state.name}</h1>
          <button onClick={this.changeState}>click me</button>
      {/*   <h3>welcome to {this.state.hotel}</h3> */}
          <ConditionalRendering info={this.name}></ConditionalRendering>
        </div>
      )
    }
    componentDidUpdate(prevProps){
      this.state.hotel="Aone";
      console.log();
    }
    shouldComponentUpdate(nextProps,nextState){
      console.log("shouldcomponentupdate");
      return true;
    }
    
  }
  export default Lifecycle;