class Animal6 {

    constructor(name: string) {
        console.log("Animal Name: " + name);
    }
}

class Dog extends Animal6 {

    constructor(name: string) {
        super(name); // Calls parent constructor
        console.log("Dog Constructor");
    }
}

let d1 = new Dog("Tommy");