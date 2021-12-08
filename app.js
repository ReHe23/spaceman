console.log('javascript working 1!');

//Each letter in alphabet
//? DOM ELEMENTS
const hintBtn = document.querySelector('.hint');
const resetBtn = document.querySelector('.reset');
const quitBtn = document.querySelector('.quit');

const letters = document.querySelector('.letter-grid');
const ballonImage = document.querySelector('.balloonImage');
const triesLeft = document.querySelector('.tries-left');

//?VARIABLES
let wordGuessBank = [
	'Carl Fredricksen',
	'Charles Muntz',
	'Russell',
	'Kevin',
	'Ellie Fredricksen',
	'Beta and Gamma',
	'Dug',
	'Squirrel',
];

let answer = '';
let guessed = [];
let triesLeft = 9;
let currentWord;
let wordLength;
let unusedWordArray = wordGuessBank;

//?FUNCTIONS
// function to reset to initial values
// ranomly choose phase/word from list
function randomWord() {
	answer = wordGuessBank[Math.floor(math.random() * wordGuess.length)];
}
randomWord();
// display dashes on screen
// split word into its letters

//compare selected letter with corret letter
//* IF correct guess
// need to loop to check each letter and return its index

//! ELSE incorrect guess
// add class to turn letter to different color
// show image of how many tries left
// update tries left number

// check win
// update score
// reset board with new word

//?EVENT LISTENERS

//function to show hint modal
// and close modal
