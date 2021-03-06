const score = document.querySelector('.score');

const startScreen = document.querySelector('.startScreen');

const gameArea = document.querySelector('.gameArea')

// console.log(score);
// console.log(startScreen)
// console.log(gameArea)

//setup object to track key which key is pressed 
let keys = { ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false };

let player = { speed: 5 };

startScreen.addEventListener('click', start);

document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);

//animation 
function playGame() {
    // startScreen.classList.remove('hide');
    // gameArea.classList.add('hide')
    // console.log('inPlay');
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
    if (player.start) {
        if (keys.ArrowUp) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x>0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight) {
            player.x += player.speed;
        }

        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        window.requestAnimationFrame(playGame);
    }
}


function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

function pressOff(e) {
    // what key was press
    e.preventDefault();
    keys[e.key] = false;
    console.log(keys);
}

function start() {
    // alert('connected');

    startScreen.classList.add('hide');
    gameArea.classList.remove('hide');
    player.start = true;
    // console.log('click')
    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.innerText = "Car";
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player)
}
