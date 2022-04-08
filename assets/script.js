
var searchBtn = document.getElementById("searchBtn");
var cityList = document.getElementById("searchList");
var cityInput = document.getElementById("cSearch").value;
var searchList = JSON.parse(localStorage.getItem("searchList")) || [];


cityList.textContent = searchList;


var cityList = document.getElementById("searchList");

// Render a new li for each search
localStorage.clear();
function renderList() {
  cityList.innerHTML = "";
  cityInput.textContent = searchList.length;

  for (var i = 0; i < searchList.length; i++) {
    var list = searchList[i];
    var cityList = document.getElementById("searchList");
    var li = document.createElement("li");
    li.textContent = list;
    li.setAttribute("data-index", i)
    cityList.appendChild(li);

    searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // var cityInput = document.getElementById("cSearch").value;
    var cityInput = document.getElementById(cityInput);
  
    });
    
   }

}



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

        // searchBtn.addEventListener("click", function(event) {
        //   event.preventDefault();
        searchList.push(data[0].name)
        localStorage.setItem("searchList", JSON.stringify(searchList))
        // }, false);

        cityNameEl.textContent = data[0].name;
        listEl.textContent = data[0].name;
        tempEl.textContent = "Temp: " + weatherData.current.temp;
        windEl.textContent = "Wind: " + weatherData.current.wind_speed;
        humidEl.textContent = "Humidity: " + weatherData.current.humidity;
        uviEl.textContent = "UV Index: " + weatherData.current.uvi;

        if (uvI <= 2) {
          uviEl.setAttribute("style", "background-color: green; ");
        } else if (uvI > 2) {
          uviEl.setAttribute("style", "background-color: yellow");
        } else {
          uviEl.setAttribute("style", "background-color: orange");
        }

        var dateEl = document.getElementById("date");
        var iconEl = document.getElementById("icon");
        var descriptionEl = document.getElementById("description");
        var tempCardEl = document.getElementById("tempCard");
        
        // dateEl.textContent = weatherData.daily[0].dt;
        dateEl.textContent = moment(weatherData.daily[0].dt * 1000).format("MMM D YYYY");
        // iconEl.src = weatherData.daily[0].weather[0].icon;
        iconEl.src = "https://openweathermap.org/img/wn/"+weatherData.daily[0].weather[0].icon+"@2x.png"
        descriptionEl.textContent = weatherData.daily[0].weather[0].description;
        tempCardEl.textContent = "Temp: " + weatherData.daily[0].temp.day;
       

        var nDateEl = document.getElementById("nDate");
        var nIconEl = document.getElementById("nIcon");
        var nDescriptionEl = document.getElementById("nDescription");
        var nTempCardEl = document.getElementById("nTempCard");
       
        nDateEl.textContent = moment(weatherData.daily[1].dt * 1000).format("MMM D YYYY");
        nIconEl.src = "https://openweathermap.org/img/wn/"+weatherData.daily[1].weather[0].icon+"@2x.png";
        nDescriptionEl.textContent = weatherData.daily[1].weather[0].description;
        nTempCardEl.textContent = "Temp: " + weatherData.daily[1].temp.day;
       

        var sDateEl = document.getElementById("sDate");
        var sIconEl = document.getElementById("sIcon");
        var sDescriptionEl = document.getElementById("sDescription");
        var sTempCardEl = document.getElementById("sTempCard");
        
        sDateEl.textContent = moment(weatherData.daily[2].dt * 1000).format("MMM D YYYY");
        sIconEl.src = "https://openweathermap.org/img/wn/"+weatherData.daily[2].weather[0].icon+"@2x.png";
        sDescriptionEl.textContent = weatherData.daily[2].weather[0].description;
        sTempCardEl.textContent = "Temp: " + weatherData.daily[2].temp.day;
       

        var tDateEl = document.getElementById("tDate");
        var tIconEl = document.getElementById("tIcon");
        var tDescriptionEl = document.getElementById("tDescription");
        var tTempCardEl = document.getElementById("tTempCard");
        
        tDateEl.textContent = moment(weatherData.daily[3].dt * 1000).format("MMM D YYYY");
        tIconEl.src = "https://openweathermap.org/img/wn/"+weatherData.daily[3].weather[0].icon+"@2x.png";
        tDescriptionEl.textContent = weatherData.daily[3].weather[0].description;
        tTempCardEl.textContent = "Temp: " + weatherData.daily[3].temp.day;
       

        var fDateEl = document.getElementById("fDate");
        var fIconEl = document.getElementById("fIcon");
        var fDescriptionEl = document.getElementById("fDescription");
        var fTempCardEl = document.getElementById("fTempCard");
        
        fDateEl.textContent = moment(weatherData.daily[4].dt * 1000).format("MMM D YYYY");
        fIconEl.src = "https://openweathermap.org/img/wn/"+weatherData.daily[4].weather[0].icon+"@2x.png";
        fDescriptionEl.textContent = weatherData.daily[4].weather[0].description;
        fTempCardEl.textContent = "Temp: " + weatherData.daily[4].temp.day;
       
      })


     
    });
 
}


var cityList = document.getElementById("searchList");

// Render a new li for each search
function renderList() {
  cityList.innerHTML = "";
  cityInput.textContent = searchList.length;

  for (var i = 0; i < searchList.length; i++) {
    var list = searchList[i];
    var cityList = document.getElementById("searchList");
    var li = document.createElement("li");
    li.textContent = list;
    li.setAttribute("data-index", i)
    cityList.appendChild(li);

    searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var cityInput = document.getElementById("cSearch").value;
  
  
  
    });
    
   }

}

searchBtn.addEventListener("click", getApi);