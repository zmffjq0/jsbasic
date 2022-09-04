// original code refactoring
const reduce = (arr, func, prev) => {
  if (!Array.isArray(arr)) {
    console.error('Array is empty!!', arr);
    return;
  }
  let i = prev || prev === '' ? 0 : 1;
  let curr = prev || prev === '' ? prev : arr[0];
  for (; i < arr.length; i++) {
    curr = func(curr, arr[i]);
  }
  return curr;
};
// console.log([1, 2, 3, 4].reduce((a, b) => a + b, ''));
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, ''));
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, null));
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, undefined));
// console.log([1, 2, 3, 4].reduce((a, b) => a + b, undefined));
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// 성호님 코드
const reduce2 = (arr, func, prev) => {
  if (arr.length === 0 && prev === undefined) {
    throw new Error('Array is empty!!');
  }
  let i = 0;
  let curr = prev ?? ((i += 1), arr[0]);
  for (; i < arr.length; i++) {
    curr = func(curr, arr[i]);
  }
  return curr;
};

// original code
const reduce3 = (arr, func, prev) => {
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

// Test Case
const assertReduce = (arr, func, prev) => {
  const myReduce = reduce(arr, func, prev);
  const expVal = arr.reduce(func, prev);
  console.log(arr, `${func}, ${prev} ==> ${myReduce === expVal}`);
};
assertReduce([1, 2, 3], (a, b) => a + b, 0);
assertReduce([1, 2, 3], (a, b) => a, undefined);

// 두개가 왜 다를까?
console.log(
  [1, 2, 3].reduce((a, b) => a),
  '!!'
);
console.log(
  [1, 2, 3].reduce((a, b) => a, undefined),
  '!!'
);
// !!

console.log(undefined);
// const arr1 = [1, 0, 2, 3];
// const arr2 = [1, 2, 3, 4, 5];
// const arr3 = [2, 2, 2];
// const arr4 = ['a', 'b', 'c', 4, 'f'];
// const arr5 = [-1, -4, 'a', 0, 'a', 'b'];
// const arr6 = [0, '0', 1, 2, 3];

// // console.log('reduce => *******************************************');
// console.log(
//   arr6,
//   reduce3(arr6, (a, b) => a + b, 0)
// );
// console.log(
//   arr1,
//   reduce3(arr1, (a, b) => a + b, 0)
// );
// console.log(
//   arr2,
//   reduce3(arr2, (a, b) => a + b)
// );
// // console.log(
// //   undefined,
// //   reduce3(undefined, (a, b) => a + b, 1)
// // );
// // console.log([].arr, reduce3((a, b) => a + b, 0));
// console.log(
//   arr2,
//   reduce3(arr2, (a, b) => a * b, 1)
// );
// console.log(
//   arr3,
//   reduce3(arr3, (a, b) => a * b)
// );
// console.log(
//   arr4,
//   reduce3(arr4, (a, b) => a + b)
// );
// console.log(
//   arr4,
//   reduce3(arr4, (a, b) => a + b, 'if')
// );
// console.log(
//   [9999],
//   reduce3([9999, 3999], (a, b) => a * b, 0)
// );
// console.log(
//   arr5,
//   reduce3(arr5, (a, b) => a + b)
// );
// console.log(
//   arr5,
//   reduce3(arr5, (a, b) => a * b)
// );
// console.log(
//   arr1,
//   reduce3(arr1, (a, b) => a / b)
// );
// // console.log([].reduce3((a, b) => a + b, 0));
// console.log(
//   [1, 2, 3],
//   //like filter
//   reduce3(
//     //
//     [1, 2, 3],
//     (acc, cur) => {
//       if (cur % 2) acc.push(cur);
//       return acc;
//     },
//     []
//   )
// );
// console.log(
//   [1, 2, 3],
//   reduce(
//     [1, 2, 3],
//     (acc, cur) => {
//       acc.push(cur % 2 ? '홀수' : '짝수');
//       return acc;
//     },
//     []
//   )
// );

// console.log('reduce2 => *******************************************');
// console.log(reduce2(arr1, (a, b) => a + b, 0));
// console.log(reduce2(arr2, (a, b) => a + b));
// // console.log(reduce2([], (a, b) => a + b));
// console.log(reduce2(arr2, (a, b) => a * b, 1));
// console.log(reduce2(arr3, (a, b) => a * b));
// console.log(reduce2(arr4, (a, b) => a + b));
// console.log(reduce2(arr4, (a, b) => a + b, 'if'));
// console.log(reduce2([9999], (a, b) => a * b, 0));
// console.log(reduce2(arr5, (a, b) => a + b));
// console.log(reduce2(arr5, (a, b) => a * b));
// console.log(reduce2(arr1, (a, b) => a / b));
// console.log(
//   //like filter
//   reduce2(
//     //
//     [1, 2, 3],
//     (acc, cur) => {
//       if (cur % 2) acc.push(cur);
//       return acc;
//     },
//     []
//   )
// );
// console.log(
//   reduce2(
//     [1, 2, 3],
//     (acc, cur) => {
//       acc.push(cur % 2 ? '홀수' : '짝수');
//       return acc;
//     },
//     []
//   )
// );

const arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  console.log(key, arr[key]);
}

for (const i of arr) {
  console.log(i, arr[i]);
}
