// count the number of characters in a string in JavaScript

const str = 'saumya';
const res = {};
for (char of str) {
  if (res[char] >= 1) {
    res[char] += 1;
  } else {
    res[char] = 1;
  }
}
console.log(res);
