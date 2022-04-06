
var searchBtn = document.getElementById("searchBtn");
var cityList = document.getElementById("searchList");
var cityInput = document.getElementById("cSearch").value;
var searchList = [];


function getApi(){
  var cityInput = document.getElementById("cSearch").value;
  var geoCodeUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+cityInput+"&limit=1&appid=483a5f8a85f972bf48f65c53caa33848";
  

  fetch(geoCodeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(data)
      var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=483a5f8a85f972bf48f65c53caa33848";

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
        var listEl = document.getElementById("searchList");

        searchBtn.addEventListener("click", function(event) {
          event.preventDefault();
          localStorage.setItem("searchList", JSON.stringify(data[0].name))
        }, false);

        cityNameEl.textContent = data[0].name;
        listEl.textContent = data[0].name;
        tempEl.textContent = "Temp: " + weatherData.current.temp;
        windEl.textContent = "Wind: " + weatherData.current.wind_speed;
        humidEl.textContent = "Humidity: " + weatherData.current.humidity;
        uviEl.textContent = "UV: " + weatherData.current.uvi;

        if (uvI <= 2) {
          uviEl.setAttribute("style", "background-color: green; ");
        } else if (uvI > 2 < 5) {
          uviEl.setAttribute("style", "background-color: yellow");
        } else {
          uviEl.setAttribute("style", "background-color: red");
        }

        var dateEl = document.getElementById("date");
        var iconEl = document.getElementById("icon");
        var descriptionEl = document.getElementById("description")
        var tempCardEl = document.getElementById("tempCard");
        
        dateEl.textContent = weatherData.daily[0].dt;
        iconEl.src = weatherData.daily[0].weather[0].icon;
        descriptionEl.textContent = weatherData.daily[0].weather[0].description;
        tempCardEl.textContent = "Temp: " + weatherData.daily[0].temp.day;
       

        var nDateEl = document.getElementById("nDate");
        var nIconEl = document.getElementById("nIcon");
        var nTempCardEl = document.getElementById("nTempCard");
       
        nDateEl.textContent = weatherData.daily[1].dt;
        nIconEl.src =  weatherData.daily[1].weather[0].icon;
        nTempCardEl.textContent = "Temp: " + weatherData.daily[1].temp.day;
       

        var sDateEl = document.getElementById("sDate");
        var sIconEl = document.getElementById("sIcon");
        var sTempCardEl = document.getElementById("sTempCard");
        
        sDateEl.textContent = weatherData.daily[2].dt;
        sIconEl.src = weatherData.daily[2].weather[0].icon;
        sTempCardEl.textContent = "Temp: " + weatherData.daily[2].temp.day;
       

        var tDateEl = document.getElementById("tDate");
        var tIconEl = document.getElementById("tIcon");
        var tTempCardEl = document.getElementById("tTempCard");
        
        tDateEl.textContent = weatherData.daily[3].dt;
        tIconEl.src = weatherData.daily[3].weather[0].icon;
        tTempCardEl.textContent = "Temp: " + weatherData.daily[3].temp.day;
       

        var fDateEl = document.getElementById("fDate");
        var fIconEl = document.getElementById("fIcon");
        var fTempCardEl = document.getElementById("fTempCard");
        
        fDateEl.textContent = weatherData.daily[4].dt;
        fIconEl.src = weatherData.daily[4].weather[0].icon;
        fTempCardEl.textContent = "Temp: " + weatherData.daily[4].temp.day;
       
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

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var cityInput = document.getElementById("cSearch").value;



});

    var cityList = document.getElementById("searchList");
    var listName = document.createElement("li");
    listName.textContent = cityInput;
  

searchBtn.addEventListener("click", getApi);