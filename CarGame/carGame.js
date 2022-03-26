const score = document.querySelector('.score');

const startScreen = document.querySelector('.startScreen');

const gameArea = document.querySelector('.gameArea')

// console.log(score);
// console.log(startScreen)
// console.log(gameArea)

startScreen.addEventListener('click',start);

document.addEventListener('keydown',pressOn);
document.addEventListener('keyup',pressOff);
 
function pressOn(e){
    e.preventDefault();
    console.log("On",e.key);
}

function pressOff(e){
    console.log("Off",e.key);
}

function start(){
    alert("connected!!")
}