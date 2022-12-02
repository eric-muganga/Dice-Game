'use strict';


const score0El = document.querySelector('#score--0'); // Selecting the element with id score--0 and storing it in a variable

const score1El = document.querySelector('#score--1'); // Selecting the element with id score--1 and storing it in a variable

const current0El = document.getElementById('current--0'); // Selecting the element with id current--0 and storing it in a variable

const current1El = document.getElementById('current--1'); // Selecting the element with id current--1 and storing it in a variable

const diceEl = document.querySelector('.dice'); // Selecting the element with class dice and storing it in a variable

const btnNew = document.querySelector('.btn--new'); // Selecting the element with class btn--new and storing it in a variable

const btnRoll = document.querySelector('.btn--roll'); // Selecting the element with class btn--roll and storing it in a variable

const btnHold = document.querySelector('.btn--hold'); // Selecting the element with class btn--hold and storing it in a variable



score0El.textContent = 0; // Setting the text content of the element with id score--0 to 0
score1El.textContent = 0; // Setting the text content of the element with id score--1 to 0
diceEl.classList.add('hidden'); // Adding the class hidden to the element with class dice (hiding the dice)

const scores = [0, 0]; // Creating an array with two elements, both set to 0
let currentScore = 0; // Declaring a variable currentScore and setting it to 0
let activePlayer = 0; // Declaring a variable activePlayer and setting it to 0



btnRoll.addEventListener('click', function(){
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // Generating a random number between 1 and 6 and storing it in a variable called dice
    // console.log(dice); // Logging the value of dice to the console

    // Display dice
    diceEl.classList.remove('hidden'); // Removing the class hidden from the element with class dice (displaying the dice)
    diceEl.src = `dice-${dice}.png`; // Setting the src attribute of the element with class dice to the image of the dice roll

    // Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice; // Adding the value of dice to the value of currentScore and storing it in currentScore
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; // Setting the text content of the element with id current--activePlayer to the value of currentScore
    }else {
        // Switch to next player
    }
})