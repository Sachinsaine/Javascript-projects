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

function maxWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;

  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = height * width;

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }

    max = Math.max(max, area);
  }
  return max;
}

console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxWater([1, 1]));

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
