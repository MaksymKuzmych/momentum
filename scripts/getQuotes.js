const changeQuote = document.querySelector('.change-quote')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

function randomQuote() {
  return Math.floor(Math.random() * 102)
}

async function getQuotes() {
  const res = await fetch('./assets/data/quotes.json')
  const data = await res.json()
  let quoteNumber = randomQuote()
  quote.textContent = `\"${data[quoteNumber]['text']}\"`
  author.textContent = data[quoteNumber]['author']
}

getQuotes()

changeQuote.addEventListener('click', getQuotes)
