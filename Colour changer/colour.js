let getBody = document.querySelector("body");
let colorsName = document.querySelector(".colorName");

document.querySelector("#bttn").addEventListener("click", () => {
  getBody.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  colorsName.innerHTML = color;
  return color;
}
