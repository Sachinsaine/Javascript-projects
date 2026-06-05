let num = "0123456789";
let lowerText = "abcdefghijklmnopqrstuvwxyz";
let upperText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChar = "!@#$%^&*()_~+><?|[]/=";

let password = document.querySelector("#display");
const allChar = lowerText + upperText + num + specialChar;
let max = 5;

function generatePassword() {
  let random = "";
  random += lowerText[Math.floor(Math.random() * lowerText.length)];
  random += upperText[Math.floor(Math.random() * upperText.length)];
  random += num[Math.floor(Math.random() * num.length)];
  random += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (max > random.length) {
    random += allChar[Math.floor(Math.random() * allChar.length)];
  }
  //   for (let i = 0; i < max; i++) {
  //     random += allChar[Math.floor(Math.random() * allChar.length)];
  //   }
  password.value = random;
}
function copyPassword(data) {
  password.select();
  document.execCommand("copy");
  alert("Password copied!");
}
generatePassword();
