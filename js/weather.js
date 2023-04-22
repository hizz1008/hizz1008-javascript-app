const API_KEY = "8b8bf3f2e154f4ff81e3736cebe4772a";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector(".temperature");
      const name = document.querySelector(".name");

      temperature.innerHTML = `${Math.floor(data.main.temp)}° @`;
      name.innerHTML = data.name;
    });
}

function onGeoError() {
  alert("can`t find you. no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
