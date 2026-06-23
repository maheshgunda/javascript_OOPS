abstract class Google{
    abstract k:number;

}

class Apple extends Google{
    
    k:number=110;
}

let c=new Apple();
console.log(c.k);