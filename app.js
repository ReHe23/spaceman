console.log('javascript working 1!');

//Each letter in alphabet

//? DOM ELEMENTS
const hintBtn = document.querySelector('.hint');
const resetBtn = document.querySelector('.reset');
const quitBtn = document.querySelector('.quit');

const letters = document.querySelector('.letter-grid');
const ballonImage = document.querySelector('.balloonImage');
const triesLeftBoard = document.querySelector('.triesLeftBoard');
const wordGuess = document.querySelector('.wordGuess');

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
let wordLength;
let unusedWordArray = wordGuessBank;

//?FUNCTIONS
function init() {
	triesLeft = 9;
	triesLeftBoard.innerTest = `Tries Left: ${triesLeft}`;
	guessed = [];
	wordLength = 0;
	unusedWordArray = wordGuessBank;
}
// function to reset to initial values
// ranomly choose phase/word from list

function randomWord() {
	answer =
		unusedWordArray[Math.floor(Math.random() * unusedWordArray.length) - 1];
	let answerArray = unusedWordArray.indexOf(answer);
	unusedWordArray.splice(answerArray, 1);
	return answer;
}
randomWord();

// display dashes on screen
function dashes(answer) {
	let array = answer.split('');
	let howManySpaces = [];
	array.forEach((element, index) => {
		if (element === ' ') {
			array.splice(index, 1, '_');
			howManySpaces.push('1');
		} else return;
	});
	dashesLength = array.length;
	wordLength = array.length - howManySpaces.length;
	array.forEach((element) => {
		let div = document.createElement('div');
		div.classList.add('dashes', element);
		wordGuess.appendChild(div);
	});
}

dashes(answer);

//compare selected letter with corret letter
//* IF correct guess
// need to loop to check each letter and return its index

//! ELSE incorrect guess
// add class to turn letter to different color
// show image of how many tries left
// update tries left number

// // check win
// function checkGameWon() {
// 	if ((currentWord = answer)) {
// 		document.getElementById('letters').innerHTML = 'You Won!!!';
// 	}
// }
// // check lose
// function checkGameLost() {
// 	if (mistakes === triesLeft) {
// 		document.getElementById('wordGuess').innerHTML =
// 			'The answer was: ' + answer;
// 		document.getElementById('letters').innerHTML = 'You Lost!!!';
// 	}
// }
// update score
// reset board with new word

//?EVENT LISTENERS

//function to show hint modal
// and close modal
