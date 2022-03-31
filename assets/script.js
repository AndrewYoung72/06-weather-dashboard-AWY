
var searchBtn = document.getElementById("searchBtn");



function getApi(){
  var cityInput = document.getElementById("cSearch").value;
  var geoCodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+cityInput+"&limit=1&appid=483a5f8a85f972bf48f65c53caa33848";

  fetch(geoCodeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(data)
      var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=483a5f8a85f972bf48f65c53caa33848"

      fetch(weatherUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function(weatherData){
        console.log(weatherData)
        var cityNameEl = document.getElementById("cityName");
        var tempEl = document.getElementById("temp");
        var windEl = document.getElementById("wind");
        var humidEl = document.getElementById("humid");
        var uviEl = document.getElementById("uvI");

        cityNameEl.textContent = data[0].name;
        tempEl.textContent = "Temp: " + weatherData.current.temp;
        windEl.textContent = "Wind: " + weatherData.current.wind_speed;
        humidEl.textContent = "Humidity: " + weatherData.current.humidity;
        uviEl.textContent = "UV: " + weatherData.current.uvi;

      })
      // for (var i = 0; i < data.length; i++) {
      //   var citySearch = document.getElementById("searchList");
      //   var cityArray = [];
      //   var currentWeather = document.createElement("div");
      //   var searchEl = document.createElement("li");
      //   searchEl.textContent = data[i];
      //   citySearch.append(searchEl);
      // }
    });
  // var citySearch = document.getElementById("weather");
  // var currentWeather = document.createElement("div");
}

// searchBtn.on("click", getApi());
searchBtn.addEventListener("click", getApi);