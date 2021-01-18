const inputContainer = document.getElementById('input-container');
const coundownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

// Set date input min with todays date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);
