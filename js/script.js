const apiKey = "f45a3ebdec965165d3431688d5a0e736";
const apiCountryURL = "https://flagsapi.com//flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const showWeatherData = (city) => {
    console.log("city");
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const city = cityInput.value;

    showWeatherData(city);
})