/* range 함수 구현하기
range(1, 10, 2); // [1, 3, 5, 7, 9]
range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1);     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, ..., 99, 100]

console.time,
console.timeEnd
사용해서 성능 고려해서 코딩해보자
 */

function range(start, end, interval) {
  const len = arguments.length;
  const result = [];
  switch (len) {
    case 0:
      throw new Error('Empty args');
    case 1:
      for (let i = 1; i <= start; i++) result.push(i);
      break;
    case 2:
      if (start < end) {
        for (let i = start; i <= end; i++) result.push(i);
      } else {
        for (let i = start; i >= end; i--) result.push(i);
      }
      break;
    case 3:
      if (start < end) {
        for (let i = start; i <= end; i += interval) result.push(i);
      } else {
        for (let i = start; i >= end; i += interval) result.push(i);
      }
      break;
  }
  return result;
}
console.time('1st');
console.log(range(100));
console.timeEnd('1st');

console.time('2nd');
console.log(range(10, 1));
console.timeEnd('2nd');

console.time('3rd');
console.log(range(1, 10));
console.timeEnd('3th');

console.time('4th');
console.log(range(10, 1, -4));
console.timeEnd('4th');

console.time('5th');
console.log(range(1, 10, 7));
console.timeEnd('5th');

console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -2)); // [ 10, 8, 6, 4, 2 ]
console.log(range(5)); // [1, 2, 3, 4, 5]
console.log(range(100, 57, -8));
