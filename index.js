function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result.length === 0 ? null : result;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

function containsDuplicate(arr) {
  if (arr.length === 0) return false;
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key of arr) {
    if (freq[key] > 1) {
      return true;
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1, 0, 0]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

function findAnagram(str1, str2) {
  let freq = {};
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!freq[char]) {
      return false;
    }
    freq[char]--;
  }
  return true;
}
console.log(findAnagram("anagram", "nagaram"));
console.log(findAnagram("rat", "car"));

function missingNumber(arr) {
  let n = arr.length;
  let actualSum = (n * (n + 1)) / 2;
  let currentSum = 0;
  for (let num of arr) {
    currentSum += num;
  }

  return actualSum - currentSum;
}
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([2, 4, 6, 0, 1, 3, 5, 7, 9]));

// Leetcode 5 problems are done.
