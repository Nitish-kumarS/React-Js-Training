import react, { useState } from 'react';

const EvenetHandling = () => {
    const [User, setUser] = useState("");
    const [Password, setPassword] = useState();
    return (
        <div>
            <input type="text" placeholder="Enter User:" 
            onChange={(e)=>setUser(e.target.value)} />
           <br></br> <input type="password" name="pass" placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)} />
            <h1>User is {User}</h1>
            <h2>Password is {Password}</h2>
        </div>
        
      );
}
 
export default EvenetHandling;