import { useState } from "react";
import './App.css';
const Form = () => {
    const [Username, setUsername] = useState("User");
    const [Mailid, setMailid] = useState();
    const [Age, setAge] = useState();
    const [Error, setError] = useState();
    const Handlesubmit=(evt)=>{
          evt.preventDefault();
          setError(formvalidation);
    }
    const formvalidation=()=>{
        if(Username===""||Username===undefined){
            return "Username not found";
        }
        else if(Mailid===""||Mailid===undefined){
            return "Mailid not found";
        }
        else if(Age===undefined||Age<18){
            return "Invaild Age";
        }
        else{
            return "";
        }
    }
    return ( 
        <div>
            <form className="TestingForms" action="" onSubmit={Handlesubmit}>
               <label>User Name: </label>
                <input type="text" placeholder="Enter ur name" onChange={(e)=> setUsername(e.target.value)}/>
                <br /><label>Email: </label>
                <input type="text" onChange={(e)=>setMailid(e.target.value)} placeholder="@gmail.com"/>
                <br /><label>Age: </label>
                <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="Enter age"/>
               <br /> <input type="Submit"/>
                {Error===""?<h1>No error</h1>:<h1>{Error}</h1>}
            </form>
        </div>
    )
}
 
export default Form;