document.addEventListener('DOMContentLoaded', function () {

    // ----------------------------
    // GET ELEMENTS FROM HTML
    // ----------------------------
    //  (inputs, buttons, spans, etc.)
    let container = document.getElementById('container');      // main container div
    let container_2 = document.getElementById('container_2');  // extra info container
    let extraInfoButton = document.getElementById('extraInfoButton'); // "More info" button
    let searchButton = document.getElementById('searchButton');       // search button

    // Elements for showing main country info
    let country_name = document.getElementById('countryName'); // span for country name
    let officialName = document.getElementById('officialName');
    let capital = document.getElementById('capital');
    let population = document.getElementById('population');
    let continent = document.getElementById('continent');
    let currency = document.getElementById('currency');
    let flag = document.getElementById('flag'); // img element for the flag

    // Elements for showing extra info when requested
    let car = document.getElementById('car');
    let subregion = document.getElementById('subregion');
    let startOfWeek = document.getElementById('startOfWeek');
    let language = document.getElementById('language');
    let info_list = document.getElementById('info');
    let country_input = document.getElementById('countryInput'); // input field

    // Store the last searched country so we can fetch extra info
    let storeCountryName = '';

    // ----------------------------
    // HELPER FUNCTION
    // ----------------------------
    function showAlert(msg) {
        // This function just shows a pop-up message for the user
        // Makes it easier to reuse instead of calling alert() everywhere
        alert(msg);
    }

    // ----------------------------
    // FUNCTION TO FETCH MAIN COUNTRY DATA
    // ----------------------------
    function fetchData() {
        // Get the country name typed by the user and remove extra spaces
        let countryName = country_input.value.trim();

        // Check if user typed something
        if (countryName === "") {
            showAlert('Enter a country name ....'); // show message if input is empty
            return;
        }

        //  API URL using the country name
        let url = `https://restcountries.com/v3.1/name/${countryName}`;

        // Make the fetch request
        fetch(url)
            .then(function (res) {
                // Check if the response is OK (status 200)
                if (!res.ok) {
                    throw new Error('Network response was not ok: ' + res.status);
                }
                // Convert response to JSON
                return res.json();
            })
            .then(function (data) {
                // data is an array, take the first country object
                let country = data[0];

                // ----------------------------
                // SHOW THE FLAG
                // ----------------------------
                if (flag) {
                    flag.src = (country.flags && (country.flags.png || country.flags.svg)) ? (country.flags.png || country.flags.svg) : '';
                    flag.classList.remove('inactive');
                    flag.classList.add('active');
                }

                // ----------------------------
                // FORMAT NUMBERS (like population)
                // ----------------------------
                let number_formatter = new Intl.NumberFormat('en-US');

                // ----------------------------
                // POPULATE THE MAIN INFO ELEMENTS
                // ----------------------------
                if (country_name) country_name.innerHTML = country.name && country.name.common ? country.name.common : '';
                if (officialName) officialName.innerHTML = '<span class="bold">Official Name: </span>' + (country.name && country.name.official ? country.name.official : '');
                if (capital) capital.innerHTML = '<span class="bold">Capital: </span>' + (country.capital ? country.capital.join(', ') : '');
                if (population) population.innerHTML = '<span class="bold">Population: </span>' + (country.population ? number_formatter.format(country.population) : '');
                if (continent) continent.innerHTML = '<span class="bold">Continent: </span>' + (country.region ? country.region : '');

                if (currency) {
                    // currencies is an object; show code and name
                    if (country.currencies) {
                        let codes = Object.keys(country.currencies);
                        let currencyStrings = [];
                        for (let i = 0; i < codes.length; i++) {
                            let code = codes[i];
                            let cur = country.currencies[code];
                            currencyStrings.push(code + ' (' + (cur && cur.name ? cur.name : '') + ')');
                        }
                        currency.innerHTML = '<span class="bold">Currency: </span>' + currencyStrings.join(', ');
                    } else {
                        currency.innerHTML = '<span class="bold">Currency: </span>-';
                    }
                }

                // Make main info visible
                if (info_list) {
                    info_list.classList.remove('inactive');
                    info_list.classList.add('active');
                }

                // Store country name for extra info button
                storeCountryName = countryName;
                country_input.value = ''; // clear input after search

                // Show extra info button
                if (extraInfoButton) {
                    extraInfoButton.classList.remove('inactive');
                    extraInfoButton.classList.add('active');
                }

                // Hide search button temporarily
                if (searchButton) {
                    searchButton.classList.remove('active');
                    searchButton.classList.add('inactive');
                }

            })
            .catch(function (err) {
                console.error('Fetch error:', err);
                showAlert('Invalid country name or network error. Check console for details.');
            });
    }

    // ----------------------------
    // FUNCTION TO FETCH EXTRA COUNTRY DATA
    // ----------------------------
    function fetchMoreData() {
        let countryName = storeCountryName;
        if (!countryName) return;

        let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

        fetch(url)
            .then(function (res) {
                if (!res.ok) {
                    throw new Error('Network response was not ok: ' + res.status);
                }
                return res.json();
            })
            .then(function (data) {
                let country = data[0];
                if (!country) return;

                if (car) car.innerHTML = '<span class="bold">Car: </span>' + (country.car && country.car.side ? country.car.side : '');
                if (subregion) subregion.innerHTML = '<span class="bold">Subregion: </span>' + (country.subregion ? country.subregion : '');
                if (startOfWeek) startOfWeek.innerHTML = '<span class="bold">Start of Week: </span>' + (country.startOfWeek ? country.startOfWeek : '');
                if (language) language.innerHTML = '<span class="bold">Language: </span>' + (country.languages ? Object.values(country.languages).join(', ') : '');
            })
            .catch(function (err) {
                console.error('Fetch more error:', err);
                showAlert('Could not load extra info. Check console.');
            });
    }

    // ----------------------------
    // EVENT LISTENERS
    // ----------------------------
    if (searchButton) {
        searchButton.addEventListener('click', fetchData); // click search to fetch main data
    }

    if (extraInfoButton) {
        extraInfoButton.addEventListener('click', function () {
            // show extra info container
            if (container_2) {
                container_2.classList.remove('inactive');
                container_2.classList.add('active');
            }
            // fetch and show extra info
            fetchMoreData();

            // hide extra info button after click
            extraInfoButton.classList.remove('active');
            extraInfoButton.classList.add('inactive');
        });
    }
// ----------------------------
// THEME SWITCHER
// ----------------------------

// Get the theme toggle button
let themeToggle = document.getElementById('themeToggle');

// Listen for clicks on the button
themeToggle.addEventListener('click', function() {
    // If current theme is light, switch to dark
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode'; // Change button text
    } 
    // If current theme is dark, switch to light
    else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggle.textContent = 'Dark Mode';
    }
});

    
});
