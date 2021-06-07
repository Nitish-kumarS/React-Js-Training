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
    const deletelist=(id)=>{
        const temp=food.filter(food=> food.id!==id );
        setfood(temp);
    }
    //useState for displaying list
    const [food,setfood]=useState([
    {name:"panipoori",cost:20,id:1}
    ,{name:"french fries",cost:40,id:2}
    ,{name:"poori",cost:30,id:3}
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
          {/*  <Foodlist foods={food}/>*/ }
            <Foodlist foods={food.filter((food)=> food.name==="poori")}></Foodlist>
            <Foodlist foods={food} deletelist={deletelist}></Foodlist>
       </div>
   )
}
 
export default Home;
<h2>Homepage</h2>