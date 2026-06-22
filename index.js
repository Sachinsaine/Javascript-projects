function checkArmstrong(arr) {
  let temp = arr.toString();
  let getLength = temp.length;
  let sum = 0;

  for (let i = 0; i <= getLength; i++) {
    sum += Math.pow(parseInt(temp[i]), getLength);
  }
  return sum;
}
console.log(checkArmstrong(153));
