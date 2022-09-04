// 재귀로 짜보기
// function flat(arr, depth = 1) {
//   return arr.map((el) => (Array.isArray(el) ? ...el : el));
// }

// console.log(flat([1, 2, [3]]));

const arr = [1, 2, 3, 4];
const sum = arr.reduce((a, b) => (a += b));
console.log(sum);
