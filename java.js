function Armstrong(num) {
  let splitNum = num.toString().split("");

  let result = 0;
  let numLength = splitNum.length;

  for (let i = 0; i < splitNum.length; i++) {
    result += splitNum[i] ** numLength;
  }
  return result === num ? "armstrong number" : "not a armstrong number";
}
console.log(Armstrong(153));

function PerfectNum(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result === num ? "perfect number" : "not a perfect number";
}
console.log(PerfectNum(6));
console.log(PerfectNum(10));

function sumOfDigits(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";

  let sum = 0;
  let getNum = num.toString().split("");
  for (let i = 0; i < getNum.length; i++) {
    sum += parseInt(getNum[i]);
  }
  return sum;
}
console.log(sumOfDigits(1234));

function reverseStr(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";

  let splitStr = num.toString().split("").reverse().join("");
  return parseInt(splitStr);
}
console.log(reverseStr(1234));

function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";

  let splitStr = num.toString().split("").reverse().join("");
  return num === parseInt(splitStr) ? "palindrome" : "not palindrome";
}
console.log(palindrome(121));
console.log(palindrome(123));

function LCM(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}
console.log(LCM(4, 6));
console.log(LCM(3, 5));

function countDigitsInNumber(num) {
  let splitNum = num.toString().split("");
  return splitNum.length;
}
console.log(countDigitsInNumber(1234));
console.log(countDigitsInNumber(99999));

function findPower(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
}
console.log(findPower(2, 10));

function checkPrimeNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrimeNum(7));
console.log(checkPrimeNum(10));

function findFactors(num) {
  if (!Number.isInteger(num) || num <= 1) return "invalid input";
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(findFactors(12));
console.log(findFactors(16));
