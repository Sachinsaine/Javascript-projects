function findLargestNum(arr) {
  if (arr.length === 0) return null;
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}
console.log(findLargestNum([8, 3, 12, 5, 9]));

function findSecondLargest(arr) {
  if (arr.length <= 1) return null;
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
  return secondLargest === Infinity ? null : secondLargest;
}
console.log(findSecondLargest([8, 3, 12, 15, 9]));

function findSmallestNum(arr) {
  if (arr.length <= 0) return null;
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallestNum([8, 3, 12, 5, 9]));

function findSecondSmallest(arr) {
  if (arr.length <= 1) return null;
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
  return secondSmallest === Infinity ? null : secondSmallest;
}

console.log(findSecondSmallest([8, 3, 12, 5, 9]));
console.log(findSecondSmallest([5, 5, 5, 5]));

function countEvenNumbers(arr) {
  if (arr.length === 0) return null;
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));

function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

function averageOfArray(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(averageOfArray([2, 4, 6, 8]));

function countOddNumbers(arr) {
  if (arr.length === 0) return 0;

  let countOddNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      countOddNum++;
    }
  }
  return countOddNum;
}
console.log(countOddNumbers([1, 2, 3, 4, 5, 6]));

function findMaxEven(arr) {
  if (arr.length === 0) return null;
  let maxNum = -Infinity;
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
  }
  return maxNum === -Infinity ? null : maxNum;
}
console.log(findMaxEven([8, 3, 12, 5, 9, 21, 6]));
console.log(findMaxEven([1, 3, 5]));
console.log(findMaxEven([-2, -4, -1]));
console.log(findMaxEven([]));

function findMinOdd(arr) {
  if (arr.length === 0) return null;
  let minNum = Infinity;
  for (let num of arr) {
    if (num % 2 !== 0) {
      if (num < minNum) {
        minNum = num;
      }
    }
  }
  return minNum === Infinity ? null : minNum;
}
console.log(findMinOdd([8, 3, 12, 5, 9, 20, 1]));
console.log(findMinOdd([2, 4, 6]));
console.log(findMinOdd([7]));
console.log(findMinOdd([-5, -3, -8]));
console.log(findMinOdd([]));
