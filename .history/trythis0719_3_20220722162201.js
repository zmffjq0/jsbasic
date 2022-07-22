const getTotalValue = function (arr, func, prev) {
  let curr = prev;
  for (let i of arr) {
    curr = func(curr, i);
  }
  return curr;
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 2, 2];
console.log(getTotalValue(arr1, (a, b) => a + b, 0));
console.log(getTotalValue(arr2, (a, b) => a + b, 0));
console.log(getTotalValue(arr2, (a, b) => a * b, 1));
console.log(getTotalValue(arr3, (a, b) => a * b, 1));
