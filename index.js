function checkArmstrong(num) {
  if (!Number.isInteger(num)) return "Not an armstrong number";
  let str = String(num);
  let numLength = str.length;
  let temp = str.split("");
  let result = 0;
  for (let i = 0; i < temp.length; i++) {
    let nums = Number(temp[i]);
    result += Math.pow(nums, numLength);
  }
  return num === result ? "Armstrong number" : "Not an armstrong number";
}
console.log(checkArmstrong(153));
console.log(checkArmstrong(123));

function isPerfectNum(num) {
  if (!Number.isInteger(num)) return "Not a perfect number";
  let temp = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  return temp === num ? "Perfect number" : "Not a perfect number";
}
console.log(isPerfectNum(6));
console.log(isPerfectNum(10));

function sumOfDigits(num) {
  if (!Number.isInteger(num)) return null;

  let sum = 0;
  let str = String(num).split("");
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}
console.log(sumOfDigits(1234));
console.log(sumOfDigits(567));

function reverseNum(num) {
  if (!Number.isInteger(num)) return null;

  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reverse;
}
console.log(reverseNum(1234));
console.log(reverseNum(100));

function isPalindrom(num) {
  if (!Number.isInteger(num)) return "Not a palindrome";
  let original = num;
  let digit = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    digit = digit * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return digit === original ? " palindrome" : "Not a Palindrome";
}
console.log(isPalindrom(121));
console.log(isPalindrom(123));

function findLcm(n1, n2) {
  let max = Math.max(n1, n2);

  while (true) {
    if (max % n1 === 0 && max % n2 === 0) {
      return max;
    }
    max++;
  }
}
console.log(findLcm(4, 6));
console.log(findLcm(8, 12));

function countDigits(num) {
  let digits = String(num).length;
  return digits;
}
console.log(countDigits(1234));
console.log(countDigits(99999));

function findPower(n1, n2) {
  // return Math.pow(n1, n2);
  let result = 1;
  for (let i = 1; i <= n2; i++) {
    result = result * n1;
  }
  return result;
}
console.log(findPower(2, 10));
console.log(findPower(3, 4));

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

function findFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(findFactors(12));
console.log(findFactors(16));

function countWords(str) {
  let count = str.trim().replace(/\s+/g, " ").split(" ").length;
  return count;
}
console.log(countWords("hello world how are you"));
console.log(countWords("javascript is fun"));

function removeSpaces(str) {
  let temp = str.replace(/\s+/g, "");
  return temp;
}
console.log(removeSpaces("hello world"));

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return "Not a anagram";
  let temp1 = str1.split("").sort().join("");
  let temp2 = str2.split("").sort().join("");

  return temp1 === temp2 ? "Anagram" : "Not a anagram";
}
console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("hello", "word"));

function mostRepeatedChar(str) {
  if (str.length === 0) return null;
  let freq = {};
  let max = 0;
  let result = "";
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key of str) {
    if (freq[key] > max) {
      max = freq[key];
      result = key;
    }
  }
  return result;
}
console.log(mostRepeatedChar("javascript"));
console.log(mostRepeatedChar("hello"));

function removeDuplicate(str) {
  let freq = {};
  let result = "";

  for (let key of str) {
    if (!freq[key]) {
      freq[key] = true;
      result += key;
    }
  }
  return result;
}
console.log(removeDuplicate("javascript"));
console.log(removeDuplicate("good"));

function findLongestWord(str) {
  let max = 0;
  let temp = str.trim().split(" ");
  let result = "";

  for (let word of temp) {
    if (word.length > max) {
      max = word.length;
      result = word;
    }
  }
  return result;
}
console.log(findLongestWord("hello world javascript"));
console.log(findLongestWord("Good morning to all"));

function countOccarance(str, n) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === n) {
      count++;
    }
  }
  return count;
}
console.log(countOccarance("javascript", "a"));
console.log(countOccarance("sachinsaine", "i"));

function truncateString(str, n) {
  if (str.length === 0) return null;
  let temp = str.trim().slice(0, n) + "...";
  return temp;
}
console.log(truncateString("hello world", 5));
console.log(truncateString("good morning", 4));

function replaceVowels(str) {
  let vowels = "aeiou";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += "*";
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(replaceVowels("hello world"));

function checkDigits(str) {
  if (str.length === 0) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      return false;
    }
  }
  return true;
}
console.log(checkDigits("12345"));
console.log(checkDigits("fasd123"));

