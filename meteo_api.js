// document.querySelector("#submit").addEventListener("click", searchCity)

// function searchCity(e) {
//   e.preventDefault();
//   let city = document.querySelector("#city");
//   console.log(city.value);
//   callApi(city.value);
//   city.value = "";
// }

// function callApi(city) {
//   let request = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
//   console.log(request);
//   fetch(request)
//     .then(response => response.json())
//     .then(data => { if (data && data.forecastTimestamps) {
//         const currentForecast = findCurrentHour(data.forecastTimestamps);
//         printToConsole(currentForecast);
//       } else {
//         console.error('Netinkama duomenų struktūra:', data);
//       }
//     })
//     .catch(error => console.error('Klaida gaunant duomenis:', error));
// }

// function findCurrentHour(forecasts) {
//   const currentHour = luxon.DateTime.now().set({ minute: 0, second: 0, millisecond: 0 });
//   return forecasts.find(forecast => {
//     try {
//       const forecastTime = luxon.DateTime.fromFormat(forecast.forecastTimeUtc, "yyyy-MM-dd HH:mm:ss", { zone: "utc" });
//       return forecastTime.hasSame(currentHour, "hour");
//     } catch (error) {
//       console.error('Klaida analizuojant prognozės laiką:', forecast.forecastTimeUtc, error);
//       return false;
//     }
//   });
// }

// function printToConsole(data) {
//   if (data) {
//     console.log("Prognozė dabartinei valandai:", data.forecastTimeUtc);
//   } else {
//     console.log("Dabartinės valandos prognozės nėra.");
//   }
// }

// Rezultato siuntimas į funkciją
// callApi('vilnius');


// Neveikiantis senas kodas

// function callApi(city) {
//     let request = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
//     console.log(request);
//     fetch(request)
//     .then(response => { return response.json(); })
//     //.then(data => { printToConsole(data) })
//     .then(forecasts => { findCurrentHour(forecasts) });
//   }

// function findCurrentHour(forecasts) {
//   const currentHour = luxon.DateTime.now().set({ minute: 0, second: 0, millisecond: 0 });
//   return forecasts.find((forecast) => luxon.DateTime.fromString(forecast.forecastTimeUtc, "yyyy-MM-dd HH:mm:ss", { zone: "utc" }).hasSame(
//     currentHour,"hour")
// );
// }

// function printToConsole(forecasts) {
//   if (forecasts) {
//     console.log("Dabartinės valandos prognozės:", forecasts.forecastTimeUtc);
//   } else {
//     console.log("Dabartinės valandos prognozių nėra!!!");
//   }
// }

// callApi('vilnius');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DARRRR SENESNIS kODAS

// function callApi(city) {
//   let url = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
//   console.log(url);
//   fetch(url)
//   .then(response => { return response.json(); })
//   //.then(data => { printToConsole(data) })
//   .then(forecasts => { findCurrentHour(forecasts) });
// }

// function findCurrentHour(forecasts) {
//   const currentHour = luxon.DateTime.now().set({ minute: 0, second: 0, millisecond: 0 });


  // return forecasts.find((row) => luxon.DateTime.fromString(row.forecastTimeUtc, "yyyy-MM-dd HH:mm:ss", { zone: "utc" }).hasSame(
  //     currentHour,"hour")
  // );

  // return forecasts.find(forecast => {
  //   const forecastTime = luxon.DateTime.fromFormat(forecast.forecastTimeUtc, "yyyy-MM-dd HH:mm:ss", { zone: "utc" });
  //   return forecastTime.hasSame(currentHour, "hour");
  // });
        
// }

// weatherDataElement.innerHTML += `<p>Laikas: ${forecastTimeUtc}</p>`;
// weatherDataElement.innerHTML += `<p>Temperatūra: ${temperature}°C</p>`;
// weatherDataElement.innerHTML += `<p>Drėgnumas: ${humidity}%</p>`;
// weatherDataElement.innerHTML += `<p>Debesuotumas: ${condition}</p>`;

// let forecastTimeUtc = forecasts.forecastTimestamps[0].forecastTimeUtc;
// let temperature = forecasts.forecastTimestamps[0].feelsLikeTemperature;
// let humidity = forecasts.forecastTimestamps[0].relativeHumidity;
// let condition = forecasts.forecastTimestamps[0].conditionCode;



// ------ OLD CODE -------------------
// function printToScreen(data) {
//   let weatherDataElement = document.getElementById("weather-data");
//  weatherDataElement.innerHTML = "";
//       console.log(data.forecastTimestamps[0].forecastTimeUtc);

//         let forecastTimeUtc = data.forecastTimestamps[0].forecastTimeUtc;
//         let temperature = data.forecastTimestamps[0].feelsLikeTemperature;
//         let humidity = data.forecastTimestamps[0].relativeHumidity;
//         let condition = data.forecastTimestamps[0].conditionCode;

//         weatherDataElement.innerHTML += `<p>Laikas: ${forecastTimeUtc}</p>`;
//         weatherDataElement.innerHTML += `<p>Temperatūra: ${temperature}°C</p>`;
//         weatherDataElement.innerHTML += `<p>Drėgnumas: ${humidity}%</p>`;
//         weatherDataElement.innerHTML += `<p>Debesuotumas: ${condition}</p>`;
// }


// let printMeteoData = document.getElementById("weatherData");
// printMeteoData.textContent = printToScreen();



// let moment = require('./moment.js');

// function getWeatherData() {
//   // ... kodas, susijęs su orų duomenų gavimu

//   const formattedDate = moment().format('YYYY-MM-DD'); // Naudokite moment funkciją
// 
// }