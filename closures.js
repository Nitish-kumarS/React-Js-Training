//closure 
// inner function being able to use local variable of outer function even after outer function closed

function fun1(){
    var name="Nitish"; //local variable
    console.log("hello ");
    function fun2(){   //inner function 
        console.log(name); //acesses outer function content
    }
    return fun2; //returns function 
}
var result=fun1(); // result is a function reference

result();