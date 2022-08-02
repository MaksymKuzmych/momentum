const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
let slideNumber

function randomNumber() {
  let number = Math.floor(Math.random() * 21)
  if (number === 0) number = 1
  if (number < 10) number = `0${number}`
  return number
}

slideNumber = randomNumber()

function setBg() {
  const img = new Image()
  img.src = `https://raw.githubusercontent.com/MaksymKuzmych/stage1-tasks/assets/images/${timeZone}/${slideNumber}.jpg`
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`
  }
}

setBg()

function sliderNext() {
  slideNumber++
  if (+slideNumber < 10) slideNumber = `0${slideNumber}`
  if (+slideNumber > 20) slideNumber = '01'
  setBg()
}

function sliderPrev() {
  slideNumber--
  if (+slideNumber < 10) slideNumber = `0${slideNumber}`
  if (+slideNumber < 1) slideNumber = '20'
  setBg()
}

slideNext.addEventListener('click', sliderNext)
slidePrev.addEventListener('click', sliderPrev)
