// ECMAScript 6

//let
var x=0;
function fun1(){
    let x=10;  // variable within block scope 
    console.log("inside block "+x);
   // let x=11; will give error , x cannot be redeclared
}
fun1();
console.log("outside block "+x);

//const

const y=10;
//y=11; will give const variables cannot be change

//block scope 

{
    var b=32;
    let f=2; //block scope
}
console.log(b); // b is accessible
//console.log(f); //will give error

//Arrow function

//short syntax for function expression
//normal function
var add=function(x,y){
//    console.log(this);
    return x+y;
}
console.log(add(5,6));

//Arrow function

add1 =(x,y)=>{
    console.log(this);
    return x+y;}
console.log(add1(3,4));


//The For/of loop


var food=["pani poori","dosa","french fries"];
//arrays
for(f of food){
    console.log(f);
}

var str="helloworld";
//string
for(s of str){
    console.log(s);
}

//Promises

let checka=new Promise(function(resolve,reject){
    let a=2;
    if(a%2==1){
        resolve("odd");
    }
    else{
        reject("even");
    }
});
checka.then(function(fromresolve){
    console.log("a is "+fromresolve);
}).catch(function(fromreject){
    console.log("a is "+fromreject);
})

//Symbol 
//used to represent hidden identifier

var food={
    name:"pani poori",
    taste:"sweet",
    
}
let cost=Symbol("cost");
food[cost]=25;

console.log(food[cost]);
console.log(food.cost); //undefined


//function with defaul parameter

function sub(x,y=10){
    return y-x;
}
console.log(sub(3)); //y will be 10 default value
console.log(sub(3,4));

//Function rest parameter

function sum(...i){
    let ans="";
    for(j of i){
        ans+=j;
    }
    return ans;
}
console.log(sum("h","e","l","l","o"));
console.log(sum(1,2,3,4,5));

//Array.find && Array.findIndex
var age=[6,43,5,65,12,53];
function fun1(value, index, array){
    return value>18;
}

var v=age.find(fun1); //find 1st value which passes the condition
console.log("value: "+v);

var v2=age.findIndex(fun1); //finds index of the value
console.log("Index: "+v2);
