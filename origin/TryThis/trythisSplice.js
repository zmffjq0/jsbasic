// splice 함수를 순수 함수로 구현하시오.

const arr2 = [1, 5];

function splice(arr, start, cnt = arr.length, ...args) {
  const res =
    cnt === 0
      ? [...arr]
      : arr.filter((_, idx) => !(start <= idx && idx <= start + cnt - 1));
  if (args.length !== 0) {
    const len = res.length;
    for (let i = len - 1; i >= start; i--) {
      res[i + args.length - 1] = res[i];
    }
    res[start] = args;
  }
  return res.flat(Infinity);
}
// console.log(a5);

const arr = [1, 2, 3, 4, 5];
const a1 = splice(arr, 1, 3); // a1 = [1, 5]
const a2 = splice(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
const a3 = splice(a2, 2); // a3 = [1, 2]
const a4 = splice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
const a5 = splice(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]
console.log(splice([1, 2, 5, 7, 8], 2, 0, 3, 4));

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

const splice2 = (arr, idx, delCnt = arr.length - 1, ...insertions) => [
  ...arr.slice(0, idx),
  ...insertions,
  ...arr.slice(idx + delCnt),
];
