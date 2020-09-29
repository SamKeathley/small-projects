const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// All of the game words
const words = [
  'skyrim',
  'dragons',
  'necessary',
  'sneak',
  'high-elves',
  'dude',
  'disgusting',
  'programming',
  'immunity',
  'arrival',
  'curse',
  'spooky',
  'halloween',
  'nightmare',
  'cat',
  'dog',
  'raccoon',
  'axolotl',
  'superficial',
  'cake',
];

// Init word, score, and time
let randomWord;

let score = 0;

let time = 10;

// Focus on text on start
text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time's up!</h1>
    <p>Your final score is ${score}</p>
    <button onClick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event Listeners
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    time += 5;
    updateTime();
  }
});
