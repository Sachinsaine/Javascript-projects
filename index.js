function isValidPalindrome(str) {
  let temp = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = temp.length - 1;
  while (left < right) {
    if (temp[left] === temp[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
console.log(isValidPalindrome("race a car"));
console.log(isValidPalindrome(" "));
