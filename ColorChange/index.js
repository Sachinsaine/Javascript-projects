let body = document.querySelector("body");
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

function changeBackgroundcolor() {
  let initial = "#";
  let colorcode = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    initial += colorcode[Math.floor(Math.random() * 16)];
  }
  body.style.backgroundColor = initial;
  //   return initial;
}
setInterval(() => {
  changeBackgroundcolor();
}, 2000);

function updateClock() {
  let getTime = new Date();
  let hours = (getTime.getHours() < 10 ? "0" : "") + getTime.getHours();
  let min = (getTime.getMinutes() < 10 ? "0" : "") + getTime.getMinutes();
  let sec = (getTime.getSeconds() < 10 ? "0" : "") + getTime.getSeconds();

  hour.textContent = hours;
  minutes.textContent = min;
  seconds.textContent = sec;
}
updateClock();
setInterval(updateClock, 1000);
