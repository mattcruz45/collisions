var enemySpawns;
var timerInterval;
var gameCounter = 0;
let enemies = ["assets/enemy1.png", "assets/enemy2.png", "assets/enemy3.png", "assets/enemy4.png", "assets/enemy5.png", "assets/enemy6.png"]
function gameStart() {
    if (gameCounter > 0) {
        return;
    }
    soundfx.play();
    homedecor.style.opacity = 0;
    timer.textContent = 0;
    user.style.animation = "none";
    score.style.opacity = 0;
    skin.style.opacity = 0;
    left.style.opacity = 0;
    left.style.pointerEvents = "none";
    right.style.opacity = 0;
    right.style.pointerEvents = "none";
    startButton.removeEventListener('mouseenter', startMouseEnter);
    startButton.removeEventListener('mouseleave', startMouseLeave);
    gameCounter = 0;
    gameCounter += 1;
    document.addEventListener('mousemove', handleMouseMove);
    startButton.style.pointerEvents = "none";
    time = 0;
    timerInterval = setInterval(timerIncrease, 1000);
    startButton.style.opacity = 0;
    logo.style.opacity = 0;
    user.style.opacity = 1;
    play.style.opacity = 0;
    play.style.pointerEvents = "none";
    home.style.opacity = 0;
    home.style.pointerEvents = "none";
    toggles.style.pointerEvents = "none";
    toggles.style.opacity = 0;
    enemySpawns = setInterval(enemySpawn, 200);
}

function enemySpawn() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    var enemy = document.createElement('img');
    const randomNum = Math.floor(Math.random() * 6);
    enemy.src = enemies[randomNum];
    gameItems = document.querySelector('.game-items');
    enemy.style.width = "100px";
    gameItems.appendChild(enemy);
    enemy.style.position = 'fixed';
    const side = Math.floor(Math.random() * 4) + 1; //left, right, top, bottom
    switch(side) {
        case 1: //top
            enemy.style.top = '0px';
            enemy.style.left = Math.random() * screenWidth + 'px';
            enemy.style.animation = "top 5s linear"
            break;
        case 2: //right
            enemy.style.right = '0px';
            enemy.style.top = Math.random() * screenHeight + 'px';
            enemy.style.animation = "right 5s linear"
            break;
        case 3: //bottom
            enemy.style.bottom = '0px';
            enemy.style.left = Math.random() * screenWidth + 'px';
            enemy.style.animation = "bottom 5s linear"
            break;
        case 4: //left
            enemy.style.left = '0px';
            enemy.style.top = Math.random() * screenHeight + 'px';
            enemy.style.animation = "left 5s linear";
            break;
    }
    var checkCollisions = setInterval(function() {
        if (isColliding(user, enemy)) {
            deathSound.play();
            gameCounter -= 1;
            clearInterval(checkCollisions);
            document.removeEventListener('mousemove', handleMouseMove);
            clearInterval(enemySpawns);
            reset();
        }
    }, 50);

    setTimeout(() => enemy.remove(), 4995);
}

function isColliding(square1, square2) {
    const rect1 = square1.getBoundingClientRect();
    const rect2 = square2.getBoundingClientRect();

    return !(rect2.left > rect1.right || 
             rect2.right < rect1.left || 
             rect2.top > rect1.bottom || 
             rect2.bottom < rect1.top);
}

function handleMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const offsetX = -13;
    const offsetY = -10;
    user.style.left = mouseX + offsetX + 'px';
    user.style.top = mouseY + offsetY + 'px';
}

function reset() {
    if (gameCounter == 0) {
        clearInterval(timerInterval);
        //high score
        if (time > highScore) {
            highScore = time;
            highscore.textContent = "High: " + highScore;
            localStorage.setItem('highScore', highScore);
        }
        time = 0;
        score.textContent = "Score:" + timer.textContent;
        user.style.animation = "deathSpin 0.5s linear 9"
        setTimeout(() => logo.style.opacity = 1, 5000);
        setTimeout(() => user.style.opacity = 0, 5000);
        setTimeout(() => home.style.opacity = 1, 5000);
        setTimeout(() => play.style.opacity = 1, 5000);
        setTimeout(() => score.style.opacity = 1, 5000);
        setTimeout(() => home.style.pointerEvents = "auto", 5000);
        setTimeout(() => play.style.pointerEvents = "auto", 5000);
        gameCounter = 0;
    }
}