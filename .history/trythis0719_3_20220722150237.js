// console.log([1, 2, 3].reduce((prev, curr) => (prev += curr), 0));
// console.log([1, 2, 3, 4, 5].reduce((prev, curr) => (prev += curr), 0));
// console.log([1, 2, 3, 4, 5].reduce((prev, curr) => (prev *= curr), 1));
// console.log([2, 2, 2].reduce((prev, curr) => (prev *= curr), 1));

// function getTotalValue(array, func) {
//   return func(array);
// }
const getTotalValue = (array, func, start) => func(array, start);

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
console.log(getTotalValue(arr1, getSum, 0));
console.log(getTotalValue(arr2, getSum, 0));
console.log(getTotalValue(arr2, getMulti, 1));
console.log(getTotalValue(arr3, getMulti, 1));
