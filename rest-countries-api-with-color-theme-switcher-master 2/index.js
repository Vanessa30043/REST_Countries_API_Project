// Get HTML elements
const countriesContainer = document.querySelector(".countries-container");
const regionFilter = document.getElementById("regionFilter");
const  searchInput = document.getElementById("searchInput");
const themeButton = document.getElementById("themeToggle");

// Store all country data
let allCountriesData = [];

//selected DOM elements  and country array//

// Fetch all countries from the API
fetch("https://restcountries.com/v3.1/all")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    allCountriesData = data; // Save for search/filter
    showCountries(allCountriesData);
  })
  .catch(function(error) {
    console.log("Error fetching countries:", error);
  });


 // Function to show countries on the page
function showCountries(list) {
  countriesContainer.innerHTML = ""; // Clear previous cards

  for (let i = 0; i < list.length; i++) {
    let country = list[i];

    let card = document.createElement("a");
    card.classList.add("country-card");
    card.href = "country.html?name=" + country.name.common; // link to details

    // Add country content
    card.innerHTML =
      '<img src="' +
      country.flags.svg +
      '" alt="Flag of ' +
      country.name.common +
      '" />' +
      '<div class="card-text">' +
      "<h3 class='card-title'>" +
      country.name.common +
      "</h3>" +
      "<p><b>Population:</b> " +
      country.population.toLocaleString() +
      "</p>" +
      "<p><b>Region:</b> " +
      country.region +
      "</p>" +
      "<p><b>Capital:</b> " +
      (country.capital ? country.capital[0] : "No capital") +
      "</p>" +
      "</div>";

    countriesContainer.appendChild(card);
  }
}

// Search functionality
searchInput.addEventListener("input", function() {
  let searchText = searchInput.value.toLowerCase();
  let filtered = [];

  for (let i = 0; i < allCountriesData.length; i++) {
    let country = allCountriesData[i];
    if (country.name.common.toLowerCase().indexOf(searchText) !== -1) {
      filtered.push(country);
    }
  }

  showCountries(filtered);
});


