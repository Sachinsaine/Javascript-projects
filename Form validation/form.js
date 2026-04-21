let submitBtn = document.querySelector("#submit");
let clearBtn = document.querySelector("#clear");

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
let form = document.querySelector("#form");

function formChecker() {
  let inputs = [firstname, lastname, email, city, state];
  let isEmpty = inputs.some((input) => input.value.trim() === "");
  submitBtn.disabled = isEmpty;
}

[firstname, lastname, email, city, state].forEach((input) => {
  input.addEventListener("input", formChecker);
});

submitBtn.disabled = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userData = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    city: city.value,
    state: state.value,
  };

  localStorage.setItem("user", JSON.stringify(userData));
  displayData(userData);
  alert("your data has been sent successfully");
  form.reset();
});

function displayData(data) {
  firstName.textContent = data.firstname;
  lastName.textContent = data.lastname;
  userEmail.textContent = data.email;
  userCity.textContent = data.city;
  userState.textContent = data.state;

  display.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  let saved = localStorage.getItem("user");

  if (saved) {
    let data = JSON.parse(saved);

    firstname.value = data.firstname;
    lastname.value = data.lastname;
    email.value = data.email;
    city.value = data.city;
    state.value = data.state;

    displayData(data);
    formChecker();
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  form.reset();
  display.style.display = "none";
  submitBtn.disabled = true;
});
