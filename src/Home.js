import {useState} from 'react';
import Foodlist from './Foodlist';
const  Home= () => {
    //function with out parameter
     const homemsg=()=>{
        console.log("weclome to the homepage ");
    }
   //function with parameter
    const homemsgwithparameter=(x)=>{
        console.log("hi "+x);
    }
    //let n//ame="leo";
    const [name, setname] = useState("leo");
    const handclick=()=>{
        //name="Nitish";
        setname("Nitish");
    }
    //useState for displaying list
    const [food,setfood]=useState([
    {name:"panipoori",cost:20}
    ,{name:"french fries",cost:40}
    ,{name:"poori",cost:30}
    ]
    );
   /* return (  
        <div className="HomeContent">
            <h2>Homepage</h2>
            
            <button onClick={homemsg}>click here</button>
        </div>
        
    );
    */
   //to call function with parameter in jsx create anonymous function
   return (
       <div className="Homecontent"> 
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handclick}>change</button>
            <button onClick={()=>homemsgwithparameter("leo")}>click here</button>
            <Foodlist foods={food}/>
       </div>
   )
}
 
export default Home;
<h2>Homepage</h2>