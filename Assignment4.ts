// A method with retrun type and with parameters means:
// It have parameters ( parameters).
// It have return value (void in TypeScript).


class Mouse{

    Mousetouchpad(m:string): string{
        return "A method with retrun type and with parameters";
      
    }
}

let m2=new Mouse();

console.log(m2.Mousetouchpad("a"));