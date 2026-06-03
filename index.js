function findAverage(arr) {
  if (arr.length === 0) return 0;
  let arrLength = arr.length;
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum / arrLength;
}
console.log(findAverage([1, 2, 3, 4, 5]));

function findSecondSmallestNum(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}
console.log(findSecondSmallestNum([5, 1, 9, 3]));

function secondLargestNum(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestNum([5, 1, 9, 3]));

function mergeArr(a, b) {
  let result = [];
  let temp = [...a, ...b];
  for (let num of temp) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(mergeArr([1, 2, 3], [2, 3, 4]));

function findIntersection(a, b) {
  let result = [];
  for (let num of a) {
    if (b.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(findIntersection([1, 2, 3, 4], [2, 4, 6]));

function unionOfArr(a, b) {
  let temp = [...a, ...b];
  let result = [];
  for (let num of temp) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(unionOfArr([1, 2, 3], [2, 3, 4]));

function rotateArr(arr, num) {
  if (arr.length === 0) return 0;
  if (!Number.isInteger(num) || num < 0) return 0;
  let k = num % arr.length;

  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateArr([1, 2, 3, 4, 5], 2));

function leftRotationArr(arr, num) {
  if (arr.length === 0) return 0;
  if (!Number.isInteger(num) || num < 0) return 0;

  let k = num % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}
console.log(leftRotationArr([1, 2, 3, 4, 5], 2));

function checkArrSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkArrSorted([5, 6, 7, 8, 3]));
console.log(checkArrSorted([1, 2, 3, 4, 5]));

function printNumbers(num) {
  if (!Number.isInteger(num)) return "invalid input";
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}

printNumbers(5);

function printEvenNum(num) {
  if (!Number.isInteger(num) || num < 2) return "invalid input";
  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNum(10);

function findSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}
findSum(5);

function findFactorial(num) {
  if (!Number.isInteger(num) || num === 0) return "invalid input";
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  console.log(sum);
}
findFactorial(5);

function reverseString(str) {
  // let reverseStr = str.replace(/\s+/g, "").split("").reverse().join("");
  // console.log(reverseStr);
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}
reverseString("hello");

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}
countVowels("javascript");

function isPalindrome(str) {
  // let temp = str.split("").reverse().join("");
  // return temp === str;
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str;
}

console.log(isPalindrome("javascript"));
console.log(isPalindrome("madam"));

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([4, 7, 1, 9, 2]));

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest([4, 7, 1, 9, 2]));

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum([1, 2, 3, 4, 5]));

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function countEven(arr) {
  if (arr.length === 0) return [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEven([1, 2, 3, 4, 5, 6]));

function findSecondLargest(arr) {
  if (arr.length < 2) return "array should contain at least 2 elements";
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity
    ? "no second largest element"
    : secondLargest;
}
console.log(findSecondLargest([4, 7, 1, 9, 2]));

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function findFrequency(arr) {
  if (arr.length === 0) return 0;
  let freq = {};

  for (let char of arr) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}
console.log(findFrequency([1, 2, 2, 3, 1, 4, 2]));

function mostFrequent(arr) {
  if (arr.length === 0) return "invalid input";
  let freq = {};
  let maxCount = 0;
  let result;

  for (let char of arr) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > maxCount) {
      maxCount = freq[char];
      result = char;
    }
  }
  return result;
}
console.log(mostFrequent([1, 2, 2, 3, 1, 4, 2]));

function isAnagram(str1, str2) {
  let a = str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  let b = str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  return a === b;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

function firstNonRepeating(str) {
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
console.log(firstNonRepeating("aabbcddee"));

function findCommon(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return [];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]));

function countChar(str) {
  let freq = {};

  for (let char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}
console.log(countChar("aabbbc"));

function findDuplicate(arr) {
  let freq = {};
  let result = [];

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > 1) {
      result.push(num);
    }
  }

  return result;
}
console.log(findDuplicate([1, 2, 2, 3, 1]));

function nonFisrtChar(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
}
console.log(nonFisrtChar("aabbcdde"));

function rotateRight(arr, num) {
  if (arr.length === 0) return [];
  let k = num % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateRight([1, 2, 3, 4, 5], 1));

function moveZeros(arr) {
  let getZeros = [];
  let nonZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      getZeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  return [...nonZeros, ...getZeros];
}
console.log(moveZeros([0, 1, 0, 3, 12]));

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 3, 2, 4, 5]));

function mergeSorted(arr1, arr2) {
  let sortArr = [...arr1, ...arr2];
  return sortArr.sort((a, b) => a - b);
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));

function findMissing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}

console.log(findMissing([1, 2, 3, 5]));

function findPairs(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(findPairs([1, 2, 3, 4, 5], 5));

function flatten(arr) {
  return arr.flat();
}

console.log(flatten([1, [2, 3], 4, [5, 6]]));

function capitalizeWords(str) {
  let splitStr = str.split(" ");
  let result = splitStr.map((word) => word[0].toUpperCase() + word.slice(1));
  return result.join(" ");
}

console.log(capitalizeWords("hello world javascript"));

function countWords(str) {
  if (str.length === 0) return 0;
  let splitStr = str.replace(/\s+/g, " ").split(" ");
  return splitStr.length;
}

console.log(countWords("JavaScript is awesome"));

function findLongestWord(str) {
  let longWord = "";
  let splitStr = str.replace(/\s+/g, " ").split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longWord.length) {
      longWord = splitStr[i];
    }
  }
  return longWord;
}
console.log(findLongestWord("JavaScript is very powerful"));

function areEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(areEqual([1, 2, 3], [1, 2, 3]));

function intersection(arr1, arr2) {
  let uniqueValues = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!uniqueValues.includes(arr1[i])) {
        uniqueValues.push(arr1[i]);
      }
    }
  }
  return uniqueValues;
}

console.log(intersection([1, 2, 2, 3], [2, 2, 4]));

function difference(arr1, arr2) {
  let exist = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      exist.push(arr1[i]);
    }
  }
  return exist;
}

console.log(difference([1, 2, 3, 4], [3, 4, 5, 6]));

function firstDuplicateIndex(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return i;
    } else {
      seen[arr[i]] = 1;
    }
  }
}

console.log(firstDuplicateIndex([1, 2, 3, 2, 4, 5]));

function firstUnique(arr) {
  let unique = {};
  for (let num of arr) {
    unique[num] = (unique[num] || 0) + 1;
  }

  for (let num of arr) {
    if (unique[num] === 1) {
      return num;
    }
  }
}

console.log(firstUnique([4, 5, 1, 2, 1, 4, 5]));

function groupFrequency(arr) {
  let freq = {};
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  return freq;
}

console.log(groupFrequency([1, 2, 2, 3, 1, 4, 2]));

function maxFrequency(arr) {
  let max = 0;
  let fre = {};
  let result;

  for (let num of arr) {
    fre[num] = (fre[num] || 0) + 1;
  }

  for (let num of arr) {
    if (fre[num] > max) {
      max = fre[num];
      result = num;
    }
  }
  return result;
}

console.log(maxFrequency([1, 2, 2, 3, 1, 4, 2]));

function findDuplicates(arr) {
  let duplicates = [];
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num in freq) {
    if (freq[num] > 1) {
      duplicates.push(Number(num));
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));

function countDuplicates(arr) {
  let seen = {};
  let count = 0;
  for (let num of arr) {
    seen[num] = (seen[num] || 0) + 1;
  }

  for (let key in seen) {
    if (seen[key] > 1) {
      count++;
    }
  }

  return count;
}

console.log(countDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));

function containsDuplicate(arr) {
  let seen = {};
  for (let num of arr) {
    if (seen[num]) {
      return true;
    }
    seen[num] = true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));

function singleNumber(arr) {
  let freq = {};
  let result;
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) {
      result = Number(key);
    }
  }
  return result;
}

console.log(singleNumber([2, 1, 4, 5, 2, 4, 1]));

function union(arr1, arr2) {
  let result = [];
  let temp = [...arr1, ...arr2];
  for (let num of temp) {
    if (!result.includes(num)) {
      result.push(num);
      // console.log(num);
    }
  }
  // for (let i = 0; i < temp.length; i++) {
  //   if (!result.includes(temp[i])) {
  //     result.push(temp[i]);
  //   }
  // }
  return result;
}

console.log(union([1, 2, 3], [3, 4, 5]));

function commonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 0; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }

    if (prefix === "") {
      return "";
    }
  }
  return prefix;
}

console.log(commonPrefix(["flower", "flow", "flight"]));

function findMissingLetter(arr) {
  if (arr.length === "" || arr.length < 0) return "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].charCodeAt(0) !== arr[i].charCodeAt(0) + 1) {
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "e"]));

function hasUniqueChars(str) {
  let seen = {};
  // for (let i = 0; i < str.length; i++) {
  //   if (seen[str[i]]) {
  //     return true;
  //   }
  //   seen[str[i]] = true;
  // }
  for (let char of str) {
    if (seen[char]) {
      return false;
    }
    seen[char] = true;
  }
  return true;
}

console.log(hasUniqueChars("hello"));
console.log(hasUniqueChars("abcdef"));

function charFrequency(str) {
  if (str.length === "") return "invalid input";
  let fre = {};
  for (let char of str) {
    fre[char] = (fre[char] || 0) + 1;
  }
  return fre;
}

console.log(charFrequency("javascript"));

function reverseWords(str) {
  if (str.length === "") return "invalid input";

  let temp = str.split(" ").reverse().join(" ");
  return temp;
}

console.log(reverseWords("JavaScript is awesome"));

function arePermutations(a, b) {
  let temp1 = [...a].sort().join("");
  let temp2 = [...b].sort().join("");

  return temp1 === temp2;
}
console.log(arePermutations("listen", "silent"));

function lastNonRepeating(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }
  // for (let key in freq) {
  //   if (freq[key] === 1) {
  //     return key;
  //   }
  // }
}
console.log(lastNonRepeating("aabbcdde"));

function longestConsecutive(arr) {
  let currentStreak = 1;
  let longestStreak = 1;
  let temp = [...arr].sort((a, b) => a - b);
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] === temp[i - 1] + 1) {
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }
  return longestStreak;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
