const city = document.getElementById("city");
const state = document.getElementById("state");
document.querySelector("form.input").addEventListener("submit", function(event) {
  event.preventDefault();
  const insert = document.getElementById("savedCities");
  const div = document.createElement('div');
  div.textContent = city.value +", "+ state.value;
  div.classList.add("new");
  insert.appendChild(div);
  city.value = "";
  state.value = "";
  console.log(city.value, state.value);
  
})


// function addCity() {
//   const city = document.getElementById("city");
//   const state = document.getElementById("state");
//   const div = document.createElement(div);
//   div.appendChild(document.createTextNode(city.value, state.value));
//   document.getElementById("savedCities").appendChild(div);
// }


//Geo locate API call
async function geoCodeUrl(city) {
  try {
    const city = document.getElementById("city").value;
    var geoCodeUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid=483a5f8a85f972bf48f65c53caa33848";
    let response = await fetch(geoCodeUrl);
    return response.json();
  } catch(err) {
    console.log(err);
  } 
  console.log(response);
}