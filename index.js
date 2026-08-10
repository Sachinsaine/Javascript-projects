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
    console.log(result);

    if (seen[result] !== undefined) {
      count += seen[result];
    }

    seen[arr[i]] = (seen[arr[i]] || 0) + 1;
  }
  return count;
}
console.log(countPairs([1, 5, 7, -1, 5], 6));
