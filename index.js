// function checkArmstrong(num) {
//   if (!Number.isInteger(num)) return "Not an armstrong number";
//   let str = String(num);
//   let numLength = str.length;
//   let temp = str.split("");
//   let result = 0;
//   for (let i = 0; i < temp.length; i++) {
//     let nums = Number(temp[i]);
//     result += Math.pow(nums, numLength);
//   }
//   return num === result ? "Armstrong number" : "Not an armstrong number";
// }
// console.log(checkArmstrong(153));
// console.log(checkArmstrong(123));

// function isPerfectNum(num) {
//   if (!Number.isInteger(num)) return "Not a perfect number";
//   let temp = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       temp += i;
//     }
//   }
//   return temp === num ? "Perfect number" : "Not a perfect number";
// }
// console.log(isPerfectNum(6));
// console.log(isPerfectNum(10));

// function sumOfDigits(num) {
//   if (!Number.isInteger(num)) return null;

//   let sum = 0;
//   let str = String(num).split("");
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
//   return sum;
// }
// console.log(sumOfDigits(1234));
// console.log(sumOfDigits(567));

// function reverseNum(num) {
//   if (!Number.isInteger(num)) return null;

//   let reverse = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   return reverse;
// }
// console.log(reverseNum(1234));
// console.log(reverseNum(100));

// function isPalindrom(num) {
//   if (!Number.isInteger(num)) return "Not a palindrome";
//   let original = num;
//   let digit = 0;
//   while (num > 0) {
//     let lastDigit = num % 10;
//     digit = digit * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return digit === original ? " palindrome" : "Not a Palindrome";
// }
// console.log(isPalindrom(121));
// console.log(isPalindrom(123));

// function findLcm(n1, n2) {
//   let max = Math.max(n1, n2);

//   while (true) {
//     if (max % n1 === 0 && max % n2 === 0) {
//       return max;
//     }
//     max++;
//   }
// }
// console.log(findLcm(4, 6));
// console.log(findLcm(8, 12));

// function countDigits(num) {
//   let digits = String(num).length;
//   return digits;
// }
// console.log(countDigits(1234));
// console.log(countDigits(99999));

// function findPower(n1, n2) {
//   // return Math.pow(n1, n2);
//   let result = 1;
//   for (let i = 1; i <= n2; i++) {
//     result = result * n1;
//   }
//   return result;
// }
// console.log(findPower(2, 10));
// console.log(findPower(3, 4));

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(7));
// console.log(isPrime(10));

// function findFactors(num) {
//   let factors = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }
// console.log(findFactors(12));
// console.log(findFactors(16));

// function countWords(str) {
//   let count = str.trim().replace(/\s+/g, " ").split(" ").length;
//   return count;
// }
// console.log(countWords("hello world how are you"));
// console.log(countWords("javascript is fun"));

// function removeSpaces(str) {
//   let temp = str.replace(/\s+/g, "");
//   return temp;
// }
// console.log(removeSpaces("hello world"));

// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) return "Not a anagram";
//   let temp1 = str1.split("").sort().join("");
//   let temp2 = str2.split("").sort().join("");

//   return temp1 === temp2 ? "Anagram" : "Not a anagram";
// }
// console.log(checkAnagram("listen", "silent"));
// console.log(checkAnagram("hello", "word"));

