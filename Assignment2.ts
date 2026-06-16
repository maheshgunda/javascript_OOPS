// A method with return type and without parameters means:
// It does not take any input (no parameters).
// It have return any value (void in TypeScript).

class Laptop{

    lenovo():string{
        return "A method with return type and without parameters";
       // console.log("A method with return type and without parameters");
    }
}

let la=new Laptop();
console.log(la.lenovo());