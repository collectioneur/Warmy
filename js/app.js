const apiKey = "742e3849c7e24641a50e4649188afa4e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?" +
  "units=metric&q=";

const searchBox = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
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

  if(data.weather[0].icon[2] == "d") {
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

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})


