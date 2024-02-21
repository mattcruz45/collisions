//Don't Touch Me
//"Enemies" will fly linearly across the screenat random angles and locations
//If they touch the user, the user loses
//The enemies will go at random speed and be a random size
//As time goes on, the peak speed, size, and amount of enemies will increase
const user = document.getElementById('user');
user.style.opacity = 0;
let time = 0;
let timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
startButton.style.pointerEvents = "auto";
startButton.addEventListener('click', gameStart);
const home = document.getElementById("home");
const play = document.getElementById("play");
home.style.opacity = 0;
home.style.pointerEvents = "none";
play.style.opacity = 0;
play.style.pointerEvents = "none";
play.addEventListener('click', gameStart);
home.addEventListener('click', goHome);
const score = document.getElementById("score");
score.style.opacity = 0;
let logo = document.getElementById("logo");
let skin = document.getElementById("skin");
let right = document.getElementById("right");
let left = document.getElementById("left");
skin.style.pointerEvents = "none";
skins = ["assets/skins/clear.png", "assets/skins/user.png", "assets/skins/steve.png"];
currentSkin = 0;

function timerIncrease() {
    time++
    timer.textContent = time;
}

function goHome() {
    timer.textContent = 0;
    user.style.opacity = 0;
    startButton.style.opacity = 1;
    startButton.style.pointerEvents = "auto";
    home.style.opacity = 0;
    home.style.pointerEvents = "none";
    play.style.opacity = 0;
    play.style.pointerEvents = "none";
    score.style.opacity = 0;
    logo.style.opacity = 1;
    startButton.addEventListener('mouseenter', startMouseEnter);
    startButton.addEventListener('mouseleave', startMouseLeave);
    skin.style.opacity = 1;
    left.style.opacity = 1;
    left.style.pointerEvents = "auto";
    right.style.opacity = 1;
    right.style.pointerEvents = "auto";
}

function startMouseEnter() {
    startButton.style.opacity = '0.5';
}

function startMouseLeave() {
    startButton.style.opacity = '1.0';
}

right.addEventListener('click', function() {
    if (currentSkin == skins.length - 1){
        return;
    }
    else if (currentSkin >= skins.length) {
        currentSkin = skins.length-1;
    }
    else {
        currentSkin += 1;
        skin.src = skins[currentSkin];
        user.src = skin.src;
    }
    console.log(currentSkin + skins[currentSkin]);
});

left.addEventListener('click', function() {
    if (currentSkin == 0){
        return;
    }
    else if (currentSkin < 0) {
        currentSkin = 0;
    }
    else {
        currentSkin -= 1;
        skin.src = skins[currentSkin];
        user.src = skin.src;
    }
    console.log(currentSkin + skins[currentSkin]);
});