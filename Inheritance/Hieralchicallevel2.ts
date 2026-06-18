class president{

    pre1(){
        console.log("Calling President class");
    }
}

class vicePresident extends president{
    vp1(){
        console.log("Calling vice president class");
    }
}

class primeMinister extends president{
    pm1(){
        console.log("Calling primeminister class");
    }
}

class homeminister extends primeMinister{
    hm1(){
        console.log("Calling home minister class");
    }
}

class defenceMinister extends homeminister {
    dm1(){
        console.log("Calling defence minister");
    }
}

class navy extends president{
    nav1(){
        console.log("Calling Navy class");
    }
}

class defence extends navy{
    def(){
        console.log("Calling defence class");
    }
}

class airforce extends defence{
    af1(){
        console.log("Calling Airforce class")
    }
}

let v1= new vicePresident();
v1.vp1();
v1.pre1();
console.log("-----------------");
let df1=new defenceMinister();
df1.dm1();
df1.hm1();
df1.pm1();
df1.pre1();
df1.pre1();
console.log("-----------------");
let aforce=new airforce();
aforce.def();
aforce.nav1();
aforce.af1();
aforce.pre1();