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

function singleNumber(arr) {
  if (arr.length === 0) return null;
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key of arr) {
    if (freq[key] === 1) {
      return key;
    }
  }
  return null;
}
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

function isPalindrome(str) {
  let temp = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let revese = temp.split("").reverse("").join("");
  return temp === revese;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("Race a Car"));

function longestCommonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

function moveZeroes(nums) {
  if (nums.length === 0) return null;
  let zeros = [];
  let nonZeros = [];
  for (let num of nums) {
    if (num === 0) {
      zeros.push(num);
    } else {
      nonZeros.push(num);
    }
  }
  return [...nonZeros, ...zeros];
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

function removeDuplicates(arr) {
  if (arr.length == 0) return null;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));

function sortedSquares(arr) {
  if (arr.length === 0) return null;

  let temp = arr.map((num) => num * num);
  return temp.sort((a, b) => a - b);
}
console.log(sortedSquares([3, 10]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));

function merge(nums1, m, nums2, n) {
  let temp = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b);
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    nums1[i] = temp[i];
  }
  return nums1;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

function palindrome(num) {
  let temp = String(num);
  let result = temp.split("").reverse().join("");
  return num === Number(result);
  console.log(temp);
}
console.log(palindrome(121));

function twoSum(l1, l2) {
  // let temp = [...l1, ...l2];
  let temp = [];
  for (let i = 0; i < l1.length; i++) {
    if (l1[0] === l2[0]) {
      temp.push(l1[i]);
    }
  }
  return temp;
}
console.log(twoSum([2, 4, 3], [5, 6, 4]));
