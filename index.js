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
