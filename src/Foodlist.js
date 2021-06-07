const Foodlist = ({foods,title,deletelist}) => {
    //const foods=props.foods;
    //console.log(props,foods);
   // alert(title);
    return ( 
        <div className="foodcontent">
              
          {foods.map((x)=>(
                 <div className="foodcontent" key={x.id}>
                     <h2>food: {x.name}</h2>
                     <h1>cost:{x.cost}</h1>
                      <button onClick={()=>deletelist(x.id)}> delete menu</button>
                 </div>
          ))}
        </div>
     );
}
 
export default Foodlist
