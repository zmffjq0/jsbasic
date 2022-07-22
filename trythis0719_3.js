const getTotalValue = function (arr, func, prev) {
  if (arr.length === 0 && prev === undefined) {
    throw new Error('원소 없음');
  }
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

const arr1 = [1, 0, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 2, 2];
const arr4 = ['a', 'b', 'c', 4, 'f'];
const arr5 = [-1, -4, 'a', 0, 'a', 'b'];

console.log(getTotalValue(arr1, (a, b) => a + b, 0));
console.log(getTotalValue(arr2, (a, b) => a + b));
// console.log(getTotalValue([], (a, b) => a + b));
console.log(getTotalValue(arr2, (a, b) => a * b, 1));
console.log(getTotalValue(arr3, (a, b) => a * b));
console.log(getTotalValue(arr4, (a, b) => a + b));
console.log(getTotalValue(arr4, (a, b) => a + b, 'if'));
console.log(getTotalValue([9999], (a, b) => a * b, 0));
console.log(getTotalValue(arr5, (a, b) => a + b));
console.log(getTotalValue(arr5, (a, b) => a * b));
console.log(getTotalValue(arr1, (a, b) => a / b));
console.log([].reduce((a, b) => a + b, 0));
console.log(
  //like filter
  getTotalValue(
    //
    [1, 2, 3],
    (acc, cur) => {
      if (cur % 2) acc.push(cur);
      return acc;
    },
    []
  )
);
console.log(
  getTotalValue(
    [1, 2, 3],
    (acc, cur) => {
      acc.push(cur % 2 ? '홀수' : '짝수');
      return acc;
    },
    []
  )
);
