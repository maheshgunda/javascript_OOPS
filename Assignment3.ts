// A method without retrun type and with parameters means:
// It have parameters ( parameters).
// It doesn't have any value (void in TypeScript).


class cell{

    Motorolo(k:string){
        console.log("A method without retrun type and with parameters");
    }
}

let s1=new cell();
s1.Motorolo("a");  // the value "a" is assigned to the parameter k