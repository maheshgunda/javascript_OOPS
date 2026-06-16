class Flights{

    f:string="AirIndia"; // Global variabl

    flightsmethod(){      // non static method
        let k:string="Indigo";
        console.log(k);
    }
}

let f1=new Flights();
console.log(f1.f);
 // to access non static methods
f1.flightsmethod();
