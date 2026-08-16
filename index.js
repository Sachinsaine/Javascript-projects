function isValidPalindrome(str) {
  let temp = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = temp.length - 1;
  while (left < right) {
    if (temp[left] !== temp[right]) {
      return false;
    }
    left++;
    right--;
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

function mergeSorted(arr1, arr2) {
  let left = 0;
  let right = 0;
  let result = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      result.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }

  return result;
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
console.log(mergeSorted([1, 2, 4], [1, 3, 5]));
console.log(mergeSorted([], [1, 2, 3]));

function TwoSum(arr, target) {
  if (arr.length === 0) return null;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
console.log(TwoSum([2, 7, 11, 15], 9));

function reverse(arr) {
  if (arr.length === 0) return null;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
console.log(palindrome("racecar"));
console.log(palindrome("madam"));
console.log(palindrome("hello"));
