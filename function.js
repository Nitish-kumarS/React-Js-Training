//funtions

//without return(will return default value)
function  greet(){
    console.log('hello');
}
greet();

//with return 
function add(){
    return 34+32;
}
var ans=add();
console.log(ans);

//function with parameter
function addwithparameter(x,y){
    return x+y;
}
var ans2=addwithparameter(4,5);
console.log(ans2);

//function with local variable

function sample(){
    var x="hello";
    var y="Nitish";
    return x+" "+y;
}
console.log(sample());

