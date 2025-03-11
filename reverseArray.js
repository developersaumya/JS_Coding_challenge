// Reverse an Array

const arr = [1, 2, 3, 4];

// Without Using Built-in Functions
const revArr = [];
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
  revArr.push(arr[i]);
}
console.log(revArr);

// Using Built-in Functions
arr.reverse()
console.log(arr)
