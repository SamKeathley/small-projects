const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const quoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

async function getQuote() {
  loading();
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
  try {
    const res = await fetch(proxyUrl + apiUrl);
    const data = await res.json();
    // Add 'Unknown' author if author field is blank
    if (data.quoteAuthor === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.quoteAuthor;
    }
    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-text');
    }
    quoteText.innerText = data.quoteText;
    complete();
  } catch (error) {
    getQuote();
  }
}

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
quoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();
