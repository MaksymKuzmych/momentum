const city = document.querySelector('.city')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weatherError = document.querySelector('.weather-error')

async function forecast(cityForecast) {
  try {
    let url
    if (state.language === 'en-US') {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityForecast}&lang=en&appid=e165e354837dd44181f17b7cfaf1d741`
    }
    if (state.language === 'ru-RU') {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityForecast}&lang=ru&appid=e165e354837dd44181f17b7cfaf1d741`
    }
    const res = await fetch(url)
    if (res.status !== 200) throw new Error('Wrong city')
    const data = await res.json()
    city.value = data.name
    weatherIcon.style.display = 'block'
    weatherError.textContent = ''
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${Math.floor(+data['main']['temp'] - 273)}°C`
    weatherDescription.textContent = data.weather[0].description
    if (state.language === 'en-US') {
      wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
      humidity.textContent = `Humidity: ${data.main.humidity}%`
    }
    if (state.language === 'ru-RU') {
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`
      humidity.textContent = `Влажность: ${data.main.humidity}%`
    }
  } catch (error) {
    weatherIcon.style.display = 'none'
    temperature.textContent = ''
    weatherDescription.textContent = ''
    wind.textContent = ''
    humidity.textContent = ''
    if (state.language === 'en-US') {
      weatherError.textContent = `Error! City not found for ${city.value}!`
    }
    if (state.language === 'ru-RU') {
      weatherError.textContent = `Ошибка! Город ${city.value} не найден!`
    }
  }
}

forecast(localStorage.getItem('city') || 'Minsk')

city.addEventListener('change', () => {
  forecast(city.value)
})

function setLocalStorage() {
  localStorage.setItem('city', city.value)
}

function getLocalStorage() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
  }
}

window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)
