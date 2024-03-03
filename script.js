let block = document.getElementById('block');
let hole = document.getElementById('hole');
let bird1 = document.getElementById('bird-1');
let img = document.getElementById('bird-1');
let soundFlap = new Audio('./audio/sfx-wings.mp3');
let soundDeath = new Audio('./audio/sfx-morri-meme.mp3');
let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
    let random = Math.random()*3;
    let top = (random*100)+150;
    hole.style.top = -(top) + 'px';
    counter++;
});

setInterval(function() {
    let bird1Top = parseInt(window.getComputedStyle(bird1).getPropertyValue('top'));
    if (jumping==0){
        bird1.style.top = (bird1Top + 3) + 'px';
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let cTop = -(650-bird1Top);
    if ((bird1Top>600)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))) {
        soundDeath.play();
        soundDeath.currentTime = 0;
        alert('Game Over. Score: '+counter);
        bird1.style.top = 100 + 'px';
        counter=0;
    }
}, 10);

function jump() {
    img.src = 'images/Bird-2.png';
    bird_dy = -7.6;
    soundFlap.play();
    soundFlap.currentTime = 0;
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function() {
        img.src = 'images/Bird.png';
        let bird1Top = parseInt(window.getComputedStyle(bird1).getPropertyValue('top'));
        if ((bird1Top>5)&&(jumpCount<15)) {
            bird1.style.top = (bird1Top - 5) + 'px';
        }
        if (jumpCount>11) {
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    }, 10);
}
