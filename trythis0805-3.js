const arr = [1, 2, 3, 4];

function deleteArray(arr, start, end) {
  if (end <= start) {
    console.log('Error!');
    return;
  }
  end = end ?? arr.length;

  return arr.filter((el, idx) => !(start <= idx && idx < end));
}

console.log(deleteArray(arr, 2));
console.log(deleteArray(arr, 1, 3));
// console.log(deleteArray(arr, 1, 0));

const users = [
  { id: 1, name: 'Hong' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Lee' },
];
