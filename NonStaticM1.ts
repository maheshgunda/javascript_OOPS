class bus{

    b:string="Volvo";

    superluxury(){                    // nonstatic method
        let s1:string="Hyderabad";
        console.log(s1);
    }

    static superluxuryAC(){
         let s2:string="Visakhapatnam";
        console.log(s2);
    }
}

let b1=new bus();
console.log(b1.b);

// to call non static method (refercnevariable.non static method name)
b1.superluxury();

// to call static method (classname.methodname)
bus.superluxuryAC();

