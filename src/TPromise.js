import { Component } from "react";

class TPromise extends Component{
    constructor(props){
        super(props);
        this.state={
            email:''
        };
    }
   
    render() {
        let email="leo";
        var p=new Promise((resolve,reject)=>{
            if(email==="leo"){
                resolve("Elo@123");
            }
            else{
                reject("Error");
            }
        });
        p.then(function(result){
            alert("hi");
            email=result;
        }).catch(function(error){
            alert("error");
            email=error;
        });   
        return (
           <div>
               <h1>HI{this.state.email}fc</h1>
           </div>  
        );
    }

}
export default TPromise;