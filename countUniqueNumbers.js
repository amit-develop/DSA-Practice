/** Count the number of unique value in an array
 * eg: [1, 1, 2, 3, 4, 4 ,4 ,5] -> There are 5 unique elements in the array.
 */

function frequencyCounter(arr) {
  const res = new Map();
  for (el of arr) {
    const count = (res.get(el) ?? 0) + 1;
    res.set(el, count);
  }
  return res;
}

function countUniqueNumbers(arr) {
  const frequencyMap = frequencyCounter(arr);
  return frequencyMap.size;
}
// console.log(countUniqueNumbers([1, 1, 2, 3, 4, 4 ,4 ,5]));

function CountUniqueUsingMultiplePointers(arr) {
  let newArr = [...arr];
  let firstPointer = 0;

  for (let secondPointer = 1; secondPointer < arr.length; secondPointer++) {
    if (newArr[firstPointer] !== newArr[secondPointer]) {
      firstPointer++;
      newArr[firstPointer] = newArr[secondPointer];
    }
  }
  return firstPointer + 1;
}
console.log(CountUniqueUsingMultiplePointers([1, 1, 1, 2, 3, 4, 4, 4, 5]));
