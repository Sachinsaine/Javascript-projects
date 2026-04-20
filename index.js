function onlyDigits(str) {
  if (!str.trim()) return "";
  let numbers = "0123456789";
  for (let i = 0; i < str.length; i++) {
    if (!numbers.includes(str[i])) {
      return false;
    }
  }
  return true;
}
console.log(onlyDigits("12345"));
console.log(onlyDigits("123abc"));
