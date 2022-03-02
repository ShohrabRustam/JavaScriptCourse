class Student{
    constructor(roll_no,name,address,mobile){
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


}

var s1 =new  Student(1,"Shohrab Rustam ", "Bangalure ", 7417200362)

console.log(s1);