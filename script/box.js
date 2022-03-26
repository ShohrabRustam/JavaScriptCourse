// const grandparent = document.querySelector('.grandParent');
// const Parent = document.querySelector('.parent');
// const Child = document.querySelector('.child');
// // alert("Connected!!!")
// grandparent.addEventListener('click',e=>{
//     console.log(e.target); 
// });


const divs = document.querySelectorAll('div');

divs.forEach(div=>{
    div.addEventListener("click",()=>{
        alert("Hii !!!")
    })
})

const newDiv = document.createElement("div");
newDiv.style.width="200px";
newDiv.style.height="200px";
newDiv.style.backgroundColor="purple";
document.body.append(newDiv) ;