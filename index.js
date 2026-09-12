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

function countPositiveNum(arr) {
  if (arr.length === 0) return null;

  let count = 0;
  for (let num of arr) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}
console.log(countPositiveNum([-2, 5, 0, 8, -1, 3]));

function countNegativeNum(arr) {
  if (arr.length === 0) return null;

  let count = 0;
  for (let num of arr) {
    if (num < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNegativeNum([5, -2, -7, 8, -1]));

function countDivisibleNum(arr) {
  if (arr.length === 0) return null;

  let count = 0;
  for (let num of arr) {
    if (num % 3 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countDivisibleNum([3, 5, 6, 10, 12, 14]));

function findSmallestNum(arr) {
  if (arr.length === 0) return null;
  let temp = arr[0];
  for (let num of arr) {
    if (num < temp) {
      temp = num;
    }
  }
  return temp;
}
console.log(findSmallestNum([25, 10, 8, 42, 3, 17]));

function largestNumDividedByThree(arr) {
  if (arr.length === 0) return null;
  let largest = 0;
  for (let num of arr) {
    if (num % 3 === 0) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}
console.log(largestNumDividedByThree([10, 15, 7, 21, 18, 5]));

function sumOfEvenNum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumOfEvenNum([2, 5, 8, 11, 14, 7]));

function sumOfOddNum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumOfOddNum([2, 5, 8, 11, 14, 7]));

function findFirstNum(arr) {
  for (let num of arr) {
    if (num > 10) {
      return num;
    }
  }
}
console.log(findFirstNum([3, 7, 12, 5, 20]));

function firstEvenNum(arr) {
  for (let num of arr) {
    if (num % 2 === 0) {
      return num;
    }
  }
}
console.log(firstEvenNum([3, 7, 11, 8, 14]));

function firstDivisibleNum(arr) {
  for (let num of arr) {
    if (num % 5 === 0) {
      return num;
    }
  }
}
console.log(firstDivisibleNum([3, 7, 12, 18, 20, 25]));

function countGreaterThan(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num > target) {
      count++;
    }
  }
  return count;
}
console.log(countGreaterThan([5, 12, 8, 20, 3, 15], 10));

function countNumberLessThan(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num < target) {
      count++;
    }
  }
  return count;
}
console.log(countNumberLessThan([10, 4, 7, 15, 2, 9], 10));

function findTwoSum(arr, target) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
console.log(findTwoSum([2, 7, 11, 15], 9));

function findFirstUnique(arr) {
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
console.log(findFirstUnique([4, 5, 1, 2, 0, 4, 1, 2]));

function longestConsecutive(arr) {
  let set = new Set(arr);
  let longest = 0;

  for (let num of arr) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 1;

      while (set.has(current + 1)) {
        current++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }
  return longest;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
