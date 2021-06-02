//Class 

class food{
    //constructor method
    constructor(name,taste,cost){
        this.name=name;
        this.taste=taste;
        this.cost=cost;
    }
    //class methode
    display(){
        console.log(f1.name+" "+f1.taste+" "+f1.cost);
    }
}
var f1=new food("panipoori","sweet",20);
f1.display();

