// Abstarct class will have abstract keyword.
// Abstract method will end with semi coloumn.
// abstarct method should have return type.
//abstract means "no implementation is provided here; child classes must provide it

abstract class libraryBooks{

    abstract Books1():void;

}

class Campus1 extends libraryBooks{

    Books2(){
        console.log("Books2 in Concrete class");
    }

    // calling abstarct method
    Books1() {
         console.log("Books1 in Concrete class");
    }

}

let c1= new Campus1();
c1.Books1();
c1.Books2();