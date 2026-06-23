// Interface looks like but with interface keyword
// to have a releation ship with interface we have implements keyword
//In an interface, all methods are already abstract by default
//so you cannot use the abstract keyword.

 interface Apple{
         banana():void;
 }

 class AFruits implements Apple {
     
        banana(){
            console.log("Fruits")
        }
 }

 let f1= new AFruits();
 f1.banana();