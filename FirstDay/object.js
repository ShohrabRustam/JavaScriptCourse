var Students ={
            Student_Roll_no : 1,
            Student_Name: "Shohab Rustam",
            Student_College : "IIT",
            Student_Degree: "M.TECH",
            alldetails: function (){
                document.write("<p>The Roll no  of the student is : "+ Students.Student_Roll_no+"</p>");
                document.write("<p>The name of the student is : "+ Students.Student_Name+"</p>");
                document.write("<p>The College of the student is : "+ Students.Student_College+ "</p>");
                document.write("<p>The Degree of the student is : "+ Students.Student_Degree+ "</p>");

            }
        }


document.write("<h1>The object of the student is given below </h1>");


       

document.write("<h1>The name of the student is given below </h1>");
document.write("The name of the student : " + Students.Student_Name);

document.write("<h1>The object of the student as function all details is given below </h1>");


Students.alldetails();

document.write("<h3>Trying to give the class and object to structure </h3>");


//try to give the property of the class and object to the function after that we learn about the class and object 


function Student(Student_Roll_no,Student_Name,Student_College,Student_Degree){
    this.Student_Roll_no=Student_Roll_no;
    this.Student_Name=Student_Name;
    this.Student_College=Student_College;
    this.Student_Degree=Student_Degree;
    this.StudentDetails = function(){
        document.write("<p>The Roll no  of the student is : "+ this.Student_Roll_no+"</p>");
        document.write("<p>The name of the student is : "+ this.Student_Name+"</p>");
        document.write("<p>The College of the student is : "+ this.Student_College+ "</p>");
        document.write("<p>The Degree of the student is : "+ this.Student_Degree+ "</p>");
    }
}
var s1 = new Student(12,"Latha Raj", "IIM Bangalure", "MBA" );
document.write("<h2>Using the Object fethch the data of the student </h2>")
s1.StudentDetails();
document.write("<h3>The type of the object type when create the object of the constructor function</h3>")
var str1= new String();
document.write("<p> The type of String Object is : <strong>"+typeof(str1)+"<strong></p>")