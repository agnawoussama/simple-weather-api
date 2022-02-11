const cityName = document.getElementById("city-name")
const searchBtn = document.getElementById("search-btn")
const weather = document.getElementById("weather")
const apiKey = "20722250855f397fb51ed7b5492e9027"
const cityHeader = document.getElementById("city")
const icon = document.getElementById("icon")
const temp = document.getElementById("temp")
const desc = document.getElementById("desc")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")




async function getWeatcherInfo() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=metric&appid=" + apiKey)
    const data = await response.json()
    cityHeader.innerText = "Weather in " + data.name
    temp.innerText = data.main.temp + "°C"
    icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    desc.innerText = data.weather[0].description
    humidity.innerText = "Humidity: " + data.main.humidity + "%"
    wind.innerText = "Wind Speed: " + data.wind.speed + "km/h"
    weather.classList.remove("notDisplay")

}

searchBtn.addEventListener("click", () => {
    getWeatcherInfo()
})
