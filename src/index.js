function displayTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-output");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "be22fb4bc4c7fb43oa29a90de3d443t3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");

  searchCity(searchInput.value);
}

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", handleSearchSubmit);

searchCity("Sintra");

// Show the curruent time (Week day + hour & minutes)

let now = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];
let minutes = now.getMinutes().toString().padStart(2, "0");
let hours = now.getHours().toString().padStart(2, "0");

let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
