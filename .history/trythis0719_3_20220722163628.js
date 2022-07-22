const getTotalValue = function (arr, func, prev) {
  let prevExist = false;
  if (!(prev === undefined)) {
    prevExist = true;
  }
  prev = prev ?? arr[0];
  let curr = prev;
  for (let i = 0; i < arr.length; i++) {
    if (!prevExist && i === 0) {
      continue;
    }
    curr = func(curr, arr[i]);
  }
  return curr;
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 2, 2];
const arr4 = ['a', 'b', 'c'];
console.log(getTotalValue(arr1, (a, b) => a + b, 0));
console.log(getTotalValue(arr2, (a, b) => a + b));
console.log(getTotalValue(arr2, (a, b) => a * b, 1));
console.log(getTotalValue(arr3, (a, b) => a * b));
console.log(getTotalValue(arr3, (a, b) => a + b));
