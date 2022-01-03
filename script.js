//your script goes here
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guess = document.querySelector('.guessField');
const lastResult = document.querySelector('.lastResult');
const lowOrHi  = document.querylector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  //alert('I am a placeholder');
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses:';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNuber) {
    lastResult.textContent = 'Congratulations! You got right';
    lastResult.style.backgroudColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Game Over!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroudColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNuber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  
  guessCount++;
  guessField.value = '';
  guessField.focus();
}