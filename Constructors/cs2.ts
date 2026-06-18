class Animal1{
    dog(){
        console.log("Dog method");
    }

    constructor(){
        console.log("Calling a default constructor");
    }
}

// It will two method as default constructor method and method since we are calling a method.
let a1=new Animal1();
a1.dog();
