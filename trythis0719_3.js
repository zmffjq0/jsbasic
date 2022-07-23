const reduce = (arr, func, prev) => {
  if (arr.length === 0 && prev === undefined) {
    throw new Error('Array is empty!!');
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

const reduce2 = (arr, func, prev) => {
  if (arr.length === 0 && prev === undefined) {
    throw new Error('Array is empty!!');
  }
  let i = 0;
  prev = prev ?? ((i += 1), arr[0]);
  let curr = prev;
  for (; i < arr.length; i++) {
    curr = func(curr, arr[i]);
  }
  return curr;
};

const arr1 = [1, 0, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 2, 2];
const arr4 = ['a', 'b', 'c', 4, 'f'];
const arr5 = [-1, -4, 'a', 0, 'a', 'b'];

console.log('reduce => *******************************************');

console.log(reduce(arr1, (a, b) => a + b, 0));
console.log(reduce(arr2, (a, b) => a + b));
// console.log(reduce([], (a, b) => a + b));
console.log(reduce(arr2, (a, b) => a * b, 1));
console.log(reduce(arr3, (a, b) => a * b));
console.log(reduce(arr4, (a, b) => a + b));
console.log(reduce(arr4, (a, b) => a + b, 'if'));
console.log(reduce([9999], (a, b) => a * b, 0));
console.log(reduce(arr5, (a, b) => a + b));
console.log(reduce(arr5, (a, b) => a * b));
console.log(reduce(arr1, (a, b) => a / b));
console.log([].reduce((a, b) => a + b, 0));
console.log(
  //like filter
  reduce(
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
  reduce(
    [1, 2, 3],
    (acc, cur) => {
      acc.push(cur % 2 ? '홀수' : '짝수');
      return acc;
    },
    []
  )
);

console.log('reduce2 => *******************************************');
console.log(reduce2(arr1, (a, b) => a + b, 0));
console.log(reduce2(arr2, (a, b) => a + b));
// console.log(reduce2([], (a, b) => a + b));
console.log(reduce2(arr2, (a, b) => a * b, 1));
console.log(reduce2(arr3, (a, b) => a * b));
console.log(reduce2(arr4, (a, b) => a + b));
console.log(reduce2(arr4, (a, b) => a + b, 'if'));
console.log(reduce2([9999], (a, b) => a * b, 0));
console.log(reduce2(arr5, (a, b) => a + b));
console.log(reduce2(arr5, (a, b) => a * b));
console.log(reduce2(arr1, (a, b) => a / b));
console.log(
  //like filter
  reduce2(
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
  reduce2(
    [1, 2, 3],
    (acc, cur) => {
      acc.push(cur % 2 ? '홀수' : '짝수');
      return acc;
    },
    []
  )
);
