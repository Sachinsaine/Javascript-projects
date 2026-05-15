let body = document.querySelector("body");
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
