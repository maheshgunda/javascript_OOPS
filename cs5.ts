class tutorial{

    t:string="Hindi";   // Non static variable or instance variable
    static t1:string= "Telugu"; // Static variable

    tution():void{            // non static method
        console.log(tutorial.t1);
        let t2:string="English";
        console.log(t2);
    }
}

let t5obj=new tutorial();
console.log(t5obj.t);   // Calling non- static variable thorugh object creation

t5obj.tution(); // Calling method