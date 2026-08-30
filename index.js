function checkArmStrongNum(num) {
  let n = num.toString();
  let digits = n.length;
  let sum = 0;

  for (let num of n) {
    sum += Math.pow(parseInt(num), digits);
  }
  return sum === num;
}
console.log(checkArmStrongNum(153));
console.log(checkArmStrongNum(9474));

function isPerfectNum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(isPerfectNum(6));

function findSum(num) {
  let digits = num.toString();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}
console.log(findSum(1234));
console.log(findSum(567));

function reverseNum(num) {
  let temp = num.toString();
  let result = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    result += temp[i];
  }
  return Number(result);
}
console.log(reverseNum(1234));

function isPrimeNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNum(113));
console.log(isPrimeNum(123));

function LCM(num1, num2) {
  
}
console.log(LCM(4,6));
