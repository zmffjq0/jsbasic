// console.log([1, 2, 3].reduce((prev, curr) => (prev += curr), 0));
// console.log([1, 2, 3, 4, 5].reduce((prev, curr) => (prev += curr), 0));
// console.log([1, 2, 3, 4, 5].reduce((prev, curr) => (prev *= curr), 1));
// console.log([2, 2, 2].reduce((prev, curr) => (prev *= curr), 1));

// function getTotalValue(array, func) {
//   return func(array);
// }
const getTotalValue = function (arr, func, prev) {
  let curr = prev;
  for (let i of arr) {
    curr = func(curr, i);
  }
  return curr;
};

function getSum(array, start) {
  let sum = start;
  array.forEach((el) => {
    sum += el;
  });
  return sum;
}

function getMulti(array, start) {
  let sum = start;
  array.forEach((el) => {
    sum *= el;
  });
  return sum;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 2, 2];
console.log(getTotalValue(arr1, (a, b) => a + b, 0));
console.log(getTotalValue(arr2, (a, b) => a + b, 0));
console.log(getTotalValue(arr2, (a, b) => a * b, 1));
console.log(getTotalValue(arr3, (a, b) => a * b, 1));
