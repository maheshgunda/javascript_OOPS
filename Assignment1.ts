// A method without return type and without parameters means:
// It does not take any input (no parameters).
// It does not return any value (void in TypeScript).

class Mobile{

    MobileShop(){
        console.log("A Method without return type and without parameters")
    }
}

// To access non static method need to create a object
let ob4=new Mobile();
ob4.MobileShop();