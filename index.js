// // function armstrongNum(num) {
// //   if (!Number.isInteger(num)) return "invalid input";
// //   let getNum = num.toString().split("");
// //   let power = getNum.length;
// //   let sum = 0;

// //   for (let i = 0; i < getNum.length; i++) {
// //     sum += parseInt(getNum[i]) ** power;
// //   }
// //   return sum === num ? true : false;
// // }
// // console.log(armstrongNum(153));

// function armstrongNum(num) {
//   if (!Number.isInteger(num) || num < 0) return "invalid input";

//   let sum = 0;
//   let digits = 0;
//   let temp = num;

//   let n = num;
//   while (n > 0) {
//     digits++;
//     n = Math.floor(n / 10);
//   }

//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit ** digits;
//     temp = Math.floor(temp / 10);
//   }
//   return sum === num;
// }

// console.log(armstrongNum(153));

// function findPerfectNum(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return num === sum ? "Perfect number" : "Not a perfect number";
// }
// console.log(findPerfectNum(6));
// console.log(findPerfectNum(10));

// function findSumOfDigits(num) {
//   if (!Number.isInteger(num)) return "invalid input";
//   let sum = 0;
//   let temp = num;
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit;
//     temp = Math.floor(temp / 10);
//   }
//   return sum;
// }
// console.log(findSumOfDigits(1234));

// function reverseNum(num) {
//   if (!Number.isInteger(num)) return "invalid input";

//   let reverse = 0;
//   let temp = Math.abs(num);

//   while (temp > 0) {
//     let digit = temp % 10;
//     reverse = reverse * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }
//   return reverse;
// }
// console.log(reverseNum(1234));

// function checkPalindrome(num) {
//   if (!Number.isInteger(num)) return "invalid input";
//   let reverse = 0;
//   let temp = num;
//   while (temp > 0) {
//     let digit = temp % 10;
//     reverse = reverse * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }
//   return reverse === num;
// }
// console.log(checkPalindrome(121));
// console.log(checkPalindrome(123));

// function findGCD(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) return "invalid input";

//   a = Math.abs(a);
//   b = Math.abs(b);
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
// console.log(findGCD(3, 5));

// function findLCM(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) return "invalid input";
//   if (a === 0 || b === 0) return 0;
//   a = Math.abs(a);
//   b = Math.abs(b);
//   return (a * b) / findGCD(a, b);
// }
// console.log(findLCM(3, 5));

// function countDigits(num) {
//   if (!Number.isInteger(num) || num < 0) return "invalid input";
//   let count = 0;
//   if (num === 0) return 0;
//   while (num > 0) {
//     let digit = num % 10;
//     count++;
//     num = Math.floor(num / 10);
//   }
//   return count;
// }
// console.log(countDigits(1234));

// function findPower(num, power) {
//   if (!Number.isInteger(num) || !Number.isInteger(power))
//     return "invalid input";
//   // return num ** power;

//   let result = 1;
//   for (let i = 1; i <= power; i++) {
//     result *= num;
//   }
//   return result;
// }
// console.log(findPower(2, 10));

// function checkPrime(num) {
//   if (!Number.isInteger(num) || num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkPrime(7));
// console.log(checkPrime(10));

// function findFactors(num) {
//   if (!Number.isInteger(num) || num < 0) return "invalid input";
//   let factors = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }
// console.log(findFactors(12));

// function countWords(str) {
//   let count = str.trim().split(/\s+/);
//   return count.length;
// }
// console.log(countWords("hello world how are you"));

// function removeSpaces(str) {
//   let result = str.split(/\s+/).join("");
//   return result;
// }
// console.log(removeSpaces("hello world"));

// function isAnagram(a, b) {
//   a = a.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
//   b = b.toLowerCase().replace(/\s+/g, "").split("").sort().join("");

//   return a === b;
// }
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "wolrd"));

// function mostRepeatedChar(str) {
//   let maxCount = 0;
//   let fre = {};
//   let word = "";

//   for (let char of str) {
//     fre[char] = (fre[char] || 0) + 1;
//     if (fre[char] > maxCount) {
//       maxCount = fre[char];
//       word = char;
//     }
//   }
//   return word;
// }
// console.log(mostRepeatedChar("javascript"));

// function removeDuplicates(str) {
//   // return [...new Set(str)].join("");
//   let seen = {};
//   let word = "";
//   for (let char of str) {
//     if (!seen[char]) {
//       seen[char] = true;
//       word += char;
//     }
//   }
//   return word;
// }
// console.log(removeDuplicates("javascript"));

// function countCharacters(str) {
//   return str.trim().length;
// }

// // Expose globally for HTML use
// // window.countCharacters = countCharacters;

// function longestWord(str) {
//   let longest = "";
//   let temp = str.toString().split(" ");

//   for (let word of temp) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }
// console.log(longestWord("hello world javascript"));

// function countChar(str, a) {
//   if (str.length < 0) return 0;
//   let count = 0;
//   for (let char of str) {
//     if (char === a) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countChar("helloworld", "l"));

// function truncate(str, max) {
//   if (str.length <= max) return str;
//   return str.slice(0, max) + "...";
// }
// console.log(truncate("hello world", 5));

// function replaceVowels(str) {
//   let result = "";
//   let vowels = "aeiou";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       result += "*";
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(replaceVowels("javascript"));

// function onlyDigits(num) {
//   for (let char of num) {
//     if (char < "0" || char > "9") {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(onlyDigits("1234"));
// console.log(onlyDigits("1234fasda"));

// function findLongestWord(word) {
//   let longWord = "";
//   let splitWorld = word.split(" ");
//   console.log(splitWorld);
//   for (let word of splitWorld) {
//     if (word.length > longWord.length) {
//       longWord = word;
//     }
//   }
//   return longWord;
// }
// console.log(findLongestWord("Hello wolrd javascript sachinsaine"));

// function removeDuplicate(word) {
//   let freq = {};
//   let result = "";
//   for (let char of word) {
//     if (!freq[char]) {
//       freq[char] = true;
//       result += char;
//     }
//   }
//   return result;
// }
// console.log(removeDuplicate("javascript"));

// function mostRepeated(str) {
//   let result = "";
//   let max = 0;
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//     if (freq[char] > max) {
//       max = freq[char];
//       result = char;
//     }
//   }
//   return result;
// }
// console.log(mostRepeated("javascript"));

// let name = "John";
// let city = "Mumbai";

// console.log(`Hello ${name} form ${city}`);

// let a = 5;
// let b = 10;

// console.log(`The product is ${a * b}`);

// const user = {
//   name: "Sachin",
//   age: 25,
// };

// const { name: username, age } = user;

// console.log(`My name is ${username} and I am ${age} years old`);

// function test(...nums) {
//   console.log(nums);
// }

// test(1, 2, 3);

// function multiply(a = 1, b = 1) {
//   console.log(`${a * b}`);
// }
// multiply();
