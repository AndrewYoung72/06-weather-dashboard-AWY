const city = document.getElementById("city");
const state = document.getElementById("state");
document.querySelector("form.input").addEventListener("submit", function(event) {
  event.preventDefault();
  const insert = document.getElementById("savedCities");
  const div = document.createElement('div');
  div.textContent = city.value +", "+ state.value;
  div.classList.add("new");
  insert.appendChild(div);
  console.log(city.value, state.value);
})


// function addCity() {
//   const city = document.getElementById("city");
//   const state = document.getElementById("state");
//   const div = document.createElement(div);
//   div.appendChild(document.createTextNode(city.value, state.value));
//   document.getElementById("savedCities").appendChild(div);
// }