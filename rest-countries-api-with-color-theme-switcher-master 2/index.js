// Get HTML elements
var countriesContainer = document.querySelector(".countries-container");
var regionFilter = document.getElementById("regionFilter");
var searchInput = document.getElementById("searchInput");
var themeButton = document.getElementById("themeToggle");

// Store all country data
var allCountriesData = [];

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

  