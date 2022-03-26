const grandparent = document.querySelector('.grandParent');
const Parent = document.querySelector('.parent');
const Child = document.querySelector('.child');
// alert("Connected!!!")
grandparent.addEventListener('click',e=>{
    console.log(e.target); 
});