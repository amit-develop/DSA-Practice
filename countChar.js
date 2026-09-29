/* Write a program to count the frequency of each character inside the given input string */

function countChar(str) {
  const resMap = new Map();
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== " ") {
      let char = str[i].toLowerCase();
      let val = resMap.get(char) ?? 0;
      resMap.set(char, ++val);
    }
  }
  return resMap;
}

//Self coded!

// function countCharacters(str) {
//   const resMap = new Map();
//   for (char of str) {
//     if ((char !== " " && (char.charCodeAt(0) < 48) || char.charCodeAt(0) > 57)) {
//       let val = resMap.get(char.toLowerCase()) ?? 0;
//       resMap.set(char.toLowerCase(), ++val);
//     }
//   }
//   return resMap;
// }

function countCharacters(str) {
  let res = new Map();
  for (char of str) {
    if (char !== " " && (char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57)) {
      const count = (res.get(char.toLowerCase()) ?? 0) + 1;
      res.set(char.toLowerCase(), count);
    }
  }
  return res;
}

// console.log(countChar("Hello hi world 1341231314"));
console.log(countCharacters("Hello hi world 1341231314"));
