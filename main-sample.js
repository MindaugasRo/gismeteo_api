console.log("hi")

fetch("https://api.meteo.lt/v1/places/adakavas/forecasts/long-term")
.then(response => {return response.json() })
.then(data => { console.log(data); })

function printToConsole(data) {
    console.log(data["place"])
    console.log(data.place)
    console.log(data.place.name)
}