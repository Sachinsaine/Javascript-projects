function leastFrequentChar(str) {
  if (str.length === 0) return null;
  let freq = {};
  let minFreq = Infinity;
  let result;

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] < minFreq) {
      minFreq = freq[key];
    }
  }

  for (let num of str) {
    if (freq[num] === minFreq) {
      return num;
    }
  }
  return null;
}
console.log(leastFrequentChar("javascript"));
console.log(leastFrequentChar("aabbccc"));
console.log(leastFrequentChar("zzzz"));

function lastOdd(arr) {
  if (arr.length === 0) return null;
  let oddNum = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      oddNum.push(num);
    }
  }
  return oddNum.length > 0 ? oddNum.pop() : null;
}

console.log(lastOdd([2, 4, 7, 8, 9]));
console.log(lastOdd([2, 4, 6]));
console.log(lastOdd([1, 2, 3]));
console.log(lastOdd([5]));

function groupByLength(arr) {
  let group = {};

  for (let char of arr) {
    let charLength = char.length;

    if (!group[charLength]) {
      group[charLength] = [];
    }
    group[charLength].push(char);
  }

  return group;
}

console.log(groupByLength(["cat", "dog", "elephant", "bat"]));
console.log(groupByLength(["hi", "hello", "hey"]));
console.log(groupByLength([]));

function hasPairDifference(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasPairDifference([1, 5, 3, 4, 2], 2));
console.log(hasPairDifference([1, 2, 3], 5));
console.log(hasPairDifference([8, 12, 16, 4], 4));
console.log(hasPairDifference([10], 2));
