// Prototypes

//constructor function
function food(name,taste,cost){
    this.foodname=name;
    this.foodtaste=taste;
    this.foodcost=cost;
}
var obj1=new food('pani poori','sweet',20);
food.prototype.type="snack"; //adds a new property to food constructor

console.log(obj1.type);
