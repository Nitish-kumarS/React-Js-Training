import { Component } from "react";

class ConditionalRendering extends Component{
    constructor(){
        super();
        this.state={Userstate:true,HotelName:"Aone"};
    }

    render(){
        let x=this.state.Userstate? <h1>Hi leo</h1>:<h1>hello guest</h1>
        return(
            <div>
                <h1>Welcome to {this.state.HotelName}</h1>
                  {x}          
            </div>
        )   
    }

}
export default ConditionalRendering;