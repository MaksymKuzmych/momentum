const en = document.querySelector('.button_en');
const ru = document.querySelector('.button_ru');

if (state.language === 'en-US') {
  en.classList.add('active');
} else {
  ru.classList.add('active');
}

en.addEventListener('click', function () {
  state.language = 'en-US';
  en.classList.add('active');
  ru.classList.remove('active');
  clock();
  getQuotes();
  forecast(city.value || localStorage.getItem('city') || 'Odessa');
});

ru.addEventListener('click', function () {
  state.language = 'ru-RU';
  ru.classList.add('active');
  en.classList.remove('active');
  clock();
  getQuotes();
  forecast(city.value || localStorage.getItem('city') || 'Одесса');
});
