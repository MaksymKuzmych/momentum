const playerCheckbox = document.querySelector('#player');
const player = document.querySelector('.player');
const weatherCheckbox = document.querySelector('#weather');
const weather = document.querySelector('.weather');
const timeCheckbox = document.querySelector('#time');
const time = document.querySelector('.time');
const dateCheckbox = document.querySelector('#date');
const date = document.querySelector('.date');
const greetingsCheckbox = document.querySelector('#greetings');
const greetings = document.querySelector('.greeting-container');
const quotesCheckbox = document.querySelector('#quotes');
const quotes = document.querySelector('.quote-wrapper');
const todoCheckbox = document.querySelector('#todo');
const todo = document.querySelector('.todo-list');
const cancel = document.querySelector('.cancel-menu');
const settings = document.querySelector('.settings-img');
const settingsMenu = document.querySelector('.settings-menu');
const buttonGithub = document.querySelector('.button_github');
const buttonUnsplash = document.querySelector('.button_unsplash');
const buttonFlickr = document.querySelector('.button_flickr');
const settingsInput = document.querySelector('.slider-tag');

let state = null;

function stateSetLocalStorage() {
  localStorage.setItem('state', JSON.stringify(state));
}

function stateGetLocalStorage() {
  if (localStorage.getItem('state')) {
    state = JSON.parse(localStorage.getItem('state'));
  } else {
    state = {
      language: 'en-US',
      photoSource: 'github',
      blocks: ['player', 'weather', 'time', 'date', 'greetings', 'quotes', 'todo'],
    };
  }
}

stateGetLocalStorage();
window.addEventListener('beforeunload', stateSetLocalStorage);

if (state.photoSource === 'github') {
  buttonGithub.classList.add('active');
} else if (state.photoSource === 'unsplash') {
  buttonUnsplash.classList.add('active');
} else {
  buttonFlickr.classList.add('active');
}

settings.addEventListener('click', () => {
  settingsMenu.classList.remove('hide');
  settingsMenu.classList.add('show');
  settingsMenu.style.zIndex = 3;
});

cancel.addEventListener('click', () => {
  settingsMenu.classList.remove('show');
  settingsMenu.classList.add('hide');
  settingsMenu.style.zIndex = -1;
});

function checkBlock(checkbox, name) {
  if (state.blocks.includes(name)) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

checkBlock(playerCheckbox, 'player');
checkBlock(weatherCheckbox, 'weather');
checkBlock(timeCheckbox, 'time');
checkBlock(dateCheckbox, 'date');
checkBlock(greetingsCheckbox, 'greetings');
checkBlock(quotesCheckbox, 'quotes');
checkBlock(todoCheckbox, 'todo');

function isChecked(check, el) {
  if (check.checked) {
    el.classList.remove('hide');
    el.classList.add('show');
    el.style.zIndex = 1;
    state.blocks.push(check.id);
  } else {
    el.classList.remove('show');
    el.classList.add('hide');
    el.style.zIndex = -1;
    state.blocks = state.blocks.filter((elem) => elem !== check.id);
  }
}

isChecked(playerCheckbox, player);
isChecked(weatherCheckbox, weather);
isChecked(timeCheckbox, time);
isChecked(dateCheckbox, date);
isChecked(greetingsCheckbox, greetings);
isChecked(quotesCheckbox, quotes);
isChecked(todoCheckbox, todo);

playerCheckbox.addEventListener('change', function () {
  isChecked(playerCheckbox, player);
});
weatherCheckbox.addEventListener('change', function () {
  isChecked(weatherCheckbox, weather);
});
timeCheckbox.addEventListener('change', function () {
  isChecked(timeCheckbox, time);
});
dateCheckbox.addEventListener('change', function () {
  isChecked(dateCheckbox, date);
});
greetingsCheckbox.addEventListener('change', function () {
  isChecked(greetingsCheckbox, greetings);
});
quotesCheckbox.addEventListener('change', function () {
  isChecked(quotesCheckbox, quotes);
});
todoCheckbox.addEventListener('change', function () {
  isChecked(todoCheckbox, todo);
});

buttonGithub.addEventListener('click', () => {
  state.photoSource = 'github';
  buttonGithub.classList.add('active');
  buttonUnsplash.classList.remove('active');
  buttonFlickr.classList.remove('active');
  setBg();
});

buttonUnsplash.addEventListener('click', () => {
  state.photoSource = 'unsplash';
  buttonUnsplash.classList.add('active');
  buttonGithub.classList.remove('active');
  buttonFlickr.classList.remove('active');
  setBg();
});

buttonFlickr.addEventListener('click', () => {
  state.photoSource = 'flickr';
  buttonFlickr.classList.add('active');
  buttonGithub.classList.remove('active');
  buttonUnsplash.classList.remove('active');
  setBg();
});

settingsInput.addEventListener('change', () => {
  sliderTag = settingsInput.value;
  setBg();
});
