let body = document.querySelector("body");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");
let bttn = document.querySelector("#btn");

bttn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

function getRandomColors() {
  if (body.classList.contains("dark")) {
    return;
  }

  let initial = "#";
  let colorcode = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    initial += colorcode[Math.floor(Math.random() * 16)];
  }

  body.style.backgroundColor = initial;
}

setInterval(getRandomColors, 3000);

function updateClock() {
  const time = new Date();

  let gethour = (time.getHours() < 10 ? "0" : "") + time.getHours();

  let getminutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();

  let getseconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();

  hour.textContent = gethour;
  minute.textContent = getminutes;
  second.textContent = getseconds;
}

updateClock();

setInterval(updateClock, 1000);
