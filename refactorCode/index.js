const city = document.getElementById("city");
const state = document.getElementById("state");
document.querySelector("form.input").addEventListener("submit", function(event) {
  event.preventDefault();
  const insert = document.getElementById("footer");
  const div = document.createElement('div');
  div.textContent = city.value + state.value;
  insert.appendChild(div);
  console.log(city.value, state.value);
})

