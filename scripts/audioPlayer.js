import playList from '../assets/data/playList.js'

const play = document.querySelector('.play')
const playPrev = document.querySelector('.play-prev')
const playNext = document.querySelector('.play-next')
const playCatalog = document.querySelector('.play-list')
const audio = new Audio()
let isPlay = false
let playNum = 0

for (let i = 0; i < playList.length; i++) {
  playCatalog.insertAdjacentHTML('beforeend', `<li class='play-item'>${playList[i].title}</li>`)
}

const itemsCatalog = document.querySelectorAll('.play-item')

function addItemActive() {
  itemsCatalog.forEach((el) => {
    el.classList.remove('item-active')
  })
  itemsCatalog[playNum].classList.add('item-active')
}

function playAudio() {
  play.classList.toggle('pause')
  addItemActive()
  if (!isPlay) {
    isPlay = true
    audio.src = playList[playNum].src
    audio.currentTime = 0
    audio.play()
  } else {
    isPlay = false
    audio.pause()
  }
}

function nextAudio() {
  isPlay = true
  play.classList.add('pause')
  if (playNum < playList.length - 1) {
    playNum++
  } else {
    playNum = 0
  }
  addItemActive()
  audio.src = playList[playNum].src
  audio.currentTime = 0
  audio.play()
}

function prevAudio() {
  isPlay = true
  play.classList.add('pause')
  if (playNum > 0) {
    playNum--
  } else {
    playNum = playList.length - 1
  }
  addItemActive()
  audio.src = playList[playNum].src
  audio.currentTime = 0
  audio.play()
}

play.addEventListener('click', playAudio)
playNext.addEventListener('click', nextAudio)
playPrev.addEventListener('click', prevAudio)

itemsCatalog.forEach((el, idx) => {
  el.addEventListener('click', function () {
    playNum = idx
    isPlay = true
    play.classList.add('pause')
    addItemActive()
    audio.src = playList[idx].src
    audio.currentTime = 0
    audio.play()
  })
})