// function mostRepeatedChar(str) {
//   if (str.length === 0) return null;
//   let freq = {};
//   let max = 0;
//   let result = "";
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for (let key of str) {
//     if (freq[key] > max) {
//       max = freq[key];
//       result = key;
//     }
//   }
//   return result;
// }
// console.log(mostRepeatedChar("javascript"));
// console.log(mostRepeatedChar("hello"));

// function removeDuplicate(str) {
//   let freq = {};
//   let result = "";

//   for (let key of str) {
//     if (!freq[key]) {
//       freq[key] = true;
//       result += key;
//     }
//   }
//   return result;
// }
// console.log(removeDuplicate("javascript"));
// console.log(removeDuplicate("good"));

// function findLongestWord(str) {
//   let max = 0;
//   let temp = str.trim().split(" ");
//   let result = "";

//   for (let word of temp) {
//     if (word.length > max) {
//       max = word.length;
//       result = word;
//     }
//   }
//   return result;
// }
// console.log(findLongestWord("hello world javascript"));
// console.log(findLongestWord("Good morning to all"));

// function countOccarance(str, n) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === n) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOccarance("javascript", "a"));
// console.log(countOccarance("sachinsaine", "i"));

// function truncateString(str, n) {
//   if (str.length === 0) return null;
//   let temp = str.trim().slice(0, n) + "...";
//   return temp;
// }
// console.log(truncateString("hello world", 5));
// console.log(truncateString("good morning", 4));

// function replaceVowels(str) {
//   let vowels = "aeiou";
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       result += "*";
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(replaceVowels("hello world"));

// function checkDigits(str) {
//   if (str.length === 0) return false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < "0" || str[i] > "9") {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkDigits("12345"));
// console.log(checkDigits("fasd123"));

// function mergeTwoSortedArr(a, b) {
//   if (a.length === 0 || b.length === 0) return null;
//   let temp = [...a, ...b];
//   return temp.sort((a, b) => a - b);
// }
// console.log(mergeTwoSortedArr([1, 2, 4], [1, 3, 4]));

// function findAverage(arr) {
//   if (arr.length === 0) return null;
//   let num = arr.length;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / num;
// }
// console.log(findAverage([1, 2, 3, 4, 5]));

// function findSecondSmallestNum(arr) {
//   if (arr.length === 0) return null;
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }
//   }
//   return secondSmallest;
// }
// console.log(findSecondSmallestNum([5, 1, 9, 3]));
// console.log(findSecondSmallestNum([58, 61, 90, 113]));

// function mergeTwoArrWithoutDuplicate(a, b) {
//   if (a.length === 0 || b.length === 0) return null;
//   let arr = [...new Set([...a, ...b])];
//   let duplicate = [];
//   for (let num of arr) {
//     if (!duplicate.includes(num)) {
//       duplicate.push(num);
//     }
//   }
//   return duplicate;
// }
// console.log(mergeTwoArrWithoutDuplicate([1, 2, 3], [2, 3, 4]));
// console.log(mergeTwoArrWithoutDuplicate([1, 2], [2, 3, 4, 5]));

// function findInteraction(a, b) {
//   if (a.length === 0 || b.length === 0) {
//     return [];
//   }
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// }
// console.log(findInteraction([1, 2, 3, 4], [2, 4, 6]));
// console.log(findInteraction([1, 2, 3], [4, 5, 6]));

// function findUnion(a, b) {
//   let union = [];
//   let arr = [...a, ...b];
//   for (let i = 0; i < arr.length; i++) {
//     if (!union.includes(arr[i])) {
//       union.push(arr[i]);
//     }
//   }
//   return union;
// }
// console.log(findUnion([1, 2, 3], [2, 3, 4]));
// console.log(findUnion([1, 2], [3, 4]));

// function rotateArr(arr, k) {
//   if (arr.length === 0) return null;
//   k = k % arr.length;
//   const result = arr.slice(k).concat(arr.slice(0, k));
//   return result;
// }
// console.log(rotateArr([1, 2, 3, 4, 5], 2));

// function arrIntoGrp(arr, n) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += n) {
//     result.push(arr.slice(i, i + n));
//   }
//   return result;
// }
// console.log(arrIntoGrp([1, 2, 3, 4, 5], 2));

// function checkSorted(arr) {
//   if (arr.length === 0) return null;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSorted([1, 2, 3, 4, 5]));
// console.log(checkSorted([1, 3, 2, 4]));

// function removeZerosToEnd(arr) {
//   if (arr.length === 0) return null;
//   let zeros = [];
//   let nonZeros = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeros.push(arr[i]);
//     } else {
//       nonZeros.push(arr[i]);
//     }
//   }
//   return [...nonZeros, ...zeros];
// }
// console.log(removeZerosToEnd([1, 0, 2, 0, 3]));

// function findPairs(arr, n) {
//   if (arr.length === 0) return null;
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return pairs;
// }
// console.log(findPairs([1, 2, 3, 4, 5], 5));
// console.log(findPairs([1, 2, 3, 4], 6));

// function printTable(num) {
//   if (!Number.isInteger(num)) return false;
//   let table = "";
//   for (let i = 1; i <= 10; i++) {
//     table += `${num} x ${i} = ${num * i}\n`;
//   }
//   return table;
// }
// console.log(printTable(3));

