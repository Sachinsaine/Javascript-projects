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
console.log(findMinOdd([-5, -3, -8]));
console.log(findMinOdd([]));

function reverseArray(arr) {
  if (arr.length === 0) return null;
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function isSorted(arr) {
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 2, 5, 4]));

function moveZeros(arr) {
  const nonZeros = [];
  const zeros = [];
  for (let num of arr) {
    if (num !== 0) {
      nonZeros.push(num);
    } else {
      zeros.push(num);
    }
  }
  return [...nonZeros, ...zeros];
}
console.log(moveZeros([0, 0, 1]));

function removeDuplicates(arr) {
  if (arr.length === 0) return [];
  const unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}
console.log(removeDuplicates(removeDuplicates([1, 2, 2, 3, 1, 4])));

function findFirstDuplicate(arr) {
  const duplicate = [];
  for (let num of arr) {
    if (duplicate.includes(num)) {
      return num;
    }
    duplicate.push(num);
  }
  return null;
}
console.log(findFirstDuplicate([2, 5, 1, 3, 5, 2]));

function findFrequency(arr) {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
console.log(findFrequency([1, 2, 2, 3, 1, 2]));

function twoSum(arr, target) {
  if (arr.length === 0) return null;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (obj[complement] !== undefined) {
      return [obj[complement], i];
    }
    obj[arr[i]] = i;
  }
  return null;
}
console.log(twoSum([2, 7, 11, 15], 9));

function containsDuplicate(arr) {
  if (arr.length === 0) return false;
  let seen = {};
  // for (let num of arr) {
  //   freq[num] = (freq[num] || 0) + 1;
  // }

  for (let key of arr) {
    if (seen[key]) {
      return true;
    }
    seen[key] = 1;
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3]));

function findFirstUnique(arr) {
  let obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  for (let num of arr) {
    if (obj[num] === 1) {
      return num;
    }
  }
  return null;
}
console.log(findFirstUnique([2, 3, 2, 4, 3, 5]));

function intersection(arr1, arr2) {
  let obj = {};
  const result = [];

  for (let num of arr1) {
    obj[num] = true;
  }

  for (let num of arr2) {
    if (obj[num]) {
      result.push(num);
      obj[num] = false;
    }
  }
  return result;
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
console.log(intersection([1, 2, 3], [2, 2, 2]));

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const freq = {};
  for (let char of a) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of b) {
    if (!freq[char]) {
      return false;
    }
    freq[char]--;
  }
  return true;
}
console.log(isAnagram("listen", "silent"));

function majorityElement(arr) {
  const arrLength = arr.length / 2;
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] > arrLength) {
      return num;
    }
  }
  return null;
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([5, 5, 5, 2, 5]));

function missingNumber(arr) {
  let obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (let i = 0; i <= arr.length; i++) {
    if (!obj[i]) {
      return i;
    }
  }
  return null;
}
console.log(missingNumber([3, 0, 1]));

function singleNumber(arr) {
  
}
console.log(singleNumber([2, 2, 1]));
