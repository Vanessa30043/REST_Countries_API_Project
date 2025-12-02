// Get the country name from the URL
const selectedCountry = new URLSearchParams(window.location.search).get('name')

// Get all the elements we want to fill with data
const flagImg = document.querySelector('.country-details img')
const countryTitle = document.querySelector('.country-details h1')
const nativeNameEl = document.querySelector('.native-name')
const populationEl = document.querySelector('.population')
const regionEl = document.querySelector('.region')
const subRegionEl = document.querySelector('.sub-region')
const capitalEl = document.querySelector('.capital')
const tldEl = document.querySelector('.top-level-domain')
const currenciesEl = document.querySelector('.currencies')
const languagesEl = document.querySelector('.languages')
const bordersEl = document.querySelector('.border-countries')