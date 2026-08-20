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
