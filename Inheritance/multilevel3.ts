class Dell{
     static n:string="static variable dell class";
   static Date1(){
        console.log("Date 1 method");
    }
}

class Inteldell extends Dell{
    
    static n1:string="static variable Inteldell class";

   static Date2(){
        console.log("Date 2 method");
    }
}

class lenovoIpad extends Inteldell{
    
    static n2:string="static variable lenovoIpad class";

    // To call a static variable
   

   static Date3(){
        console.log("Date 3 method");
    }
}

// To call a static method --> classname.methodname
lenovoIpad.Date1();
lenovoIpad.Date2();
lenovoIpad.Date3();

// To call a static variable -->classname.staticvariable
console.log(lenovoIpad.n);
console.log(lenovoIpad.n1);
console.log(lenovoIpad.n2);