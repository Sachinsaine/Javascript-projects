function firstNonRepeating(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) {
      return key;
    }
  }
  return null;
}

console.log(firstNonRepeating("aabbcdde"));
console.log(firstNonRepeating("aabbcc"));
console.log(firstNonRepeating("javascript"));

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
console.log(intersection([1, 2, 3], [4, 5, 6]));

function maxFrequency(arr) {
  let freq = {};
  let max = 0;
  let result;
  for (let char of arr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      result = Number(key);
    }
  }
  return result;
}

console.log(maxFrequency([1, 2, 2, 3, 1, 4, 2]));

function reverseWords(str) {
  let temp = str.replace(/\s+/g, " ").split(" ").reverse().join(" ");
  return temp;
}

console.log(reverseWords("JavaScript is awesome"));

function firstDuplicateIndex(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return i;
    }
    seen[arr[i]] = true;
  }

  return -1;
}

console.log(firstDuplicateIndex([1, 2, 3, 2, 4, 5]));
console.log(firstDuplicateIndex([1, 2, 3, 4]));

function charFrequency(str) {
  let countFre = {};
  for (let char of str) {
    countFre[char] = (countFre[char] || 0) + 1;
  }
  return countFre;
}

console.log(charFrequency("javascript"));
console.log(charFrequency("hello"));

function findMissingLetter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i].charCodeAt(0);
    let next = arr[i + 1].charCodeAt(0);

    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return null;
}

console.log(findMissingLetter(["a", "b", "c", "e"]));
console.log(findMissingLetter(["m", "n", "p"]));

function union(arr1, arr2) {
  let result = [];
  let temp = [...arr1, ...arr2];
  for (let i = 0; i < temp.length; i++) {
    if (!result.includes(temp[i])) {
      result.push(temp[i]);
    }
  }
  return result;
}

console.log(union([1, 2, 3], [3, 4, 5]));
console.log(union([1, 1, 2], [2, 3]));

function containsDuplicate(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));

function singleNumber(arr) {
  let seen = {};
  for (let num of arr) {
    seen[num] = (seen[num] || 0) + 1;
  }
  for (let key in seen) {
    if (seen[key] === 1) {
      return Number(key);
    }
  }
}

console.log(singleNumber([2, 1, 4, 5, 2, 4, 1]));
console.log(singleNumber([7, 3, 7]));
