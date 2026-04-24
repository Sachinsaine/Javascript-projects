function findArmstrong(arr) {
  if (!Number.isInteger(arr)) return [];
  let splitNum = arr.toString().split("");
  let numLength = splitNum.length;
  let sum = 0;

  for (let i = 0; i < splitNum.length; i++) {
    sum += parseInt(splitNum[i]) ** numLength;
  }
  return sum === arr ? "Armstrong number" : "Not an Armstrong number";
}
console.log(findArmstrong(153));

function findPerfectNum(num) {
  if (!Number.isInteger(num)) return "invalid input";
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num ? "Perfect number" : "Not perfect number";
}
console.log(findPerfectNum(6));

function sumOfDigits(num) {
  if (!Number.isInteger(num)) return "invalid input";
  let getNum = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < getNum.length; i++) {
    sum += parseInt(getNum[i]);
  }
  return sum;
}
console.log(sumOfDigits(1234));

function reverseString(str) {
  str = String(str);
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString(1234));

function palindrom(num) {
  let getNum = num.toString().split("").join("");
  return num === parseInt(getNum) ? "palindrome" : "not palindrome";
}
console.log(palindrom(121));

function findLCM(num1, num2) {
  let max = Math.max(num1, num2);
  while (true) {
    if (max % num1 === 0 && max % num2 === 0) {
      return max;
    }
    max++;
  }
  return max;
}
console.log(findLCM(4, 6));

function countDigits(num) {
  let getNum = num.toString().split("");
  return getNum.length;
}
console.log(countDigits(1234));

function findPower(num1, num2) {
  let result = 1;
  for (let i = 1; i <= num2; i++) {
    result *= num1;
  }
  return result;
}
console.log(findPower(2, 10));

function primeNum(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNum(7));
console.log(primeNum(9));

function findFactors(num) {
  if (!Number.isInteger(num) || num < 2) return "invalid input";
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(findFactors(12));
