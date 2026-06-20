class Fruits{

    k:string="Fruit Market";

    #Apple(){
        console.log("Private Fruits Apple method");
    }

    // To call a priavte method
    showApple() {
        this.#Apple();
    }
    Banana(){
        console.log("Fruits Banana method");
    }
}

class Vegetable extends Fruits{

    Mirchi(){
        console.log(" Vegetable Mirchi method");
    }
    Onion(){
        console.log(" Vegetable Onion method");
    }
}

let c1=new Vegetable(); // Apple method can't acess outside the class since it is private
c1.Banana();
c1.Mirchi();
c1.Onion();
console.log(c1.k);
c1.showApple();  // // Access private method indirectly


