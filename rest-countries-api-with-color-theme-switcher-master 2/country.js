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


// Fetch the main country info
fetch('https://restcountries.com/v3.1/name/' + selectedCountry + '?fullText=true')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    const country = data[0] // the first result is our country
    // Next commits will fill this country’s info into the page
  })
  .catch(function(err) {
    console.log('Error fetching country data:', err)
  })

  // Fill the main info
    flagImg.src = country.flags.svg
    countryTitle.innerText = country.name.common
    populationEl.innerText = country.population.toLocaleString()
    regionEl.innerText = country.region
    tldEl.innerText = country.tld ? country.tld.join(', ') : 'N/A'
    capitalEl.innerText = country.capital ? country.capital[0] : 'No capital'
    subRegionEl.innerText = country.subregion ? country.subregion : 'No subregion'


    // Fill native name
    if (country.name.nativeName) {
      const nativeNames = Object.values(country.name.nativeName)
      nativeNameEl.innerText = nativeNames[0].common
    } else {
      nativeNameEl.innerText = country.name.common
    }

    