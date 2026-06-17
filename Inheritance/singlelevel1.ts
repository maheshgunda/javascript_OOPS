class parentclass{

    studentdetails():void{
        console.log("Parent class method");
    }
}

class childclass extends parentclass{  // calling parentclass method from child class using extends keyword

    studentmarks(){
         console.log("child class method");
    }
}

// creating a object since it is not static method.
let cs1=new childclass();
cs1.studentdetails();
cs1.studentmarks();