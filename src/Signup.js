import { Component } from "react"
import Containment from "./Containment";

function Dialog(props){
    return(
        <Containment>
            <h1>this is title {props.title}</h1>
            <h2>this is message {props.message}</h2>  
            {props.childern}
        </Containment>
        
    )
}

class Signup extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handSignup=this.handSignup.bind(this);
        this.state={loginState:true}
    }
    render() {
        return (
            <Dialog title="welcome" message=" Leo" >
             <div className="Signup">
                 <button onClick={this.handleChange}>Login</button>
                <button onclicl={this.handSignup}>Signup</button>
             </div>
             </Dialog>
        );
    }
    handleChange(){
        this.setState={loginState:!this.state.loginState};
        console.log(this.state.loginState);
    }
    handSignup(){
        console.log(this.state.loginState);
    }
}
export default Signup;