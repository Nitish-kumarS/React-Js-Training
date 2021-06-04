const Foodlist = (props) => {
    const foods=props.foods;
    console.log(props,foods);
    return ( 
        <div className="foodcontent">
              
          {foods.map((x)=>(
                 <div className="foodcontent">
                     <h2>food: {x.name}</h2>
                     <h1>cost:{x.cost}</h1>
                 </div>
          ))}
        </div>
     );
}
 
export default Foodlist
