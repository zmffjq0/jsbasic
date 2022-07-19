console.log([1, 2, 3].reduce((prev, curr) => (prev += curr), 0));
console.log([1, 2, 3, 4, 5].reduce((prev, curr) => (prev += curr), 0));
console.log([1, 2, 3, 4, 5].reduce((prev, curr) => (prev *= curr), 1));
console.log([2, 2, 2].reduce((prev, curr) => (prev *= curr), 1));

function getTotalValue(array, func) {
  return func(array);
}

function getSum(array) {
  let sum = 0;
  array.forEach((el) => {
    sum += el;
  });
  return sum;
}

function getMulti(array) {
  let sum = 1;
  array.forEach((el) => {
    sum *= el;
  });
  return sum;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 2, 2];

console.log(getTotalValue(arr1, getSum));
console.log(getTotalValue(arr2, getSum));
console.log(getTotalValue(arr2, getMulti));
console.log(getTotalValue(arr3, getMulti));
