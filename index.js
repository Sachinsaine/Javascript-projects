function isIncreasing(arr) {
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isIncreasing([1, 2, 3, 4]));
console.log(isIncreasing([1, 3, 2]));
console.log(isIncreasing([5]));
console.log(isIncreasing([2, 2, 3]));

function thirdLargest(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  let temp = result.sort((a, b) => a - b).reverse();
  return temp[2] === undefined ? null : temp[2];
}

console.log(thirdLargest([5, 5, 3, 2]));
console.log(thirdLargest([10, 5, 20, 8, 15]));
console.log(thirdLargest([1, 2]));
console.log(thirdLargest([7, 7, 7]));
