const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
let slideNumber
let source = 'flickr'

function randomNumber() {
  let number = Math.floor(Math.random() * 21)
  if (number === 0) number = 1
  if (number < 10) number = `0${number}`
  return number
}

slideNumber = randomNumber()

function setBg() {
  const img = new Image()
  if (source === 'github') {
    img.src = `https://raw.githubusercontent.com/MaksymKuzmych/stage1-tasks/assets/images/${timeZone}/${slideNumber}.jpg`
  } else if (source === 'unsplash') {
    url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=fC1bD5L2B0uup3ul7rTnAwul4R1Iap7DmjxvVDw_70o'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        img.src = data.urls.regular
      })
  } else if (source === 'flickr') {
    let slide = Math.floor(Math.random() * 100)
    url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f25d8cf458652fe8dd481f59c9295cab&tags=nature&extras=url_l&format=json&nojsoncallback=1'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        img.src = data.photos.photo[slide].url_l
      })
  }

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
