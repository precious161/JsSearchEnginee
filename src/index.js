function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let apiKey = "your_api_key_here"; // Replace with your actual WeatherAPI key

function showWeather(response) {
  let city = response.data.location.name;
  let temperature = response.data.current.temp_c;

  let h1 = document.querySelector("#weather-result");
  h1.innerHTML = `It is ${temperature}°C in ${city}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`;

  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
