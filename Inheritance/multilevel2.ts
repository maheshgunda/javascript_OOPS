class systems{

   static Date1(){
        console.log("Date 1 method");
    }
}

class systemsDate extends systems{

   static Date2(){
        console.log("Date 2 method");
    }
}

// To call a static method --> classname.methodname
systemsDate.Date1();
systemsDate.Date2();