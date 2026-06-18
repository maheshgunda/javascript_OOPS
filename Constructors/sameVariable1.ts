class xerox{

    k:number=10;

    x1(){
        console.log("Calling xerox parent with variable -->"+this.k);
    }
}

class printer extends xerox{

    p:number=10;

    p1(){
        console.log("Calling printer subclass with variable -->"+this.k);
        super.x1();  // To call a parent class variable need to use super.parentmethodname
    }
    
}

let g1=new printer();
g1.p;
g1.p1();