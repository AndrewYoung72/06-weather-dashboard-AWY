const cityList = [];
const city = document.getElementById("city");
const state = document.getElementById("state");
document
  .querySelector("form.input")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const insert = document.getElementById("savedCities");
    const div = document.createElement("div");
    div.textContent = city.value + ", " + state.value;
    div.classList.add("new");
    insert.appendChild(div);
    cityList.push(city.value);
    console.log(cityList);
    city.value = "";
    state.value = "";
  });

// function addCity() {
//   const city = document.getElementById("city");
//   const state = document.getElementById("state");
//   const div = document.createElement(div);
//   div.appendChild(document.createTextNode(city.value, state.value));
//   document.getElementById("savedCities").appendChild(div);
// }

//Geo locate API call
// async function getApi() {
//   try {
//     const city = document.getElementById("city").value;
//     var geoCodeUrl =
//       "https://api.openweathermap.org/geo/1.0/direct?q=" +
//       city +
//       "&limit=1&appid=483a5f8a85f972bf48f65c53caa33848";
//     let response = await fetch(geoCodeUrl);
//     console.log(response);
//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

function getApi() {
  const city = document.getElementById("city").value;
  const geoCodeUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=483a5f8a85f972bf48f65c53caa33848";
    fetch(geoCodeUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const lat = data[0].lat;
        const lon = data[0].lon;
        console.log(data);
        const weatherUrl =    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&appid=483a5f8a85f972bf48f65c53caa33848";
        fetch(weatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (weatherData) {
          console.log(weatherData);
          console.log(data[0].name);
          console.log(weatherData.current.temp);
          console.log(weatherData.current.wind_speed);
          console.log(weatherData.current.humidity,"%");
          console.log(weatherData.current.uvi);
          const nameEl = document.getElementById("cityName");
          const tempEl = document.getElementById("temp");
          const windEl = document.getElementById("wind");
          const humidEl = document.getElementById("humid");
          const uviEl = document.getElementById("uvI");

          // nameEl.textContent = data[0].name;
          // tempEl.textContent = "Temp: " + weatherData.current.temp;
          // windEl.textContent = "Wind: " + weatherData.current.wind_speed;
          // humidEl.textContent = "Humidity: " + weatherData.current.humidity;
          // uviEl.textContent = "UV Index: " + weatherData.current.uvi;
              
        })
        // cityList.push(data[0].name);
        localStorage.setItem("cityList", JSON.stringify(cityList));
      })
}
