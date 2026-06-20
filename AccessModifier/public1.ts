class Address{

    streetAddress:string="APHB";
    Address1(){
        console.log("Address1 method");
    }
}
class Homestreet extends Address{
     Address2(){
        console.log("Address2 method");
        console.log("Calling variable-->"+this.streetAddress);
    }
}

let a1=new Homestreet();
a1.Address1();
a1.Address2();

