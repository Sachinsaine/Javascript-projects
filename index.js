function findEvenOdd(value) {
  if (value < 0) {
    console.log("number must be an integer");
    return;
  }
  if (value % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
findEvenOdd(-13);
findEvenOdd(3);
findEvenOdd(12);

function fingLargestNum(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}
console.log(fingLargestNum(24, 19, 38));

function reverseStr(str) {
  str = str.split("").reverse().join("");
  return str;
}
console.log(reverseStr("hello"));

function countVowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let countVewels = 0;
  let countConsonants = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (vowels.includes(str[i])) {
      countVewels++;
    }
    if (consonants.includes(str[i])) {
      countConsonants++;
    }
  }
  return `Number of Vowels ${countVewels}, Number of Consonants ${countConsonants}`;
}
console.log(countVowels("javascript"));

function findFactorial(value) {
  if (value < 0) {
    console.log("value must be an integer");
    return 0;
  }
  let fact = 1;
  for (let i = 1; i <= value; i++) {
    fact *= i;
  }
  return fact;
}
console.log(findFactorial(5));
console.log(findFactorial(6));
console.log(findFactorial(0));
console.log(findFactorial(-2));

function findSumOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
  }
  return sum;
}
console.log(findSumOfArr([1, 2, 3, 4]));

function findMaxNum(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(findMaxNum([5, 1, 9, 3]));
console.log(findMaxNum([58, 61, 90, 113]));
console.log(findMaxNum([85, 14, 69, 32]));

function removeDuplicates(arr) {
  //   let unique = [...new Set(arr)];
  //   return unique;

  let uniqueNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNum.includes(arr[i])) {
      uniqueNum.push(arr[i]);
    }
  }
  return uniqueNum;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

function checkPalindrome(str) {
  let findPldrm = str.split("").reverse().join("");
  return str === findPldrm ? "true" : "false";
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("car"));
console.log(checkPalindrome("racecar"));

function findSecondLargestNum(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargestNum([10, 5, 8, 20]));

function FizzBuzz(value) {
  for (let i = 0; i <= value; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      i;
    }
  }
}
console.log(FizzBuzz(100));

function countFrequency(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }
  return result;
}
console.log(countFrequency([1, 2, 2, 3, 1, 1]));

function findMissingNum(arr) {
  let max = arr[arr.length - 1];
  console.log(max);
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(findMissingNum([1, 2, 2, 4, 4, 5]));

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

function capitalizeFirstLetter(arr) {
  let splitArr = arr.split(" ");
  let result = splitArr.map((word) => word[0].toUpperCase() + word.slice(1));
  return result.join(" ");
}
console.log(capitalizeFirstLetter("hello world"));

function flatArr(arr) {
  return arr.flat(Infinity);
}
console.log(flatArr([1, [2, [3, 4]]]));
