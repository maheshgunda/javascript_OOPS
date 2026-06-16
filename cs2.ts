class Fruits{

    a:string= "Apple" // Global variable
    
    market(){
        let m:string="Banana";
        console.log(m);
    }
}
 // object creation
    let f11= new Fruits();
    console.log(f11.a);

    f11.market();