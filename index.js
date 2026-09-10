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

function firstUniqueNum(arr) {
  if (arr.length === 0) return null;

  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] === 1) {
      return num;
    }
  }
  return null;
}
console.log(firstUniqueNum([4, 5, 1, 2, 0, 4, 1, 2]));

function findMissingNum(arr) {
  if (arr.length === 0) return null;

  let n = arr.length + 1;
  let temp = (n * (n + 1)) / 2;
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return temp - sum;
}
console.log(findMissingNum([1, 2, 3, 5, 6]));
console.log(findMissingNum([1, 2, 3, 4, 6, 7]));

function findSecondLargestNum(arr) {
  if (arr.length === 0) return null;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity ? "Not found" : secondLargest;
}
console.log(findSecondLargestNum([10, 5, 8, 20, 15]));
console.log(findSecondLargestNum([10, 10, 8, 5]));

function firstRepeatedChar(str) {
  if (str.length === 0) return null;
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] > 1) {
      return char;
    }
  }

  return null;
}
console.log(firstRepeatedChar("javascript"));

function removeDuplicates(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));

function firstNonRepeatingChar(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("swiss"));

function findLargestWord(str) {
  if (str.length === 0) return null;
  let result = "";
  let temp = str.split(" ");
  for (let word of temp) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
}
console.log(findLargestWord("I love JavaScript programming"));

function totalSum(arr) {
  if (arr.length === 0) return null;

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(totalSum([10, 20, 5, 15]));

function findAverage(arr) {
  if (arr.length === 0) return null;

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
}
console.log(findAverage([10, 20, 30]));
