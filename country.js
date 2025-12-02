const countryName = new URLSearchParams(window.location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')

if (!countryName) {
  console.error('No "name" query parameter found. Example: country.html?name=Iceland')
} else {
  const apiInner = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiInner)}`

  fetch(proxyUrl)
    .then((res) => {
      if (!res.ok) throw new Error(`Network response not ok (${res.status})`)
      return res.json()
    })
    .then(([country]) => {
      if (!country) throw new Error('No country data returned')

      flagImage.src = country.flags?.svg || country.flags?.png || ''
      flagImage.alt = `Flag of ${country.name?.common || countryName}`

      countryNameH1.innerText = country.name?.common || countryName
      population.innerText =
        typeof country.population === 'number' ? country.population.toLocaleString('en-US') : '—'
      region.innerText = country.region || '—'
      topLevelDomain.innerText = Array.isArray(country.tld) ? country.tld.join(', ') : '—'

      capital.innerText = Array.isArray(country.capital) && country.capital.length ? country.capital[0] : '—'
      subRegion.innerText = country.subregion || '—'

      if (country.name?.nativeName) {
        nativeName.innerText = Object.values(country.name.nativeName)[0]?.common || country.name.common || '—'
      } else {
        nativeName.innerText = country.name?.common || '—'
      }

      if (country.currencies) {
        currencies.innerText = Object.values(country.currencies).map((c) => c.name).join(', ')
      } else {
        currencies.innerText = '—'
      }

      if (country.languages) {
        languages.innerText = Object.values(country.languages).join(', ')
      } else {
        languages.innerText = '—'
      }

      // clear previous border links (if any)
      const existing = borderCountries.querySelectorAll('a, span')
      existing.forEach((n) => n.remove())

      if (Array.isArray(country.borders) && country.borders.length) {
        country.borders.forEach((borderCode) => {
          const alphaUrl = `https://restcountries.com/v3.1/alpha/${encodeURIComponent(borderCode)}?fields=name`
          const alphaProxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(alphaUrl)}`

          fetch(alphaProxy)
            .then((r) => {
              if (!r.ok) throw new Error(`Failed to fetch border (${borderCode})`)
              return r.json()
            })
            .then((arr) => {
              const bc = Array.isArray(arr) && arr.length ? arr[0] : arr
              if (!bc || !bc.name) return
              const borderCountryTag = document.createElement('a')
              borderCountryTag.innerText = bc.name.common
              borderCountryTag.href = `country.html?name=${encodeURIComponent(bc.name.common)}`
              borderCountries.append(borderCountryTag)
            })
            .catch((err) => {
              console.warn('Border fetch error for', borderCode, err)
            })
        })
      } else {
        const none = document.createElement('span')
        none.innerText = 'None'
        borderCountries.append(none)
      }
    })
    .catch((err) => {
      console.error('Country fetch failed:', err)
      countryNameH1.innerText = 'Country data unavailable'
    })
}
