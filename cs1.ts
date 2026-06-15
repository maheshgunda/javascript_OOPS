class Lion {
    k: string = "King of the forest";  // instance variable

    den(): void {    // method
        let c: string = "Brown";
        console.log(c);
    }
}
let n = new Lion();  // object creation
console.log(n.k);    // calling instance variable through object cretaion
n.den();   // calling object with object reference
