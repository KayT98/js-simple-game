let game = document.querySelector('#game');
let player = document.querySelector('#player');
let pghost = document.querySelector('#pghost');
let score = document.querySelector('#score');

//declaring variable for score
let interval = null;
let playerScore = 0;

//when open the page
function loadPage(){
   alert("Are you ready to play the game?");
}

//for score
let scoreCounter = ()=> {
    playerScore++;
    score.innerHTML = `Your score: ${playerScore}`;
}

interval = setInterval(scoreCounter, 200);

function jump() {
    player.classList.add('jump-animation');
    document.getElementById('jump').play();
    setTimeout(function() {
        player.classList.remove('jump-animation');
    }, 1000);
}

document.addEventListener('keydown', function() {
    if (!player.classList.contains('jump-animation')){  
    jump();
    }  
}) 

//when the bunny hit the ghost
setInterval(() => {
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    const ghostLeft = parseInt(window.getComputedStyle(pghost).getPropertyValue('left'));
        if (ghostLeft < 0){
            pghost.style.display = 'none';
        }
        else{
            pghost.style.display = '';
        }

        if (ghostLeft < 50 && ghostLeft > 0 && playerTop > 300) {
            alert("Game Over! You got " + `${playerScore}` + " points."+ " Play again?");  
            location.reload();
                clearInterval(interval);
                playerScore = 0;
        }
}, 60);