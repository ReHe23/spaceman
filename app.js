//Each letter in alphabet

//? DOM ELEMENTS
const hintBtn = document.querySelector('.hint');
const resetBtn = document.querySelector('.reset');
const quitBtn = document.querySelector('.quit');

const letters = document.querySelector('.letters');
const ballonImage = document.querySelector('.balloonImage');
const triesLeftBoard = document.querySelector('.triesLeftBoard');
const wordGuess = document.querySelector('.wordGuess');

//?VARIABLES
let wordGuessBank = [
	'Fredricksen',
	'Charles',
	'Russell',
	'Kevin',
	'Ellie',
	'Dug',
	'Squirrel',
];

let answer = '';
let guessed = [];
let triesLeft = 9;
let wordLength;
let unusedWordArray = wordGuessBank;

//? DECONSTRUCTING BALLOON
const upHouse = [
	'assets/9-tries-left.png',
	'assets/8-tries-left.png',
	'assets/7-tries-left.png',
	'assets/6-tries-left.png',
	'assets/5-tries-left.png',
];

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

// // // check win
// function checkGameWon() {
// 	if ((currentWord = answer)) {
// 		document.getElementById('letters').innerHTML = 'You Won!!!';
// 	}
// }
// // // check lose
// function checkGameLost() {
// 	if (triesLeft === 0) {
// 		document.getElementById('wordGuess').innerHTML =
// 			'The answer was: ' + answer;
// 		document.getElementById('letters').innerHTML = 'You Lost!!!';
// 	}
// }

// reset board with new word

//?EVENT LISTENERS

//function to show hint modal
// and close modal

// Click on a letter
letters.addEventListener('click', (event) => {
	event.preventDefault();

	if (event.target.classList.contains('clicked')) {
		return;
	} else if (event.target.classList.contains('letters')) {
		let letterText = event.target.innerText;
		let clickedBox = event.target;
		compareLetters(answer, letterText, clickedBox);
		event.target.classList.add('clicked');
		// checkGameWon();
		// checkGameLost();
	}
});

function compareLetters(answer, selectedLetter, clickedBox) {
	if (answer.includes(selectedLetter)) {
		const emptyBox = document.querySelectorAll(`.${selectedLetter}`);
		for (let i = 0; i < emptyBox.length; i++) {
			emptyBox[i].innerText = selectedLetter;
			guessed.push('1');
		}
		//need to loop to check each letter and give index
	} else {
		clickedBox.classList.add('incorrect');
		triesLeft--;
		//need to add where image goes to next photo in array
		// update triesleft scoreboard
	}
	return triesLeft;
}
