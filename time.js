document.querySelector("#submit").addEventListener("click", searchCity)

async function searchCity(e) {
    e.preventDefault();
    let city = document.querySelector("#city");
    console.log(city.value);
    const data = await callApi(city.value);
    printToConsole(data);
    city.value = "";
}

async function callApi(city) {
    let url = "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.forecastTimestamps);
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

function printToConsole(data) {
    console.log(data.forecastTimestamps[0].forecastTimeUtc);
}