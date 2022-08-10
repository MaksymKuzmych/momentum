const en = document.querySelector('.item_en')
const ru = document.querySelector('.item_ru')
let lang = 'en-US'

en.addEventListener('click', function () {
  lang = 'en-US'
  clock()
  getQuotes()
  forecast(city.value || localStorage.getItem('city') || 'Minsk')
})

ru.addEventListener('click', function () {
  lang = 'ru-RU'
  clock()
  getQuotes()
  forecast(city.value || localStorage.getItem('city') || 'Минск')
})
