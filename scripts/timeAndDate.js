const time = document.querySelector('time')
const date = document.querySelector('date')
const greeting = document.querySelector('.greeting')
const username = document.querySelector('.name')
let timeZone

function clock() {
  navigator.geolocation.getCurrentPosition((position) => {
    const currentDate = new Date(position.timestamp)

    const hours = currentDate.getHours()

    if (hours >= 0 && hours < 6) {
      timeZone = 'night'
    } else if (hours >= 6 && hours < 12) {
      timeZone = 'morning'
    } else if (hours >= 12 && hours < 18) {
      timeZone = 'afternoon'
    } else if (hours >= 18 && hours < 24) {
      timeZone = 'evening'
    }

    greeting.textContent = `Good ${timeZone}`

    time.innerHTML = currentDate.toLocaleTimeString([], {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    date.innerHTML = currentDate.toLocaleDateString([], {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
    })
  })
}

clock()

setInterval(clock, 1000)

function setLocalStorage() {
  localStorage.setItem('username', username.value)
}

function getLocalStorage() {
  if (localStorage.getItem('username')) {
    username.value = localStorage.getItem('username')
  }
}

window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)
