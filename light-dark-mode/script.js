const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color) {
  image1.src = `img/undraw_web_development_${color}.svg`;
  image2.src = `img/undraw_pair_programming_${color}.svg`;
  image3.src = `img/undraw_modern_art_${color}.svg`;
}

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event listeners
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}
