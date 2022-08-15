const playerCheckbox = document.querySelector('#player')
const player = document.querySelector('.player')
const weatherCheckbox = document.querySelector('#weather')
const weather = document.querySelector('.weather')
const timeCheckbox = document.querySelector('#time')
const dateCheckbox = document.querySelector('#date')
const greetingsCheckbox = document.querySelector('#greetings')
const greetings = document.querySelector('.greeting-container')
const quotesCheckbox = document.querySelector('#quotes')
const quotes = document.querySelector('.quote-wrapper')
const toDoCheckbox = document.querySelector('#toDo')
const toDo = document.querySelector('.toDo-list')
const cancel = document.querySelector('.cancel-menu')
const settings = document.querySelector('.settings-img')
const settingsMenu = document.querySelector('.settings-menu')
const buttonGithub = document.querySelector('.button_github')
const buttonUnsplash = document.querySelector('.button_unsplash')
const buttonFlickr = document.querySelector('.button_flickr')
const settingsInput = document.querySelector('.slider-tag')
let state = {
  language: 'en-US',
  photoSource: 'github',
  blocks: ['player', 'weather', 'time', 'date', 'greetings', 'quotes', 'toDo'],
}

function stateSetLocalStorage() {
  localStorage.setItem('state', JSON.stringify(state))
}

function stateGetLocalStorage() {
  if (localStorage.getItem('state')) {
    state = JSON.parse(localStorage.getItem('state'))
  }
}

window.addEventListener('DOMContentLoaded', stateGetLocalStorage)
window.addEventListener('beforeunload', stateSetLocalStorage)

if (state.photoSource === 'github') {
  buttonGithub.classList.add('active')
} else if (state.photoSource === 'unsplash') {
  buttonUnsplash.classList.add('active')
} else {
  buttonFlickr.classList.add('active')
}

settings.addEventListener('click', () => {
  settingsMenu.classList.remove('hide')
  settingsMenu.classList.add('show')
  settingsMenu.style.zIndex = 3
})

cancel.addEventListener('click', () => {
  settingsMenu.classList.remove('show')
  settingsMenu.classList.add('hide')
  settingsMenu.style.zIndex = -1
})

function isChecked(check, el) {
  console.log(check.id)
  if (check.checked) {
    el.classList.remove('hide')
    el.classList.add('show')
    state.blocks.push(check.id)
    console.log(state.blocks)
  } else {
    el.classList.remove('show')
    el.classList.add('hide')
    state.blocks = state.blocks.filter((elem) => elem !== check.id)
    console.log(state.blocks)
  }
}

playerCheckbox.addEventListener('change', function () {
  isChecked(playerCheckbox, player)
})
weatherCheckbox.addEventListener('change', function () {
  isChecked(weatherCheckbox, weather)
})
timeCheckbox.addEventListener('change', function () {
  isChecked(timeCheckbox, time)
})
dateCheckbox.addEventListener('change', function () {
  isChecked(dateCheckbox, date)
})
greetingsCheckbox.addEventListener('change', function () {
  isChecked(greetingsCheckbox, greetings)
})
quotesCheckbox.addEventListener('change', function () {
  isChecked(quotesCheckbox, quotes)
})
toDoCheckbox.addEventListener('change', function () {
  isChecked(toDoCheckbox, toDo)
})

buttonGithub.addEventListener('click', () => {
  state.photoSource = 'github'
  buttonGithub.classList.add('active')
  buttonUnsplash.classList.remove('active')
  buttonFlickr.classList.remove('active')
  setBg()
})
buttonUnsplash.addEventListener('click', () => {
  state.photoSource = 'unsplash'
  buttonUnsplash.classList.add('active')
  buttonGithub.classList.remove('active')
  buttonFlickr.classList.remove('active')
  setBg()
})
buttonFlickr.addEventListener('click', () => {
  state.photoSource = 'flickr'
  buttonFlickr.classList.add('active')
  buttonGithub.classList.remove('active')
  buttonUnsplash.classList.remove('active')
  setBg()
})

settingsInput.addEventListener('change', () => {
  sliderTag = settingsInput.value
  setBg()
})
