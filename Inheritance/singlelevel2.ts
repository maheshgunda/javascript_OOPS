class vehicle{

   static bike():void{
        console.log("static vehicle parent class ");
    }
}

class bikes extends vehicle{
    static scooty():void{
        console.log("static vehicle child class");
    }
}

// To call a static method use classname.methodname.
bikes.bike();
bikes.scooty();
