// In two different class we have same method then we need to call with super.methodname

class king{


    speed(){
        console.log("king Speed Method");
    }

}

class queen extends king{

     speed(){
        console.log("queen Speed Method");
        super.speed(); // To call a parent class method
    }

}

let v1=new queen();
v1.speed();