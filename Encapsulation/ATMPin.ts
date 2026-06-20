// Hiding the implementation and exposuing the feature of functionality is know as encapsulation.
// to get the value need to use set and get methods

class ATMPin{
    #pin:number=0;
    #accountNumber:number=0;
    #branch:string="";
    #bankbalance:number=0;
    #accountHolderName:string="";

    set pin(userpin:number){
        this.#pin=userpin;
    }

    get pin():number{
        return this.#pin
    }

    set accountNumber(useraccount:number){
        this.#accountNumber=useraccount;
    }

    get accountNumber():number{
        return this.#accountNumber;
    }

    set branch(branchdetails:string){
        this.#branch=branchdetails;
    }

    get branch():string{
        return this.#branch;
    }

    set bankbalance(branchbankbalance:number){
        this.#bankbalance=branchbankbalance;
    }

    get bankbalance():number{
        return this.#bankbalance;
    }

    set accountHolderName(holdername:string){
        this.#accountHolderName=holdername;
    }
    get accountHolderName():string{
        return this.#accountHolderName;
    }
}

class ATMUserdetails{

    userInfo(){
        let a= new ATMPin();
        a.pin=9090; // setter
        console.log("User Pin-->"+a.pin); // getter

        a.accountNumber=75858489384; // setter
        console.log("User account Number-->"+a.accountNumber); // getter

        a.branch="Gajuwaka Branch";
        console.log("Branch details-->"+a.branch);

        a.bankbalance=774.7;
        console.log("Bank balance-->"+a.bankbalance);

        a.accountHolderName="MaheshG";
        console.log("Account holder name-->"+a.accountHolderName);
    }


}

let a=new ATMUserdetails();
a.userInfo();