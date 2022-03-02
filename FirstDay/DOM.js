function TaskFun(){
var x = document.getElementsByTagName('div');
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
}
// TaskFun();