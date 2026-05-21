function findAverage(arr) {
  if (arr.length === 0) return 0;
  let arrLength = arr.length;
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum / arrLength;
}
console.log(findAverage([1, 2, 3, 4, 5]));

function findSecondSmallestNum(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}
console.log(findSecondSmallestNum([5, 1, 9, 3]));

function secondLargestNum(arr) {
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
console.log(secondLargestNum([5, 1, 9, 3]));

function mergeArr(a, b) {
  let result = [];
  let temp = [...a, ...b];
  for (let num of temp) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(mergeArr([1, 2, 3], [2, 3, 4]));

function findIntersection(a, b) {
  let result = [];
  for (let num of a) {
    if (b.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(findIntersection([1, 2, 3, 4], [2, 4, 6]));

function unionOfArr(a, b) {
  let temp = [...a, ...b];
  let result = [];
  for (let num of temp) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(unionOfArr([1, 2, 3], [2, 3, 4]));

function rotateArr(arr, num) {
  if (arr.length === 0) return 0;
  if (!Number.isInteger(num) || num < 0) return 0;
  let k = num % arr.length;

  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateArr([1, 2, 3, 4, 5], 2));

function leftRotationArr(arr, num) {
  if (arr.length === 0) return 0;
  if (!Number.isInteger(num) || num < 0) return 0;

  let k = num % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}
console.log(leftRotationArr([1, 2, 3, 4, 5], 2));

function checkArrSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkArrSorted([5, 6, 7, 8, 3]));
console.log(checkArrSorted([1, 2, 3, 4, 5]));

function printNumbers(num) {
  if (!Number.isInteger(num)) return "invalid input";
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}

printNumbers(5);

function printEvenNum(num) {
  if (!Number.isInteger(num) || num < 2) return "invalid input";
  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNum(10);

function findSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}
findSum(5);
