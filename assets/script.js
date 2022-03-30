
var searchBtn = document.getElementById("searchBtn")
var cityArray = [];


function getApi(){
  var weatherUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},ISO 3166-2:US&limit=1&appid=483a5f8a85f972bf48f65c53caa33848";

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      for (var i = 0; i < data.length; i++) {
        var citySearch = document.getElementById("weather");
        var currentWeather = document.createElement("div");
        var searchEl = $("<div>");
        searchEl.textContent = data[i].html_url;
        citySearch.append(searchEl);
      }
    });
  // var citySearch = document.getElementById("weather");
  // var currentWeather = document.createElement("div");
}

// searchBtn.on("click", getApi());
searchBtn.addEventListener("click", getApi);