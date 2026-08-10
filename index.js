function frequency(arr) {
  if (arr.length === 0) return null;
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
console.log(frequency([1, 2, 2, 3, 1, 2]));

function firstRepeated(arr) {
  if (arr.length === 0) return null;
  let seen = {};
  for (let num of arr) {
    if (seen[num]) {
      return num;
    }
    seen[num] = 1;
  }
  return null;
}

console.log(firstRepeated([5, 3, 8, 3, 9, 5]));

function firstUnique(arr) {
  if (arr.length === 0) return null;
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] === 1) {
      return num;
    }
  }
  return null;
}
console.log(firstUnique([4, 5, 1, 2, 1, 4, 5]));

function twoSum(arr, target) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    let result = target - arr[i];
    if (seen[result] !== undefined) {
      return [seen[result], i];
    }
    seen[arr[i]] = i;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));

function countPairs(arr, target) {
  let seen = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let result = target - arr[i];

    if (seen[result] !== undefined) {
      count += seen[result];
    }

    seen[arr[i]] = (seen[arr[i]] || 0) + 1;
  }
  return count;
}
console.log(countPairs([1, 5, 7, -1, 5], 6));

function commonElements(arr1, arr2) {
  let seen = {};
  for (let num of arr1) {
    seen[num] = (seen[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (seen[num]) {
      console.log(num);
      delete seen[num];
    }
  }
}
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));

function findMissingChar(str1, str2) {
  let seen = {};
  for (let char of str1) {
    seen[char] = (seen[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!seen[char]) {
      return char;
    }
    seen[char]--;
  }
  return null;
}

console.log(findMissingChar("abcd", "abcde"));
console.log(findMissingChar("aabb", "abacb"));
console.log(findMissingChar("", "y"));

function mostFrequent(arr) {
  let seen = {};
  let max = 0;
  let result = null;

  for (let num of arr) {
    seen[num] = (seen[num] || 0) + 1;
  }

  for (let num of arr) {
    if (seen[num] > max) {
      max = seen[num];
      result = num;
    }
  }
  return result;
}

console.log(mostFrequent([1, 3, 2, 1, 4, 1, 3]));
console.log(mostFrequent([5, 5, 2, 2, 2, 3]));
