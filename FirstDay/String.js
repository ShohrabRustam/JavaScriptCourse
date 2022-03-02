var x= "Hello I am There";

document.write("<h1>" +x+   "</h1>")

document.write("<h2>"+typeof(x)+"</h2>")

document.write("<h1>Hey I am \"Shohrab_Rustam\"</h1>")

document.write("<h2>It's All Right!</h2>");

document.write("<h2>The character is called / is called backslash</h2>")

document.write("<h1>Array in JS </h1>")
array = [2,3,4,6,7,8,9,0];
document.write(array);
document.write('<br>');

array2 = ["Apple", "Banana","Orange","Mango"];
array2.push("Date");
document.write("<h2>Array data !</h2>");


array.forEach(element => {

    document.write("<h1>"+element+"<h1/>");
});

document.write("<h2>Array2 data !</h2>");


array2.forEach(element => {

    document.write("<h1>"+element+"<h1/>");
});