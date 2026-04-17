function findEvenOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      result.push("number must be an integer");
    } else if (arr[i] % 2 === 0) {
      result.push("Even");
    } else {
      result.push("Odd");
    }
  }
  return result;
}
console.log(findEvenOdd([-13, 3, 12]));

function findLargestNum(arr) {
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  return large;
}
console.log(findLargestNum([24, 19, 38]));

function reverseString(str) {
  str = str.toString();
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function countVowelConsonant(str) {
  str = str.toLowerCase().trim();
  let vowels = "aeiou";
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let countVowel = 0;
  let countConsonant = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(vowels.includes(str[i]));
    if (vowels.includes(str[i])) {
      countVowel++;
    } else if (consonants.includes(str[i])) {
      countConsonant++;
    }
  }
  return `Number of Vowels ${countVowel}, Number of Consonants ${countConsonant}`;
}
console.log(countVowelConsonant("javascript"));

function findFactorial(num) {
  let factorial = 1;
  if (!Number.isInteger(num) || num < 0) {
    return "number must be an integer";
  }
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(findFactorial(5));

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum([1, 2, 3, 4]));

function findMaxNum(arr) {
  // return Math.max(...arr);

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxNum([5, 1, 9, 3]));
console.log(findMaxNum([58, 61, 90, 113]));
console.log(findMaxNum([85, 14, 69, 32]));

function findSecondLargestNum(arr) {
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
console.log(findSecondLargestNum([5, 1, 9, 3]));
console.log(findSecondLargestNum([58, 61, 90, 113]));
console.log(findSecondLargestNum([85, 14, 69, 32]));

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

function checkPalindrome(str) {
  str = str.toString().trim();
  let result = str.split("").reverse().join("");
  return str === result ? true : false;
}
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("car"));
console.log(checkPalindrome("reacecar"));

function findSecondLargestNum(arr) {
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
console.log(findSecondLargestNum([10, 5, 8, 20]));

function FizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
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
  let lengthArr = arr.length + 1;

  for (let i = 1; i <= lengthArr; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(findMissingNum([1, 2, 3, 4, 6]));

function capitalizeFirstLetter(str) {
  let splitStr = str.split(" ");
  let result = splitStr.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );
  return result.join(" ");
}
console.log(capitalizeFirstLetter("hello world"));

function flatArr(arr) {
  return arr.flat(Infinity);
}
console.log(flatArr([1, [2, [3, 4]]]));
