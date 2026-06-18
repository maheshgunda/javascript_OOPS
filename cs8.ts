// Same method
class Animal4 {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal4 {
    sound() {
        super.sound(); // Parent method
        console.log("Dog Barks");
    }
}

let d1 = new Dog();
d1.sound();