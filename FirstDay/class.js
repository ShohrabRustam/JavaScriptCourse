class Student{
    constructor(name,address,mobile,roll_no){
    this.roll_no=roll_no;
    this.name=name;
    this.address=address;
    this.mobile=mobile;
}
    name(){
        return ("I am " + this.name); 
    }

    roll_no(){
        return "My Roll no is : "+ this.roll_no;
    }

    address(){
        return "My address is : "+ this.address;
    }

    mobile(){
        return "My mobile no is : "+ this.mobile;
    }

    details(){
        return "Roll No : " +this.roll_no + " Name : " + this.name + " Address : "+ this.address +  " Mobile Number : "+ this.mobile;
    }

    static task(){
        document.write(" This is the static function ");
    }

}

var s1 =new  Student(1,"Shohrab Rustam ", "Bangalure ", 7417200362)

console.log(s1);

Student.task();

class Teacher extends Student{
constructor(name,address,mobile,Subject, langage){
    super(name,address,mobile);
    this.Subject=Subject;
    this.langage=langage;
}
z
}


t1 = new Teacher("Rustam","Bangalure", 7669001123,"Math", "English");

document.write(t1.name);