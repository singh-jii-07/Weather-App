const Apikey = "a21eac0624bfda43720846a79ea13ea4";
const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const clear = document.querySelector(".clear");
const rain = document.querySelector(".rain");
const clouds = document.querySelector(".clouds");
const drizzle = document.querySelector(".drizzle");
const mist = document.querySelector(".mist");
const snow = document.querySelector(".snow");

async function weathercheck(cityName) {
    const Apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${Apikey}`;
    const response = await fetch(Apiurl);
    const data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    clear.style.display = "none";
    rain.style.display = "none";
    clouds.style.display = "none";
    drizzle.style.display = "none";
    mist.style.display = "none";
    snow.style.display = "none";

    if (data.weather[0].main === "Clear") {
        clear.style.display = "block";
    } else if (data.weather[0].main === "Clouds") {
        clouds.style.display = "block";
    } else if (data.weather[0].main === "Drizzle") {
        drizzle.style.display = "block";
    } else if (data.weather[0].main === "Mist") {
        mist.style.display = "block";
    } else if (data.weather[0].main === "Snow") {
        snow.style.display = "block";
    } else {
        rain.style.display = "block";
    }
}
SearchBtn.addEventListener("click", () => {
    const cityName = SearchBox.value; 
    weathercheck(cityName); 
});
