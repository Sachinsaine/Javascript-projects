function isIncreasing(arr) {
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isIncreasing([1, 2, 3, 4]));
console.log(isIncreasing([1, 3, 2]));
console.log(isIncreasing([5]));
console.log(isIncreasing([2, 2, 3]));

function thirdLargest(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  let temp = result.sort((a, b) => a - b).reverse();
  return temp[2] === undefined ? null : temp[2];
}

console.log(thirdLargest([5, 5, 3, 2]));
console.log(thirdLargest([10, 5, 20, 8, 15]));
console.log(thirdLargest([1, 2]));
console.log(thirdLargest([7, 7, 7]));

function firstCharAppearingTwice(str) {
  let freq = {};
  for (let num of str) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 2) {
      return char;
    }
  }
  return null;
}

console.log(firstCharAppearingTwice("abccde"));
console.log(firstCharAppearingTwice("aabbc"));
console.log(firstCharAppearingTwice("abcdef"));
console.log(firstCharAppearingTwice("aabccdd"));

function groupNumbers(arr) {
  let group = {
    positive: [],
    negative: [],
    zero: [],
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      group.positive.push(arr[i]);
    } else if (arr[i] < 0) {
      group.negative.push(arr[i]);
    } else {
      group.zero.push(arr[i]);
    }
  }
  return group;
}

console.log(groupNumbers([1, -2, 0, 5, -3]));
console.log(groupNumbers([0, 0, 1]));
console.log(groupNumbers([-1, -2, -3]));

function mostFrequentWord(arr) {
  let freq = {};
  let max = 0;
  let result = "";
  for (let char of arr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key of arr) {
    if (freq[key] > max) {
      max = freq[key];
      result = key;
    }
  }
  return result === "" ? null : result;
}

console.log(mostFrequentWord(["apple", "banana", "apple", "orange"]));
console.log(mostFrequentWord(["cat", "dog", "cat", "dog"]));
console.log(mostFrequentWord(["hello"]));
console.log(mostFrequentWord([]));

function lastNonRepeatingChar(str) {
  let freq = {};
  let result = [];
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let num of str) {
    if (freq[num] === 1) {
      result.push(num);
    }
  }
  return result.length === 0 ? null : result.pop();
}

console.log(lastNonRepeatingChar("abacbd"));
console.log(lastNonRepeatingChar("aabb"));
console.log(lastNonRepeatingChar("abc"));
console.log(lastNonRepeatingChar("aabc"));
