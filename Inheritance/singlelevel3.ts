class laptop{
    k1:string="Lenovo variable";

    mouse(){
        console.log("Parent class mouse method");
    }
}

class desktop extends laptop{
    d:string="Lenovo desktop";
    
    intel(){
        console.log("Child class intel method")
    }
    
}

let h1= new desktop();
// Calling method
h1.mouse();
h1.intel();

// Calling variable
console.log(h1.k1);
console.log(h1.d);
