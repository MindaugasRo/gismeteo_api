document.querySelector("#submit").addEventListener("click", searchCity)

async function searchCity(e) {
    e.preventDefault();
    let city = document.querySelector("#city");
    console.log(city.value);
    const data = await callApi(city.value);
    //printToConsole(data);
    printToScreen(data)
    city.value = "";
}

async function callApi(city) {
    let url = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
        let response = await fetch(url);
        let data = await response.json();
        // console.log(findCurrentHour(data.forecastTimestamps));
        return data;
}

function findCurrentHour(forecasts) {
    const currentHour = luxon.DateTime.now().set({ minute: 0, second: 0, millisecond: 0 });
    return forecasts.find(forecast =>
      luxon.DateTime.fromString(forecast.forecastTimeUtc, "yyyy-MM-dd HH:mm:ss", { zone: "utc" }).hasSame(
        currentHour,
        "hour"
      )
    );
  }

  function printToScreen(data) {
    let weatherDataElement = document.getElementById("weather-data");
   weatherDataElement.innerHTML = "";
   
          let forecastTimeUtc = findCurrentHour(data.forecastTimestamps).forecastTimeUtc;
          let temperature = findCurrentHour(data.forecastTimestamps).feelsLikeTemperature;
          let humidity = findCurrentHour(data.forecastTimestamps).relativeHumidity;
          let condition = findCurrentHour(data.forecastTimestamps).conditionCode;
  
          weatherDataElement.innerHTML += `<p>Miestas: ${city.value}</p>`;
          weatherDataElement.innerHTML += `<p>Laikas: ${forecastTimeUtc}</p>`;
          weatherDataElement.innerHTML += `<p>Temperatūra: ${temperature}°C</p>`;
          weatherDataElement.innerHTML += `<p>Drėgnumas: ${humidity}%</p>`;
          weatherDataElement.innerHTML += `<p>Debesuotumas: ${condition}</p>`;
    }
  

// function printToConsole(data) {
//     const displayElement = document.getElementById('displayOutput');
//     if (data) {
//       const forecast = findCurrentHour(data.forecastTimestamps);
//       displayElement.innerText = "Prognozė dabartinei valandai: " + forecast;
//     } else {
//       displayElement.innerHTML = "Dabartinės valandos prognozės nėra.";
//     }
//   }

// jei duomenys negaunami išveda "Dabartinės valandos prognozės nėra"
// function printToConsole(data) {
//     const outputDiv = document.getElementById('displayOutput');
//     if (data) {
//       outputDiv.innerHTML = "Prognozė dabartinei valandai: " + findCurrentHour(data.forecastTimestamps);
//     } else {
//       outputDiv.innerHTML = "Dabartinės valandos prognozės nėra.";
//     }
//   }