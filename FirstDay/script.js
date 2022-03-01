document.write("Hello, Welcome to JavaScript ")
console.log("Hello, This is first program to print Hello in Console")
let a = 8;
let b =19;
console.log("The value of a + b is : ".a+b);

function sum(x,y){
    var x=10;
    y=20;
    total = x+y;
    document.write(total);
}
document.write('<br>')
document.write('The Sum is : ')
sum();

function sum2(x,y){
    total = x+y;
    document.write(total);
}
document.write('<br>')
document.write('The Sum is : ')
sum2(10,99);

a=5;

document.write("<h1>The variable is inside the document.write is </h1>")
document.write('<h2>'+a+'</h2>')