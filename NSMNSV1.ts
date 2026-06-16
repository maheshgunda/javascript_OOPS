// A non-static method can access a non-static variable using this keyword same as
//  A static method can access a static variable.

class book{

    // non static variable
    b:string="English book of Non Static variable";

    // non static method
    hindiBook(){
        console.log("Hindi book of Non Static variable");
        // Access non static variable
        console.log("Accessing non-static variable inside method"+this.b);

    }
}

let b5=new book();
b5.hindiBook();   // Accessing non static method

console.log(b5.b);  // Accessing non static variable