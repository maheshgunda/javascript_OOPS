class Father{

    protected k:string="Surename";
    Mother(){
        console.log("Calling Mother method in Father class");
    }
   protected brother(){
        console.log("Calling protected brother method in Father class");
    }
}

class Son extends Father{

    son1(){
        console.log("Calling son method in Son class");
        console.log("Calling Father variable in Son class-->" +this.k);
    }
    
    // to call a protected method
    son4() {
    this.brother();
}

}

let s1=new Son();
s1.Mother();
s1.son1();
s1.son4();
 


