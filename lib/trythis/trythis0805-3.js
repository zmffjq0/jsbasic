const arr = [1, 2, 3, 4];

function deleteArray(arr, start, end = arr.length) {
  return arr.filter((_, idx) => !(start <= idx && idx < end));
}

console.log(deleteArray(arr, 2));
console.log(deleteArray(arr, 1, 3));
// console.log(deleteArray(arr, 1, 0));

console.log('==========================================');

const users = [
  { id: 1, name: 'Hong' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Lee' },
];

/**
 *
 * @param {*} objArr
 * @param {*} key
 * @param {*} value
 * @returns
 */
function deleteObjectArray(objArr, key, value) {
  const res = deepCopyObject(objArr);
  const isIndex = typeof key === 'number';
  return res.filter((el, idx) => (isIndex ? idx !== key : el[key] !== value));
}

/**
 *
 * @param {*} obj
 * @returns
 */
function deepCopyObject(obj) {
  const res = [];
  for (let i in obj) {
    if (typeof obj[i] !== 'Object') {
      res[i] = obj[i];
    } else {
      res[i] = deepCopyObject(obj[i]);
    }
  }
  return res;
}

console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, 'id', 2)); // Hong, Lee
console.log(deleteObjectArray(users, 'name', 'Lee')); // Hong, Kim
