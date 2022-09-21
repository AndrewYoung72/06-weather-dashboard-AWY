const searchInput = document.querySelectorAll(".input").value;
const city = document.getElementById("city").value;
const state = document.getElementById("state").value;

document.querySelector(".input").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(searchInput);
})

