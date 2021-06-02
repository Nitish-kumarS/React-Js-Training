//spread operator

var x1=["hi","hello","hey"];
var x2=[2,3,4,5];
var x=[...x1,...x2]; //concat using spread operator
console.log(x);

//spread operator used to copy array
//normal copy 
var test1=x2;
test1.push(1);
console.log(test1);
console.log(x2);   //change affect old array too

var test2=[...x1];
test2.push("bye");
console.log(test2);
console.log(x1+" not affected"); //not affected


