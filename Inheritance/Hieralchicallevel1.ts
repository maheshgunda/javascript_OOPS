// It means one parent class and two child classes

class Age{

    childage(){
        console.log("chile age is 8 years of old");
    }
}

class StudentAge extends Age{
    studentage(){
        console.log("chile age is 18 years of old")
    }
}

class ParentAge extends Age{
    parentage(){
        console.log("Parent age is 48 years of old")
    }
}
// Access method of parent class
let s1=new StudentAge();
s1.childage();
s1.studentage();
// Access method of parent class
let s2=new ParentAge();
s2.childage();
s2.parentage();