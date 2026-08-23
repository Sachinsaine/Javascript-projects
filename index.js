function maxSubarraySum(arr, k) {
  if (arr.length < k || k <= 0) return 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < k) {
    sum += arr[right];
    right++;
  }

  let max = sum;
  while (right < arr.length) {
    sum -= arr[left];
    left++;

    sum += arr[right];
    right++;

    max = Math.max(max, sum);
  }
  return max;
}
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));

function longestUniqueSubstring(str) {
  let left = 0;
  let right = 0;
  let seen = {};

  let max = 0;
  while (right < str.length) {
    while (seen[str[right]]) {
      delete seen[str[left]];
      left++;
    }
    seen[str[right]] = true;
    right++;

    max = Math.max(max, right - left);
  }
  return max;
}

console.log(longestUniqueSubstring("abcabcbb"));
console.log(longestUniqueSubstring("bbbbb"));
console.log(longestUniqueSubstring("pwwkew"));

function longestSubarray(arr, k) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let max = 0;

  while (right < arr.length) {
    sum += arr[right];
    if (sum > k) {
      sum -= arr[left];
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}
console.log(longestSubarray([1, 2, 1, 0, 1, 1, 0], 4));
console.log(longestSubarray([2, 1, 5, 1, 1, 3], 5));

function minSubarrayLength(arr, target) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let min = Infinity;

  while (right < arr.length) {
    sum += arr[right];

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= arr[left];
      left++;
    }

    right++;
  }
  return min;
}

console.log(minSubarrayLength([2, 3, 1, 2, 4, 3], 7));
console.log(minSubarrayLength([1, 4, 4], 4));

function firstDuplicate(arr) {
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
console.log(firstDuplicate([2, 5, 1, 2, 3, 5, 1]));

function firstNonRepeatingNum(arr) {
  if (arr.length === 0) return null;

  let freq = {};
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
console.log(firstNonRepeatingNum([4, 5, 1, 2, 0, 4, 1, 2]));

function elementAppearTwice(arr) {
  if (arr.length === 0) return null;

  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] === 2) {
      return num;
    }
  }
  return null;
}
console.log(elementAppearTwice([1, 3, 4, 3, 2, 1, 5, 4]));

function findIndex(arr) {
  if (arr.length === 0) return null;

  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      return i;
    }
    freq[arr[i]] = true;
  }

  return null;
}
console.log(findIndex([5, 3, 4, 3, 2, 5]));

function firstElementFreq(arr) {
  if (arr.length === 0) return null;

  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      return [arr[i], i];
    }
    freq[arr[i]] = true;
  }
  return null;
}
console.log(firstElementFreq([7, 2, 5, 2, 9, 7]));

function longestConsecutive(arr) {
  if (arr.length === 0) return null;
  let temp = new Set(arr);
  let longest = 0;

  for (let num of temp) {
    if (!temp.has(num - 1)) {
      let current = num;
      let count = 1;

      while (temp.has(current + 1)) {
        current++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }
  return longest;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

function findMissing(arr) {
  if (arr.length === 0) return null;

  let n = arr.length + 1;
  let temp = (n * (n + 1)) / 2;
  let curr = 0;

  for (let num of arr) {
    curr += num;
  }
  return temp - curr;
}
console.log(findMissing([1, 2, 3, 5, 6]));

function MaximumSubarraySum(arr) {
  if (arr.length === 0) return null;
  let sum = 0;
  let maxSum = arr[0];
  for (let num of arr) {
    sum = Math.max(num, sum + num);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
console.log(MaximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function twoSum(arr, target) {
//   if (arr.length === 0) return null;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }
// console.log(twoSum([2, 7, 11, 15], 9));

function twosum(arr) {
  
}
console.log(twosum([2, 7, 11, 15], 9));