function mergeTwoSortedArr(a, b) {
  if (a.length === 0 || b.length === 0) return null;
  let temp = [...a, ...b];
  return temp.sort((a, b) => a - b);
}
console.log(mergeTwoSortedArr([1, 2, 4], [1, 3, 4]));

function findAverage(arr) {
  if (arr.length === 0) return null;
  let num = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / num;
}
console.log(findAverage([1, 2, 3, 4, 5]));

function findSecondSmallestNum(arr) {
  if (arr.length === 0) return null;
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
console.log(findSecondSmallestNum([58, 61, 90, 113]));

function mergeTwoArrWithoutDuplicate(a, b) {
  if (a.length === 0 || b.length === 0) return null;
  let arr = [...new Set([...a, ...b])];
  let duplicate = [];
  for (let num of arr) {
    if (!duplicate.includes(num)) {
      duplicate.push(num);
    }
  }
  return duplicate;
}
console.log(mergeTwoArrWithoutDuplicate([1, 2, 3], [2, 3, 4]));
console.log(mergeTwoArrWithoutDuplicate([1, 2], [2, 3, 4, 5]));

function findInteraction(a, b) {
  if (a.length === 0 || b.length === 0) {
    return [];
  }
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}
console.log(findInteraction([1, 2, 3, 4], [2, 4, 6]));
console.log(findInteraction([1, 2, 3], [4, 5, 6]));

function findUnion(a, b) {
  let union = [];
  let arr = [...a, ...b];
  for (let i = 0; i < arr.length; i++) {
    if (!union.includes(arr[i])) {
      union.push(arr[i]);
    }
  }
  return union;
}
console.log(findUnion([1, 2, 3], [2, 3, 4]));
console.log(findUnion([1, 2], [3, 4]));

function rotateArr(arr, k) {
  if (arr.length === 0) return null;
  k = k % arr.length;
  const result = arr.slice(k).concat(arr.slice(0, k));
  return result;
}
console.log(rotateArr([1, 2, 3, 4, 5], 2));

function arrIntoGrp(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
console.log(arrIntoGrp([1, 2, 3, 4, 5], 2));

function checkSorted(arr) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSorted([1, 2, 3, 4, 5]));
console.log(checkSorted([1, 3, 2, 4]));

function removeZerosToEnd(arr) {
  if (arr.length === 0) return null;
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
console.log(removeZerosToEnd([1, 0, 2, 0, 3]));

function findPairs(arr, n) {
  if (arr.length === 0) return null;
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
console.log(findPairs([1, 2, 3, 4, 5], 5));
console.log(findPairs([1, 2, 3, 4], 6));

function printTable(num) {
  if (!Number.isInteger(num)) return false;
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i}\n`;
  }
  return table;
}
console.log(printTable(3));

function printStars(num) {
  if (!Number.isInteger(num)) return false;
  let star = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += `\n`;
  }
  return star;
}
console.log(printStars(4));

function fibonacciSeries(num) {
  if (!Number.isInteger(num)) return null;
  let n1 = 0;
  let n2 = 1;

  let result = [n1, n2];
  for (let i = 3; i <= num; i++) {
    let nextNum = n1 + n2;
    result.push(nextNum);
    n1 = n2;
    n2 = nextNum;
  }
  return result;
}
console.log(fibonacciSeries(8));

function findLCM(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}
console.log(findLCM(4, 6));

function findGCD(a, b) {
  let gcd = 1;
  for (let i = 0; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log(findGCD(12, 8));
console.log(findGCD(15, 10));

function sumOfEvenNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvenNum(10));
console.log(sumOfEvenNum(6));

function sumOfOddNum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOddNum(7));
console.log(sumOfOddNum(10));

function printNumBy(num) {
  if (!Number.isInteger(num)) return null;
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(printNumBy(20));
console.log(printNumBy(100));

function findPrimeNum(num) {
  if (!Number.isInteger(num)) return false;
  let result = [];
  if (num < 2 || num <= 2) return false;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      result.push(i);
    }
  }
  return result;
}
console.log(findPrimeNum(20));

function reverseNumber(num) {
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reverse;
}
console.log(reverseNumber(1234));
