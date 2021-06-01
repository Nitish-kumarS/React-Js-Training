//Scopes

//global scope
// variable declared globally can to used anywhere

var x="nitish";
function fun1(){
    return "hi "+x;
}
console.log(fun1());

//local scope 

function fun2(){
    var s=4;
    console.log(s*4);
}
//gives error because s is local variable of fun2 which can be acessed outside fun2. 
//console.log(s);
fun2();
