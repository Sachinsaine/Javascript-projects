let submitBtn = document.querySelector("#submit");
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let state = document.querySelector("#state");

let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let userEmail = document.querySelector(".email");
let userCity = document.querySelector(".city");
let userState = document.querySelector(".state");

let display = document.querySelector(".userdata");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  firstName.innerHTML = firstname.value;
  lastName.innerHTML = lastname.value;
  userEmail.innerHTML = email.value;
  userCity.innerHTML = city.value;
  userState.innerHTML = state.value;

  // if (firstname.value === "" || lastname.value === "" || email.value === ""
  //     || city.value === "" || state.value === "") {
  //     submitBtn.style.display = "none"
  // } else {
  //     submitBtn.style.display = "block"
  // }

  display.style.display = "block";
});
