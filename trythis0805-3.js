const arr = [1, 2, 3, 4];

function deleteArray(arr, start, end) {
  if (end <= start) {
    console.log('Error!');
    return;
  }
  end = end ?? arr.length;

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

function deleteObjectArray(objArr, key, value) {
  const res = deepCopyObject(objArr);
  return typeof key === 'number'
    ? res.filter((_, idx) => idx !== key)
    : res.filter((el) => el[key] !== value);
}

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
console.log(users);
