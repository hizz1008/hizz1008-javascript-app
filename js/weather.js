const API_KEY = "8b8bf3f2e154f4ff81e3736cebe4772a";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const name = data.name;
      weather.innerHTML = data.weather[0].main;
    });
  console.log(position);
}

function onGeoError() {
  alert("can`t find you. no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
