const score = document.querySelector('.score');

const startScreen = document.querySelector('.startScreen');

const gameArea = document.querySelector('.gameArea')

// console.log(score);
// console.log(startScreen)
// console.log(gameArea)
let keys = {ArrowUp:false , ArrowDown:false , ArrowRight:false, ArrowLeft:false};

startScreen.addEventListener('click',start);

document.addEventListener('keydown',pressOn);
document.addEventListener('keyup',pressOff);
 
function pressOn(e){
    e.preventDefault();
    keys[e.key]=true;
    console.log(keys);
}

function pressOff(e){
    keys[e.key]=false;
    console.log(keys);
}

function start(){
    alert("connected!!")
}