// function printStars(num) {
//   if (!Number.isInteger(num)) return false;
//   let star = "";
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       star += "*";
//     }
//     star += `\n`;
//   }
//   return star;
// }
// console.log(printStars(4));

// function fibonacciSeries(num) {
//   if (!Number.isInteger(num)) return null;
//   let n1 = 0;
//   let n2 = 1;

//   let result = [n1, n2];
//   for (let i = 3; i <= num; i++) {
//     let nextNum = n1 + n2;
//     result.push(nextNum);
//     n1 = n2;
//     n2 = nextNum;
//   }
//   return result;
// }
// console.log(fibonacciSeries(8));

// function findLCM(a, b) {
//   let max = Math.max(a, b);
//   while (true) {
//     if (max % a === 0 && max % b === 0) {
//       return max;
//     }
//     max++;
//   }
// }
// console.log(findLCM(4, 6));

// function findGCD(a, b) {
//   let gcd = 1;
//   for (let i = 0; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// }
// console.log(findGCD(12, 8));
// console.log(findGCD(15, 10));

// function sumOfEvenNum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfEvenNum(10));
// console.log(sumOfEvenNum(6));

// function sumOfOddNum(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfOddNum(7));
// console.log(sumOfOddNum(10));

// function printNumBy(num) {
//   if (!Number.isInteger(num)) return null;
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(printNumBy(20));
// console.log(printNumBy(100));

// function findPrimeNum(num) {
//   if (!Number.isInteger(num)) return false;
//   let result = [];
//   if (num < 2 || num <= 2) return false;
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findPrimeNum(20));

// function reverseNumber(num) {
//   let reverse = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   return reverse;
// }
// console.log(reverseNumber(1234));

// function countKeys(obj) {
//   return Object.keys(obj).length;
// }
// console.log(countKeys({ a: 1, b: 2, c: 3 }));
// console.log(countKeys({ name: "John", age: 25 }));

// function mergeObj(obj1, obj2) {
//   let merge = { ...obj1, ...obj2 };
//   return merge;
// }
// console.log(mergeObj({ a: 1, b: 2 }, { c: 3, d: 4 }));

// function keyExist(obj, n) {
//   // return n in obj;
//   return Object.hasOwn(obj, n);
// }
// console.log(keyExist({ a: 1, b: 2 }, "a"));
// console.log(keyExist({ a: 1, b: 2 }, "c"));

// function getAllKeys(obj) {
//   return Object.keys(obj);
// }
// console.log(getAllKeys({ a: 1, b: 2, c: 3 }));

// function getAllValues(obj) {
//   return Object.values(obj);
// }
// console.log(getAllValues({ a: 1, b: 2, c: 3 }));

// function invertKeyValue(obj) {
//   const result = {};
//   let input = obj;
//   for (const key in input) {
//     if (Object.hasOwn(input, key)) {
//       result[input[key]] = key;
//     }
//   }
//   return result;
// }
// console.log(invertKeyValue({ a: 1, b: 2, c: 3 }));

// function removeKey(obj, n) {
//   delete obj[n];
//   return obj;
// }
// console.log(removeKey({ a: 1, b: 2, c: 3 }, "b"));

// function highestValue(obj) {
//   return Math.max(...Object.values(obj));
// }
// console.log(highestValue({ a: 10, b: 30, c: 20 }));

// function singleObj(arr) {
//   let result = {};
//   let temp = arr;

//   for (let char of temp) {
//     result[char.key] = char.value;
//   }
//   return result;
// }
// console.log(
//   singleObj([
//     { key: "a", value: 1 },
//     { key: "b", value: 2 },
//   ]),
// );

// function findAge(obj, n) {
//   let temp = obj;
//   let result = {};
//   return Object.groupBy(temp, (item) => item.age);
// }
// console.log(
//   findAge(
//     [
//       { name: "John", age: 25 },
//       { name: "Jane", age: 25 },
//       { name: "Bob", age: 30 },
//     ],
//     "age",
//   ),
// );

// // function findFactorial(num) {
// //   if (!Number.isInteger(num)) return null;
// //   let sum = 1;
// //   for (let i = 1; i <= num; i++) {
// //     sum *= i;
// //   }
// //   return sum;
// // }
// // console.log(findFactorial(5));
// // console.log(findFactorial(6));

