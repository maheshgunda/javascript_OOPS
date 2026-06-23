interface earbuds{

  b():void;

}

interface earphones {
    c():void;
}

class Philips implements earbuds, earphones {

    b(){
        console.log("interface class 1");
    }

    c(){
        console.log("Interface class 2");
    }

    d(){
        console.log("Concrete class d");
    }
}

let ab= new Philips();
ab.b();
ab.d();
ab.c();