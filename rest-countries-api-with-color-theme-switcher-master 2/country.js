const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => res.json())
.then((res)=> res.json())
.then((country) => {
    console.log(object.values(country.name.nativeName)[0].common)
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common

    if( country.name.nativeName){
        console.log(object.values(country.name.nativeName)[0].common)
    }
})

