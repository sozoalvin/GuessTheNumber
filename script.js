// 'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const gameLogic = function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(document.querySelector('.guess').value);
    console.log(`this is the value of guess, ${guess}`);
    console.log(typeof guess);

    // when there is no input
    if (!guess) {
        displayMessage('No Input detected');
        
    // when a player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the Game!');
            document.querySelector('.score').textContent = 0;
        }
    }
}

document.querySelector('.check').addEventListener('click',gameLogic());
document.querySelector('.check').addEventListener('keyup', function(e){
if (e.keyCore === 13){
    gameLogic();
}
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    displayMessage('Start Guessing  .... ');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});
