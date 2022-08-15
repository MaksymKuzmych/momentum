const changeQuote = document.querySelector('.change-quote')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

function randomQuote() {
  return Math.floor(Math.random() * 102)
}

async function getQuotes() {
  let res
  if (state.language === 'en-US') {
    res = await fetch('./assets/data/quotesEn.json')
  }
  if (state.language === 'ru-RU') {
    res = await fetch('./assets/data/quotesRu.json')
  }
  const data = await res.json()
  let quoteNumber = randomQuote()
  quote.textContent = `\"${data[quoteNumber]['text']}\"`
  author.textContent = data[quoteNumber]['author']
}

getQuotes()

changeQuote.addEventListener('click', getQuotes)
