// Polymorphism will support only method overrirding. Itmeans multiple methods with same parameters 
// with different class.to have a releation ship we use extends keyword.
// to call a parent method need to use super keyword.
// The parent and child classes have the same method name and same parameters:

class jungle{

    boy(game1:string, run:number){
        console.log("boy method 1");
        console.log(game1, run);
    }   
}

class forest extends jungle{
    boy(game1:string, run:number){
         console.log("boy method 2");
         super.boy("suresh",28);
         console.log(game1, run);
    }
}

let c= new forest();
c.boy("Mahesh",22);


    