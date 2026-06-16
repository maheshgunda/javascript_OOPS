class Computer{

    static c1:string="Mouse -->Static variable";

    static table(){
        console.log("Static Method");
        console.log("Calling static variable using this keyword"+this.c1);

    }
}

// to call a staic variable
console.log(Computer.c1);

// to call a staic Method
Computer.table();