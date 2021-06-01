//hoisting 
//javascript y default moves all declaration to top

//initialized with declaring 
x=5;
console.log(x+10);
var x;//declaration

//function hoisting
var y=4;
let result=add(x,y);
console.log(result);

function add(a,b){
    return a+b;
}
//Initialization are hoisted

console.log(y); //undefined because initialization us not hosited
var y=18;


