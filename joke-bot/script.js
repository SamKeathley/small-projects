const button = document.getElementById('button');
const voicesSelect = document.getElementById('voices');

function tellMe(joke) {
  let utterance = new SpeechSynthesisUtterance(joke);
  speechSynthesis.speak(utterance);

  console.log(joke);
}

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

async function getJokes() {
  let joke = '';
  const apiUrl =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
  } catch (error) {
    console.log('Oof', error);
  }
}

// Event Listeners
button.addEventListener('click', getJokes);
speechSynthesis.addEventListener('voiceschanged', getVoices);

getVoices();
