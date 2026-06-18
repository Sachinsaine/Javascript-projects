function firstUniqueChar(str) {
  const unique = "";
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key of str) {
    if (freq[key] === 1) {
      return key;
    }
  }
  return null;
}
console.log(firstUniqueChar("javascript"));
console.log(firstUniqueChar("aabbcc"));
console.log(firstUniqueChar("swiss"));

function maxChar(str) {
  let freq = {};
  let max = 0;
  let result = "";
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let key of str) {
    if (freq[key] > max) {
      max = freq[key];
      result = key;
    }
  }
  return result;
}
console.log(maxChar("javascript"));
console.log(maxChar("aaabbbbcc"));
console.log(maxChar("abcd"));
console.log(maxChar("aabb"));

function isAnagram(str1, str2) {
  let temp1 = str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  let temp2 = str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("");

  return temp1 === temp2 ? true : false;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("triangle", "integral"));
console.log(isAnagram("Dormitory", "Dirty Room"));

function firstDuplicate(arr) {
  let freq = new Set();

  for (let key of arr) {
    if (freq.has(key)) {
      return key;
    }
    freq.add(key);
  }
  return null;
}
console.log(firstDuplicate([2, 5, 1, 2, 3, 5, 1]));
console.log(firstDuplicate([1, 2, 3, 4]));
console.log(firstDuplicate([5, 5, 5, 5]));
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
