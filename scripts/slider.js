const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let slideNumber = null;
let sliderTag = 'nature';

function randomNumber() {
  let number = Math.floor(Math.random() * 21);
  if (number === 0) number = 1;
  if (number < 10) number = `0${number}`;
  return number;
}

slideNumber = randomNumber();

function setBg() {
  const img = new Image();

  if (state.photoSource === 'github') {
    settingsInput.disabled = true;
    settingsInput.value = '';
    settingsInput.placeholder = 'Disabled for GitHub';
    img.src = `https://raw.githubusercontent.com/MaksymKuzmych/stage1-tasks/assets/images/${timeZone}/${slideNumber}.jpg`;
  }

  if (state.photoSource === 'unsplash') {
    settingsInput.disabled = false;
    settingsInput.placeholder = 'Nature';

    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${sliderTag}&client_id=fC1bD5L2B0uup3ul7rTnAwul4R1Iap7DmjxvVDw_70o`;

    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          settingsInput.value = '';
          settingsInput.placeholder = 'Wrong tag, try again';
        } else {
          return res.json();
        }
      })
      .then((data) => {
        img.src = data.urls.regular;
      });
  }

  if (state.photoSource === 'flickr') {
    settingsInput.disabled = false;
    settingsInput.placeholder = 'Nature';

    const slide = Math.floor(Math.random() * 100);
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f25d8cf458652fe8dd481f59c9295cab&tags=${sliderTag}&extras=url_l&format=json&nojsoncallback=1`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.photos.photo[slide] === undefined) {
          settingsInput.value = '';
          settingsInput.placeholder = 'Wrong tag, try again';
        } else {
          img.src = data.photos.photo[slide].url_l;
        }
      });
  }

  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}

setBg();

function sliderNext() {
  slideNumber++;
  if (+slideNumber < 10) slideNumber = `0${slideNumber}`;
  if (+slideNumber > 20) slideNumber = '01';
  setBg();
}
function sliderPrev() {
  slideNumber--;
  if (+slideNumber < 10) slideNumber = `0${slideNumber}`;
  if (+slideNumber < 1) slideNumber = '20';
  setBg();
}

slideNext.addEventListener('click', sliderNext);
slidePrev.addEventListener('click', sliderPrev);