// function findFactorial(num) {
//   if (!Number.isInteger(num)) return null;

//   if (num === 0 || num === 1) return 1;

//   return num * findFactorial(num - 1);
// }
// console.log(findFactorial(5));
// console.log(findFactorial(6));

// function fibonacciWithRecursion(num) {
//   if (!Number.isInteger(num)) return null;
//   if (num === 0) return 0;
//   if (num === 1) return 1;

//   return fibonacciWithRecursion(num - 1) + fibonacciWithRecursion(num - 2);
// }
// console.log(fibonacciWithRecursion(6));

// function sumOfArrWithRecursion(arr) {
//   if (arr.length === 0) return 0;

//   return arr[0] + sumOfArrWithRecursion(arr.slice(1));
// }
// console.log(sumOfArrWithRecursion([1, 2, 3, 4]));

// function reverseStrWithRecursion(str) {
//   if (str.length <= 1) return str;
//   return reverseStrWithRecursion(str.slice(1)) + str[0];
// }
// console.log(reverseStrWithRecursion("hello"));

// function palindromeWithRecurstion(str) {
//   if (str.length <= 1) return true;

//   if (str[0] !== str[str.length - 1]) return false;

//   return palindromeWithRecurstion(str.slice(1, str.length - 1));
// }
// console.log(palindromeWithRecurstion("madam"));
// console.log(palindromeWithRecurstion("hello"));

// function powerUsingRecursion(num, power) {
//   if (power === 0) return 1;

//   return num * powerUsingRecursion(num, power - 1);
// }
// console.log(powerUsingRecursion(2, 10));

// function countDigitsRecursion(num) {
//   if (num === 0) return 0;
//   return 1 + countDigitsRecursion(Math.floor(num / 10));
// }
// console.log(countDigitsRecursion(1234));

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([5, 3, 8, 1, 2]));

// function linearSearch(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 3));

// function binarySearch(arr, n) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === n) {
//       return mid;
//     }

//     if (n < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5], 4));

// function findFirstOcc(arr, n) {
//   if (arr.length === 0) return null;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }
// }
// console.log(findFirstOcc([1, 2, 2, 3, 2], 2));

// function findLastOcc(arr, n) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findLastOcc([1, 2, 2, 3, 2], 2));

// function findAllOcc(arr, n) {
//   if (arr.length === 0) return null;
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findAllOcc([1, 2, 2, 3, 2], 2));

// function findClosestElement(arr, n) {
//   let closest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i] - n) < Math.abs(closest - n)) {
//       closest = arr[i];
//     }
//   }
//   return closest;
// }
// console.log(findClosestElement([1, 3, 5, 7, 9], 6));

// function countGreaterEle(arr, n) {
//   if (arr.length === 0) return null;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > n) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countGreaterEle([1, 2, 3, 4, 5], 3));
// console.log(countGreaterEle([10, 20, 30, 40], 15));

// function findMaxIndex(arr) {
//   if (arr.length === 0) return null;

//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[num]) {
//       num = i;
//     }
//   }
//   return num;
// }
// console.log(findMaxIndex([1, 5, 3, 9, 2]));

// function findMinIndex(arr) {
//   let min = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[min]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(findMinIndex([1, 5, 3, 9, 2]));

// function longestSubStr(str) {
//   let longest = 0;
//   for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//       if (temp.includes(str[j])) {
//         break;
//       }
//       temp += str[j];
//       longest = Math.max(longest, temp.length);
//     }
//   }
//   return longest;
// }
// console.log(longestSubStr("abcabcbb"));

