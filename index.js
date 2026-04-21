function checkPrimeNum(num) {
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
