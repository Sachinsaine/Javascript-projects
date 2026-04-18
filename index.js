function findPowerWithoutPow(a, b) {
  let sum = 1;
  if (!Number.isInteger(a, b)) {
    return "please enter valid integer";
  }
  for (let i = 1; i <= b; i++) {
    sum *= a;
  }
  return sum;
}
console.log(findPowerWithoutPow(2, 10));
console.log(findPowerWithoutPow(3, 4));
