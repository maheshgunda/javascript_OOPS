class multiselect1{

    select1(){
        console.log("Select1 parent 1 method");
    }
}

class multiselect2 extends multiselect1 {

    select2(){
        console.log("Select2 parent 2 method");
    }
}
class multiselect3 extends multiselect2 {

    select3(){
        console.log("Select3 parent 3 method");
    }
}

class multiselect4  extends multiselect3 {

    select4(){
        console.log("Select4 parent 4 method");
    }
}

let ms1=new multiselect4();
ms1.select1();
ms1.select2();
ms1.select3();
ms1.select4();