console.log("Start Program ")
let i=0;

let id = setInterval(()=>{
    document.getElementById('content').innerText=++i;
    if(i==10){
        clearInterval(id);
    }
},1000);

console.log("End Program ")