class Gen{
k:number=10;

    constructor(){
        console.log("Same variable in all methods"+this.k);
    }

    genMethod1(){
        console.log(this.k);
        console.log("Calling genMethod1")
    }
}

let n3=new Gen();
n3.genMethod1();