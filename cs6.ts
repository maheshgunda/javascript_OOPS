//A static variable belongs to the class, not to an object. So you access it using the class name.
class staticvariable{

    static t6:string ="Telugu";

}
let sv1=new staticvariable();
console.log(staticvariable.t6);  // to access static variable (classname.static variable name)