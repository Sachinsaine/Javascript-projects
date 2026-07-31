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
