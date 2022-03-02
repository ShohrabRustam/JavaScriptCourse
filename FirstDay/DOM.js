function TaskFun(){
var x = document.getElementsByTagName('div');

// arr= array("red","green","blue","Black");
/*x[0].style.color="Red";
x[1].style.color="blue";
x[2].style.color="yellow";
x[3].style.color="green";
x[4].style.color="grey";*/
for(let i=0;i<x.length;i++){
    x[i].style.fontWeight="Bolder";
    x[i].style.backgroundColor="yellow";
    x[i].style.color="red";
    x[i].style.border="2px solid black";
    x[i].style.margin="5px";
}
var y = document.getElementsByClassName('demo');

for(let i=0;i<y.length;i++){
    y[i].style.fontWeight="Bolder";
    y[i].style.backgroundColor="blue";
    y[i].style.color="red";
    y[i].style.border="2px solid black";
    y[i].style.margin="5px";
}
}


    