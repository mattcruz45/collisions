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


function timerIncrease() {
    time++
    timer.textContent = time;
}

function goHome() {
    user.style.opacity = 0;
    startButton.style.opacity = 1;
    startButton.style.pointerEvents = "auto";
    home.style.opacity = 0;
    home.style.pointerEvents = "none";
    play.style.opacity = 0;
    play.style.pointerEvents = "none";
    score.style.opacity = 0;
    logo.style.opacity = 1;
}
