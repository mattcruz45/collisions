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
musicButton = document.getElementById("music");
soundButton = document.getElementById("sound");
backgroundButton = document.getElementById("background");
toggles = document.querySelector('.toggles');
homedecor = document.querySelector('.homedecor');
let musicToggle = false;
let soundToggle = false;
let backgroundToggle = true;
var music = document.getElementById("background-music");
var soundfx = document.getElementById("soundfx");
var deathSound = document.getElementById("death-sound");
music.volume = 0.5;
soundfx.volume = 0.0;
deathSound.volume = 0.0;

function timerIncrease() {
    time++
    timer.textContent = time;
}

function goHome() {
    homedecor.style.opacity = 1;
    soundfx.play();
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
    toggles.style.pointerEvents = "auto";
    toggles.style.opacity = 1;
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
        soundfx.play();
    }
    else {
        currentSkin += 1;
        skin.src = skins[currentSkin];
        user.src = skin.src;
        soundfx.play();
    }
    console.log(currentSkin + skins[currentSkin]);
});

left.addEventListener('click', function() {
    if (currentSkin == 0){
        return;
    }
    else if (currentSkin < 0) {
        currentSkin = 0;
        soundfx.play();
    }
    else {
        currentSkin -= 1;
        skin.src = skins[currentSkin];
        user.src = skin.src;
        soundfx.play();
    }
    console.log(currentSkin + skins[currentSkin]);
});

musicButton.addEventListener('click', function() {
    musicToggle = !musicToggle;
    if (musicToggle == true) {
        musicButton.src = "assets/musicOn.png";
        music.volume = 1.0;
        music.play();
    }
    else {
        musicButton.src = "assets/musicOff.png";
        music.pause();
    }
});
soundButton.addEventListener('click', function() {
    soundToggle = !soundToggle;
    if (soundToggle == true) {
        soundButton.src = "assets/soundOn.png";
        soundfx.volume = 0.5;
        deathSound.volume = 1.0;
    }
    else {
        soundButton.src = "assets/soundOff.png";
        soundfx.volume = 0;
        deathSound.volume = 0;
    }
});
backgroundButton.addEventListener('click', function() {
    backgroundToggle = !backgroundToggle;
    if (backgroundToggle == true) {
        backgroundButton.src = "assets/whiteScreen.png";
        document.body.style.backgroundImage = "none";
    }
    else {
        backgroundButton.src = "assets/rainbowScreen.png";
        document.body.style.backgroundImage = "url('assets/whiteBackground.png')";
        document.body.style.backgroundSize = "100% 100%";
    }
});