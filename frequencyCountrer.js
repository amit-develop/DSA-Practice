//Count the frequency of numbers in a given array.
// *********************************************************************************//

function frequencyCounter(arr) {
  const freqMap = new Map();
  for (let num of arr) {
    let count = (freqMap.get(num) ?? 0) + 1;
    freqMap.set(num, count);
  }
  return freqMap;
}

console.log(frequencyCounter([1, 2, 4, 1, 5, 3, 2, 6, 8, 2, 4, 3]));
// *********************************************************************************//
/**
 *
 *
 */
//Given two arrays. Return true if each element in the first array has a squared value in the other array.
//eg: [1,2,3] -> [9,1,4]  ----> returns true.
//[1,2,3] -> [1,4] -----> returns false.
//[1,2,3,1] -> [1,9,4] ------> returns false. Since it doesnt have the second 1's squared value. Correct would be [1,9,4,1] in any order.
// *********************************************************************************//
/** This has an complexity of O(n^2) */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (num of arr1) {
    const correctIndex = arr2.indexOf(num ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));
console.log(same([1, 2, 3, 1], [9, 1, 4, 4]));
// *********************************************************************************//

// *********************************************************************************//
/** Other approach with O(n) complexity */

function sameSquare(arr1, arr2) {
  const freq1 = frequencyCounter(arr1);
  const freq2 = frequencyCounter(arr2);
  for (let num of arr1) {
    if (!freq2.get(num ** 2)) return false;
    if (freq1.get(num) !== freq2.get(num ** 2)) return false;
  }
  console.log(freq1);
  console.log(freq2);
  return true;
}
console.log("Other approach", sameSquare([1, 2, 3, 1], [9, 1, 4, 4]));
console.log("Other approach", sameSquare([1, 2, 3], [9, 1, 4]));
// *********************************************************************************//

// *********************************************************************************//
/**
 *
 * Write a code to establish two given string is an anagram.
 *
 */

function countrStrFreq(str) {
  const strMap = new Map();
  for (let char of str) {
    if (char !== " ") {
      strMap.set(char.toLowerCase(), (strMap.get(char.toLowerCase()) ?? 0) + 1);
    }
  }
  return strMap;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freqStr1 = countrStrFreq(str1);
  const freqStr2 = countrStrFreq(str2);
  console.log("freq1", freqStr1);
  console.log("freq2", freqStr2);
  for (let char of str1) {
    if (freqStr1.get(char) !== freqStr2.get(char)) return false;
  }
  return true;
}

const res = isAnagram("aaz", "zza");
if (res) {
  console.log("is Anagram");
} else {
  console.log("Not Anagram");
}
