abstract class Medical{
    
     k:number=101;

    abstract shop1():void;

    shop2(){
        console.log("Abstract class with concrete method");
    }
}

class organization extends Medical{

    shop1() {
        console.log("Abstract Method with concrete class");
        console.log(this.k);
    }
    
}

let ab1= new organization();
ab1.shop1();
ab1.shop2();
ab1.k;