const apiCountryURL = "https://flagsapi.com//flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");


const getWeatherData = async () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=f45a3ebdec965165d3431688d5a0e736`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}

const showWeatherData = () => {
    console.log("city");
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    getWeatherData();
})