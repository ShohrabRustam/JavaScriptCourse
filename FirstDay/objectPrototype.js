document.write("Welcome to the Prototype")
var abc = {
        Name: "Shohrab Rustam",
        Subject : "JavaScript",
        Address: "Bangalure",
}

document.write(abc);
console.log(abc)

var xyz = function(Name, Subject , Address ){
    this.Name=Name;
    this.Subject=Subject;
    this.Address=Address;
}

let x = new xyz("Rustam", "Problem Solving","New Delhi");
console.log(x);

xyz.prototype.getName = function(){
    return this.Name;
}

xyz.prototype.getAddress = function(){
    return this.Address;
}

xyz.prototype.getSubject = function (){
    return this.Subject;
}