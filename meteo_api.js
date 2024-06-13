document.querySelector("#submit").addEventListener("click", searchCity)

function searchCity(e) {
  e.preventDefault();
  let city = document.querySelector("#city");
  console.log(city.value);
  callApi(city.value);
  city.value = "";
}

function callApi(city) {
  let url = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
  console.log(url);
  fetch(url)
  .then(response => { return response.json(); })
  //.then(data => { printToConsole(data) })
  .then(data => { printToScreen(data) });
}

function printToScreen(data) {
  let weatherDataElement = document.getElementById("weather-data");
 weatherDataElement.innerHTML = "";
      console.log(data.forecastTimestamps[0].forecastTimeUtc);

        let forecastTimeUtc = data.forecastTimestamps[0].forecastTimeUtc;
        let temperature = data.forecastTimestamps[0].feelsLikeTemperature;
        let humidity = data.forecastTimestamps[0].relativeHumidity;
        let condition = data.forecastTimestamps[0].conditionCode;

        weatherDataElement.innerHTML += `<p>Laikas: ${forecastTimeUtc}</p>`;
        weatherDataElement.innerHTML += `<p>Temperatūra: ${temperature}°C</p>`;
        weatherDataElement.innerHTML += `<p>Drėgnumas: ${humidity}%</p>`;
        weatherDataElement.innerHTML += `<p>Debesuotumas: ${condition}</p>`;
}

// let printMeteoData = document.getElementById("weatherData");
// printMeteoData.textContent = printToScreen();

function printToConsole(data) {
  console.log(data.forecastTimestamps[0].forecastTimeUtc);
}

// let moment = require('./moment.js');

// function getWeatherData() {
//   // ... kodas, susijęs su orų duomenų gavimu

//   const formattedDate = moment().format('YYYY-MM-DD'); // Naudokite moment funkciją
// 
// }