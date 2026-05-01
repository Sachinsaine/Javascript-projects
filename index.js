// function armstrongNum(num) {
//   if (!Number.isInteger(num)) return "invalid input";
//   let getNum = num.toString().split("");
//   let power = getNum.length;
//   let sum = 0;

//   for (let i = 0; i < getNum.length; i++) {
//     sum += parseInt(getNum[i]) ** power;
//   }
//   return sum === num ? true : false;
// }
// console.log(armstrongNum(153));

function armstrongNum(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";

  let sum = 0;
  let digits = 0;
  let temp = num;

  let n = num;
  while (n > 0) {
    digits++;
    n = Math.floor(n / 10);
  }

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

console.log(armstrongNum(153));

function findPerfectNum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return num === sum ? "Perfect number" : "Not a perfect number";
}
console.log(findPerfectNum(6));
console.log(findPerfectNum(10));

function findSumOfDigits(num) {
  if (!Number.isInteger(num)) return "invalid input";
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
  }
  return sum;
}
console.log(findSumOfDigits(1234));

function reverseNum(num) {
  if (!Number.isInteger(num)) return "invalid input";

  let reverse = 0;
  let temp = Math.abs(num);

  while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return reverse;
}
console.log(reverseNum(1234));

function checkPalindrome(num) {
  if (!Number.isInteger(num)) return "invalid input";
  let reverse = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return reverse === num;
}
console.log(checkPalindrome(121));
console.log(checkPalindrome(123));

function findGCD(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "invalid input";

  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(findGCD(3, 5));

function findLCM(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "invalid input";
  if (a === 0 || b === 0) return 0;
  a = Math.abs(a);
  b = Math.abs(b);
  return (a * b) / findGCD(a, b);
}
console.log(findLCM(3, 5));

function countDigits(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";
  let count = 0;
  if (num === 0) return 0;
  while (num > 0) {
    let digit = num % 10;
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(countDigits(1234));

function findPower(num, power) {
  if (!Number.isInteger(num) || !Number.isInteger(power))
    return "invalid input";
  // return num ** power;

  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= num;
  }
  return result;
}
console.log(findPower(2, 10));

function checkPrime(num) {
  if (!Number.isInteger(num) || num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(7));
console.log(checkPrime(10));

function findFactors(num) {
  if (!Number.isInteger(num) || num < 0) return "invalid input";
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(findFactors(12));
