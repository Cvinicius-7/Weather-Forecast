
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");



const getWeatherData = async () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&lang=pt_br&appid=f45a3ebdec965165d3431688d5a0e736`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

const showWeatherData = async () => {
    const data = await getWeatherData();

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    showWeatherData();
})