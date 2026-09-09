function findMaxNum(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMaxNum([12, 45, 7, 89, 34, 56]));
console.log(findMaxNum([-10, -5, -20, -3]));

function findSmallestNum(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(findSmallestNum([23, 5, 89, 12, 3, 45]));

function countEvenNum(arr) {
  if (arr.length === 0) return null;
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEvenNum([12, 7, 4, 9, 18, 21, 6]));

function reverseStr(str) {
  if (str.length === 0) return null;
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseStr("hello"));
console.log(reverseStr("A"));
console.log(reverseStr(""));
console.log(reverseStr("12345"));

function countVowels(str) {
  if (str.length === 0) return -1;
  str = str.toLowerCase();
  let count = 0;
  const vowels = "aeiou";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));

function firstDuplicateNum(arr) {
  if (arr.length === 0) return null;

  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] > 1) {
      return num;
    }
    freq[num] = true;
  }
  return null;
}
console.log(firstDuplicateNum([2, 5, 1, 2, 3, 5]));
