// Instead of passing or initializing the same values repeatedly in multiple methods,
//   we can use a constructor to initialize them once when the object is created
class Google{

    playerId:number; // instance variable
    constructor(k:number){   // constructor
        this.playerId=k;
    }

    Alpha(pname:string){
        console.log(this.playerId);
        console.log("Calling alpha method"+pname);
    }

       Beta(pname:string){
        console.log(this.playerId);
        console.log("Calling Beta method"+pname);
    }

       Kafka(pname:string){
        console.log(this.playerId);
        console.log("Calling Kafka method"+pname);
    }
}

let t1=new Google(4);
t1.Alpha("AA");
t1.Beta("BB");
t1.Kafka("CC");