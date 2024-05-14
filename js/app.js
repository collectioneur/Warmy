const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?" +
  "units=metric&q=";

const searchBox = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-button")
const weatherIcon = document.querySelector(".weather-icon")
let time = "d";
let previousCity = "";
async function checkWeather(city) {
  if(previousCity === city) return;
  previousCity = city;
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404 || response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".center").style.display = "none";
    document.querySelector(".bottom").style.display = "none";
  }
  else {
  var data = await response.json();

   console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

  time = data.weather[0].icon[2];
  backgroundChange(time);
  if(time == "d") {
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/cloudnsun.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/sun.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/rain.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/rainnsun.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    weatherIcon.src = "img/rainnflash.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "img/snow.png";
  }
  } else {
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/bigcloudnmoon.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/moon.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/moonncloud.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "img/rainnflash.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "img/snow.png";
    }
  }

  document.querySelector(".center").style.display = "block";
  document.querySelector(".bottom").style.display = "flex";
  document.querySelector(".error").style.display = "none";
}
}

function backgroundChange(time) {
  const windowElement = document.querySelector(".window");
  const nightGradient = "linear-gradient(133deg, rgba(4,18,47,1) 0%, rgba(127,2,134,1) 100%)";
  const dayGradient = "linear-gradient(63deg, rgba(213,148,252,1) 0%, rgba(148,233,213,1) 100%)";

  if(time === "n") {
     if (windowElement.style.background !== nightGradient) {
         windowElement.style.background = nightGradient;
     }
  }
  else {
    if (windowElement.style.background !== dayGradient) {
      windowElement.style.background = dayGradient;
    }
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})


