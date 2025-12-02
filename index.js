// Get HTML elements
const countriesContainer = document.querySelector(".countries-container");
const regionFilter = document.getElementById("regionFilter");
const searchInput = document.getElementById("searchInput");
const themeButton = document.getElementById("theme-toggle"); // fixed ID

// Store all country data
let allCountriesData = [];

// Fetch all countries from the API (only necessary fields)
fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
  .then((res) => res.json())
  .then((data) => {
    allCountriesData = data; // Save for search/filter
    showCountries(allCountriesData);
  })
  .catch((error) => console.log("Error fetching countries:", error));

// Function to show countries on the page
function showCountries(list) {
  countriesContainer.innerHTML = ""; // Clear previous cards

  list.forEach((country) => {
    const card = document.createElement("a");
    card.classList.add("country-card");
    card.href = `country.html?name=${country.name.common}`;

    card.innerHTML = `
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
      <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital?.[0] ?? "No capital"}</p>
      </div>
    `;

    countriesContainer.append(card);
  });
}

// Search functionality
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filtered = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchText)
  );
  showCountries(filtered);
});

// Region filter functionality
regionFilter.addEventListener("change", () => {
  const region = regionFilter.value;
  const filtered = allCountriesData.filter(
    (country) => region === "" || country.region === region
  );
  showCountries(filtered);
});

// Dark mode toggle
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");


});
