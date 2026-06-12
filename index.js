function firstNonRepeating(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) {
      return key;
    }
  }
  return null;
}

console.log(firstNonRepeating("aabbcdde"));
console.log(firstNonRepeating("aabbcc"));
console.log(firstNonRepeating("javascript"));

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
console.log(intersection([1, 2, 3], [4, 5, 6]));

function maxFrequency(arr) {
  let freq = {};
  let max = 0;
  let result;
  for (let char of arr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      result = Number(key);
    }
  }
  return result;
}

console.log(maxFrequency([1, 2, 2, 3, 1, 4, 2]));

function reverseWords(str) {
  let temp = str.replace(/\s+/g, " ").split(" ").reverse().join(" ");
  return temp;
}

console.log(reverseWords("JavaScript is awesome"));

function firstDuplicateIndex(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return i;
    }
    seen[arr[i]] = true;
  }

  return -1;
}

console.log(firstDuplicateIndex([1, 2, 3, 2, 4, 5]));
console.log(firstDuplicateIndex([1, 2, 3, 4]));

function charFrequency(str) {
  let countFre = {};
  for (let char of str) {
    countFre[char] = (countFre[char] || 0) + 1;
  }
  return countFre;
}

console.log(charFrequency("javascript"));
console.log(charFrequency("hello"));

function findMissingLetter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i].charCodeAt(0);
    let next = arr[i + 1].charCodeAt(0);

    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return null;
}

console.log(findMissingLetter(["a", "b", "c", "e"]));
console.log(findMissingLetter(["m", "n", "p"]));

function union(arr1, arr2) {
  let result = [];
  let temp = [...arr1, ...arr2];
  for (let i = 0; i < temp.length; i++) {
    if (!result.includes(temp[i])) {
      result.push(temp[i]);
    }
  }
  return result;
}

console.log(union([1, 2, 3], [3, 4, 5]));
console.log(union([1, 1, 2], [2, 3]));

function containsDuplicate(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));

function singleNumber(arr) {
  let seen = {};
  for (let num of arr) {
    seen[num] = (seen[num] || 0) + 1;
  }
  for (let key in seen) {
    if (seen[key] === 1) {
      return Number(key);
    }
  }
}

console.log(singleNumber([2, 1, 4, 5, 2, 4, 1]));
console.log(singleNumber([7, 3, 7]));

function sumToN(n) {
  if (!Number.isInteger(n)) return "invalid input";
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN(5));
console.log(sumToN(10));

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return "invalid input";

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));
console.log(factorial(0));

function reverseString(str) {
  let temp = str.replace(/\s+/g, " ").split("").reverse().join("");
  return temp;
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("javascript"));

function isPalindrome(str) {
  let temp = str.split("").reverse().join("");
  return temp === str;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

function findMax(arr) {
  if (arr.length === 0) return "invalid input";
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-1, -5, -3]));

function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2));
console.log(countOccurrences([5, 5, 5, 1], 5));

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([5, 5, 5, 1]));

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, -1, 2]));

function countEvens(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvens([1, 2, 3, 4, 6]));
console.log(countEvens([1, 3, 5]));

function firstNonRepeating(str) {
  let fre = {};
  for (let char of str) {
    fre[char] = (fre[char] || 0) + 1;
  }
  for (let key in fre) {
    if (fre[key] === 1) {
      return key;
    }
  }
  return null;
}

console.log(firstNonRepeating("aabbcdde"));
console.log(firstNonRepeating("aabb"));

function areAnagrams(a, b) {
  if (a.length !== b.length) return false;
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  return str1 === str2;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));

function maxFrequency(arr) {
  if (arr.length === 0) return 0;
  let max = 0;
  let fre = {};
  let result;
  for (let num of arr) {
    fre[num] = (fre[num] || 0) + 1;
  }
  for (let key in fre) {
    if (fre[key] > max) {
      max = fre[key];
      result = Number(key);
    }
  }
  return result;
}

console.log(maxFrequency([1, 2, 2, 3, 1, 4, 2]));

function firstUnique(str) {
  let fre = {};
  for (let char of str) {
    fre[char] = (fre[char] || 0) + 1;
  }

  for (let key in fre) {
    if (fre[key] === 1) {
      return key;
    }
  }
  return null;
}

console.log(firstUnique("aabbcdde"));
console.log(firstUnique("aabb"));

function removeDuplicatess(str) {
  let temp = str.split("");
  let unique = [];
  for (let i = 0; i < temp.length; i++) {
    if (!unique.includes(temp[i])) {
      unique.push(temp[i]);
    }
  }
  return unique.join("");
}

console.log(removeDuplicatess("aabbcc"));
console.log(removeDuplicatess("javascript"));

function isPalindromee(str) {
  let toLower = str.toLowerCase();
  let temp = toLower.split("").reverse().join("");
  return temp === toLower;
}

console.log(isPalindromee("Madam"));
console.log(isPalindromee("Hello"));

function areAnagrams(a, b) {
  let temp = a.split("");
  let demo = b.split("");
  for (let i = 0; i < temp.length; i++) {
    let index = demo.indexOf(temp[i]);
    if (index === -1) {
      return false;
    }
    demo.slice(index, 1);
  }
  return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));

function findMissingLetter(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i].charCodeAt(0);
    let next = arr[i + 1].charCodeAt(0);

    if (next - curr > 1) {
      return String.fromCharCode(curr + 1);
    }
  }
  return null;
}

