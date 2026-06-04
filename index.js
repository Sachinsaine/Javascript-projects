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
