console.log('Data Types');
//primitive data types:

// number:
var num1=32;
//with decimal
var num2=32.4;
//numbers with exponential
var num3=32e5;
var num4=32e-2;
console.log("num1:"+num1);
console.log("num2:"+num2);
console.log("num3:"+num3);
console.log("num4:"+num4);
console.log("value1:"+ (num2 + num1));
console.log("value2:"+ (num3 + num1));
console.log("value3:"+ (num3 + num4));

//string 
var string1="helo";
var string2=' helo';
console.log(string1+string2);
console.log(string1+num1);

//boolean
var t=true;
var f=false;
console.log(t);
console.log(f);

//undefined
var r;
console.log(r);

//null
var r=3;
r=null;
console.log(r);
console.log(typeof(r));

//object
//contain more than one value
var food={
    name:"pani poori",
    shape:"cricle",
    taste:"sweet & size",
    cost:20,
    func:function(){
        return this.name+" is "+this.shape+" in shape";
    }
};

console.log(food.name+"-"+food["cost"]);
//function inside object
console.log(food.func());

//function
function add(x,y){
    return x+y;
}
console.log(add(4,5.6));
console.log(add(2343,53e3));