console.log(findMissingLetter(["a", "b", "c", "e"]));
console.log(findMissingLetter(["m", "n", "p"]));

function longestConsecutive(arr) {
  let temp = arr.sort((a, b) => a - b);
  let longest = 1;
  let curr = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] + 1) {
      curr++;
    }
  }
  console.log(curr);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expected = (n * (n + 1)) / 2;

  let actual = 0;
  for (let num of arr) {
    actual += num;
  }
  return expected - actual;
}

console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber([2, 3, 1, 5]));

function moveZeros(arr) {
  let zeros = [];
  let nonZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  return [...nonZeros, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([1, 2, 0, 4, 0]));

function secondLargest(arr) {
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
  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([10, 5, 20, 8]));
console.log(secondLargest([5, 5, 3, 2]));
console.log(secondLargest([7]));

function rotateRight(arr) {
  if (arr.length <= 1) return arr;
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}

console.log(rotateRight([1, 2, 3, 4]));
console.log(rotateRight([10]));

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
console.log(intersection([1, 2, 3], [4, 5, 6]));

function firstDuplicateIndex(arr) {
  let seen = {};
  // for (let num of arr) {
  //   seen[num] = (seen[num] || 0) + 1;
  // }

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return i;
    }
    seen[arr[i]] = true;
  }
  return -1;
}

console.log(firstDuplicateIndex([1, 2, 3, 2, 4]));
console.log(firstDuplicateIndex([1, 2, 3, 4]));

function twoSum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 3, 10, 6, 8, 5], 7));

function rotateRight(arr, num) {
  if (arr.length === 0) return [];
  let k = num % arr.length;

  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateRight([1, 2, 3, 4, 5], 1));

function left(arr, n) {
  let k = n % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}
console.log(left([4, 3, 5, 6, 3, 2], 2));

function isValid(str) {
  let stack = [];
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));

function longestCommonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 0; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interview", "internet", "internal"]));

function groupAnagrams(arr) {
  let groups = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].split("").sort().join("");
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(arr[i]);
  }
  return Object.values(groups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function topKFrequent(arr, k) {
  let seen = {};
  for (let num of arr) {
    seen[num] = (seen[num] || 0) + 1;
  }

  return Object.entries(seen)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => Number(num));
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([4, 4, 4, 6, 6, 7], 1));

function productExceptSelf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      // console.log(i === j);

      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([2, 3, 4]));

function majorityElement(arr) {
  let freq = {};
  let n = arr.length / 2;
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > n) {
      return Number(key);
    }
  }
  return null;
}

console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([5, 5, 5, 2, 5]));

function mergeSorted(arr1, arr2) {
  let result = [...arr1, ...arr2].sort((a, b) => a - b);
  return result;
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
console.log(mergeSorted([1, 2, 7], [3, 4, 5]));
console.log(mergeSorted([], [1, 2, 3]));

function findFirstNegative(arr) {
  if (arr.length === 0) return [];
  for (let num of arr) {
    if (num < 0) {
      return num;
    }
  }
  return null;
}

console.log(findFirstNegative([5, 3, -2, 7, -1]));
console.log(findFirstNegative([1, 2, 3]));
console.log(findFirstNegative([-5, 2, 3]));

function flatten(arr) {
  return arr.flat();
}

console.log(flatten([1, [2, 3], 4, [5, 6]]));
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ]),
);

function findLongestWord(str) {
  let longest = "";
  let temp = str.split(" ");
  for (let char of temp) {
    if (char.length > longest.length) {
      longest = char;
    }
  }
  return longest;
}

console.log(findLongestWord("JavaScript is awesome"));
console.log(findLongestWord("I love coding"));
console.log(findLongestWord("React Node MongoDB"));

function hasPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasPair([2, 7, 11, 15], 9));
console.log(hasPair([1, 2, 3, 4], 8));
console.log(hasPair([3, 5, 1, 7], 8));

function hasConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      return true;
    }
  }
  return false;
}

hasConsecutive([4, 5, 9, 12]);
hasConsecutive([10, 20, 30]);
hasConsecutive([7, 8]);

function mostFrequentChar(str) {
  let freq = {};
  let freqChar = "";
  let max = 0;
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      freqChar = key;
    }
  }
  return freqChar;
}
console.log(mostFrequentChar("javascript"));
console.log(mostFrequentChar("hello"));
console.log(mostFrequentChar("aabbbcccc"));
console.log(mostFrequentChar("sachin saine"));

const arr = [1, 2, 3];
const newArr = [...arr, 4];

console.log(newArr);

function firstRepeatingChar(str) {
  let seen = {};
  for (let char of str) {
    seen[char] = (seen[char] || 0) + 1;
  }
  for (let key of str) {
    if (seen[key] > 1) {
      return key;
    }
  }
}
console.log(firstRepeatingChar("abca"));

function firstEven(arr) {
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     result.push(arr[i]);
  //   }
  // }
  // return result.length === 0 ? "not find" : result[0];

  for (let num of arr) {
    if (num % 2 === 0) {
      return num;
    }
  }
  return null;
}

console.log(firstEven([1, 3, 4, 6]));
console.log(firstEven([1, 5, 7]));
console.log(firstEven([2, 4, 6]));
