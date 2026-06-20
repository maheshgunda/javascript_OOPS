// Access modifies will have three types
// 1. private --> Not able to access outside the class for priavte use #symbol
// 2.protected --> able to access within class and not in other class
// 3.public --> able to access with in the class and outside the class

class Bank{

    #k:number=4534;

    bankAccountNumber(){
        console.log("Calling bankAccountNumber Method in bank class");
        console.log("Calling private variable in Bank class-->" +this.#k);
    }
}
class Branch extends Bank{

    bankAddress(){
         console.log("Calling bankAddress Method in Branch class");
        console.log("Calling private variable in Branch class-->" +this.k);
    }
}

let b1=new Branch();
b1.bankAccountNumber();
b1.bankAddress();