// function balancedParentheses(str) {
//   let stack = [];
//   for (let char of str) {
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     } else {
//       let temp = stack.pop();

//       if (
//         (char === ")" && temp !== "(") ||
//         (char === "]" && temp !== "[") ||
//         (char === "}" && temp !== "{")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// console.log(balancedParentheses("({[})"));
// console.log(balancedParentheses("({[]})"));

// function twoSumIndex(arr, n) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         result.push(i, j);
//       }
//     }
//   }
//   return result;
// }
// console.log(twoSumIndex([2, 7, 11, 15], 9));

// function duplicate(arr) {
//   let freq = {};

//   for (let key of arr) {
//     if (freq[key]) {
//       return key;
//     }
//     freq[key] = true;
//   }
//   return -1;
//   // for (let i = 0; i < arr.length; i++) {
//   //   for (let j = i + 1; j < arr.length; j++) {
//   //     if (arr[i] === arr[j]) {
//   //       return arr[i];
//   //     }
//   //   }
//   // }
//   // return -1;
// }
// console.log(duplicate([1, 2, 3, 2, 4]));

// function findAll(arr) {
//   if (arr.length === 0) return null;
//   // let result = [];
//   // for (let i = 0; i < arr.length; i++) {
//   //   for (let j = i + 1; j < arr.length; j++) {
//   //     if (arr[i] === arr[j]) {
//   //       if (!result.includes(arr[i])) {
//   //         result.push(arr[i]);
//   //       }
//   //     }
//   //   }
//   // }
//   // return result;

//   let freq = {};
//   let result = [];
//   for (let char of arr) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let num in freq) {
//     if (freq[num] > 1) {
//       result.push(Number(num));
//     }
//   }
//   return result;
// }
// console.log(findAll([1, 2, 3, 2, 4, 3]));

// function matrixTrans(matrix) {
//   let result = [];

//   for (let i = 0; i < matrix[0].length; i++) {
//     result[i] = [];

//     for (let j = 0; j < matrix.length; j++) {
//       result[i].push(matrix[j][i]);
//     }
//   }
//   return result;
// }
// console.log(
//   matrixTrans([
//     [1, 2, 3],
//     [4, 5, 6],
//   ]),
// );

// function arrayEqual(a, b) {
//   if (a.length !== b.length) return false;
//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(arrayEqual([1, 2, 3], [1, 2, 3]));
// console.log(arrayEqual([1, 2], [1, 2, 3]));

// function findCommonEle(a, b, c) {
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i]) && c.includes(a[i])) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// }
// console.log(findCommonEle([1, 2, 3], [2, 3, 4], [3, 4, 5]));

function findMaximum(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMaximum([12, 45, 7, 89, 23, 56]));

function findMinimum(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(findMinimum([12, 45, 7, 89, 23, 56]));

function secondLargest(arr) {
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
  return secondLargest === -Infinity ? null : secondLargest;
}
console.log(secondLargest([12, 45, 7, 89, 23, 56]));

function linearSearch(arr, target) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([12, 45, 7, 89, 23, 56], 89));
console.log(linearSearch([12, 45, 7, 89, 23, 56], 100));

function binarySearch(arr, target) {
  if (arr.length === 0) return null;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([3, 7, 12, 18, 25, 31, 40], 25));
console.log(binarySearch([3, 7, 12, 18, 25, 31, 40], 10));

function firstOccurrence(arr, target) {
  if (arr.length === 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(firstOccurrence([5, 8, 3, 8, 2, 8, 10], 8)); //1
console.log(firstOccurrence([1, 2, 3, 4], 3));
console.log(firstOccurrence([1, 2, 3, 4], 5));
console.log(firstOccurrence([[], 5]));

function lastOccurrence(arr, target) {
  if (arr.length === 0) return -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(lastOccurrence([5, 8, 3, 8, 2, 8, 10], 8)); //5

function allOccurrences(arr, target) {
  if (arr.length === 0) return [];

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result.push(i);
    }
  }

  return result;
}
console.log(allOccurrences([5, 8, 3, 8, 2, 8, 10], 8));
console.log(allOccurrences([1, 2, 3], 5));
console.log(allOccurrences([], 5));

function countGreaterElements(arr, target) {
  if (arr.length === 0) return 0;

  let count = 0;
  for (let num of arr) {
    if (num > target) {
      count++;
    }
  }
  return count;
}
console.log(countGreaterElements([12, 45, 7, 89, 23, 56], 20));
console.log(countGreaterElements([1, 2, 3], 5));
console.log(countGreaterElements([10, 20, 30], 15));
console.log(countGreaterElements([], 5));

function rotateArray(arr, k) {
  if (arr.length === 0) return [];
  k = k % arr.length;
  let result = arr.slice(-k).concat(arr.slice(0, -k));
  return result;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([1, 2, 3], 1));
console.log(rotateArray([1, 2], 5));
console.log(rotateArray([], 2));

function missingNumber(arr) {
  let n = arr.length;
  let formula = (n * (n + 1)) / 2;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return formula - sum;
}
console.log(missingNumber([3, 0, 1]));

function twoSum(arr, target) {
  if (arr.length === 0) return null;
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

function findDuplicates(arr) {
  if (arr.length === 0) return [];
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 3]));
console.log(findDuplicates([1, 2, 3]));
console.log(findDuplicates([5, 5, 5, 5]));

