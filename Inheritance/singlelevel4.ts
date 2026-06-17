class laptop1 {
    k1: string = "Lenovo variable";
}

class desktop1 extends laptop1 {
    d: string = "Lenovo desktop";

    display11() {
        console.log(this.k1); // Parent class variable
        console.log(this.d);  // Child class variable
    }
}

let obj = new desktop1();
obj.display11();