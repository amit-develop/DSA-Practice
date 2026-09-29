/** Write a program to find the first pair in an array to be equal to 0
 * eg: [-1,-2,-3,-4,0,1,2,3];
 */

function findSumZeroPair(arr) {
  let leftIndx = 0;
  let rightIndx = arr.length - 1;
  while (leftIndx < rightIndx) {
    const sum = arr[leftIndx] + arr[rightIndx];
    if (sum === 0) {
      return [arr[leftIndx], arr[rightIndx]];
    } else if (sum > 0) {
      rightIndx--;
    } else {
      leftIndx++;
    }
  }
}

console.log(findSumZeroPair([-2,-3,1,-4,-1,0,2,3]));