//list function 

var food=["panipoori","dosa","french fries"];
var car=["volvo","BMW","jeep"];
var age=[12,34,45,23,19];
console.log(food.concat(car)); //concat joins arrays
console.log(food.copyWithin(0,2)); //replace value with copy value
food[0]='panipoori';
//entries method returns iteration object
var i=food.entries();
for(x of i){
    console.log(x);
}

//every method check whether all element pass given conditions
 function checkage(j){
       return j>18;
 }
 console.log(age.every(checkage));

 //fill method
 console.log(car.fill("tata",0,1));

 //filter method
 console.log(age.filter(checkage));

//from method creates array from any object with length property
console.log(Array.from("hello world"));

//includes method checks whether certain value is present in array
console.log(food.includes("dosa"));

//indexof method returns index of given value
console.log(car.indexOf("BWM"));

//join method forms string with array
console.log(car.join(", "));

//lastindexof method searches from End of array
console.log(food.lastIndexOf("dosa"));

//map method does a given operation on all elements of array
function addone(a){
    return a+1;
}
console.log(age.map(addone));

//push method
age.push(3);
console.log(age);

//pop method
console.log(age.pop());

//reduce method
function tot(ans,k){
    return ans+k;
}
console.log(food.reduce(tot));
console.log(food.reduceRight(tot));

//reverse method
console.log(car.reverse());

//shift method removes and return 1st element
console.log(car.shift());

//slice method return a part of the array
console.log(food.slice(1,2));

//sort method
console.log(age.sort());