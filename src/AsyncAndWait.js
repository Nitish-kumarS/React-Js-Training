const { Component } = require("react");



async function Asyncfunction (){
    console.log("Calling function");
    const result= await delayreturn();
    console.log(result);   
}

function delayreturn(){
   return new Promise(resolve=>{
       setTimeout(() => {
           resolve('resolved');
       }, 3000);
   })
}
class AsyncAndWait extends Component{
    render() {
        return (
             <div>
                 <button onClick={()=>Asyncfunction()}>
                    ASYNCANDWAIT
                 </button>
             </div>
        );
    }
}
export default AsyncAndWait;