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
  
}
console.log(firstNonRepeatingNum([4, 5, 1, 2, 0, 4, 1, 2]));
