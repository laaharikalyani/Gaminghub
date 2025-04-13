

    let playFlappy = document.getElementById('playFlappy');
    playFlappy.addEventListener('click', function() {
        
        window.location.href = './flappyBird/flappy.html'; 
    });

let playSnakeGame = document.getElementById('playSnakeGame');
playSnakeGame.addEventListener('click',function(){
    window.location.href='./snakeGame/snakeGame.html';
});
let play2048=document.getElementById('play2048');
play2048.addEventListener('click',function(){
    window.location.href='./2048/classic.html';
})
let playQuiz= document.getElementById('playQuiz');
playQuiz.addEventListener('click',function(){
    window.location.href='./quiz.html';
});
let playTicTacToe = document.getElementById('play-tic-tac-toe');
playTicTacToe.addEventListener('click',function(){
    window.location.href='./tic/tic.html';
})