function removeDuplicates(arr) {
  if (arr.length === 0) return [];

  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 3]));
console.log(removeDuplicates([5, 5, 5, 5]));
console.log(removeDuplicates([]));

function commerElements(a, b) {
  if (a.length === 0) return [];

  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      if (!result.includes(a[i])) {
        result.push(a[i]);
      }
    }
  }
  return result;
}
console.log(commerElements([1, 2, 2, 3, 4], [2, 2, 4, 6]));

function mergeArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return [];
  let result = [];
  for (let num of arr1) {
    result.push(num);
  }
  for (let num of arr2) {
    result.push(num);
  }
  return result;
}
console.log(mergeArrays([1, 2], [3, 4]));
console.log(mergeArrays([], [1, 2]));
console.log(mergeArrays([], []));
console.log(mergeArrays([1, 2], []));

function transposeMatrix(arr) {
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < arr.length; j++) {
      result[i].push(arr[j][i]);
    }
  }
  return result;
}
console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);

function arrayEquality(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
console.log(arrayEquality([1, 2, 3], [1, 2, 3]));
console.log(arrayEquality([1, 2, 3], [3, 2, 1]));
console.log(arrayEquality([1, 2], [1, 2, 3]));
console.log(arrayEquality([], []));

function maxProfit(prices) {
  let minPrice = prices[0];
  let max = 0;
  for (let num of prices) {
    if (num < minPrice) {
      minPrice = num;
    } else {
      let profit = num - minPrice;
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
console.log(mergeSortedArrays([1, 2, 4], [2, 3, 5]));

function moveZerosToEnd(arr) {
  let result = [];
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return [...result, ...zeros];
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

function leaders(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let bigger = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        bigger = false;
        break;
      }
    }

    if (bigger) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(leaders([16, 17, 4, 3, 5, 2]));

function rearrangePositiveNegative(arr) {
  let result = [];
  let positive = [];
  let negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      positive.push(arr[i]);
    }
  }

  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i]);
    result.push(negative[i]);
  }
  return result;
}
console.log(rearrangePositiveNegative([-1, 2, -3, 4]));

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
console.log(intersection([1, 2, 2, 3, 4], [2, 2, 4, 6]));

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
console.log(union([1, 1, 2], [2, 3, 3]));

function longestConsecutive(arr) {
  if (arr.length === 0) return [];
  let sortArr = arr.sort((a, b) => a - b);
  let current = 1;
  let max = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue;

    if (arr[i] === arr[i - 1] + 1) {
      current++;
    } else {
      current = 1;
    }
    max = Math.max(current, max);
  }
  return max;
}
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

function reverseString(str) {
  if (str.length === 0) return "";
  str = str.split("");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello"));

function reverseWords(str) {
  str = str.split(" ");
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join(" ");
}
console.log(reverseWords("Hello World"));

function longestWord(str) {
  str = str.split(" ");
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest;
}
console.log(longestWord("I love JavaScript programming"));
console.log(longestWord("The quick brown fox"));

function countVowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello"));
console.log(countVowels("javascript"));

function characterFrequency(str) {
  if (str.length === 0) return null;
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(characterFrequency("hello"));

function isPalindrome(str) {
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
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

function removeDuplicateCharacters(str) {
  let result = "";

  for (let key of str) {
    if (!result.includes(key)) {
      result += key;
    }
  }
  return result;
}
console.log(removeDuplicateCharacters("hello"));

function countWords(str) {
  if (str.length === 0) return 0;
  return (temp = str.split(" ").length);
}
console.log(countWords("I love JavaScript"));

function countOccurrences(str, char) {
  if (str.length === 0) return 0;
  let count = 0;
  let freq = {};

  for (let key of str) {
    if (key === char) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences("javascript", "a"));

function removeSpaces(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    result += str[i];
  }
  return result;
}
console.log(removeSpaces("hello world"));
