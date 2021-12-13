//Each letter in alphabet

//? DOM ELEMENTS
const hintBtn = document.querySelector('.hint');
const resetBtn = document.querySelector('.reset');
const quitBtn = document.querySelector('.quit');

const letters = document.querySelector('.gameContainer');
const ballonImage = document.querySelector('.balloonImage');
const triesLeftBoard = document.querySelector('.triesLeftBoard');
const wordGuess = document.querySelector('.wordGuess');

const winModal = document.getElementById('winGameModal');
const loseModal = document.getElementById('loseGameModal');
const playAgainBtn = document.querySelector('.playAgainBtn');

//?VARIABLES
let wordGuessBank = [
	'FREDRICKSEN',
	'CHARLES',
	'RUSSEL',
	'KEVIN',
	'ELLIE',
	'DUG',
	'SQUIRRIEL',
	'BALLOON',
	'ADVENTURE',
	'SCRAPBOOK',
];

let answer; // current word that has been selected
let guessed = []; // add element to array with correct letter to see if word has "won"
let wordLength; // need to compare with guessed length and wordLength
let unusedWordArray = wordGuessBank; // use all words and take word off that is used from bank
let triesLeft = 9;

//? DECONSTRUCTING BALLOON
const upHouse = [
	'assets/9-tries-left.png',
	'assets/8-tries-left.png',
	'assets/7-tries-left.png',
	'assets/6-tries-left.png',
	'assets/5-tries-left.png',
	'assets/4-tries-left.png',
	'assets/3-tries-left.png',
	'assets/2-tries-left.png',
	'assets/1-tries-left.png',
	'assets/just the house.png',
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

function dashes(word) {
	let array = word.split('');
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

function compareLetters(word, selectedLetter, clickedBox) {
	if (word.includes(selectedLetter)) {
		const emptyBox = document.querySelectorAll(`.${selectedLetter}`);
		for (let i = 0; i < emptyBox.length; i++) {
			emptyBox[i].innerText = selectedLetter;
			guessed.push('1');
		}
		//need to loop to check each letter and give index
	} else {
		clickedBox.classList.add('incorrect');
		triesLeft--;
		let levels = 9 - triesLeft;
		let image = upHouse[levels];
		ballonImage.setAttribute('src', image);
		triesLeftBoard.innerText = `Chances Left: 0${triesLeft}`;
	}
	return triesLeft;
}

letters.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.classList.contains('clicked')) {
		return;
	} else if (event.target.classList.contains('letters')) {
		let selectedLetter = event.target.innerText;
		let clickedBox = event.target;
		compareLetters(answer, selectedLetter, clickedBox);
		event.target.classList.add('clicked');
		checkGameWon();
	}
});

function checkGameWon() {
	console.log(guessed);
	if (guessed.length === answer.length) {
		winGameModal();
		console.log('testing won');
	} else if (triesLeft === 0) {
		console.log('LOSE');
		loseGameModal();
	}
}

const winGameModal = () => {
	winModal.style.display = 'block';
};
const loseGameModal = () => {
	loseModal.style.display = 'block';
};

// playAgainBtn.addEventListener('click', location.reload());

// function resetGame() {
// 	let clickedLetters = document.querySelectorAll('.clicked');
// 	for (let i = 0; i < clickedLetters.length; i++) {
// 		clickedLetters[i].classList.remove('clicked');
// 	}
// 	let wrongLetters = document.querySelectorAll('.incorrect');
// 	for (let i = 0; i < wrongLetters.length; i++) {
// 		wrongLetters[i].classList.remove('incorrect');
// 	}

// 	guessed = [];
// 	upHouse.setAttribute('src', '');
// 	triesLeft = 9;
// 	triesLeftBoard.innerText = `Chances Left: 0${triesLeft}`;

// 	randomWord();
// 	dashes(currentWord);
// }
