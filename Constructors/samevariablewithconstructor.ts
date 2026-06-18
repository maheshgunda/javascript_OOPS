class Horse{

    k:number;
    constructor(k:number){
       this.k=k;
       console.log("Calling constructor method -->" +this.k);
    }
    
    Girafee(){
        console.log("Calling girafee method -->"+this.k);
    }

    Parrot(){
      console.log("Calling Parrot method -->"+this.k);
 
    }
}

let c4=new Horse(4);
c4.Girafee();
c4.Parrot();
