let input = document.querySelector("#inpuField");
let guess = document.querySelector("#guessBtn");
let range = document.querySelector("#range");
let guessedNum = document.querySelector(".numbers");
let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");

let maxRange = 10;
let getRandomNum = Math.floor(Math.random() * maxRange) + 1;
range.textContent = maxRange;

easy.addEventListener("click", () => {
  maxRange = 10;
  range.textContent = 10;
  getRandomNum = Math.floor(Math.random() * maxRange) + 1;
});

medium.addEventListener("click", () => {
  maxRange = 50;
  range.textContent = 50;
  getRandomNum = Math.floor(Math.random() * maxRange) + 1;
});

hard.addEventListener("click", () => {
  maxRange = 100;
  range.textContent = 100;
  getRandomNum = Math.floor(Math.random() * maxRange) + 1;
});

guess.addEventListener("click", () => {
  let inputValue = input.value.trim();

  if (inputValue === "" || isNaN(inputValue)) {
    alert("Enter valid number!");
    return;
  }

  inputValue = Number(inputValue);
  if (inputValue < 1 || inputValue > maxRange) {
    alert(`Enter number between 1 and ${maxRange}`);
    return;
  }

  let createDiv = document.createElement("div");
  createDiv.classList.add("guess-pill");

  let guessText = document.createElement("span");
  guessText.innerHTML = inputValue;

  if (inputValue > getRandomNum) {
    guessText.classList.add("pill-high");
  } else if (inputValue < getRandomNum) {
    guessText.classList.add("pill-low");
  } else {
    guessText.classList.add("pill-win");
  }

  createDiv.appendChild(guessText);
  guessedNum.appendChild(createDiv);
  console.log("User guessed:", guessText);
  input.value = "";
});
